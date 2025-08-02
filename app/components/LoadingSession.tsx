'use client';

interface LoadingSessionProps {
  readonly message?: string;
}

export default function LoadingSession({ 
  message = "Verificando sessão..." 
}: LoadingSessionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-orange mx-auto mb-4"></div>
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
}