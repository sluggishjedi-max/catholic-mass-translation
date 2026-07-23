const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret, defineString } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");

const GEMINI_API_KEY_TRANSLATE = defineSecret("GEMINI_API_KEY_TRANSLATE");
const GEMINI_API_KEY_SYNTAX = defineSecret("GEMINI_API_KEY_SYNTAX");
const GEMINI_API_KEY_VOICE = defineSecret("GEMINI_API_KEY_VOICE");
const GOOGLE_MAPS_BROWSER_KEY = defineSecret("GOOGLE_MAPS_BROWSER_KEY");
const ALLOWED_ORIGINS = defineString("ALLOWED_ORIGINS", { default: "" });

const GEMINI_API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
const PRIMARY_MODEL = "gemini-2.5-flash-lite";
const FALLBACK_MODEL = "gemini-flash-latest";
const KTCG_MASS_READING_URL = "https://ktcgkpv.org/readings/mass-reading";
const MASS_TIMES_CHURCH_URL = "https://masstimes.org/Churchs/";
const MAX_BODY_BYTES = 8 * 1024 * 1024;
const RATE_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 30;
const requestBuckets = new Map();
const massTimesCache = new Map();

const proxyKinds = {
  translate: GEMINI_API_KEY_TRANSLATE,
  align: GEMINI_API_KEY_SYNTAX,
  voice: GEMINI_API_KEY_VOICE,
};

exports.geminiProxy = onRequest(
  {
    region: "us-central1",
    timeoutSeconds: 60,
    memory: "512MiB",
    secrets: [
      GEMINI_API_KEY_TRANSLATE,
      GEMINI_API_KEY_SYNTAX,
      GEMINI_API_KEY_VOICE,
    ],
  },
  async (req, res) => {
    const origin = req.get("origin") || "";
    const allowedOrigin = resolveAllowedOrigin(origin);
    setCorsHeaders(res, allowedOrigin);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (origin && !allowedOrigin) {
      res.status(403).json({ error: "Origin is not allowed." });
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }

    if (!checkRateLimit(req)) {
      res.status(429).json({ error: "Too many requests." });
      return;
    }

    const contentLength = Number(req.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      res.status(413).json({ error: "Request body is too large." });
      return;
    }

    const body = parseBody(req);
    const kind = String(body.kind || "").trim();
    const promptConfig = body.promptConfig;
    if (kind === "translateFallback") {
      const text = String(body.text || "").trim();
      const sourceLang = normalizeMachineTranslationLang(body.sourceLang, "auto");
      const targetLang = normalizeMachineTranslationLang(body.targetLang, "");
      if (!text || !targetLang) {
        res.status(400).json({ error: "Missing fallback translation text or target language." });
        return;
      }
      try {
        const translated = await callMachineTranslationFallback(text, sourceLang, targetLang);
        res.status(200).json({ text: translated });
      } catch (error) {
        logger.error("Fallback translation failed", { message: error.message });
        res.status(error.status || 502).json({ error: error.message || "Fallback translation failed." });
      }
      return;
    }
    const secret = proxyKinds[kind];

    if (!secret) {
      res.status(400).json({ error: "Unknown Gemini proxy kind." });
      return;
    }

    if (!promptConfig || typeof promptConfig !== "object") {
      res.status(400).json({ error: "Missing promptConfig." });
      return;
    }

    try {
      const payload = await callGeminiWithFallback(promptConfig, secret.value(), kind);
      res.status(200).json(sanitizeGeminiPayload(payload));
    } catch (error) {
      logger.error("Gemini proxy failed", {
        kind,
        status: error.status || 502,
        message: error.message,
      });
      res.status(error.status || 502).json({ error: error.message || "Gemini proxy failed." });
    }
  }
);

exports.ktcgProxy = onRequest(
  {
    region: "us-central1",
    timeoutSeconds: 30,
    memory: "256MiB",
  },
  async (req, res) => {
    const origin = req.get("origin") || "";
    const allowedOrigin = resolveAllowedOrigin(origin);
    setCorsHeaders(res, allowedOrigin);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (origin && !allowedOrigin) {
      res.status(403).json({ error: "Origin is not allowed." });
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }

    if (!checkRateLimit(req)) {
      res.status(429).json({ error: "Too many requests." });
      return;
    }

    const dateParts = parseKtcgDate(parseBody(req));
    if (!dateParts) {
      res.status(400).json({ error: "A valid day, month, and year are required." });
      return;
    }

    try {
      const payload = await fetchKtcgMassReading(dateParts);
      // The request date lives in the POST body. Shared HTTP caches generally
      // do not vary POST responses by body, so public caching can return the
      // previous date's readings (for example, Song of Songs on Jeremiah day).
      res.set("Cache-Control", "private, no-store, max-age=0");
      res.status(200).json(payload);
    } catch (error) {
      logger.error("KTCG proxy failed", {
        date: dateParts,
        status: error.status || 502,
        message: error.message,
      });
      res.status(502).json({ error: "KTCG mass-reading request failed." });
    }
  }
);

