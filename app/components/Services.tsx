import Link from 'next/link';
import { 
  FaLaptopCode,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaChartBar,
  FaCogs
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="w-12 h-12" />,
      title: "Desenvolvimento Web",
      description: "Sites e sistemas web rápidos, responsivos e modernos com React, Next.js e Node.js.",
      features: ["Design Responsivo", "Intuitivo", "Alto Desempenho", "UI/UX Modernos", ],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <FaMobile className="w-12 h-12" />,
      title: "Aplicativos Mobile",
      description: "Aplicativos modernos, rápidos e multiplataforma para iOS e Android. Prontos para crescer com o seu negócio.",
      features: [
        "Desempenho Rápido",
        "Publicação nas Lojas",
        "Notificações Push"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <FaCloud className="w-12 h-12" />,
      title: "Soluções em Nuvem",
      description: "Hospedagem moderna, escalável, segura e otimizada em AWS, Azure, Supabase ou Google Cloud.",
      features: ["Escalabilidade", "Alta Disponibilidade", "Custo Otimizado", "Segurança"],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Cibersegurança",
      description: "Proteção total contra ameaças digitais com auditorias e monitoramento contínuo.",
      features: ["Proteção de Dados", "Testes de Penetração", "Compliance", "24/7"],
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: <FaChartBar className="w-12 h-12" />,
      title: "Análise de Dados",
      description: "Transformamos dados em decisões com dashboards, BI e IA sob medida.",
      features: ["Dashboards", "Analytics", "Inteligência Artificial", "Visualização Clara"],
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: <FaCogs className="w-12 h-12" />,
      title: "Consultoria em TI",
      description: "Diagnóstico, planejamento e transformação digital com foco em resultados.",
      features: ["Estratégia", "Auditoria", "Modernização", "Boas Práticas"],
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-50">
            Nossos Serviços
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-primary-200">
            Oferecemos soluções de TI abrangentes e personalizadas para as necessidades do seu negócio. 
            Do desenvolvimento web à infraestrutura em nuvem, temos a expertise para impulsionar sua transformação digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-600/30`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-white">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-primary-50">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-primary-300">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-primary-300">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <button className="font-medium hover:underline transition-all duration-300 text-accent-orange">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="mb-6 text-primary-200">
            Precisa de uma solução personalizada? Adoraríamos discutir seu projeto.
          </p>
            <Link href="#contact">
            <button className="bg-accent-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-accent-orange/90 transition-all duration-300">
              Solicitar Orçamento Personalizado
            </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
