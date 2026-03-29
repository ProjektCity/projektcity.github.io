$versions = [ordered]@{
    "5.0" = @{ desc = "Minecraft 1.20 - 1.20.6"; url = "https://www.curseforge.com/api/v1/mods/782396/files/6043384/download" }
    "4.2" = @{ desc = "Minecraft 1.20 - 1.20.6"; url = "https://www.curseforge.com/api/v1/mods/782396/files/4832448/download" }
    "4.1" = @{ desc = "Minecraft 1.19 - 1.19.4"; url = "https://www.curseforge.com/api/v1/mods/782396/files/4446473/download" }
    "4.0" = @{ desc = "Minecraft 1.19 - 1.19.4"; url = "https://www.curseforge.com/api/v1/mods/782396/files/4381533/download" }
    "3.0" = @{ desc = "Minecraft 1.19 - 1.19.4"; url = "https://www.curseforge.com/api/v1/mods/782396/files/4326053/download" }
    "2.0" = @{ desc = "Minecraft 1.19 - 1.19.4"; url = "https://www.curseforge.com/api/v1/mods/782396/files/4283975/download" }
    "1.1" = @{ desc = "Minecraft 1.19 - 1.19.4"; url = "https://www.curseforge.com/api/v1/mods/782396/files/4276853/download" }
    "1.0" = @{ desc = "Minecraft 1.19 - 1.19.4"; url = "https://www.curseforge.com/api/v1/mods/782396/files/4276516/download" }
}

function Write-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  +---------------------------------+" -ForegroundColor Cyan
    Write-Host "  |                                 |" -ForegroundColor Cyan
    Write-Host "  +     Projekt City Installer      +" -ForegroundColor Cyan
    Write-Host "  |                                 |" -ForegroundColor Cyan
    Write-Host "  +---------------------------------+" -ForegroundColor Cyan
    Write-Host ""
}

function Show-Menu {
    param ([string[]]$items, [string[]]$descs, [int]$selected)

    Write-Host "  Select a version  " -ForegroundColor Cyan -NoNewline
    Write-Host "(Arrow keys + Enter)" -ForegroundColor DarkGray
    Write-Host ""

    for ($i = 0; $i -lt $items.Count; $i++) {
        if ($i -eq $selected) {
            Write-Host "  " -NoNewline
            Write-Host ("  >  V{0,-5}  {1,-25}" -f $items[$i], $descs[$i]) -BackgroundColor DarkBlue -ForegroundColor White
        } else {
            Write-Host ("       V{0,-5}  {1,-25}" -f $items[$i], $descs[$i]) -ForegroundColor DarkGray
        }
    }
    Write-Host ""
}

function Get-ArrowSelection {
    param ([string[]]$items, [string[]]$descs)

    $idx = 0
    $count = $items.Count

    Write-Header
    $menuStartRow = [Console]::CursorTop
    Show-Menu -items $items -descs $descs -selected $idx

    while ($true) {
        $key = [Console]::ReadKey($true)

        switch ($key.Key) {
            "UpArrow"   { $idx = ($idx - 1 + $count) % $count }
            "DownArrow" { $idx = ($idx + 1) % $count }
            "Enter"     { return $idx }
        }

        [Console]::SetCursorPosition(0, $menuStartRow)
        Show-Menu -items $items -descs $descs -selected $idx
    }
}

