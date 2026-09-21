@echo off
setlocal

set "PROJECT_ROOT=%~dp0.."
cd /d "%PROJECT_ROOT%"

node "tools\hymn-data-entry-tool.js" --check >nul
if errorlevel 1 (
  echo.
  echo Current country hymn data structure check failed.
  node "tools\hymn-data-entry-tool.js" --check
  pause
  exit /b 1
)

echo Starting Hymn Data Entry Tool...
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0launch-local-tool.ps1" -Name "Hymn Data Entry Tool" -Script "tools\hymn-data-entry-tool.js" -Port 5227

if errorlevel 1 (
  echo.
  echo Failed to start Hymn Data Entry Tool.
  pause
)

endlocal
