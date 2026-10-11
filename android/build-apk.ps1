[CmdletBinding()]
param(
    [switch]$Clean
)

$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot
$sharedTools = [System.IO.Path]::GetFullPath(
    (Join-Path $projectRoot "..\..\Ssutzpah\android\tools")
)

function Find-ExistingPath {
    param([string[]]$Candidates)
    foreach ($candidate in $Candidates) {
        if ($candidate -and (Test-Path -LiteralPath $candidate)) {
            return [System.IO.Path]::GetFullPath($candidate)
        }
    }
    return $null
}

$sdkRoot = Find-ExistingPath @(
    $env:ANDROID_SDK_ROOT,
    $env:ANDROID_HOME,
    (Join-Path $env:LOCALAPPDATA "Android\Sdk"),
    (Join-Path $sharedTools "android-sdk")
)

$javaHome = Find-ExistingPath @(
    $env:JAVA_HOME,
    (Join-Path $sharedTools "jdk-17")
)

$gradleCommand = Find-ExistingPath @(
    (Join-Path $sharedTools "gradle-8.7\bin\gradle.bat"),
    (Join-Path $projectRoot "gradlew.bat")
)

if (-not $sdkRoot) {
    throw "Android SDK not found. Set ANDROID_SDK_ROOT."
}
if (-not $javaHome) {
    throw "JDK 17 not found. Set JAVA_HOME."
}
if (-not $gradleCommand) {
    throw "Gradle not found. Install Gradle 8.7 or add gradlew.bat."
}

$env:ANDROID_SDK_ROOT = $sdkRoot
$env:ANDROID_HOME = $sdkRoot
$env:JAVA_HOME = $javaHome
$env:Path = "$javaHome\bin;$sdkRoot\platform-tools;$env:Path"
$env:ORDO_ANDROID_BUILD_DIR = Join-Path $env:LOCALAPPDATA "OrdoMissae\gradle-build"

Push-Location $projectRoot
try {
    if ($Clean) {
        & $gradleCommand --no-daemon clean
        if ($LASTEXITCODE -ne 0) {
            throw "Gradle clean failed."
        }
    }

    & $gradleCommand --no-daemon :app:assembleDebug
    if ($LASTEXITCODE -ne 0) {
        throw "APK build failed."
    }

    $sourceApk = Join-Path $env:ORDO_ANDROID_BUILD_DIR "outputs\apk\debug\app-debug.apk"
    $distDirectory = Join-Path $projectRoot "dist"
    $distApk = Join-Path $distDirectory "ordo-missae.apk"
    New-Item -ItemType Directory -Path $distDirectory -Force | Out-Null
    Copy-Item -LiteralPath $sourceApk -Destination $distApk -Force

    Write-Output ""
    Write-Output "APK build complete: $distApk"
} finally {
    Pop-Location
}
