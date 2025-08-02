import {
  FaAward,
  FaBolt,
  FaUsers,
  FaShieldAlt
} from 'react-icons/fa';

export default function About() {
  type TeamMember = {
    name: string;
    role: string;
    expertise: string[];
    avatarUrl?: string; // opcional, caso queira adicionar avatar no futuro
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Gustavo Verneck",
      role: "Diretor & Fundador",
      expertise: ["Planejamento", "Desenvolvimento Geral", "Liderança"],
      avatarUrl: "/perfil_gustavo.jpg"
    },
    {
      name: "João Uliana",
      role: "Design",
      expertise: ["Identidade Visual", "UI/UX", "Estratégia"],
      avatarUrl: "/perfil_joao.jpg"
    },
  ];

  const values = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Excelência",
      description: "Buscamos a excelência em cada projeto, entregando soluções de alta qualidade.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Inovação",
      description: "Abraçamos tecnologias de ponta e abordagens inovadoras para resolver desafios complexos de negócios.",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Colaboração",
      description: "Trabalhamos de perto com nossos clientes como parceiros, garantindo comunicação transparente e sucesso compartilhado.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Segurança",
      description: "A segurança está no centro de tudo que fazemos, protegendo seus dados e garantindo conformidade.",
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent-500">
            Sobre a empresa
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-primary-50">
            Somos uma equipe de tecnólogos apaixonados, dedicados a ajudar empresas a prosperar na era digital.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent-500">
              Nossa História
            </h3>
            <div className="space-y-4 text-primary-50">
              <p>
                Em 2025, a HIPERON IT nasceu para redefinir a tecnologia empresarial. Fundada por especialistas que vivenciaram a transformação digital, criamos soluções modernas que alavancam as inovações mais recentes: inteligência artificial, cloud computing e arquiteturas serverless. Nosso foco é impulsionar o seu negócio para o futuro.
              </p>
              <p>
                Nossa atuação vai do desenvolvimento Front-end com React e Next.js a implementações robustas de microserviços e DevOps. Adotamos metodologias ágeis, CI/CD automatizado e as melhores práticas de segurança, garantindo que nossos produtos não apenas funcionem, mas também escalem e evoluam junto com a sua empresa.
              </p>
              <p>
                Em um cenário tecnológico em constante mudança, a HIPERON IT permanece na vanguarda. Nossa missão é democratizar o acesso às tecnologias mais avançadas. Entregamos inovação acessível para empresas de todos os portes, através de soluções elegantes, performáticas e totalmente personalizadas.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl p-8 shadow-lg bg-neutral-900" style={{ 
              backgroundColor: '--color-primary-', 
              borderColor: '--color-primary-800',
              border: '0px solid'
            }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-orange" >100%</div>
                  <div className="text-sm text-primary-50">Satisfação do Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-orange">5+</div>
                  <div className="text-sm text-primary-50">Tecnologias Dominadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-orange">2025</div>
                  <div className="text-sm text-primary-50">Ano de Fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-orange">24/7</div>
                  <div className="text-sm text-primary-50">Suporte Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-primary-50">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className={`${value.bgColor} rounded-2xl p-6 text-center border border-gray-600/30`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white">{value.icon}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-primary-50">
                  {value.title}
                </h4>
                <p className="text-sm text-primary-100">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-primary-50">
            Conheça Nossa Equipe
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-6 text-center shadow-lg border border-neutral-700 bg-neutral-900 transition-transform hover:-translate-y-1 hover:shadow-2xl max-w-xs w-full"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-primary-600 overflow-hidden">
                  {member.avatarUrl ? (
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-12 h-12 text-primary-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-1 text-accent-500">
                  {member.name}
                </h4>
                <p className="mb-3 text-primary-50">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full text-primary-50 bg-neutral-800 border border-primary-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
