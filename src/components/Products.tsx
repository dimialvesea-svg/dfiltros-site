/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Droplet, Filter, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

const products = [
  {
    icon: <Filter className="w-8 h-8" />,
    title: "Purificadores Toplife",
    description: "Tecnologia avançada em filtragem com design sofisticado para sua cozinha ou escritório.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Purificadores Latina",
    description: "Excelente custo-benefício e durabilidade. Modelos compactos e eficientes para o dia a dia.",
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Purificadores IBBL",
    description: "Liderança em refrigeração. Água gelada com rapidez e sistemas de filtragem de alta performance.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Outras Marcas",
    description: "Trabalhamos com diversas outras marcas para garantir a melhor solução para sua necessidade.",
  },
];

const benefits = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    title: "Produtos Originais",
    desc: "Trabalhamos apenas com purificadores e refis originais de fábrica.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    title: "Entrega Rápida",
    desc: "Entregamos seu novo purificador em Viana e Cariacica com agilidade.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    title: "Consultoria de Compra",
    desc: "Ajudamos você a escolher o modelo ideal para sua família ou empresa.",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-3">Nossos Produtos</h2>
          <p className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            As Melhores Marcas do Mercado
          </p>
          <p className="text-lg text-slate-600">
            Trabalhamos com marcas renomadas para garantir que você tenha sempre água pura e cristalina à disposição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Diferenciais Dfiltros</h2>
                <div className="space-y-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div className="ml-5">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Droplet className="w-40 h-40" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-6">Por que comprar conosco?</h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Vendedor especializado nas melhores marcas.",
                      "Produtos com nota fiscal e garantia.",
                      "Atendimento personalizado via WhatsApp.",
                      "Facilidade no pagamento."
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-3 text-blue-300" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                    className="inline-flex w-full items-center justify-center bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                  >
                    Falar com um Vendedor
                  </a>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
