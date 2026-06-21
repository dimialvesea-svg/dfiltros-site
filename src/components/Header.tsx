/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, Phone, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Localização', href: '#contato' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <span className="text-2xl font-display font-bold text-blue-600 tracking-tight">
              {BUSINESS_INFO.name}
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+5527999012401"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar Agora
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5 mr-3" />
              Falar com um Vendedor
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
