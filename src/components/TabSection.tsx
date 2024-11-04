import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';
import { Bot, Building2, HeartHandshake, BarChart3, Users } from 'lucide-react';

const tabs = {
  en: [
    { id: 'sales', label: 'Sales', icon: HeartHandshake },
    { id: 'support', label: 'Support', icon: Users },
    { id: 'marketing', label: 'Marketing', icon: BarChart3 },
    { id: 'operations', label: 'Operations', icon: Building2 },
  ],
  es: [
    { id: 'sales', label: 'Ventas', icon: HeartHandshake },
    { id: 'support', label: 'Soporte', icon: Users },
    { id: 'marketing', label: 'Marketing', icon: BarChart3 },
    { id: 'operations', label: 'Operaciones', icon: Building2 },
  ],
};

const industries = {
  en: {
    sales: [
      {
        title: 'Retail',
        description: 'Streamline your retail operations with intelligent automation.',
        features: ['Inventory Management', 'POS Integration', 'Customer Analytics'],
      },
      {
        title: 'E-commerce',
        description: 'Automate your online store processes for better efficiency.',
        features: ['Order Processing', 'Shipping Automation', 'Customer Support'],
      },
      {
        title: 'Real Estate',
        description: 'Transform property management with smart automation.',
        features: ['Lead Management', 'Document Processing', 'Client Communication'],
      },
    ],
    support: [
      {
        title: 'IT Services',
        description: 'Enhance IT support with automated solutions.',
        features: ['Ticket Management', 'Resource Allocation', 'SLA Monitoring'],
      },
      {
        title: 'Healthcare',
        description: 'Improve patient care with automated support systems.',
        features: ['Appointment Scheduling', 'Patient Records', 'Follow-up Care'],
      },
      {
        title: 'Education',
        description: 'Streamline educational support processes.',
        features: ['Student Services', 'Resource Management', 'Administrative Tasks'],
      },
    ],
    marketing: [
      {
        title: 'Digital Agencies',
        description: 'Optimize campaign management with automation.',
        features: ['Campaign Tracking', 'Content Distribution', 'Analytics'],
      },
      {
        title: 'Media',
        description: 'Automate content delivery and engagement.',
        features: ['Content Scheduling', 'Audience Analysis', 'Performance Tracking'],
      },
      {
        title: 'Events',
        description: 'Streamline event marketing and management.',
        features: ['Registration', 'Attendee Communication', 'Follow-up'],
      },
    ],
    operations: [
      {
        title: 'Manufacturing',
        description: 'Optimize production processes with automation.',
        features: ['Quality Control', 'Inventory Management', 'Production Planning'],
      },
      {
        title: 'Logistics',
        description: 'Enhance supply chain efficiency.',
        features: ['Route Optimization', 'Warehouse Management', 'Delivery Tracking'],
      },
      {
        title: 'Hospitality',
        description: 'Improve guest services through automation.',
        features: ['Booking Management', 'Guest Services', 'Facility Maintenance'],
      },
    ],
  },
  es: {
    sales: [
      {
        title: 'Retail',
        description: 'Optimiza tus operaciones minoristas con automatización inteligente.',
        features: ['Gestión de Inventario', 'Integración POS', 'Análisis de Clientes'],
      },
      {
        title: 'E-commerce',
        description: 'Automatiza los procesos de tu tienda online para mayor eficiencia.',
        features: ['Procesamiento de Pedidos', 'Automatización de Envíos', 'Soporte al Cliente'],
      },
      {
        title: 'Bienes Raíces',
        description: 'Transforma la gestión inmobiliaria con automatización inteligente.',
        features: ['Gestión de Leads', 'Procesamiento de Documentos', 'Comunicación con Clientes'],
      },
    ],
    support: [
      {
        title: 'Servicios IT',
        description: 'Mejora el soporte IT con soluciones automatizadas.',
        features: ['Gestión de Tickets', 'Asignación de Recursos', 'Monitoreo de SLA'],
      },
      {
        title: 'Salud',
        description: 'Mejora la atención al paciente con sistemas de soporte automatizados.',
        features: ['Programación de Citas', 'Registros de Pacientes', 'Seguimiento'],
      },
      {
        title: 'Educación',
        description: 'Optimiza los procesos de soporte educativo.',
        features: ['Servicios Estudiantiles', 'Gestión de Recursos', 'Tareas Administrativas'],
      },
    ],
    marketing: [
      {
        title: 'Agencias Digitales',
        description: 'Optimiza la gestión de campañas con automatización.',
        features: ['Seguimiento de Campañas', 'Distribución de Contenido', 'Analíticas'],
      },
      {
        title: 'Medios',
        description: 'Automatiza la entrega de contenido y el engagement.',
        features: ['Programación de Contenido', 'Análisis de Audiencia', 'Seguimiento de Rendimiento'],
      },
      {
        title: 'Eventos',
        description: 'Optimiza el marketing y gestión de eventos.',
        features: ['Registro', 'Comunicación con Asistentes', 'Seguimiento'],
      },
    ],
    operations: [
      {
        title: 'Manufactura',
        description: 'Optimiza procesos de producción con automatización.',
        features: ['Control de Calidad', 'Gestión de Inventario', 'Planificación de Producción'],
      },
      {
        title: 'Logística',
        description: 'Mejora la eficiencia de la cadena de suministro.',
        features: ['Optimización de Rutas', 'Gestión de Almacén', 'Seguimiento de Entregas'],
      },
      {
        title: 'Hospitalidad',
        description: 'Mejora los servicios al huésped mediante automatización.',
        features: ['Gestión de Reservas', 'Servicios al Huésped', 'Mantenimiento de Instalaciones'],
      },
    ],
  },
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('sales');
  const { language } = useContext(LanguageContext);
  const currentIndustries = industries[language][activeTab];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'en' ? 'Industry Solutions' : 'Soluciones por Industria'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {language === 'en' 
              ? 'Discover how automation can transform your industry'
              : 'Descubre cómo la automatización puede transformar tu industria'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs[language].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentIndustries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <Bot className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {industry.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {industry.description}
              </p>
              <ul className="space-y-2">
                {industry.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}