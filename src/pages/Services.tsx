import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { 
  Users, MessageSquare, BarChart2, Megaphone, 
  Cog, UserCheck, Calendar, HelpCircle, 
  LineChart, Eye, PenTool, Target,
  Ticket, FileText
} from 'lucide-react';

const services = {
  en: [
    {
      title: 'Sales',
      icon: Users,
      useCases: [
        {
          title: 'Lead Management',
          description: 'Automate follow-ups and communication',
          icon: UserCheck
        },
        {
          title: 'Meeting Scheduling',
          description: 'Facilitate meeting scheduling',
          icon: Calendar
        }
      ]
    },
    {
      title: 'Customer Support',
      icon: MessageSquare,
      useCases: [
        {
          title: 'Query Resolution',
          description: 'Quick responses to common questions',
          icon: HelpCircle
        },
        {
          title: 'Request Analysis',
          description: 'Classification and prioritization of inquiries',
          icon: BarChart2
        }
      ]
    },
    {
      title: 'Data Analysis & Monitoring',
      icon: LineChart,
      useCases: [
        {
          title: 'Data Analysis',
          description: 'Detect patterns and trends',
          icon: BarChart2
        },
        {
          title: 'Competition Monitoring',
          description: 'Keep companies up to date',
          icon: Eye
        }
      ]
    },
    {
      title: 'Marketing',
      icon: Megaphone,
      useCases: [
        {
          title: 'Content Creation',
          description: 'Automatic post generation',
          icon: PenTool
        },
        {
          title: 'Campaign Optimization',
          description: 'Improve campaigns in real-time',
          icon: Target
        }
      ]
    },
    {
      title: 'Operations',
      icon: Cog,
      useCases: [
        {
          title: 'Ticket Automation',
          description: 'Efficiently resolve requests',
          icon: Ticket
        },
        {
          title: 'Automated Reports',
          description: 'Generate performance reports automatically',
          icon: FileText
        }
      ]
    }
  ],
  es: [
    {
      title: 'Ventas',
      icon: Users,
      useCases: [
        {
          title: 'Gestión de Leads',
          description: 'Automatiza el seguimiento y la comunicación',
          icon: UserCheck
        },
        {
          title: 'Reservas de Reuniones',
          description: 'Facilita la programación de reuniones',
          icon: Calendar
        }
      ]
    },
    {
      title: 'Soporte al Cliente',
      icon: MessageSquare,
      useCases: [
        {
          title: 'Resolución de Consultas',
          description: 'Respuestas rápidas a preguntas frecuentes',
          icon: HelpCircle
        },
        {
          title: 'Análisis de Solicitudes',
          description: 'Clasificación y priorización de consultas',
          icon: BarChart2
        }
      ]
    },
    {
      title: 'Análisis de Datos y Monitoreo',
      icon: LineChart,
      useCases: [
        {
          title: 'Análisis de Datos',
          description: 'Detecta patrones y tendencias',
          icon: BarChart2
        },
        {
          title: 'Monitoreo de Competencia',
          description: 'Mantiene a las empresas actualizadas',
          icon: Eye
        }
      ]
    },
    {
      title: 'Marketing',
      icon: Megaphone,
      useCases: [
        {
          title: 'Creación de Contenido',
          description: 'Generación automática de publicaciones',
          icon: PenTool
        },
        {
          title: 'Optimización de Campañas',
          description: 'Mejora las campañas en tiempo real',
          icon: Target
        }
      ]
    },
    {
      title: 'Operaciones',
      icon: Cog,
      useCases: [
        {
          title: 'Automatización de Tickets',
          description: 'Resuelve solicitudes de manera eficiente',
          icon: Ticket
        },
        {
          title: 'Informes Automatizados',
          description: 'Genera informes de rendimiento automáticamente',
          icon: FileText
        }
      ]
    }
  ]
};

export default function Services() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Canvasia Use Cases' : 'Casos de Uso de Canvasia'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Discover how our intelligent automation solutions can transform your business processes'
                : 'Descubre cómo nuestras soluciones de automatización inteligente pueden transformar tus procesos de negocio'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {services[language].map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600 text-white">
                      <ServiceIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.useCases.map((useCase, ucIndex) => {
                      const UseCaseIcon = useCase.icon;
                      return (
                        <div 
                          key={ucIndex}
                          className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                <UseCaseIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {useCase.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                              {useCase.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}