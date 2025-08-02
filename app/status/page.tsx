import { FaCheckCircle, FaExclamationCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

export default function Status() {
  const services = [
    {
      name: "Website Principal",
      status: "operational",
      uptime: "99.9%"
    },
    {
      name: "API de Serviços",
      status: "operational",
      uptime: "99.8%"
    },
    {
      name: "Sistema de Email",
      status: "operational",
      uptime: "99.9%"
    },
    {
      name: "Backup e Segurança",
      status: "operational",
      uptime: "100%"
    },
    {
      name: "Monitoramento",
      status: "maintenance",
      uptime: "99.7%"
    }
  ];

  const incidents = [
    {
      date: "14 Jul 2025",
      time: "10:30",
      title: "Manutenção programada do sistema de monitoramento",
      status: "resolved",
      description: "Atualização de segurança realizada com sucesso. Todos os serviços foram restaurados."
    },
    {
      date: "12 Jul 2025",
      time: "15:45",
      title: "Lentidão temporária na API",
      status: "resolved",
      description: "Identificamos e corrigimos um problema de performance que causava lentidão nas requisições."
    },
    {
      date: "10 Jul 2025",
      time: "09:15",
      title: "Atualização de segurança",
      status: "resolved",
      description: "Aplicação de patches de segurança em todos os serviços. Operação concluída sem intercorrências."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <FaCheckCircle className="w-5 h-5 text-green-500" />;
      case 'maintenance':
        return <FaClock className="w-5 h-5 text-yellow-500" />;
      case 'degraded':
        return <FaExclamationCircle className="w-5 h-5 text-orange-500" />;
      case 'outage':
        return <FaTimesCircle className="w-5 h-5 text-red-500" />;
      default:
        return <FaCheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return { text: 'Operacional', color: 'text-green-500' };
      case 'maintenance':
        return { text: 'Manutenção', color: 'text-yellow-500' };
      case 'degraded':
        return { text: 'Degradado', color: 'text-orange-500' };
      case 'outage':
        return { text: 'Indisponível', color: 'text-red-500' };
      case 'resolved':
        return { text: 'Resolvido', color: 'text-green-500' };
      default:
        return { text: 'Operacional', color: 'text-green-500' };
    }
  };

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--color-primary-700)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-primary-50)' }}>
            Status do Sistema
          </h1>
          <p className="text-xl" style={{ color: 'var(--color-primary-200)' }}>
            Acompanhe o status em tempo real dos nossos serviços
          </p>
        </div>

        {/* Overall Status */}
        <div className="mb-12 rounded-2xl p-8 text-center" style={{ backgroundColor: 'var(--color-primary-800)' }}>
          <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary-50)' }}>
            Todos os Sistemas Operacionais
          </h2>
          <p style={{ color: 'var(--color-primary-300)' }}>
            Última atualização: {new Date().toLocaleString('pt-BR')}
          </p>
        </div>

        {/* Services Status */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-primary-50)' }}>
            Status dos Serviços
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-primary-800)' }}>
                <div className="flex items-center space-x-4">
                  {getStatusIcon(service.status)}
                  <div>
                    <h3 className="font-semibold" style={{ color: 'var(--color-primary-50)' }}>
                      {service.name}
                    </h3>
                    <p className={`text-sm ${getStatusText(service.status).color}`}>
                      {getStatusText(service.status).text}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium" style={{ color: 'var(--color-primary-300)' }}>
                    Uptime
                  </p>
                  <p className="font-bold" style={{ color: 'var(--color-accent-orange)' }}>
                    {service.uptime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div>
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-primary-50)' }}>
            Incidentes Recentes
          </h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={`${incident.date}-${incident.time}`} className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-primary-800)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(incident.status)}
                    <div>
                      <h3 className="font-semibold" style={{ color: 'var(--color-primary-50)' }}>
                        {incident.title}
                      </h3>
                      <p className={`text-sm ${getStatusText(incident.status).color}`}>
                        {getStatusText(incident.status).text}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm" style={{ color: 'var(--color-primary-400)' }}>
                    <p>{incident.date}</p>
                    <p>{incident.time}</p>
                  </div>
                </div>
                <p style={{ color: 'var(--color-primary-300)' }}>
                  {incident.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center rounded-2xl p-8" style={{ backgroundColor: 'var(--color-primary-800)' }}>
          <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary-50)' }}>
            Receba Notificações
          </h3>
          <p className="mb-4" style={{ color: 'var(--color-primary-300)' }}>
            Inscreva-se para receber atualizações sobre o status dos nossos serviços
          </p>
          <button className="px-6 py-3 rounded-lg font-medium" style={{
            backgroundColor: 'var(--color-accent-orange)',
            color: 'var(--color-primary-900)'
          }}>
            Inscrever-se
          </button>
        </div>
      </div>
    </div>
  );
}
