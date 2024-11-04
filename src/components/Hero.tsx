import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';

const heroContent = {
  en: {
    title: 'Boost Your Business with Intelligent Automation',
    subtitle: 'Optimize processes, reduce costs, and improve efficiency with our automation solutions.',
    cta: 'Get Started',
    secondary: 'Learn More'
  },
  es: {
    title: 'Impulsa tu Negocio con Automatización Inteligente',
    subtitle: 'Optimiza procesos, reduce costos y mejora la eficiencia con nuestras soluciones de automatización.',
    cta: 'Comenzar',
    secondary: 'Saber Más'
  }
};

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const content = heroContent[language];

  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              {content.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="relative inline-flex items-center px-6 py-3 rounded-lg overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                <span className="relative">{content.cta}</span>
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {content.secondary} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}