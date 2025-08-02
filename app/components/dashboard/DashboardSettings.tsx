'use client';

export default function DashboardSettings() {
  return (
    <>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Configurações</h1>
        <p className="text-gray-300">Gerencie suas preferências e configurações</p>
      </div>

      {/* Settings content */}
      <div className="grid gap-6">
        {/* Security Settings */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Segurança</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Alterar Senha</h3>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Senha Atual
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    placeholder="Digite sua senha atual"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nova Senha
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    placeholder="Digite sua nova senha"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirme a Nova Senha
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-orange"
                    placeholder="Confirme sua nova senha"
                  />
                </div>
                
                <button className="bg-accent-orange text-white px-6 py-2 rounded-lg hover:bg-accent-orange/90 transition-colors">
                  Alterar Senha
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Preferências</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Notificações por Email</h3>
                <p className="text-gray-400 text-sm">Receber notificações importantes por email</p>
              </div>
              <button className="bg-accent-orange w-12 h-6 rounded-full p-1 transition-colors">
                <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 transition-transform"></div>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium">Modo Escuro</h3>
                <p className="text-gray-400 text-sm">Usar tema escuro na interface</p>
              </div>
              <button className="bg-accent-orange w-12 h-6 rounded-full p-1 transition-colors">
                <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}