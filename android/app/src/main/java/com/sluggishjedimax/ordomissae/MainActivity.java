package com.sluggishjedimax.ordomissae;

import android.annotation.SuppressLint;
import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Color;
import android.graphics.Insets;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Browser;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.GeolocationPermissions;
import android.webkit.JavascriptInterface;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

public final class MainActivity extends Activity {
    private static final String HOME_URL =
            "https://sluggishjedi-max.github.io/catholic-mass-translation/?android=25.0-r10";
    private static final String TRUSTED_HOST = "sluggishjedi-max.github.io";
    private static final int LOCATION_PERMISSION_REQUEST = 1001;
    private static final int AUDIO_PERMISSION_REQUEST = 1002;
    private static final String SYSTEM_BAR_PREFERENCES = "system_bar_preferences";
    private static final String HIDE_STATUS_BAR_KEY = "hide_status_bar";
    private static final String HIDE_NAVIGATION_BAR_KEY = "hide_navigation_bar";

    private WebView webView;
    private FrameLayout rootView;
    private ProgressBar progressBar;
    private LinearLayout errorPanel;
    private String pendingGeolocationOrigin;
    private GeolocationPermissions.Callback pendingGeolocationCallback;
    private PermissionRequest pendingAudioPermissionRequest;
    private volatile boolean hideStatusBar;
    private volatile boolean hideNavigationBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        SharedPreferences systemBarPreferences =
                getSharedPreferences(SYSTEM_BAR_PREFERENCES, MODE_PRIVATE);
        hideStatusBar = systemBarPreferences.getBoolean(HIDE_STATUS_BAR_KEY, false);
        hideNavigationBar =
                systemBarPreferences.getBoolean(HIDE_NAVIGATION_BAR_KEY, false);
        createContentView();
        applySystemBarsVisibility();
        configureWebView();

