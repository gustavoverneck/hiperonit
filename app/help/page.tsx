import { FaExclamationTriangle, FaHome, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

export default function Help() {
  const faqItems = [
    {
      question: "Como posso solicitar um orçamento?",
      answer: "Você pode solicitar um orçamento através do nosso formulário de contato ou enviando um email para contato@hiperonit.com com detalhes do seu projeto."
    },
    {
      question: "Quanto tempo leva para desenvolver uma aplicação?",
      answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Projetos simples podem levar de 4-8 semanas, enquanto aplicações mais complexas podem levar de 3-6 meses."
    },
    {
      question: "Vocês oferecem suporte pós-lançamento?",
      answer: "Sim, oferecemos diferentes planos de suporte e manutenção pós-lançamento para garantir que sua aplicação continue funcionando perfeitamente."
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer: "Trabalhamos com as mais modernas tecnologias: React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes, entre outras."
    },
    {
      question: "Vocês atendem empresas de todos os tamanhos?",
      answer: "Sim, atendemos desde startups até grandes corporações, adaptando nossas soluções às necessidades específicas de cada cliente."
    }
  ];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--color-primary-700)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-primary-50)' }}>
            Central de Ajuda
          </h1>
          <p className="text-xl" style={{ color: 'var(--color-primary-200)' }}>
            Encontre respostas para as perguntas mais frequentes
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-12">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'var(--color-primary-400)' }} />
            <input
              type="text"
              placeholder="Buscar ajuda..."
              className="w-full pl-12 pr-4 py-4 rounded-lg text-lg"
              style={{
                backgroundColor: 'var(--color-primary-800)',
                borderColor: 'var(--color-primary-600)',
                color: 'var(--color-primary-50)',
                border: '1px solid'
              }}
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-primary-50)' }}>
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl p-6" style={{ backgroundColor: 'var(--color-primary-800)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-primary-50)' }}>
                  {item.question}
                </h3>
                <p style={{ color: 'var(--color-primary-300)' }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center rounded-2xl p-8" style={{ backgroundColor: 'var(--color-primary-800)' }}>
          <FaExclamationTriangle className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent-orange)' }} />
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary-50)' }}>
            Não encontrou o que procura?
          </h2>
          <p className="mb-6" style={{ color: 'var(--color-primary-300)' }}>
            Nossa equipe de suporte está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="px-6 py-3 rounded-lg font-medium text-center transition-colors" style={{
              backgroundColor: 'var(--color-accent-orange)',
              color: 'var(--color-primary-900)'
            }}>
              Entrar em Contato
            </Link>
            <Link href="/" className="px-6 py-3 rounded-lg font-medium text-center transition-colors flex items-center justify-center space-x-2" style={{
              backgroundColor: 'var(--color-primary-700)',
              color: 'var(--color-primary-200)',
              border: '1px solid var(--color-primary-600)'
            }}>
              <FaHome className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