function Show-Choice {
    param ([string]$prompt, [string]$warning, [string[]]$options, [int]$selected)

    Write-Host "  $prompt" -ForegroundColor Yellow
    if ($warning) {
        Write-Host "  $warning" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "  " -NoNewline
    Write-Host "(Arrow keys + Enter)" -ForegroundColor DarkGray
    Write-Host ""

    for ($i = 0; $i -lt $options.Count; $i++) {
        if ($i -eq $selected) {
            Write-Host "  " -NoNewline
            Write-Host ("  >  {0}" -f $options[$i]) -BackgroundColor DarkBlue -ForegroundColor White
        } else {
            Write-Host ("       {0}" -f $options[$i]) -ForegroundColor DarkGray
        }
    }
    Write-Host ""
}

function Get-ChoiceSelection {
    param ([string]$prompt, [string[]]$options, [string]$warning = "", [int]$default = 0)

    $idx = $default
    $count = $options.Count
    $menuStartRow = [Console]::CursorTop
    Show-Choice -prompt $prompt -warning $warning -options $options -selected $idx

    while ($true) {
        $key = [Console]::ReadKey($true)

        switch ($key.Key) {
            "UpArrow"   { $idx = ($idx - 1 + $count) % $count }
            "DownArrow" { $idx = ($idx + 1) % $count }
            "LeftArrow" { $idx = ($idx - 1 + $count) % $count }
            "RightArrow"{ $idx = ($idx + 1) % $count }
            "Enter"     { return $idx }
        }

        [Console]::SetCursorPosition(0, $menuStartRow)
        Show-Choice -prompt $prompt -warning $warning -options $options -selected $idx
    }
}

$versionKeys = @($versions.Keys)
$versionDescs = $versionKeys | ForEach-Object { $versions[$_].desc }

$savesPath = Join-Path $env:APPDATA ".minecraft\saves"
if (-not (Test-Path $savesPath)) {
    New-Item -ItemType Directory -Path $savesPath -Force | Out-Null
}

$doDelete = $false

while ($true) {
    $selectedIdx  = Get-ArrowSelection -items $versionKeys -descs $versionDescs
    $selectedKey  = $versionKeys[$selectedIdx]
    $selectedData = $versions[$selectedKey]

    Write-Header
    Write-Host "  Selected: " -NoNewline
    Write-Host "V$selectedKey" -ForegroundColor Cyan -NoNewline
    Write-Host "  ($($selectedData.desc))" -ForegroundColor DarkGray
    Write-Host ""

    $finalFolder = Join-Path $savesPath "Projekt City [V$selectedKey]"

    $doDelete = $false
    if (Test-Path -LiteralPath $finalFolder) {
        Write-Host "  Version $selectedKey is already installed at:" -ForegroundColor Yellow
        Write-Host "  $finalFolder" -ForegroundColor DarkGray
        Write-Host ""
        $choice = Get-ChoiceSelection `
            -prompt "This version is already installed." `
            -warning "This will permanently delete all world data including your builds, player data, inventory, XP, advancements and stats. This cannot be undone!" `
            -options @("Continue anyway", "Choose different version") `
            -default 1
        if ($choice -eq 0) {
            $doDelete = $true
            Write-Header
            Write-Host ""
            break
        }
    } else {
        break
    }
}

Write-Host "  Terms and Agreements" -ForegroundColor Yellow
Write-Host "  Before installing you must accept the following:" -ForegroundColor Gray
Write-Host "  " -ForegroundColor Gray
Write-Host "  EULA: https://projektcity.com/legal/eula" -ForegroundColor DarkGray
Write-Host "  Terms: https://projektcity.com/legal/terms" -ForegroundColor DarkGray
Write-Host "  Privacy: https://projektcity.com/legal/privacy" -ForegroundColor DarkGray
Write-Host ""
$answer = Read-Host "  Do you accept the EULA, Terms of Use and Privacy Policy? [y/n]"
if ($answer -notmatch "^[Yy]$") {
    Write-Host "  Installation canceled: agreement declined." -ForegroundColor Yellow
    exit 0
}
Write-Host ""

if ($doDelete) {
    Remove-Item -LiteralPath $finalFolder -Recurse -Force
}

Write-Host "  Downloading V$selectedKey..." -ForegroundColor Cyan

$tmpZip = Join-Path $env:TEMP "projektcity_$selectedKey.zip"

try {
    $ProgressPreference = 'Continue'
    Invoke-WebRequest -Uri $selectedData.url -OutFile $tmpZip -UseBasicParsing
} catch {
    Write-Host "  Download failed: $_" -ForegroundColor Red
    exit 1
}

Write-Host "  Download complete." -ForegroundColor Green


Write-Host "  Extracting..." -ForegroundColor Cyan

$tmpDir = Join-Path $env:TEMP "projektcity_extract"
if (Test-Path $tmpDir) { Remove-Item -Recurse -Force $tmpDir }
New-Item -ItemType Directory -Path $tmpDir -Force | Out-Null

Add-Type -AssemblyName System.IO.Compression.FileSystem

try {
    [System.IO.Compression.ZipFile]::ExtractToDirectory($tmpZip, $tmpDir)
} catch {
    Write-Host "  Extraction failed: $_" -ForegroundColor Red
    Remove-Item -Force $tmpZip
    Remove-Item -Recurse -Force $tmpDir -ErrorAction SilentlyContinue
    exit 1
}

$levelDat = Get-ChildItem -LiteralPath $tmpDir -Recurse | Where-Object { $_.Name -eq "level.dat" } | Select-Object -First 1
if (-not $levelDat) {
    Write-Host "  Could not find level.dat in the archive." -ForegroundColor Red
    Remove-Item -Force $tmpZip
    Remove-Item -Recurse -Force $tmpDir
    exit 1
}

$worldRoot = $levelDat.DirectoryName

if (Test-Path -LiteralPath $finalFolder) {
    Remove-Item -LiteralPath $finalFolder -Recurse -Force
}

Move-Item -LiteralPath $worldRoot -Destination $finalFolder

Remove-Item -Force $tmpZip
Remove-Item -Recurse -Force $tmpDir

Write-Host "  Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Path: $finalFolder" -ForegroundColor DarkGray
Write-Host ""