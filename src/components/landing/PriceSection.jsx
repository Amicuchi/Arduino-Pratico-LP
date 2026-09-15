import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const HOTMART_LINK = "https://pay.hotmart.com/R103911345A";
const AMOSTRA_GRATIS_LINK = "/amostra-gratis.pdf";

const included = [
  "Ebook completo em PDF (+80 páginas)",
  "10 projetos práticos passo a passo",
  "Capítulo de Segurança (\"não queime nada\")",
  "70+ ilustrações e esquemas",
  "Códigos comentados",
  "BÔNUS: 19 Componentes Essenciais",
  "BÔNUS: Guia Completo do 555",
  "BÔNUS: Do L298N ao IBT-2 — Drivers de Motor DC",
  "BÔNUS: Pack de Sketches prontos",
  "Acesso vitalício + atualizações gratuitas"
];

export default function PricingSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-cyan-500/5 to-transparent" />

      {/* Animated Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 
                          border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4">
            Oferta Especial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comece sua jornada{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              agora
            </span>
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 
                          backdrop-blur-xl rounded-3xl border border-cyan-500/30 
                          p-8 md:p-12 overflow-hidden shadow-2xl shadow-cyan-500/10">

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: What's Included */}
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-white mb-6">O que está incluso:</h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Price & CTA */}
              <div className="text-center lg:text-left min-w-0">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-start gap-3 mb-2">
                    <span className="text-slate-400 text-xl">De</span>
                    <span className="text-2xl text-slate-500 line-through">R$ 79,90</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-2">
                    <span className="text-slate-400 text-xl text-left">Por apenas</span>
                    <span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                                   bg-gradient-to-r from-emerald-400 to-cyan-400 text-center lg:text-left">
                      R$19,90
                    </span>
                  </div>
                  <p className="text-slate-500 mt-2">Pagamento único • Acesso vitalício</p>
                </div>

                {/* Amostra grátis — para quem ainda está em dúvida */}
                <a
                  href={AMOSTRA_GRATIS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('amostra_gratis_click', { placement: 'pricing' })}
                  className="inline-flex items-center justify-center gap-2 mb-4 text-sm font-medium 
                             text-slate-400 hover:text-cyan-400 transition-colors underline underline-offset-4"
                >
                  <FileText className="w-4 h-4" />
                  Ainda não tem certeza? Veja uma amostra grátis (PDF)
                </a>

                {/* CTA Button */}
                <motion.a
                  href={HOTMART_LINK}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center gap-1 md:gap-2 w-full 
                             px-4 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-xl
                             bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 
                             shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50
                             transition-all duration-300 mb-6"
                >
                  <span>Garantir meu Ebook Agora</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Guarantee */}
                <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 
                               bg-slate-800/50 rounded-xl p-3 md:p-4 border border-slate-700/50">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 
                                 border border-emerald-500/40 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-white font-bold text-sm md:text-base">7 Dias de Garantia</p>
                    <p className="text-slate-400 text-xs md:text-sm">
                      Não gostou? Devolvemos 100% do seu dinheiro.
                    </p>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-slate-500 text-sm">
                  <span>💳 Cartão</span>
                  <span>•</span>
                  <span>📱 PIX</span>
                  <span>•</span>
                  <span>🏦 Boleto</span>
                </div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-tr-full" />
          </div>
        </motion.div>

        {/* Urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>Preço promocional por tempo limitado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


