'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../hooks/useUser';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import LoadingSession from '../components/LoadingSession';

export default function LoginPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Se não está carregando e há um usuário autenticado, redireciona para o dashboard
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  // Mostra loading enquanto verifica a sessão
  if (loading) {
    return <LoadingSession message="Verificando sessão..." />;
  }

  // Se há usuário autenticado, não renderiza nada (já redirecionou)
  if (user) {
    return null;
  }

  // Renderiza a página de login apenas se não há usuário autenticado
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}
