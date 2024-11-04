import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 dark:text-gray-400">
              By accessing or using the Canvasia WhatsApp Business application, you agree to be bound 
              by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">2. Use License</h2>
            <p className="text-slate-600 dark:text-gray-400">
              Permission is granted to temporarily use the application for personal or business use, 
              subject to the following restrictions:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-gray-400 space-y-2 mt-4">
              <li>You must not modify or copy the application materials</li>
              <li>You must not use the materials for any commercial purpose</li>
              <li>You must not attempt to decompile or reverse engineer any software</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. Disclaimer</h2>
            <p className="text-slate-600 dark:text-gray-400">
              The materials on Canvasia's application are provided on an 'as is' basis. Canvasia makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including, without limitation, implied warranties or conditions of merchantability, fitness 
              for a particular purpose, or non-infringement of intellectual property or other violation 
              of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">4. Limitations</h2>
            <p className="text-slate-600 dark:text-gray-400">
              In no event shall Canvasia or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption) arising 
              out of the use or inability to use the materials on Canvasia's application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">5. Contact Information</h2>
            <p className="text-slate-600 dark:text-gray-400">
              If you have any questions about these Terms, please contact us at:{' '}
              <a href="mailto:cristina@lienzoblanco.co" className="text-purple-600 hover:text-purple-700">
                cristina@lienzoblanco.co
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}