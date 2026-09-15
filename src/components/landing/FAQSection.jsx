import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Preciso ter o Arduino para usar o ebook?",
    answer: "Não! O ebook ensina a usar simuladores online como o Tinkercad, então você pode começar a aprender e praticar mesmo sem ter a placa física. Quando decidir comprar, você já vai saber exatamente o que está fazendo."
  },
  {
    question: "O ebook é físico ou digital?",
    answer: "É um Ebook em PDF, entregue imediatamente no seu e-mail após a confirmação do pagamento. Você pode ler no computador, tablet ou celular, e imprimir se preferir."
  },
  {
    question: "Serve para crianças?",
    answer: "Sim! Com supervisão de um adulto, é uma ótima atividade de pai/mãe e filho(a). O conteúdo foi originalmente criado para ensinar uma criança de 6 anos, então a linguagem é bem acessível."
  },
  {
    question: "Recebo só um ebook ou mais de um?",
    answer: "Você recebe os 4 e-books do pacote: o Eletrônica Básica com Arduino (o principal) e mais 3 bônus — 19 Componentes Essenciais, Guia Completo do 555 e Do L298N ao IBT-2 (drivers de motor DC). Todos ficam disponíveis na sua área de membros assim que a compra é aprovada, sem custo extra."
  },
  {
    question: "Preciso saber programar?",
    answer: "Não! O ebook começa do zero absoluto. Você vai aprender os fundamentos de programação junto com a eletrônica, de forma prática e sem complicação."
  },
  {
    question: "Qual a diferença desse ebook para tutoriais gratuitos?",
    answer: "A principal diferença é a organização e didática. Tutoriais gratuitos são fragmentados e muitas vezes pulam conceitos importantes de segurança. Aqui você tem um caminho estruturado, do básico ao avançado, com foco em não queimar componentes."
  },
  {
    question: "E se eu não gostar do material?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso e devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "Posso imprimir meu ebook para usar fisicamente?",
    answer: "Sim! O ebook foi desenvolvido pensando também em quem prefere estudar com material impresso. Você pode imprimir o PDF e criar sua própria versão física do livro."
  },
  {
    question: "Como recebo o material?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para download do ebook e do pack de códigos bônus. PIX e cartão são aprovados na hora!"
  },
  {
    question: "Posso tirar dúvidas com o autor?",
    answer: "Sim! Você terá acesso a um canal de suporte para tirar suas dúvidas sobre o conteúdo do ebook. Estou aqui para ajudar você a aprender!"
  }
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-slate-700/50 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-start justify-between gap-4 text-left 
                   hover:text-cyan-400 transition-colors group"
      >
        <span className="text-white font-medium group-hover:text-cyan-400 transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-cyan-400' : 'text-slate-500'}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-400 leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 
                          border border-slate-700 text-slate-400 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ainda tem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              dúvidas?
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Confira as perguntas mais comuns sobre o ebook
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 
                     p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            Ainda tem dúvidas? Entre em contato:{' '}
            <a href="mailto:AndersonAmicuchi@gmail.com" 
               className="text-cyan-400 hover:underline">
              AndersonAmicuchi@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


