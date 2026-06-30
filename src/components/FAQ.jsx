import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    category: "Nos Formulations",
    items: [
      {
        q: "Vos produits conviennent-ils aux peaux sensibles ?",
        a: "Oui, tous nos produits sont formulés sous contrôle dermatologique et testés pour garantir une tolérance optimale, même sur les peaux les plus sensibles."
      },
      {
        q: "Testez-vous sur les animaux ?",
        a: "Non, conformément à la réglementation et à notre éthique, aucun de nos produits ou ingrédients n'est testé sur les animaux. Nous sommes fiers d'être 100% cruelty-free."
      },
      {
        q: "Vos soins contiennent-ils des parabènes ou des sulfates ?",
        a: "Non, nos formulations sont développées avec une charte de clean beauty très stricte. Nous excluons les parabènes, les sulfates (SLS/SLES), les silicones et les phtalates de toutes nos compositions."
      }
    ]
  },
  {
    category: "Commandes & Livraison",
    items: [
      {
        q: "Quels sont les délais de livraison ?",
        a: "Nous expédions nos commandes sous 24H. La livraison express prend généralement 48H à 72H selon votre wilaya de résidence en Algérie."
      },
      {
        q: "Livrez-vous dans toutes les wilayas ?",
        a: "Oui, nous assurons la livraison dans les 58 wilayas d'Algérie avec nos partenaires de transport de confiance."
      },
      {
        q: "Comment puis-je suivre ma commande ?",
        a: "Dès que votre commande est expédiée, vous recevez un SMS ou un email contenant votre numéro de suivi et le lien vers la plateforme de notre transporteur."
      }
    ]
  },
  {
    category: "Retours & Remboursements",
    items: [
      {
        q: "Puis-je retourner ou échanger un produit ?",
        a: "Oui, si le produit ne vous convient pas ou arrive endommagé, vous disposez de 14 jours pour nous le retourner dans son emballage d'origine non ouvert."
      },
      {
        q: "Que faire si je reçois le mauvais article ?",
        a: "Veuillez contacter notre service client immédiatement avec votre numéro de commande. Nous procéderons à un échange à nos frais dans les plus brefs délais."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-white min-h-screen py-24 sm:py-32 animate-[fadeDown_0.5s_ease]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">
            AIDE & SUPPORT
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-tight mb-6">
            Foire aux questions
          </h1>
          <p className="text-gray-500 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur nos formulations, la livraison, et plus encore. 
            Si vous ne trouvez pas votre réponse, n'hésitez pas à nous contacter.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {faqData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer border ${
                activeCategory === idx 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Questions Accordion */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 border border-gray-100 min-h-[400px]">
          <h2 className="text-2xl font-extrabold text-black uppercase tracking-tight mb-8 pb-4 border-b border-gray-200">
            {faqData[activeCategory].category}
          </h2>

          <div className="space-y-4">
            {faqData[activeCategory].items.map((item, idx) => {
              const isOpen = openQuestions[`${activeCategory}-${idx}`];
              return (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden">
                  <button
                    onClick={() => toggleQuestion(activeCategory, idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className={`font-bold text-sm sm:text-base pr-8 transition-colors ${isOpen ? 'text-[#296fc2]' : 'text-gray-900'}`}>
                      {item.q}
                    </span>
                    <span className="shrink-0 ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-gray-500">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed font-medium">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
