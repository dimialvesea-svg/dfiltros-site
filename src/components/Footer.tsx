/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-blue-600 mb-6">{BUSINESS_INFO.name}</h3>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Dfiltros é referência em purificadores e filtros de água em Viana e Cariacica, oferecendo as melhores marcas e produtos de alta qualidade para sua saúde.
            </p>
            <div className="flex space-x-4">
               {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-colors">
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 mb-6">Navegação</h4>
             <ul className="space-y-4">
                {['Início', 'Produtos', 'Localização'].map((item, i) => (
                  <li key={i}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 mb-6">Região Atendida</h4>
             <ul className="space-y-4">
                {['Viana', 'Cariacica', 'Marcílio de Noronha', 'Areinha', 'Campo Grande'].map((item, i) => (
                  <li key={i} className="text-slate-500">
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:row items-center justify-between text-sm text-slate-400">
          <p>© {currentYear} {BUSINESS_INFO.fullName}. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-600">Privacidade</a>
             <a href="#" className="hover:text-slate-600">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
