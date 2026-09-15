import { motion } from 'framer-motion';
import { Zap, ArrowRight, FileText } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const HOTMART_LINK = "https://pay.hotmart.com/R103911345A";
const AMOSTRA_GRATIS_LINK = "/amostra-gratis.pdf";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #22d3ee 1px, transparent 1px),
            linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-amber-500/10 border border-amber-500/30 mb-6"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">
                Leve 4 e-books completos
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Aprenda Arduino e Eletrônica </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                do Zero
              </span>
              <span className="text-white"> sem medo de </span>
              <span className="text-amber-400">queimar</span>
              <span className="text-white"> seus componentes.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
              O guia definitivo para hobistas e iniciantes que querem sair da teoria chata 
              e partir para a prática com segurança. De piscar um LED a criar um{' '}
              <span className="text-cyan-400 font-medium">Sensor de Ré</span>.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href={HOTMART_LINK}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 
                           rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 
                           text-slate-900 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50
                           transition-all duration-300"
              >
                Comprar Ebook + Bônus por R$19,90
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={AMOSTRA_GRATIS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('amostra_gratis_click', { placement: 'hero' })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 
                           rounded-xl font-semibold text-lg text-slate-300 
                           border border-slate-600 hover:border-cyan-400 hover:text-cyan-400
                           transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Ver amostra grátis (PDF)
              </motion.a>
            </div>


          </motion.div>

          {/* Ebook Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 
                              rounded-3xl blur-2xl transform scale-95" />
              
              {/* Ebook Cover */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl 
                              border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-4 
                              transform perspective-1000 rotate-y-[-5deg] hover:rotate-y-0 
                              transition-transform duration-500">
                <img 
                  src="/images/hero-capa.png"
                  alt="Capa do Ebook Eletrônica Básica com Arduino"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-amber-500/20 backdrop-blur-sm 
                           px-3 py-2 rounded-lg border border-amber-500/40"
              >
                <span className="text-amber-400 font-bold text-sm">10 Projetos</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-cyan-500/20 backdrop-blur-sm 
                           px-3 py-2 rounded-lg border border-cyan-500/40"
              >
                <span className="text-cyan-400 font-bold text-sm">PDF + Códigos</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}