exports.mapsConfig = onRequest(
  {
    region: "us-central1",
    timeoutSeconds: 15,
    memory: "128MiB",
    secrets: [GOOGLE_MAPS_BROWSER_KEY],
  },
  async (req, res) => {
    const origin = req.get("origin") || "";
    const allowedOrigin = resolveAllowedOrigin(origin);
    setCorsHeaders(res, allowedOrigin);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (origin && !allowedOrigin) {
      res.status(403).json({ error: "Origin is not allowed." });
      return;
    }

    if (!["GET", "POST"].includes(req.method)) {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }

    if (!checkRateLimit(req)) {
      res.status(429).json({ error: "Too many requests." });
      return;
    }

    const apiKey = String(GOOGLE_MAPS_BROWSER_KEY.value() || "").trim();
    if (!apiKey) {
      res.status(503).json({ error: "Google Maps API key is not configured." });
      return;
    }

    res.set("Cache-Control", "private, max-age=300");
    res.status(200).json({
      apiKey,
      libraries: "places",
    });
  }
);

exports.usMassTimesProxy = onRequest(
  {
    region: "us-central1",
    timeoutSeconds: 30,
    memory: "256MiB",
  },
  async (req, res) => {
    const origin = req.get("origin") || "";
    const allowedOrigin = resolveAllowedOrigin(origin);
    setCorsHeaders(res, allowedOrigin);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }
    if (origin && !allowedOrigin) {
      res.status(403).json({ error: "Origin is not allowed." });
      return;
    }
    if (!["GET", "POST"].includes(req.method)) {
      res.status(405).json({ error: "Method not allowed." });
      return;
    }
    if (!checkRateLimit(req)) {
      res.status(429).json({ error: "Too many requests." });
      return;
    }

    const input = req.method === "GET" ? req.query : parseBody(req);
    const latitude = Number(input.lat);
    const longitude = Number(input.lon ?? input.long ?? input.lng);
    const page = Math.max(1, Math.min(10, Number.parseInt(input.page ?? input.pg ?? 1, 10) || 1));
    if (!Number.isFinite(latitude) || latitude < 18 || latitude > 72 ||
        !Number.isFinite(longitude) || longitude < -180 || longitude > -60) {
      res.status(400).json({ error: "Valid United States latitude and longitude are required." });
      return;
    }

    const cacheKey = `${latitude.toFixed(3)}:${longitude.toFixed(3)}:${page}`;
    const cached = massTimesCache.get(cacheKey);
    if (cached && Date.now() - cached.cachedAt < 15 * 60 * 1000) {
      res.set("Cache-Control", "public, max-age=300");
      res.status(200).json(cached.payload);
      return;
    }

    try {
      const payload = await fetchUsMassTimes(latitude, longitude, page);
      massTimesCache.set(cacheKey, { cachedAt: Date.now(), payload });
      res.set("Cache-Control", "public, max-age=300");
      res.status(200).json(payload);
    } catch (error) {
      logger.error("USCCB/MassTimes proxy failed", {
        latitude,
        longitude,
        page,
        status: error.status || 502,
        message: error.message,
      });
      res.status(502).json({ error: "USCCB/MassTimes church request failed." });
    }
  }
);

function parseBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (!req.rawBody) return {};
  try {
    return JSON.parse(req.rawBody.toString("utf8"));
  } catch (error) {
    return {};
  }
}

function parseKtcgDate(body) {
  const day = Number(body.day);
  const month = Number(body.month);
  const year = Number(body.year);
  if (![day, month, year].every(Number.isInteger) || year < 2000 || year > 2100) return null;

  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }
  return { day, month, year };
}

