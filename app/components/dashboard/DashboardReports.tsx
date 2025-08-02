'use client';

export default function DashboardReports() {
  return (
    <>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Relatórios</h1>
        <p className="text-gray-300">Visualize suas estatísticas e relatórios</p>
      </div>

      {/* Reports content */}
      <div className="grid gap-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total de Acessos</p>
                <p className="text-3xl font-bold text-white">1,234</p>
              </div>
              <div className="text-accent-orange text-3xl">📊</div>
            </div>
          </div>
          
          <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Usuários Ativos</p>
                <p className="text-3xl font-bold text-white">89</p>
              </div>
              <div className="text-accent-orange text-3xl">👥</div>
            </div>
          </div>
          
          <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Taxa de Conversão</p>
                <p className="text-3xl font-bold text-white">12.5%</p>
              </div>
              <div className="text-accent-orange text-3xl">📈</div>
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Gráfico de Atividade</h2>
          <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Gráfico será implementado aqui</p>
          </div>
        </div>
      </div>
    </>
  );
}