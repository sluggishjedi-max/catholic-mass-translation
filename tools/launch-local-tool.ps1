[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$Name,

  [Parameter(Mandatory = $true)]
  [string]$Script,

  [Parameter(Mandatory = $true)]
  [int]$Port
)

$ErrorActionPreference = 'Stop'

$root = Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')
Set-Location -LiteralPath $root

$node = Get-Command node.exe -ErrorAction Stop
$tmp = Join-Path $root 'tmp'
New-Item -ItemType Directory -Path $tmp -Force | Out-Null

$scriptName = Split-Path -Leaf $Script
$logBase = [IO.Path]::GetFileNameWithoutExtension($scriptName) -replace '[^A-Za-z0-9._-]', '-'
$stdout = Join-Path $tmp "$logBase.launch.out.log"
$stderr = Join-Path $tmp "$logBase.launch.err.log"
Remove-Item -LiteralPath $stdout, $stderr -Force -ErrorAction SilentlyContinue

$existing = Get-CimInstance Win32_Process |
  Where-Object { $_.Name -eq 'node.exe' -and $_.CommandLine -and $_.CommandLine.Contains($scriptName) }
foreach ($process in $existing) {
  Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue
}

$process = Start-Process `
  -FilePath $node.Source `
  -ArgumentList @($Script, "--port=$Port") `
  -WorkingDirectory $root `
  -WindowStyle Hidden `
  -RedirectStandardOutput $stdout `
  -RedirectStandardError $stderr `
  -PassThru

$url = $null
$deadline = (Get-Date).AddSeconds(20)
while ((Get-Date) -lt $deadline) {
  if ($process.HasExited) {
    $errorText = if (Test-Path -LiteralPath $stderr) { Get-Content -LiteralPath $stderr -Raw } else { '' }
    throw "$Name exited before it opened. $errorText"
  }

  if (Test-Path -LiteralPath $stdout) {
    $text = Get-Content -LiteralPath $stdout -Raw -ErrorAction SilentlyContinue
    if ($text -match 'http://[0-9.]+:\d+/') {
      $url = $Matches[0]
      break
    }
  }

  Start-Sleep -Milliseconds 250
}

if (-not $url) {
  $url = "http://127.0.0.1:$Port/"
  try {
    Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 2 | Out-Null
  } catch {
    $errorText = if (Test-Path -LiteralPath $stderr) { Get-Content -LiteralPath $stderr -Raw } else { '' }
    throw "$Name did not respond at $url. $errorText"
  }
}

Start-Process $url
Write-Host "$Name started: $url"
Write-Host "Logs:"
Write-Host "  $stdout"
Write-Host "  $stderr"
