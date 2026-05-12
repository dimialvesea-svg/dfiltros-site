/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, ExternalLink, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-3">Onde Estamos</h2>
            <p className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Visite nossa Loja em Marcílio de Noronha
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Endereço</p>
                  <p className="text-lg text-slate-800 font-medium">{BUSINESS_INFO.address}</p>
                  <p className="text-slate-500">{BUSINESS_INFO.zipCode}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                  <p className="text-lg text-slate-800 font-medium">{BUSINESS_INFO.phone}</p>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                    className="text-blue-600 font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir conversa no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Horário de Funcionamento</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    <p className="text-slate-700 font-medium">Segunda a Sexta:</p>
                    <p className="text-slate-600">{BUSINESS_INFO.hours.segunda}</p>
                    <p className="text-slate-700 font-medium">Sábado:</p>
                    <p className="text-slate-600">{BUSINESS_INFO.hours.sabado}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900 leading-none">Precisa de ajuda agora?</p>
                <p className="text-sm text-slate-500 mt-1">Nossa equipe está pronta para atender.</p>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-[500px] lg:h-auto overflow-hidden rounded-3xl border border-slate-200 shadow-xl"
          >
            {/* Visual representation of a map */}
            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-16 h-16 text-blue-600 mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Google Maps</h3>
              <p className="text-slate-600 mb-6 max-w-xs">
                Visualize nossa localização exata e trace sua rota para nossa loja.
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-md hover:bg-slate-50 transition-colors"
              >
                Abrir no Google Maps
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
