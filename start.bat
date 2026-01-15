@echo off
echo.
echo =========================================
echo  RiftVision - League of Legends Tool
echo =========================================
echo.

REM Check if PHP is installed
where php >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] PHP not found. Please install PHP 8.2+
    pause
    exit /b 1
)

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found. Please install Node.js 18+
    pause
    exit /b 1
)

echo [OK] PHP found: 
php --version

echo.
echo [OK] Node.js found:
node --version

echo.
echo =========================================
echo  Starting RiftVision...
echo =========================================
echo.

REM Start Backend
echo [1/2] Starting Backend (Symfony 7.4)...
cd ap_gg_back_end
start "RiftVision Backend" cmd /k "php -S 127.0.0.1:8000 -t public"
echo       Backend will be available at: http://localhost:8000
timeout /t 3 /nobreak
cd ..

echo.

REM Start Frontend
echo [2/2] Starting Frontend (Angular 19)...
cd ap_gg_front_end
start "RiftVision Frontend" cmd /k "npm start"
echo       Frontend will be available at: http://localhost:4200
cd ..

echo.
echo =========================================
echo  RiftVision is starting...
echo =========================================
echo.
echo 🎮 Frontend: http://localhost:4200
echo 🔌 Backend API: http://localhost:8000/api
echo.
echo Documentation:
echo   - Quick Start: QUICK_REFERENCE.md
echo   - Full Guide: GETTING_STARTED.md
echo   - API Docs: API_DOCUMENTATION.md
echo.
echo Close this window to stop the servers.
echo.
pause
