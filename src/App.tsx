/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoNote from './components/InfoNote';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Carousel from './components/Carousel';
import TeamGallery from './components/TeamGallery';

export default function App() {
  const galleryImages = [
    { url: 'https://lh3.googleusercontent.com/d/131vdatF6OwjPRYLRMD4hmpLyPN43Q-it' },
    { url: 'https://lh3.googleusercontent.com/d/10dqX_UiRJrK67miqnAmchKnm-37PjuTK' },
    { url: 'https://lh3.googleusercontent.com/d/1aEGFnczq3LSBBvMvLghEdfiPt0jLV7-X', caption: 'Toplife' },
    { url: 'https://lh3.googleusercontent.com/d/1ClDdQWkVXVSI_ci8j0qiBtdNOcsf2vxe' },
    { url: 'https://lh3.googleusercontent.com/d/1sUlHS-FACTS89HQ-zs4MoRN62z24lIRd', caption: 'Due IBBL' },
  ];

  const teamImages = [
    { url: 'https://lh3.googleusercontent.com/d/1ATmbEwLSwtzUqtgcjnwwcTYc-ulhY9r0', name: 'Nossa loja' },
    { url: 'https://lh3.googleusercontent.com/d/1q8o0ww94Z45B6w2ttUcd4el0epo9N-fG', name: 'Edmilson Alves, fale conosco.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-700">
      <Header />
      <main>
        <Hero productImages={galleryImages} />
        <Products />
        <InfoNote />
        <Carousel images={galleryImages} />
        <TeamGallery images={teamImages} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      <a
        href="https://wa.me/5527999012401"
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

