/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Droplets, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 mr-1 fill-blue-600" />
              5.0 Avaliações no Google
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
              Você confia na água que sua <span className="text-blue-600">Família</span> esta bebendo?
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Venda de purificadores de água das melhores marcas: Toplife, Latina, IBBL e Soft. Garanta água cristalina e saúde para quem você ama.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                Ver Produtos
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8">
               <div className="flex items-center text-sm font-medium text-slate-500">
                  <ShieldCheck className="w-5 h-5 mr-2 text-blue-500" />
                  Garantia de Fábrica
               </div>
               <div className="flex items-center text-sm font-medium text-slate-500">
                  <Droplets className="w-5 h-5 mr-2 text-blue-500" />
                  Peças Originais
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-slate-200/50 overflow-hidden shadow-2xl relative">
              {/* Using a placeholder visual representation since image generation failed */}
              <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-white flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-48 h-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col items-center"
                >
                  <div className="w-full h-2/3 bg-slate-50 rounded-lg mb-4 flex items-center justify-center">
                    <Droplets className="w-16 h-16 text-blue-400 opacity-20" />
                  </div>
                  <div className="w-3/4 h-3 bg-slate-100 rounded-full mb-2" />
                  <div className="w-1/2 h-3 bg-slate-100 rounded-full" />
                </motion.div>
                
                {/* Floating tags */}
                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur px-4 py-3 rounded-2xl shadow-lg border border-slate-100 animate-bounce">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Qualidade</div>
                  <div className="text-blue-600 font-bold">IBBL & Soft</div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-600 rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
