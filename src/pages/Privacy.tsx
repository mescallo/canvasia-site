import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-slate-600 dark:text-gray-400">
              At Canvasia, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our WhatsApp Business application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 text-slate-600 dark:text-gray-400 space-y-2">
              <li>WhatsApp Business Profile Information</li>
              <li>Message Content and Media</li>
              <li>Usage Data and Analytics</li>
              <li>Device Information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-slate-600 dark:text-gray-400 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Data Security</h2>
            <p className="text-slate-600 dark:text-gray-400">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-slate-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
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