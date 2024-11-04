import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = {
  en: {
    title: 'Contact Us',
    subtitle: 'Get in touch with our team',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Message sent successfully!',
      error: 'There was an error sending your message. Please try again.',
    },
  },
  es: {
    title: 'Contáctanos',
    subtitle: 'Ponte en contacto con nuestro equipo',
    form: {
      name: 'Tu Nombre',
      email: 'Tu Email',
      message: 'Tu Mensaje',
      submit: 'Enviar Mensaje',
      success: '¡Mensaje enviado con éxito!',
      error: 'Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.',
    },
  },
};

interface FormStatus {
  type: 'success' | 'error' | '';
  message: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const content = contactInfo[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
      language
    };
    
    try {
      // Replace with your n8n webhook URL
      const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus({ 
          type: 'success', 
          message: content.form.success 
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setFormStatus({ 
        type: 'error', 
        message: content.form.error 
      });
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {content.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {content.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {content.form.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white disabled:opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>{isSubmitting ? 'Sending...' : content.form.submit}</span>
              </button>
              {formStatus.type && (
                <div className={`text-center ${
                  formStatus.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">cristina@lienzoblanco.co</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {language === 'en' ? 'Phone' : 'Teléfono'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">(+57) 310 227 10 63</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {language === 'en' ? 'Location' : 'Ubicación'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">www.lienzoblanco.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}