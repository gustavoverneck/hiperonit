'use client';

import { useEffect, useCallback, useRef } from 'react';
import { supabase } from '../supabaseClient';
import { useRouter } from 'next/navigation';

interface UseSessionTimeoutProps {
  timeoutDuration?: number; // em millisegundos
  warningDuration?: number; // em millisegundos
  onTimeout?: () => void;
  onWarning?: () => void;
}

export function useSessionTimeout({
  timeoutDuration = 3600000, // 1 hora
  warningDuration = 300000,  // 5 minutos antes do timeout
  onTimeout,
  onWarning
}: UseSessionTimeoutProps = {}) {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const warningRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef<number>(Date.now());

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    router.push('/login');
    if (onTimeout) onTimeout();
  }, [router, onTimeout]);

  const showWarning = useCallback(() => {
    if (onWarning) onWarning();
  }, [onWarning]);

  const resetTimer = useCallback(() => {
    lastActivityRef.current = Date.now();
    
    // Limpa timers existentes
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (warningRef.current) clearTimeout(warningRef.current);

    // Define novo timer de aviso
    warningRef.current = setTimeout(() => {
      showWarning();
    }, timeoutDuration - warningDuration);

    // Define novo timer de logout
    timeoutRef.current = setTimeout(() => {
      logout();
    }, timeoutDuration);
  }, [timeoutDuration, warningDuration, logout, showWarning]);

  const handleActivity = useCallback(() => {
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    // Eventos que indicam atividade do usuário
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
      'click'
    ];

    // Inicia o timer
    resetTimer();

    // Adiciona listeners de atividade
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    // Cleanup
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (warningRef.current) clearTimeout(warningRef.current);
    };
  }, [handleActivity, resetTimer]);

  return {
    resetTimer,
    lastActivity: lastActivityRef.current
  };
}