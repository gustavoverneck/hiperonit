'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-[200px] h-[50px] overflow-hidden flex items-center justify-center">
              <Image
                src="/hiperonit_text_dark.png"
                alt="HIPERON. Logo"
                width={200}
                height={50}
                className="block object-cover object-top"
                priority
              />
              </div>
            </Link>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            {isLoginPage ? (
              <Link 
                href="/" 
                className="text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
              >
                ← Voltar à tela inicial
              </Link>
            ) : (
              <div className="flex items-center space-x-8">
                <Link 
                  href="#services" 
                  className="text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
                >
                  Serviços
                </Link>
                <Link 
                  href="#about" 
                  className="text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
                >
                  Sobre
                </Link>
                {/* <Link href="#portfolio" className="text-white hover:text-[#ff881b] transition-colors duration-300 font-medium">
                  Portfolio
                </Link> */}
                <Link 
                  href="#contact" 
                  className="text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
                >
                  Contato
                </Link>
                <Link 
                  href="/login" 
                  className="bg-accent-orange text-white px-4 py-2 rounded-lg hover:bg-[#ff881b]/90 transition-colors duration-300 font-medium"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {isLoginPage ? (
              <Link 
                href="/" 
                className="text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
              >
                ← Voltar
              </Link>
            ) : (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#ff881b] transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && !isLoginPage && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              <Link 
                href="#services" 
                className="block px-3 py-2 text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
              >
                Serviços
              </Link>
              <Link 
                href="#about" 
                className="block px-3 py-2 text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
              >
                Sobre
              </Link>
              <Link 
                href="#portfolio" 
                className="block px-3 py-2 text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
              >
                Portfolio
              </Link>
              <Link 
                href="#contact" 
                className="block px-3 py-2 text-white hover:text-[#ff881b] transition-colors duration-300 font-medium"
              >
                Contato
              </Link>
              <Link 
                href="/login" 
                className="block mx-3 mt-2 bg-[#ff881b] text-white px-4 py-2 rounded-lg hover:bg-[#ff881b]/90 transition-colors duration-300 text-center font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
