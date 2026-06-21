/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import QuoteModal from './components/QuoteModal';
import RefilModal from './components/RefilModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isRefilModalOpen, setIsRefilModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <main>
        <Hero 
          onOpenQuote={() => setIsQuoteModalOpen(true)} 
          onOpenRefilQuote={() => setIsRefilModalOpen(true)} 
        />
        <Products />
        <Contact />
      </main>
      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <RefilModal 
        isOpen={isRefilModalOpen} 
        onClose={() => setIsRefilModalOpen(false)} 
      />
      <a
        href="https://wa.me/8827999012401"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl animate-pulse hover:scale-110 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
}

