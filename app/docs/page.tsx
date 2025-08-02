import { FaBook, FaCode, FaRocket, FaShieldAlt, FaCloud, FaMobile } from 'react-icons/fa';
import Link from 'next/link';

export default function Docs() {
  const categories = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Primeiros Passos",
      description: "Guias básicos para começar com nossas soluções",
      links: [
        { title: "Introdução", href: "#intro" },
        { title: "Configuração Inicial", href: "#setup" },
        { title: "Primeiro Projeto", href: "#first-project" }
      ]
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Documentação para projetos web e APIs",
      links: [
        { title: "React & Next.js", href: "#react" },
        { title: "APIs REST", href: "#api" },
        { title: "Autenticação", href: "#auth" }
      ]
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Apps Mobile",
      description: "Guias para desenvolvimento mobile",
      links: [
        { title: "React Native", href: "#react-native" },
        { title: "Publicação", href: "#publishing" },
        { title: "Notificações Push", href: "#push" }
      ]
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Soluções Cloud",
      description: "Infraestrutura e serviços em nuvem",
      links: [
        { title: "AWS Setup", href: "#aws" },
        { title: "Docker & Kubernetes", href: "#containers" },
        { title: "CI/CD", href: "#cicd" }
      ]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Segurança",
      description: "Melhores práticas de segurança",
      links: [
        { title: "Autenticação JWT", href: "#jwt" },
        { title: "HTTPS & SSL", href: "#ssl" },
        { title: "Backup & Recovery", href: "#backup" }
      ]
    }
  ];

  const popularDocs = [
    {
      title: "Guia de Setup do Projeto React",
      description: "Como configurar um projeto React com Next.js e TypeScript",
      category: "Desenvolvimento Web",
      readTime: "5 min"
    },
    {
      title: "Deploy na AWS com Docker",
      description: "Passo a passo para deploy de aplicações usando containers",
      category: "Cloud",
      readTime: "10 min"
    },
    {
      title: "Configuração de CI/CD",
      description: "Automatize seus deploys com GitHub Actions",
      category: "DevOps",
      readTime: "8 min"
    },
    {
      title: "Implementação de Autenticação",
      description: "JWT e OAuth2 em aplicações modernas",
      category: "Segurança",
      readTime: "12 min"
    }
  ];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--color-primary-700)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-primary-50)' }}>
            Documentação
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-primary-200)' }}>
            Guias, tutoriais e referências para aproveitar ao máximo nossas soluções tecnológicas
          </p>
        </div>

        {/* Search */}
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Buscar na documentação..."
              className="w-full px-6 py-4 rounded-lg text-lg pl-12"
              style={{
                backgroundColor: 'var(--color-primary-800)',
                borderColor: 'var(--color-primary-600)',
                color: 'var(--color-primary-50)',
                border: '1px solid'
              }}
            />
            <FaBook className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'var(--color-primary-400)' }} />
          </div>
        </div>

        {/* Popular Docs */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-primary-50)' }}>
            Documentos Populares
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularDocs.map((doc) => (
              <div key={doc.title} className="p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer" style={{ backgroundColor: 'var(--color-primary-800)' }}>
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{
                    backgroundColor: 'var(--color-accent-orange)',
                    color: 'var(--color-primary-900)'
                  }}>
                    {doc.category}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-primary-400)' }}>
                    {doc.readTime} leitura
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-primary-50)' }}>
                  {doc.title}
                </h3>
                <p style={{ color: 'var(--color-primary-300)' }}>
                  {doc.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-primary-50)' }}>
            Categorias
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-primary-800)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mr-4" style={{
                    backgroundColor: 'var(--color-accent-orange)',
                    color: 'var(--color-primary-900)'
                  }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--color-primary-50)' }}>
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="mb-4" style={{ color: 'var(--color-primary-300)' }}>
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} className="text-sm hover:underline" style={{ color: 'var(--color-primary-200)' }}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center rounded-2xl p-8" style={{ backgroundColor: 'var(--color-primary-800)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary-50)' }}>
            Precisa de Ajuda?
          </h2>
          <p className="mb-6" style={{ color: 'var(--color-primary-300)' }}>
            Não encontrou o que procura? Nossa equipe está pronta para ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/help" className="px-6 py-3 rounded-lg font-medium" style={{
              backgroundColor: 'var(--color-accent-orange)',
              color: 'var(--color-primary-900)'
            }}>
              Central de Ajuda
            </Link>
            <Link href="#contact" className="px-6 py-3 rounded-lg font-medium border" style={{
              color: 'var(--color-primary-200)',
              borderColor: 'var(--color-primary-600)'
            }}>
              Contato Direto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