        if (savedInstanceState == null || webView.restoreState(savedInstanceState) == null) {
            loadHome();
        }
    }

    private void createContentView() {
        rootView = new FrameLayout(this);
        rootView.setBackgroundColor(Color.WHITE);

        webView = new WebView(this);
        rootView.addView(webView, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));

        progressBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        progressBar.setMax(100);
        FrameLayout.LayoutParams progressParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, dp(3), Gravity.TOP);
        rootView.addView(progressBar, progressParams);

        errorPanel = new LinearLayout(this);
        errorPanel.setOrientation(LinearLayout.VERTICAL);
        errorPanel.setGravity(Gravity.CENTER);
        errorPanel.setPadding(dp(32), dp(32), dp(32), dp(32));
        errorPanel.setBackgroundColor(Color.WHITE);
        errorPanel.setVisibility(View.GONE);

        TextView errorTitle = new TextView(this);
        errorTitle.setText(R.string.network_error_title);
        errorTitle.setTextColor(Color.rgb(33, 33, 33));
        errorTitle.setTextSize(20);
        errorTitle.setGravity(Gravity.CENTER);
        errorPanel.addView(errorTitle);

        TextView errorMessage = new TextView(this);
        errorMessage.setText(R.string.network_error_message);
        errorMessage.setTextColor(Color.rgb(95, 95, 95));
        errorMessage.setTextSize(15);
        errorMessage.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams messageParams = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT);
        messageParams.topMargin = dp(12);
        errorPanel.addView(errorMessage, messageParams);

        Button retryButton = new Button(this);
        retryButton.setText(R.string.retry);
        retryButton.setAllCaps(false);
        retryButton.setOnClickListener(view -> loadHome());
        LinearLayout.LayoutParams buttonParams = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT);
        buttonParams.topMargin = dp(20);
        errorPanel.addView(retryButton, buttonParams);

        rootView.addView(errorPanel, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));

        rootView.setOnApplyWindowInsetsListener(this::applyVisibleSystemBarInsets);
        setContentView(rootView);
        rootView.requestApplyInsets();
    }

    private WindowInsets applyVisibleSystemBarInsets(View view, WindowInsets windowInsets) {
        int left;
        int top;
        int right;
        int bottom;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            Insets visibleInsets = windowInsets.getInsets(
                    WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout());
            left = visibleInsets.left;
            top = visibleInsets.top;
            right = visibleInsets.right;
            bottom = visibleInsets.bottom;
        } else {
            left = windowInsets.getSystemWindowInsetLeft();
            top = windowInsets.getSystemWindowInsetTop();
            right = windowInsets.getSystemWindowInsetRight();
            bottom = windowInsets.getSystemWindowInsetBottom();
        }
        if (view.getPaddingLeft() != left
                || view.getPaddingTop() != top
                || view.getPaddingRight() != right
                || view.getPaddingBottom() != bottom) {
            view.setPadding(left, top, right, bottom);
        }
        return windowInsets;
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void configureWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setGeolocationEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        settings.setSupportZoom(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setSupportMultipleWindows(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setUserAgentString(
                settings.getUserAgentString() + " OrdoMissaeAndroid/25.0");

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            settings.setSafeBrowsingEnabled(true);
        }

        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);
        cookieManager.setAcceptThirdPartyCookies(webView, true);

        boolean debuggable =
                (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
        WebView.setWebContentsDebuggingEnabled(debuggable);

        webView.setBackgroundColor(Color.WHITE);
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        webView.addJavascriptInterface(new AndroidBridge(), "OrdoAndroid");
        webView.setWebViewClient(new OrdoWebViewClient());
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int progress) {
                progressBar.setProgress(progress);
                progressBar.setVisibility(progress < 100 ? View.VISIBLE : View.GONE);
            }

            @Override
            public void onGeolocationPermissionsShowPrompt(
                    String origin, GeolocationPermissions.Callback callback) {
                if (!isTrustedOrigin(Uri.parse(origin))) {
                    callback.invoke(origin, false, false);
                    return;
                }
                if (hasLocationPermission()) {
                    callback.invoke(origin, true, true);
                    return;
                }
                pendingGeolocationOrigin = origin;
                pendingGeolocationCallback = callback;
                requestPermissions(new String[] {
                        Manifest.permission.ACCESS_FINE_LOCATION,
                        Manifest.permission.ACCESS_COARSE_LOCATION
                }, LOCATION_PERMISSION_REQUEST);
            }

            @Override
            public void onPermissionRequest(PermissionRequest request) {
                runOnUiThread(() -> handleWebPermissionRequest(request));
            }

            @Override
            public void onPermissionRequestCanceled(PermissionRequest request) {
                if (pendingAudioPermissionRequest == request) {
                    pendingAudioPermissionRequest = null;
                }
            }
        });
        webView.setDownloadListener((url, userAgent, contentDisposition, mimeType, size) ->
                openOutsideApp(url));
    }

    private boolean isTrustedOrigin(Uri origin) {
        return origin != null
                && "https".equalsIgnoreCase(origin.getScheme())
                && TRUSTED_HOST.equalsIgnoreCase(origin.getHost());
    }

    private final class AndroidBridge {
        @JavascriptInterface
        public boolean isAppRuntime() {
            return true;
        }

        @JavascriptInterface
        public boolean isStatusBarHidden() {
            return hideStatusBar;
        }

        @JavascriptInterface
        public boolean isNavigationBarHidden() {
            return hideNavigationBar;
        }

        @JavascriptInterface
        public void setSystemBarsHidden(
                boolean shouldHideStatusBar, boolean shouldHideNavigationBar) {
            hideStatusBar = shouldHideStatusBar;
            hideNavigationBar = shouldHideNavigationBar;
            getSharedPreferences(SYSTEM_BAR_PREFERENCES, MODE_PRIVATE)
                    .edit()
                    .putBoolean(HIDE_STATUS_BAR_KEY, hideStatusBar)
                    .putBoolean(HIDE_NAVIGATION_BAR_KEY, hideNavigationBar)
                    .apply();
            runOnUiThread(MainActivity.this::applySystemBarsVisibility);
        }
    }

    private boolean hasLocationPermission() {
        return checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION)
                        == PackageManager.PERMISSION_GRANTED
                || checkSelfPermission(Manifest.permission.ACCESS_COARSE_LOCATION)
                        == PackageManager.PERMISSION_GRANTED;
    }

    private void handleWebPermissionRequest(PermissionRequest request) {
        if (request == null || !isTrustedOrigin(request.getOrigin())) {
            if (request != null) request.deny();
            return;
        }
        boolean requestsAudio = false;
        for (String resource : request.getResources()) {
            if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                requestsAudio = true;
                break;
            }
        }
        if (!requestsAudio) {
            request.deny();
            return;
        }
        if (checkSelfPermission(Manifest.permission.RECORD_AUDIO)
                == PackageManager.PERMISSION_GRANTED) {
            request.grant(new String[] { PermissionRequest.RESOURCE_AUDIO_CAPTURE });
            return;
        }
        pendingAudioPermissionRequest = request;
        requestPermissions(
                new String[] { Manifest.permission.RECORD_AUDIO },
                AUDIO_PERMISSION_REQUEST);
    }

    @Override
    public void onRequestPermissionsResult(
            int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == LOCATION_PERMISSION_REQUEST) {
            boolean granted = hasLocationPermission();
            if (pendingGeolocationCallback != null && pendingGeolocationOrigin != null) {
                pendingGeolocationCallback.invoke(
                        pendingGeolocationOrigin, granted, granted);
            }
            pendingGeolocationOrigin = null;
            pendingGeolocationCallback = null;
            return;
        }
        if (requestCode == AUDIO_PERMISSION_REQUEST) {
            PermissionRequest request = pendingAudioPermissionRequest;
            pendingAudioPermissionRequest = null;
            if (request == null) return;
            boolean granted = grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED;
            if (granted) {
                request.grant(new String[] { PermissionRequest.RESOURCE_AUDIO_CAPTURE });
            } else {
                request.deny();
            }
        }
    }

    private void loadHome() {
        errorPanel.setVisibility(View.GONE);
        webView.setVisibility(View.VISIBLE);

        Map<String, String> headers = new HashMap<>();
        headers.put("Cache-Control", "no-cache");
        headers.put("Pragma", "no-cache");
        webView.loadUrl(HOME_URL, headers);
    }

    private final class OrdoWebViewClient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            String scheme = uri.getScheme();
            if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) {
                if (isTrustedOrigin(uri)) return false;
                openOutsideApp(uri.toString());
                return true;
            }
            openOutsideApp(uri.toString());
            return true;
        }

        @Override
        public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
            errorPanel.setVisibility(View.GONE);
            webView.setVisibility(View.VISIBLE);
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            progressBar.setVisibility(View.GONE);
        }

        @Override
        public void onReceivedError(
                WebView view, WebResourceRequest request, WebResourceError error) {
            if (request.isForMainFrame()) {
                webView.setVisibility(View.GONE);
                errorPanel.setVisibility(View.VISIBLE);
                progressBar.setVisibility(View.GONE);
            }
        }
    }

    private void openOutsideApp(String url) {
        try {
            Intent intent;
            if (url.startsWith("intent:")) {
                intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
            } else {
                intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            }
            intent.putExtra(Browser.EXTRA_APPLICATION_ID, getPackageName());
            startActivity(intent);
        } catch (ActivityNotFoundException | java.net.URISyntaxException exception) {
            Toast.makeText(this, R.string.no_compatible_app, Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) {
            webView.onResume();
        }
        applySystemBarsVisibility();
    }

    @Override
    protected void onPause() {
        if (webView != null) {
            webView.onPause();
        }
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (pendingGeolocationCallback != null && pendingGeolocationOrigin != null) {
            pendingGeolocationCallback.invoke(pendingGeolocationOrigin, false, false);
        }
        pendingGeolocationOrigin = null;
        pendingGeolocationCallback = null;
        if (pendingAudioPermissionRequest != null) {
            pendingAudioPermissionRequest.deny();
            pendingAudioPermissionRequest = null;
        }
        if (webView != null) {
            ViewGroup parent = (ViewGroup) webView.getParent();
            if (parent != null) {
                parent.removeView(webView);
            }
            webView.stopLoading();
            webView.setWebChromeClient(null);
            webView.setWebViewClient(null);
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            applySystemBarsVisibility();
        }
    }

    private void applySystemBarsVisibility() {
        Window window = getWindow();
        boolean darkMode = isSystemDarkMode();
        int statusBarColor = darkMode ? Color.BLACK : Color.WHITE;
        if (rootView != null) {
            rootView.setBackgroundColor(statusBarColor);
        }
        window.setStatusBarColor(statusBarColor);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            window.setDecorFitsSystemWindows(false);
            WindowInsetsController controller = window.getInsetsController();
            if (controller != null) {
                controller.setSystemBarsAppearance(
                        darkMode ? 0 : WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS,
                        WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS);
                if (hideStatusBar) {
                    controller.hide(WindowInsets.Type.statusBars());
                } else {
                    controller.show(WindowInsets.Type.statusBars());
                }
                if (hideNavigationBar) {
                    controller.hide(WindowInsets.Type.navigationBars());
                } else {
                    controller.show(WindowInsets.Type.navigationBars());
                }
                controller.setSystemBarsBehavior(
                        WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            int visibility = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION;
            if (!darkMode) {
                visibility |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
            }
            if (hideStatusBar) {
                visibility |= View.SYSTEM_UI_FLAG_FULLSCREEN;
            }
            if (hideNavigationBar) {
                visibility |= View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION;
            }
            window.getDecorView().setSystemUiVisibility(visibility);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams attributes = window.getAttributes();
            attributes.layoutInDisplayCutoutMode =
                    hideStatusBar
                            ? WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
                            : WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_DEFAULT;
            window.setAttributes(attributes);
        }
        if (rootView != null) {
            rootView.post(rootView::requestApplyInsets);
        }
    }

    private boolean isSystemDarkMode() {
        int nightMode = getResources().getConfiguration().uiMode
                & Configuration.UI_MODE_NIGHT_MASK;
        return nightMode == Configuration.UI_MODE_NIGHT_YES;
    }

    private int dp(int value) {
        return Math.round(value * getResources().getDisplayMetrics().density);
    }
}
