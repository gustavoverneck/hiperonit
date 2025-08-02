'use client';

import { useUser } from '../../hooks/useUser';

export default function DashboardHome() {
  const { user, email } = useUser();

  return (
    <>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-300">Bem-vindo ao seu painel de controle</p>
      </div>

      {/* Content card */}
      <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Bem-vindo ao Dashboard!
          </h2>
          <p className="text-gray-300 mb-2">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-gray-300 mb-4">
            <strong>ID:</strong> {user?.id}
          </p>
          {user?.name && (
            <p className="text-gray-300 mb-4">
              <strong>Nome:</strong> {user.name}
            </p>
          )}
          <div className="mt-8 p-6 bg-accent-orange/10 border border-accent-orange/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-lg font-medium text-accent-orange mb-2">
              Área Protegida
            </h3>
            <p className="text-gray-300">
              Esta página só pode ser acessada por usuários autenticados.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}