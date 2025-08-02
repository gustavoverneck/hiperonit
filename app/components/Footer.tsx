import Image from 'next/image';
import Link from 'next/link';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Desenvolvimento Web', href: '#services' },
      { name: 'Apps Mobile', href: '#services' },
      { name: 'Soluções Cloud', href: '#services' },
      { name: 'Cibersegurança', href: '#services' },
      { name: 'Análise de Dados', href: '#services' },
      { name: 'Consultoria em TI', href: '#services' }
    ],
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nossa Equipe', href: '#about' },
      { name: 'Carreiras', href: '/careers' },
      { name: 'Imprensa', href: '/press' }
    ],
    support: [
      { name: 'Contato', href: '#contact' },
      { name: 'Central de Ajuda', href: '/help' },
      { name: 'Documentação', href: '/docs' },
      { name: 'Status do Sistema', href: '/status' },
      { name: 'Política de Privacidade', href: '/privacy' },
      { name: 'Termos de Serviço', href: '/terms' }
    ]
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/hiperonit_text_light.png"
                alt="Hiperonit Logo"
                width={160}
                height={34}
                className="mb-4"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Criamos soluções digitais inovadoras que impulsionam o crescimento da sua empresa. Da ideia ao produto final, estamos com você em cada etapa.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm">contact@hiperonit.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-sm">+55 (27) 9 9688-5857</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm">Vila Velha, ES</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              Siga-nos
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/hiperon.it"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                  backgroundColor: 'var(--color-primary-800)',
                  color: 'var(--color-primary-400)'
                  }}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/gustavoverneck"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                  backgroundColor: 'var(--color-primary-800)',
                  color: 'var(--color-primary-400)'
                  }}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} HIPERON IT. Todos os direitos resercados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
              Políticas de Privacidade
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
              Termos de Serviço
            </Link>
            <Link href="/cookies" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
