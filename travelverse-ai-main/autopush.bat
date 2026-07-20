@echo off
title TravelVerse AI Autopush Daemon
echo ===================================================
echo   TravelVerse AI — Auto-Git ^& Vercel Deployer
echo   Running in background... Monitoring changes...
echo ===================================================
echo.

:: Ensure absolute path to Git is resolved
set GIT_CMD="C:\Program Files\Git\cmd\git.exe"

:loop
%GIT_CMD% status --porcelain | findstr /R "^" >nul
if %errorlevel% equ 0 (
    echo [Telemetry] Changes detected at %time%
    echo [Telemetry] Staging changes...
    %GIT_CMD% add -A
    
    echo [Telemetry] Committing changes...
    %GIT_CMD% commit -m "auto-update: dynamic client tweaks"
    
    echo [Telemetry] Pushing to GitHub...
    %GIT_CMD% push
    
    echo.
    echo ===================================================
    echo   ✓ Changes pushed to GitHub!
    echo   Vercel auto-rebuild has been triggered.
    echo ===================================================
    echo.
)

:: Wait 10 seconds before scanning for changes again
timeout /t 10 >nul
goto loop
