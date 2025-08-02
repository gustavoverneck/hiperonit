'use client';

import { useUser } from '../hooks/useUser';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode, useState } from 'react';
import { useSessionTimeout } from '../hooks/useSessionTimeout';
import SessionWarning from './SessionWarning';
import LoadingSession from './LoadingSession';
import { supabase } from '../supabaseClient';

interface ProtectedRouteProps {
  readonly children: ReactNode;
  readonly redirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user, loading, error } = useUser();
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);

  const { resetTimer } = useSessionTimeout({
    timeoutDuration: 3600000, // 1 hora
    warningDuration: 300000,  // 5 minutos antes
    onTimeout: () => {
      supabase.auth.signOut().then(() => {
        router.push(redirectTo);
      });
    },
    onWarning: () => {
      setShowWarning(true);
    }
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectTo);
    }
  }, [user, loading, router, redirectTo]);

  const handleExtendSession = () => {
    setShowWarning(false);
    resetTimer();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push(redirectTo);
  };

  // Mostra loading enquanto verifica autenticação
  if (loading) {
    return <LoadingSession message="Verificando autenticação..." />;
  }

  // Mostra erro se houver
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-black">
        <div className="text-center">
          <p className="text-red-400 mb-4">Erro de autenticação: {error}</p>
          <button
            onClick={() => router.push(redirectTo)}
            className="bg-accent-orange text-white px-4 py-2 rounded-lg hover:bg-accent-orange/90"
          >
            Ir para Login
          </button>
        </div>
      </div>
    );
  }

  // Se não há usuário, não renderiza nada (o useEffect já redirecionou)
  if (!user) {
    return null;
  }

  // Renderiza o conteúdo protegido
  return (
    <>
      {children}
      <SessionWarning
        show={showWarning}
        onExtend={handleExtendSession}
        onLogout={handleLogout}
        countdown={300} // 5 minutos
      />
    </>
  );
}