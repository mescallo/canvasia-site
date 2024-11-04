import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { 
  Users, MessageSquare, BarChart2, Megaphone, 
  Cog, UserCheck, Calendar, HelpCircle, 
  LineChart, Eye, PenTool, Target,
  Ticket, FileText, Building2, Briefcase,
  ShoppingCart, Stethoscope, Landmark, GraduationCap
} from 'lucide-react';

const tabs = {
  en: [
    { id: 'sales', label: 'Sales', icon: Users },
    { id: 'support', label: 'Customer Support', icon: MessageSquare },
    { id: 'data', label: 'Data Analysis', icon: LineChart },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'operations', label: 'Operations', icon: Cog }
  ],
  es: [
    { id: 'sales', label: 'Ventas', icon: Users },
    { id: 'support', label: 'Soporte al Cliente', icon: MessageSquare },
    { id: 'data', label: 'Análisis de Datos', icon: LineChart },
    { id: 'marketing', label: 'Marketing', icon: Megaphone },
    { id: 'operations', label: 'Operaciones', icon: Cog }
  ]
};

const useCases = {
  en: {
    sales: [
      {
        title: 'Lead Management',
        description: 'Automate follow-ups and communication',
        icon: UserCheck,
        industries: [
          { name: 'Retail', icon: ShoppingCart },
          { name: 'Healthcare', icon: Stethoscope },
          { name: 'Finance', icon: Landmark }
        ]
      },
      {
        title: 'Meeting Scheduling',
        description: 'Facilitate meeting scheduling',
        icon: Calendar,
        industries: [
          { name: 'Professional Services', icon: Briefcase },
          { name: 'Education', icon: GraduationCap },
          { name: 'Real Estate', icon: Building2 }
        ]
      }
    ],
    support: [
      {
        title: 'Query Resolution',
        description: 'Quick responses to common questions',
        icon: HelpCircle,
        industries: [
          { name: 'E-commerce', icon: ShoppingCart },
          { name: 'Healthcare', icon: Stethoscope },
          { name: 'Finance', icon: Landmark }
        ]
      },
      {
        title: 'Request Analysis',
        description: 'Classification and prioritization of inquiries',
        icon: BarChart2,
        industries: [
          { name: 'Professional Services', icon: Briefcase },
          { name: 'Education', icon: GraduationCap },
          { name: 'Technology', icon: Cog }
        ]
      }
    ],
    data: [
      {
        title: 'Pattern Detection',
        description: 'Detect patterns and trends in data',
        icon: LineChart,
        industries: [
          { name: 'Finance', icon: Landmark },
          { name: 'Healthcare', icon: Stethoscope },
          { name: 'Retail', icon: ShoppingCart }
        ]
      },
      {
        title: 'Competition Monitoring',
        description: 'Keep companies up to date with market trends',
        icon: Eye,
        industries: [
          { name: 'E-commerce', icon: ShoppingCart },
          { name: 'Professional Services', icon: Briefcase },
          { name: 'Technology', icon: Cog }
        ]
      }
    ],
    marketing: [
      {
        title: 'Content Creation',
        description: 'Automatic post generation and optimization',
        icon: PenTool,
        industries: [
          { name: 'Retail', icon: ShoppingCart },
          { name: 'Education', icon: GraduationCap },
          { name: 'Professional Services', icon: Briefcase }
        ]
      },
      {
        title: 'Campaign Optimization',
        description: 'Improve campaigns in real-time',
        icon: Target,
        industries: [
          { name: 'E-commerce', icon: ShoppingCart },
          { name: 'Finance', icon: Landmark },
          { name: 'Healthcare', icon: Stethoscope }
        ]
      }
    ],
    operations: [
      {
        title: 'Ticket Automation',
        description: 'Efficiently resolve requests',
        icon: Ticket,
        industries: [
          { name: 'Technology', icon: Cog },
          { name: 'Healthcare', icon: Stethoscope },
          { name: 'Professional Services', icon: Briefcase }
        ]
      },
      {
        title: 'Automated Reports',
        description: 'Generate performance reports automatically',
        icon: FileText,
        industries: [
          { name: 'Finance', icon: Landmark },
          { name: 'Education', icon: GraduationCap },
          { name: 'Retail', icon: ShoppingCart }
        ]
      }
    ]
  },
  es: {
    sales: [
      {
        title: 'Gestión de Leads',
        description: 'Automatiza seguimientos y comunicación',
        icon: UserCheck,
        industries: [
          { name: 'Retail', icon: ShoppingCart },
          { name: 'Salud', icon: Stethoscope },
          { name: 'Finanzas', icon: Landmark }
        ]
      },
      {
        title: 'Programación de Reuniones',
        description: 'Facilita la programación de reuniones',
        icon: Calendar,
        industries: [
          { name: 'Servicios Profesionales', icon: Briefcase },
          { name: 'Educación', icon: GraduationCap },
          { name: 'Bienes Raíces', icon: Building2 }
        ]
      }
    ],
    support: [
      {
        title: 'Resolución de Consultas',
        description: 'Respuestas rápidas a preguntas frecuentes',
        icon: HelpCircle,
        industries: [
          { name: 'E-commerce', icon: ShoppingCart },
          { name: 'Salud', icon: Stethoscope },
          { name: 'Finanzas', icon: Landmark }
        ]
      },
      {
        title: 'Análisis de Solicitudes',
        description: 'Clasificación y priorización de consultas',
        icon: BarChart2,
        industries: [
          { name: 'Servicios Profesionales', icon: Briefcase },
          { name: 'Educación', icon: GraduationCap },
          { name: 'Tecnología', icon: Cog }
        ]
      }
    ],
    data: [
      {
        title: 'Detección de Patrones',
        description: 'Detecta patrones y tendencias en datos',
        icon: LineChart,
        industries: [
          { name: 'Finanzas', icon: Landmark },
          { name: 'Salud', icon: Stethoscope },
          { name: 'Retail', icon: ShoppingCart }
        ]
      },
      {
        title: 'Monitoreo de Competencia',
        description: 'Mantén las empresas actualizadas con tendencias del mercado',
        icon: Eye,
        industries: [
          { name: 'E-commerce', icon: ShoppingCart },
          { name: 'Servicios Profesionales', icon: Briefcase },
          { name: 'Tecnología', icon: Cog }
        ]
      }
    ],
    marketing: [
      {
        title: 'Creación de Contenido',
        description: 'Generación y optimización automática de contenido',
        icon: PenTool,
        industries: [
          { name: 'Retail', icon: ShoppingCart },
          { name: 'Educación', icon: GraduationCap },
          { name: 'Servicios Profesionales', icon: Briefcase }
        ]
      },
      {
        title: 'Optimización de Campañas',
        description: 'Mejora campañas en tiempo real',
        icon: Target,
        industries: [
          { name: 'E-commerce', icon: ShoppingCart },
          { name: 'Finanzas', icon: Landmark },
          { name: 'Salud', icon: Stethoscope }
        ]
      }
    ],
    operations: [
      {
        title: 'Automatización de Tickets',
        description: 'Resuelve solicitudes eficientemente',
        icon: Ticket,
        industries: [
          { name: 'Tecnología', icon: Cog },
          { name: 'Salud', icon: Stethoscope },
          { name: 'Servicios Profesionales', icon: Briefcase }
        ]
      },
      {
        title: 'Informes Automatizados',
        description: 'Genera informes de rendimiento automáticamente',
        icon: FileText,
        industries: [
          { name: 'Finanzas', icon: Landmark },
          { name: 'Educación', icon: GraduationCap },
          { name: 'Retail', icon: ShoppingCart }
        ]
      }
    ]
  }
};

export default function ServiceSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('sales');

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'Canvasia Use Cases' : 'Casos de Uso de Canvasia'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Discover how our intelligent automation solutions can transform your business processes'
              : 'Descubre cómo nuestras soluciones de automatización inteligente pueden transformar tus procesos de negocio'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs[language].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases[language][activeTab].map((useCase, index) => {
            const UseCaseIcon = useCase.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <UseCaseIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                    {language === 'en' ? 'Popular in:' : 'Popular en:'}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {useCase.industries.map((industry, idx) => {
                      const IndustryIcon = industry.icon;
                      return (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700"
                        >
                          <IndustryIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {industry.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}