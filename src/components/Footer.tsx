import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import Logo from './Logo';

const footerContent = {
  en: {
    about: 'About Us',
    aboutText: 'Empowering businesses through intelligent automation solutions.',
    links: 'Quick Links',
    contact: 'Contact',
    rights: 'All rights reserved.',
  },
  es: {
    about: 'Sobre Nosotros',
    aboutText: 'Potenciando negocios a través de soluciones de automatización inteligente.',
    links: 'Enlaces Rápidos',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const content = footerContent[language];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-slate-400 mt-4 mb-4">{content.aboutText}</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/isabelcristinamanrique/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.links}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{content.contact}</h3>
            <div className="text-slate-400">
              <p>Cristina Manrique</p>
              <a 
                href="mailto:cristina@lienzoblanco.co"
                className="flex items-center space-x-2 hover:text-purple-400 transition-colors mt-2"
              >
                <Mail className="h-4 w-4" />
                <span>cristina@lienzoblanco.co</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Canvasia. {content.rights}</p>
        </div>
      </div>
    </footer>
  );
}