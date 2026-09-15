import { motion } from 'framer-motion';
import { Gift, FileCode2, MessageSquare, Copy, Sparkles } from 'lucide-react';

export default function BonusSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Bonus Card */}
          <div className="relative bg-gradient-to-br from-amber-500/10 via-slate-800/80 to-slate-900/80 
                          backdrop-blur-xl rounded-3xl border border-amber-500/30 
                          p-8 md:p-12 overflow-hidden shadow-2xl shadow-amber-500/10">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

            {/* Sparkle Decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 right-8"
            >
              <Sparkles className="w-8 h-8 text-amber-400/40" />
            </motion.div>

            <div className="relative z-10 text-center md:text-left">
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                           bg-amber-500/20 border border-amber-500/40 mb-6"
              >
                <Gift className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-bold text-sm uppercase tracking-wide">
                  Bônus Exclusivo
                </span>
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Pack de Códigos{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                  Comentados
                </span>
              </h2>

              {/* Description */}
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
                Não perca tempo digitando. Receba <span className="text-white font-semibold">todos os códigos-fonte</span> (sketches) 
                do livro prontos para copiar, colar e modificar. 
                <span className="text-amber-400 font-semibold"> Comentários trecho a trecho</span>.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: FileCode2, text: "10 Sketches Completos" },
                  { icon: MessageSquare, text: "Comentários Explicativos" },
                  { icon: Copy, text: "Copiar e Colar" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
                  >
                    <feature.icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Price */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-500 text-xl line-through">R$ 29,90</span>
                  <span className="text-4xl font-bold text-emerald-400">R$ 0,00</span>
                </div>
                <span className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 
                               text-emerald-400 font-semibold text-sm">
                  GRÁTIS com o Ebook
                </span>
              </div>
            </div>

            {/* Code Preview Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block absolute bottom-8 right-8 w-80"
            >
              <div className="bg-slate-900 rounded-xl border border-slate-700 p-4 shadow-2xl 
                             transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-slate-500 text-xs">semaforo.ino</span>
                </div>
                <pre className="text-xs font-mono">
                  <code className="text-slate-400">
                    <span className="text-purple-400">// Define os pinos dos LEDs</span>{'\n'}
                    <span className="text-cyan-400">int</span> ledVerde = <span className="text-amber-400">8</span>;{'\n'}
                    <span className="text-cyan-400">int</span> ledAmarelo = <span className="text-amber-400">9</span>;{'\n'}
                    <span className="text-cyan-400">int</span> ledVermelho = <span className="text-amber-400">10</span>;{'\n'}
                    {'\n'}
                    <span className="text-purple-400">// Configura os pinos</span>{'\n'}
                    <span className="text-cyan-400">void</span> <span className="text-emerald-400">setup</span>() {'{'}{'\n'}
                    {'  '}<span className="text-slate-300">pinMode</span>(ledVerde, <span className="text-amber-400">OUTPUT</span>);{'\n'}
                    {'}'}{'\n'}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


