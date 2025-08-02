import Link from 'next/link';
import { Button } from '../ui/Button';
import { 
  FaRocket, 
  FaLifeRing, 
  FaTools, 
  FaBullseye,
  FaLaptopCode,
  FaMobile,
  FaServer,
  FaCloud,
  FaStar
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-10 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-300/60 bg-orange-400/10 backdrop-blur-sm">
              <FaRocket className="mr-2 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">
                Transforme seu negócio
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
                Desenvolva o{' '}
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Futuro
                </span>
                <br />
                do seu Negócio
              </h1>
              <p className="text-xl leading-relaxed max-w-xl text-gray-300">
                Criamos soluções digitais inovadoras que impulsionam o crescimento da sua empresa. 
                Da ideia ao produto final, estamos com você em cada etapa.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Desenvolvimento Ágil", icon: <FaRocket className="text-xl text-orange-500" /> },
                { label: "Suporte 24/7", icon: <FaLifeRing className="text-xl text-orange-500" /> },
                { label: "Tecnologias Modernas", icon: <FaTools className="text-xl text-orange-500" /> },
                { label: "Resultados Garantidos", icon: <FaBullseye className="text-xl text-orange-500" /> }
              ].map((feature) => (
                <div key={feature.label} className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-orange-300/60 bg-orange-400/10 transition-all duration-300">
                    <span>{feature.icon}</span>
                  </div>
                  <span className="font-medium transition-colors duration-300 text-gray-300">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-400/20 hover:shadow-orange-400/40 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 font-bold border-0 hover:text-white text-white"
                >
                  Comece Seu Projeto
                </Button>
                </Link>
                <Link href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto transition-all duration-300 border-2 text-white hover:border-orange-400 hover:text-orange-500 hover:bg-orange-500 font-semibold shadow-md"
                >
                  Veja Nossos Serviços
                </Button>
                </Link>
            </div>

          </div>

          {/* Right Column - Interactive Visual */}
            <div className="relative">
            {/* Main Card */}
            <div className="relative z-10 transform hover:scale-101 transition-transform duration-200">
                <div
                className="rounded-3xl p-8 border bg-primary-900 border-gray-900 shadow-2xl"
                >
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">
                Serviços Ofertados
                </h3>
              </div>

              {/* Tech Grid */}
              <div className="mt-6 grid grid-cols-2 gap-6">
                  {[
                  {
                    name: "Criação de sites profissionais",
                    description: "Institucionais, landing pages e e-commerces modernos",
                    icon: <FaLaptopCode className="w-8 h-8" />,
                    color: "from-sky-500 to-cyan-400",
                    bgColor: "bg-sky-500/10"
                  },
                  {
                    name: "Sistemas personalizados",
                    description: "Gestão, automação e controle",
                    icon: <FaServer className="w-8 h-8" />,
                    color: "from-emerald-500 to-lime-400",
                    bgColor: "bg-emerald-500/10"
                  },
                  {
                    name: "Aplicativos mobile",
                    description: "Esteja presente nas mãos de seus clientes",
                    icon: <FaMobile className="w-8 h-8" />,
                    color: "from-fuchsia-500 to-pink-400",
                    bgColor: "bg-fuchsia-500/10"
                  },
                  {
                    name: "Suporte técnico",
                    description: "Consultoria, manutenção e melhorias",
                    icon: <FaLifeRing className="w-8 h-8" />,
                    color: "from-orange-400 to-yellow-300",
                    bgColor: "bg-orange-400/10"
                  }
                  ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`${tech.bgColor} rounded-2xl p-6 border border-gray-800/30 hover:border-gray-700/60 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white">{tech.icon}</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-2 text-white">
                    {tech.name}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                    {tech.description}
                    </p>
                  </div>
                  ))}
              </div>

              {/* Call to Action in Card */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-6 py-3 rounded-full border border-orange-300/60 bg-orange-400/10">
                <FaStar className="mr-2 text-orange-500" />
                <span className="font-medium text-orange-500">
                  Pronto para começar?
                </span>
                </div>
              </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,136,27,0.18)_0%,transparent_70%)]"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(80,80,120,0.18)_0%,transparent_70%)]"></div>
            </div>
          </div>
        </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-400">
            Role para descobrir mais
          </span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <div className="w-1 h-3 rounded-full mt-2 animate-bounce bg-gradient-to-b from-orange-500 to-orange-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
