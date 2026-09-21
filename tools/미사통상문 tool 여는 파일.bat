@echo off
setlocal

set "PROJECT_ROOT=%~dp0.."
cd /d "%PROJECT_ROOT%"

node "tools\mass-data-editor.js" --check >nul
if errorlevel 1 (
  echo.
  echo Current country Mass data structure check failed.
  node "tools\mass-data-editor.js" --check
  pause
  exit /b 1
)

echo Starting Mass Data Editor...
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0launch-local-tool.ps1" -Name "Mass Data Editor" -Script "tools\mass-data-editor.js" -Port 5237

if errorlevel 1 (
  echo.
  echo Failed to start Mass Data Editor.
  pause
)

endlocal
