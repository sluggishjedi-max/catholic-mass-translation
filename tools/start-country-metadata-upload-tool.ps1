[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

& (Join-Path $PSScriptRoot 'launch-local-tool.ps1') `
  -Name '국가별 전례력·메타데이터 업로드 도구' `
  -Script 'tools/country-metadata-upload-tool.js' `
  -Port 4316
