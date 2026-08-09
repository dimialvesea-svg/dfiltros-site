/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    location: "Viana, ES",
    text: "Atendimento excelente! Meus purificadores ficaram perfeitos e a água agora tem um gosto muito melhor. Recomendo a todos em Viana.",
  },
  {
    name: "João Oliveira",
    location: "Cariacica, ES",
    text: "Profissionais muito ágeis e educados. A instalação foi rápida e o produto superou as expectativas. Parabéns pelo serviço!",
  },
  {
    name: "Ana Souza",
    location: "Viana, ES",
    text: "A qualidade da água na minha casa mudou completamente depois que instalei o purificador que comprei com eles. Ótimo investimento.",
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16 text-center">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-blue-600">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
