/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface FloatingGalleryProps {
  className?: string;
}

export default function FloatingGallery({ className = '' }: FloatingGalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    'https://lh3.googleusercontent.com/d/1eyuF6-2FxWinMu2LQIXvDHiotHDqKtwo'
  );

  const handleImgError = () => {
    // Fallback URL for Google Drive image
    if (imgSrc.includes('lh3.googleusercontent.com')) {
      setImgSrc('https://drive.google.com/uc?export=view&id=1eyuF6-2FxWinMu2LQIXvDHiotHDqKtwo');
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Floating Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <img
              src={imgSrc}
              onError={handleImgError}
              alt="Purificador e Refil Dfiltros"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Click to expand badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1.5 text-xs font-semibold text-slate-700 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
              <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Expandir Foto</span>
            </div>

            {/* Floating Title Tag */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-600/90 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 mr-1" />
                Galeria Dfiltros
              </div>
              <p className="text-sm sm:text-base font-semibold text-white drop-shadow-md">
                Purificadores & Refis de Alta Qualidade
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Badge 1 - Top Left */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-4 -left-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center space-x-2.5 z-10 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Produtos em Estoque</div>
            <div className="text-xs font-bold text-slate-900">Entrega Rápida em Viana</div>
          </div>
        </motion.div>

        {/* Floating Badge 2 - Bottom Right */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-4 -right-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center space-x-2.5 z-10 pointer-events-none"
        >
          <div className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
            100% Garantido
          </div>
          <div className="text-xs font-semibold text-slate-700">Água Pura & Saudável</div>
        </motion.div>

        {/* Decorative background grid dots */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 grid grid-cols-4 gap-2 opacity-20 -z-10 pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-600 rounded-full" />
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-20 bg-slate-800/80 hover:bg-slate-700 text-white p-2.5 rounded-full transition-colors shadow-lg"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[70vh] bg-slate-950 flex items-center justify-center">
                <img
                  src={imgSrc}
                  onError={handleImgError}
                  alt="Purificador e Refil Dfiltros Ampliado"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">Dfiltros - Purificadores e Refis</h3>
                  <p className="text-sm text-slate-400">Atendimento em Viana e região com produtos de altíssima qualidade.</p>
                </div>
                <a
                  href="https://wa.me/5527999012401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-colors"
                >
                  Pedir Orçamento no WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
