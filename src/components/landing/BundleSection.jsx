import { motion } from 'framer-motion';
import { BookOpen, Cpu, Zap, Gauge, FileText } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const AMOSTRA_GRATIS_LINK = "/amostra-gratis.pdf";

const ebooks = [
  {
    icon: BookOpen,
    title: "Eletrônica Básica com Arduino",
    level: "Iniciante",
    levelColor: "bg-emerald-500/90 text-slate-900 border-emerald-400",
    description: "O guia principal — do zero aos seus primeiros projetos práticos.",
    cover: "/images/capa-ebook-principal.png"
  },
  {
    icon: Cpu,
    title: "19 Componentes Essenciais",
    level: "Iniciante",
    levelColor: "bg-emerald-500/90 text-slate-900 border-emerald-400",
    description: "Reforça e expande o que você aprendeu no módulo de componentes.",
    cover: "/images/capa-bonus-19-componentes.png"
  },
  {
    icon: Zap,
    title: "Guia Completo do 555",
    level: "Intermediário",
    levelColor: "bg-amber-500/90 text-slate-900 border-amber-400",
    description: "Seu próximo passo, quando estiver pronto para ir além do básico.",
    cover: "/images/capa-bonus-guia-555.png"
  },
  {
    icon: Gauge,
    title: "Do L298N ao IBT-2 — Drivers de Motor DC",
    level: "Intermediário/Avançado",
    levelColor: "bg-purple-500/90 text-white border-purple-400",
    description: "Para quando você quiser controlar motores de verdade.",
    cover: "/images/capa-bonus-drivers-motor.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function BundleSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-emerald-500/5" />

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 
                          border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-4">
            O pacote
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Uma trilha completa,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              não um ebook solto
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comece pelo básico. Seus próximos passos já estão inclusos, esperando você.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ebooks.map((ebook, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl 
                        border border-slate-700/50 hover:border-emerald-500/50 
                        p-6 transition-all duration-300 overflow-hidden text-center md:text-left"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Ebook Cover with Level Badge */}
                <div className="relative aspect-[3/4] mb-4 rounded-lg overflow-hidden
                               bg-slate-900/60 border border-slate-700/50
                               group-hover:border-emerald-500/40 transition-colors">
                  <img
                    src={ebook.cover}
                    alt={`Capa: ${ebook.title}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Level Badge — top-left overlay */}
                  <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-full text-xs font-bold 
                                  border ${ebook.levelColor} backdrop-blur-sm shadow-lg`}>
                    {ebook.level}
                  </span>
                </div>

                {/* Botão "suspenso" de amostra grátis — só no ebook principal */}
                {index === 0 && (
                  <a
                    href={AMOSTRA_GRATIS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      trackEvent('amostra_gratis_click', { placement: 'bundle' });
                    }}
                    className="relative z-20 -mt-7 mb-4 mx-auto flex items-center justify-center gap-1.5 
                               w-[calc(100%-1.5rem)] px-3 py-2 rounded-lg text-xs font-semibold
                               bg-slate-800 text-cyan-400 border border-cyan-500/50
                               shadow-lg shadow-black/30 hover:bg-slate-700 hover:border-cyan-400
                               transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Ver amostra grátis (PDF)
                  </a>
                )}

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                  {ebook.title}
                </h3>
                <p className="text-slate-400 text-sm">{ebook.description}</p>
              </div>

              {/* Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/20 
                             rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            São mais de <span className="text-white font-semibold">200 páginas de conteúdo</span>.
            <br />
            Você recebe os 4 assim que compra — 
            <span className="text-emerald-400 font-medium"> sem custo extra, sem pegadinha.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


