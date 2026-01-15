#!/bin/bash

echo "🚀 Démarrage de RiftVision..."
echo ""

# Démarrage Backend
echo "Starting Backend (Symfony 7.4)..."
cd ap_gg_back_end
php -S 127.0.0.1:8000 -t public &
BACKEND_PID=$!
echo "Backend PID: $BACKEND_PID"
sleep 2

# Démarrage Frontend
echo "Starting Frontend (Angular 19)..."
cd ../ap_gg_front_end
npm start &
FRONTEND_PID=$!
echo "Frontend PID: $FRONTEND_PID"

echo ""
echo "✅ RiftVision is running!"
echo ""
echo "📱 Frontend: http://localhost:4200"
echo "🔌 Backend API: http://localhost:8000/api"
echo ""
echo "Press Ctrl+C to stop..."
echo ""

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
