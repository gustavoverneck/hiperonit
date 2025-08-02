'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaHouse, FaUser, FaGear, FaChartBar, FaArrowRightFromBracket } from "react-icons/fa6";

interface DashboardMenuProps {
  onLogout: () => void;
}

export default function DashboardMenu({ onLogout }: DashboardMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const currentSection = searchParams.get('section') || 'home';

  const menuItems = [
    { href: '/dashboard', section: 'home', label: 'Dashboard', icon: FaHouse },
    { href: '/dashboard?section=profile', section: 'profile', label: 'Perfil', icon: FaUser },
    { href: '/dashboard?section=settings', section: 'settings', label: 'Configurações', icon: FaGear },
    { href: '/dashboard?section=reports', section: 'reports', label: 'Relatórios', icon: FaChartBar },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-60 bg-black/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/40 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-sm border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <Link href="/" className="flex items-center justify-center">
              <div className="relative w-[180px] h-[45px] overflow-hidden">
                <Image
                  src="/hiperonit_text_dark.png"
                  alt="HIPERON. Logo"
                  width={180}
                  height={45}
                  className="block object-cover object-top"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.section}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200
                      ${currentSection === item.section 
                        ? 'bg-accent-orange text-white' 
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xl">
                      {typeof item.icon === 'function'
                        ? <item.icon />
                        : item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout button */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={() => {
                onLogout();
                setIsOpen(false);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
                <span className="text-xl"><FaArrowRightFromBracket /></span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
