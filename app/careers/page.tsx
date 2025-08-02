import { 
  FaCode, 
  FaUsers, 
  FaRocket, 
  FaLightbulb,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase
} from 'react-icons/fa';

export default function Careers() {
  const benefits = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Crescimento Acelerado",
      description: "Oportunidades de desenvolvimento profissional em projetos inovadores"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Equipe Colaborativa",
      description: "Trabalhe com profissionais talentosos em um ambiente de colaboração"
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Inovação Constante",
      description: "Acesso às mais recentes tecnologias e metodologias do mercado"
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Projetos Desafiadores",
      description: "Trabalhe em soluções que impactam positivamente os negócios dos clientes"
    }
  ];

  const positions = [
    {
      title: "Desenvolvedor Full Stack",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Buscamos um desenvolvedor experiente em React, Node.js e tecnologias cloud para integrar nossa equipe.",
      requirements: [
        "3+ anos de experiência com React e Node.js",
        "Conhecimento em AWS ou Azure",
        "Experiência com bancos de dados SQL e NoSQL",
        "Familiaridade com metodologias ágeis"
      ]
    },
    {
      title: "Designer UX/UI",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Procuramos um designer criativo para criar experiências digitais excepcionais para nossos clientes.",
      requirements: [
        "Portfólio sólido em design digital",
        "Proficiência em Figma e Adobe Creative Suite",
        "Experiência em pesquisa com usuários",
        "Conhecimento em design systems"
      ]
    },
    {
      title: "Especialista em DevOps",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description: "Queremos um especialista para otimizar nossos processos de desenvolvimento e deployment.",
      requirements: [
        "Experiência com containers (Docker, Kubernetes)",
        "Conhecimento em CI/CD pipelines",
        "Familiaridade com AWS, Azure ou GCP",
        "Experiência com Infrastructure as Code"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '--color-primary-700' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: '--color-primary-50' }}>
            Carreiras na Hiperon IT
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '--color-primary-200' }}>
            Junte-se a uma equipe apaixonada por tecnologia e inovação. 
            Construa o futuro digital conosco.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '--color-primary-50' }}>
            Por que trabalhar conosco?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl p-6 text-center" style={{ backgroundColor: '--color-primary-800' }}>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ 
                  backgroundColor: '--color-accent-orange',
                  color: '--color-primary-900'
                }}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '--color-primary-50' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm" style={{ color: '--color-primary-300' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '--color-primary-50' }}>
            Vagas Abertas
          </h2>
          <div className="space-y-8">
            {positions.map((position) => (
              <div key={position.title} className="rounded-2xl p-8 border" style={{ 
                backgroundColor: '--color-primary-800',
                borderColor: '--color-primary-600'
              }}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2" style={{ color: '--color-primary-50' }}>
                      {position.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm" style={{ color: '--color-primary-300' }}>
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaBriefcase className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 px-6 py-2 rounded-lg font-medium transition-colors" style={{
                    backgroundColor: '--color-accent-orange',
                    color: '--color-primary-900'
                  }}>
                    Candidatar-se
                  </button>
                </div>
                
                <p className="mb-6" style={{ color: '--color-primary-300' }}>
                  {position.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-medium mb-3" style={{ color: '--color-primary-50' }}>
                    Requisitos:
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-start space-x-2" style={{ color: '--color-primary-300' }}>
                        <span className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '--color-accent-orange' }}></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center rounded-2xl p-12" style={{ backgroundColor: '--color-primary-800' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '--color-primary-50' }}>
            Não encontrou a vaga ideal?
          </h2>
          <p className="text-lg mb-8" style={{ color: '--color-primary-300' }}>
            Envie seu currículo e entraremos em contato quando surgirem novas oportunidades.
          </p>
          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="w-5 h-5" style={{ color: '--color-accent-orange' }} />
            <a href="mailto:carreiras@hiperonit.com" className="text-lg font-medium" style={{ color: '--color-accent-orange' }}>
              carreiras@hiperonit.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
