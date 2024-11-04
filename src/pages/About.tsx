import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Calendar, Users, Globe } from 'lucide-react';

const content = {
  en: {
    title: 'Lienzo Blanco Launches Canvasia.co: A New Era in AI-Powered Business Automation',
    date: 'October 29, 2024',
    lead: 'Lienzo Blanco, a leading digital innovation company, today announced the launch of Canvasia.co, its new artificial intelligence division focused on business process automation and digital transformation.',
    leadership: 'Under the leadership of Isabel Cristina Manrique, Canvasia.co will leverage cutting-edge AI technologies to help businesses streamline operations, reduce costs, and improve customer experiences through intelligent automation solutions.',
    services: {
      title: 'Transformative Solutions for Modern Businesses',
      list: [
        'AI-Powered Process Automation',
        'Intelligent Document Processing',
        'Customer Service Automation',
        'Predictive Analytics',
        'Custom AI Solutions'
      ]
    },
    quote: {
      text: "With Canvasia.co, we're bringing enterprise-level AI capabilities to businesses of all sizes. Our mission is to democratize access to intelligent automation solutions that drive real business value.",
      author: 'Isabel Cristina Manrique',
      role: 'Director of Canvasia.co'
    },
    industries: {
      title: 'Industry-Specific Solutions',
      text: 'The company will initially focus on providing specialized solutions for key industries including healthcare, retail, finance, and professional services, with plans to expand into additional sectors based on market demand.'
    },
    contact: {
      title: 'Contact Information',
      name: 'Isabel Cristina Manrique',
      email: 'cristina@lienzoblanco.co',
      phone: '(+57) 310 227 10 63',
      website: 'www.canvasia.co'
    }
  },
  es: {
    title: 'Lienzo Blanco Lanza Canvasia.co: Una Nueva Era en Automatización Empresarial Impulsada por IA',
    date: '29 de Octubre, 2024',
    lead: 'Lienzo Blanco, una empresa líder en innovación digital, anunció hoy el lanzamiento de Canvasia.co, su nueva división de inteligencia artificial enfocada en la automatización de procesos empresariales y transformación digital.',
    leadership: 'Bajo el liderazgo de Isabel Cristina Manrique, Canvasia.co aprovechará tecnologías de IA de vanguardia para ayudar a las empresas a optimizar operaciones, reducir costos y mejorar las experiencias de los clientes a través de soluciones de automatización inteligente.',
    services: {
      title: 'Soluciones Transformadoras para Empresas Modernas',
      list: [
        'Automatización de Procesos con IA',
        'Procesamiento Inteligente de Documentos',
        'Automatización del Servicio al Cliente',
        'Análisis Predictivo',
        'Soluciones Personalizadas de IA'
      ]
    },
    quote: {
      text: "Con Canvasia.co, estamos llevando capacidades de IA de nivel empresarial a negocios de todos los tamaños. Nuestra misión es democratizar el acceso a soluciones de automatización inteligente que generen valor empresarial real.",
      author: 'Isabel Cristina Manrique',
      role: 'Directora de Canvasia.co'
    },
    industries: {
      title: 'Soluciones Específicas por Industria',
      text: 'La empresa se centrará inicialmente en proporcionar soluciones especializadas para industrias clave, incluyendo salud, retail, finanzas y servicios profesionales, con planes de expandirse a sectores adicionales según la demanda del mercado.'
    },
    contact: {
      title: 'Información de Contacto',
      name: 'Isabel Cristina Manrique',
      email: 'cristina@lienzoblanco.co',
      phone: '(+57) 310 227 10 63',
      website: 'www.canvasia.co'
    }
  }
};

export default function About() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="prose prose-purple dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {t.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 my-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{t.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Lienzo Blanco</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Global</span>
            </div>
          </div>

          <p className="lead text-xl text-gray-600 dark:text-gray-400">
            {t.lead}
          </p>

          <p>{t.leadership}</p>

          <h2>{t.services.title}</h2>
          <ul>
            {t.services.list.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>

          <blockquote className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border-l-4 border-purple-600 my-8">
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              "{t.quote.text}"
            </p>
            <footer className="mt-2">
              <strong>{t.quote.author}</strong>
              <br />
              <span className="text-gray-600 dark:text-gray-400">{t.quote.role}</span>
            </footer>
          </blockquote>

          <h2>{t.industries.title}</h2>
          <p>{t.industries.text}</p>

          <h2>{t.contact.title}</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <p><strong>{t.contact.name}</strong></p>
            <p>
              <a href={`mailto:${t.contact.email}`} className="text-purple-600 hover:text-purple-500">
                {t.contact.email}
              </a>
            </p>
            <p>{t.contact.phone}</p>
            <p>{t.contact.website}</p>
          </div>
        </article>
      </div>
    </div>
  );
}