async function fetchKtcgMassReading({ day, month, year }) {
  const response = await fetch(KTCG_MASS_READING_URL, {
    method: "POST",
    headers: {
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: new URLSearchParams({
      day: String(day),
      month: String(month),
      year: String(year),
      seldate: "",
    }),
  });

  if (!response.ok) {
    const error = new Error(`KTCG returned HTTP ${response.status}.`);
    error.status = response.status;
    throw error;
  }

  const payload = await response.json();
  if (!payload || !payload.success || !payload.data) {
    throw new Error("KTCG returned an empty mass-reading payload.");
  }
  return payload;
}

async function fetchUsMassTimes(latitude, longitude, page) {
  const url = new URL(MASS_TIMES_CHURCH_URL);
  url.searchParams.set("lat", String(latitude));
  url.searchParams.set("long", String(longitude));
  url.searchParams.set("pg", String(page));
  const response = await fetch(url, {
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Referer": `https://masstimes.org/map?lat=${encodeURIComponent(latitude)}&lng=${encodeURIComponent(longitude)}`,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    },
  });
  if (!response.ok) {
    const error = new Error(`MassTimes returned HTTP ${response.status}.`);
    error.status = response.status;
    throw error;
  }
  const source = await response.json();
  if (!Array.isArray(source)) throw new Error("MassTimes returned an invalid church list.");
  return {
    source: "USCCB / MassTimes.org",
    sourceUrl: "https://www.usccb.org/mass-times",
    churches: source.slice(0, 50).map(sanitizeMassTimesChurch).filter(Boolean),
  };
}

function sanitizeMassTimesChurch(church) {
  if (!church || typeof church !== "object") return null;
  const text = (value, limit = 300) => String(value ?? "").trim().slice(0, limit);
  const number = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  };
  return {
    id: text(church.id, 40),
    name: text(church.name),
    latitude: number(church.latitude),
    longitude: number(church.longitude),
    distance: number(church.distance),
    address: text(church.church_address_street_address),
    city: text(church.church_address_city_name),
    state: text(church.church_address_providence_name),
    postalCode: text(church.church_address_postal_code, 30),
    country: text(church.church_address_country_territory_name, 80),
    phone: text(church.phone_number, 80),
    website: text(church.url, 500),
    pastor: text(church.pastors_name, 500),
    dioceseName: text(church.diocese_name),
    dioceseType: text(church.diocese_type_name, 80),
    rite: text(church.rite_type_name, 80),
    lastUpdate: text(church.last_update, 80),
    worshipTimes: (Array.isArray(church.church_worship_times) ? church.church_worship_times : [])
      .slice(0, 80)
      .map((item) => ({
        day: text(item && item.day_of_week, 40),
        serviceType: text(item && item.service_typename, 80),
        start: text(item && item.time_start, 40),
        end: text(item && item.time_end, 40),
        language: text(item && item.language, 80),
        comment: text(item && item.comment, 300),
      })),
  };
}

function resolveAllowedOrigin(origin) {
  if (!origin) return "";
  const configured = ALLOWED_ORIGINS.value()
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (configured.length === 0) return origin;
  if (configured.includes("*") || configured.includes(origin)) return origin;
  if (/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin) && configured.includes("local")) {
    return origin;
  }
  if (origin === "null" && configured.includes("local")) return origin;
  return "";
}

function setCorsHeaders(res, allowedOrigin) {
  if (allowedOrigin) res.set("Access-Control-Allow-Origin", allowedOrigin);
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Vary", "Origin");
}

function sanitizeGeminiPayload(payload) {
  return {
    candidates: (payload.candidates || []).map((candidate) => ({
      content: {
        role: candidate.content && candidate.content.role,
        parts: ((candidate.content && candidate.content.parts) || [])
          .filter((part) => typeof part.text === "string")
          .map((part) => ({ text: part.text })),
      },
      finishReason: candidate.finishReason,
      index: candidate.index,
    })),
    usageMetadata: payload.usageMetadata
      ? {
          promptTokenCount: payload.usageMetadata.promptTokenCount,
          candidatesTokenCount: payload.usageMetadata.candidatesTokenCount,
          totalTokenCount: payload.usageMetadata.totalTokenCount,
        }
      : undefined,
    modelVersion: payload.modelVersion,
  };
}

function checkRateLimit(req) {
  const forwarded = String(req.get("x-forwarded-for") || "").split(",")[0].trim();
  const key = forwarded || req.ip || "unknown";
  const now = Date.now();
  const bucket = requestBuckets.get(key);

  if (!bucket || now - bucket.startedAt > RATE_WINDOW_MS) {
    requestBuckets.set(key, { startedAt: now, count: 1 });
    return true;
  }

  bucket.count += 1;
  return bucket.count <= MAX_REQUESTS_PER_WINDOW;
}

async function callGeminiWithFallback(promptConfig, apiKey, kind) {
  let lastError = null;
  for (const model of [PRIMARY_MODEL, FALLBACK_MODEL]) {
    const response = await fetch(`${GEMINI_API_BASE_URL}${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify(promptConfig),
    });

    if (response.ok) return await response.json();

    const detail = await response.text().catch(() => "");
    const error = new Error(`${kind} failed on ${model}: HTTP ${response.status}${detail ? ` ${detail.slice(0, 180)}` : ""}`);
    error.status = response.status;
    lastError = error;

    if (![429, 500, 503].includes(response.status)) break;
  }

  throw lastError || new Error(`${kind} failed.`);
}

function normalizeMachineTranslationLang(value, fallback) {
  const lang = String(value || "").trim().toLowerCase();
  return ["auto", "ko", "vi", "en", "ja", "la"].includes(lang) ? lang : fallback;
}

async function callMachineTranslationFallback(text, sourceLang, targetLang) {
  const body = new URLSearchParams({
    client: "gtx",
    sl: sourceLang || "auto",
    tl: targetLang,
    dt: "t",
    q: text,
  });
  const response = await fetch("https://translate.googleapis.com/translate_a/single", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body,
  });
  if (!response.ok) {
    const error = new Error(`Fallback translation HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  const payload = await response.json();
  const translated = Array.isArray(payload && payload[0])
    ? payload[0].map((part) => Array.isArray(part) ? (part[0] || "") : "").join("")
    : "";
  if (!translated.trim()) throw new Error("Fallback translation returned an empty result.");
  return translated.trim();
}
