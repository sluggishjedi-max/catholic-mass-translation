@echo off
setlocal

set "PROJECT_ROOT=%~dp0.."
cd /d "%PROJECT_ROOT%"

node "tools\prayer-data-insert-tool.js" --check >nul
if errorlevel 1 (
  echo.
  echo Current country prayer data structure check failed.
  node "tools\prayer-data-insert-tool.js" --check
  pause
  exit /b 1
)

echo Starting Prayer Data Insert Tool...
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0launch-local-tool.ps1" -Name "Prayer Data Insert Tool" -Script "tools\prayer-data-insert-tool.js" -Port 5217

if errorlevel 1 (
  echo.
  echo Failed to start Prayer Data Insert Tool.
  pause
)

endlocal
