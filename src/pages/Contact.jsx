import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import PageLayout from '@/components/landing/PageLayout';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpglwbo";
const CONTACT_EMAIL = "AndersonAmicuchi@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' }
      });
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Erro ao enviar formulário de contato:', err);
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contato | Arduino Prático</title>
        <meta name="description" content="Tire suas dúvidas sobre o ebook Eletrônica Básica com Arduino. Fale direto com o autor por e-mail ou pelo formulário de contato." />
        <link rel="canonical" href="https://www.arduinopratico.com.br/Contact" />
        <meta property="og:title" content="Contato | Arduino Prático" />
        <meta property="og:description" content="Tire suas dúvidas sobre o ebook Eletrônica Básica com Arduino." />
        <meta property="og:url" content="https://www.arduinopratico.com.br/Contact" />
      </Head>

    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              contato
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Tem dúvidas sobre o material, precisa de suporte ou quer trocar uma ideia?
            Preencha o formulário abaixo e respondo o mais rápido possível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-white font-bold">E-mail</p>
                <p className="text-slate-400 text-sm break-all">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold">Suporte</p>
                <p className="text-slate-400 text-sm">Dúvidas sobre o material e acesso</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
              <p className="text-slate-300">Obrigado pelo contato. Respondo o mais breve possível.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
            >
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  E-mail <span className="text-slate-500 font-normal">(opcional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Como posso ajudar?"
                />
              </div>
              {status === 'error' && (
                <p className="text-red-400 text-sm">
                  Ocorreu um erro ao enviar. Tente novamente ou envie um e-mail diretamente.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 hover:shadow-lg hover:shadow-emerald-500/30 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {status === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </PageLayout>
    </>
  );
}
