import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function Blog() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <article className="prose prose-purple dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">
              Lienzo Blanco Launches Canvasia.co: A New Era in AI-Powered Business Automation
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">October 29, 2024</p>
            
            <p className="lead">
              Lienzo Blanco, a leading digital innovation company, today announced the launch of Canvasia.co, 
              its new artificial intelligence division focused on business process automation and digital transformation.
            </p>

            <p>
              Under the leadership of Isabel Cristina Manrique, Canvasia.co will leverage cutting-edge AI technologies 
              to help businesses streamline operations, reduce costs, and improve customer experiences through intelligent automation solutions.
            </p>

            <h2>Transformative Solutions for Modern Businesses</h2>
            <p>
              Canvasia.co's suite of services includes:
            </p>
            <ul>
              <li>AI-Powered Process Automation</li>
              <li>Intelligent Document Processing</li>
              <li>Customer Service Automation</li>
              <li>Predictive Analytics</li>
              <li>Custom AI Solutions</li>
            </ul>

            <blockquote>
              "With Canvasia.co, we're bringing enterprise-level AI capabilities to businesses of all sizes. 
              Our mission is to democratize access to intelligent automation solutions that drive real business value," 
              said Isabel Cristina Manrique, Director of Canvasia.co.
            </blockquote>

            <h2>Industry-Specific Solutions</h2>
            <p>
              The company will initially focus on providing specialized solutions for key industries including 
              healthcare, retail, finance, and professional services, with plans to expand into additional sectors 
              based on market demand.
            </p>

            <h2>Contact Information</h2>
            <p>
              For more information about Canvasia.co and its services, please contact:<br />
              Isabel Cristina Manrique<br />
              Email: cristina@lienzoblanco.co<br />
              Phone: (+57) 310 227 10 63<br />
              Website: www.canvasia.co
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}