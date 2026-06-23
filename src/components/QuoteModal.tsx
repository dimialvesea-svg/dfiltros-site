/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    produto: '',
    mensagem: ''
  });

 const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();

try {
await fetch(
"https://script.google.com/macros/s/AKfycbzmgVNS-gz3ipQFzER2azeZXn4vbwfegJBXBOsXAF5dKDLkvAQi5nHx0EQw4-S3Hki7Ig/exec",
{
method: "POST",
body: JSON.stringify({
nome: formData.nome,
telefone: formData.telefone,
email: formData.email,
produto: formData.produto,
mensagem: formData.mensagem
})
}
);

```
if (window.dataLayer) {
  window.dataLayer.push({
    event: "formulario_enviado",
    produto: formData.produto
  });
}

alert("Orçamento solicitado com sucesso! Nossa equipe entrará em contato.");

setFormData({
  nome: "",
  telefone: "",
  email: "",
  produto: "",
  mensagem: ""
});

onClose();
```

} catch (error) {
console.error(error);
alert("Erro ao enviar solicitação. Tente novamente.");
}
};


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display font-bold text-slate-900">Orçamento de Purificadores de água</h2>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                  <input required name="nome" type="text" onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                  <input required name="telefone" type="tel" onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Produto Desejado</label>
                  <select required name="produto" onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Selecione...</option>
                    <option value="Toplife">Purificador Toplife</option>
                    <option value="Latina">Purificador Latina</option>
                    <option value="IBBL">Purificador IBBL</option>
                    <option value="Outros">Outras Marcas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                  <textarea name="mensagem" onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows={4} />
                </div>
                
                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Enviar Solicitação
                </button>
              </form>
              
              <p className="text-center text-sm text-slate-500 mt-6">
                Ou prefere falar diretamente? <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="text-blue-600 font-bold hover:underline" target="_blank" rel="noopener noreferrer">Fale no WhatsApp</a>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
