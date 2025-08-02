'use client';

import { useState, useEffect } from 'react';

interface SessionWarningProps {
  readonly show: boolean;
  readonly onExtend: () => void;
  readonly onLogout: () => void;
  readonly countdown?: number; // em segundos
}

export default function SessionWarning({ 
  show, 
  onExtend, 
  onLogout, 
  countdown = 300 
}: SessionWarningProps) {
  const [timeLeft, setTimeLeft] = useState(countdown);

  useEffect(() => {
    if (!show) return;

    setTimeLeft(countdown);
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          onLogout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [show, countdown, onLogout]);

  if (!show) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
        <div className="text-center">
          <div className="text-6xl mb-4">⏰</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sessão Expirando
          </h2>
          <p className="text-gray-600 mb-6">
            Sua sessão expirará em <span className="font-bold text-red-600">{formatTime(timeLeft)}</span>
          </p>
          <div className="flex gap-4">
            <button
              onClick={onExtend}
              className="flex-1 bg-accent-orange text-white px-6 py-3 rounded-lg hover:bg-accent-orange/90 transition-colors font-medium"
            >
              Continuar Conectado
            </button>
            <button
              onClick={onLogout}
              className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Sair Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}