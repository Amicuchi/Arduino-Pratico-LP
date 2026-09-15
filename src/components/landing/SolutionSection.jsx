import { motion } from 'framer-motion';
import { Lightbulb, Shield, Code, Cpu, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "Fundamentos sem Enrolação",
    description: "Tensão, Corrente e Resistência explicados de forma prática, para quem não é físico nem engenheiro.",
    highlights: ["Lei de Ohm simplificada", "Analogias do dia a dia", "Exemplos visuais"]
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Um capítulo dedicado a 'Como não queimar nada' — porque seu bolso e sua placa agradecem.",
    highlights: ["Uso correto de resistores", "Evitando curtos-circuitos", "Polaridade de componentes"]
  },
  {
    icon: Code,
    title: "Programação Descomplicada",
    description: "Entenda void loop(), pinMode() e variáveis sem precisar ser um gênio da programação.",
    highlights: ["Sintaxe explicada", "Lógica passo a passo", "Códigos comentados"]
  },
  {
    icon: Cpu,
    title: "10 Projetos Práticos",
    description: "Do 'Olá Mundo' (piscar LED) até projetos completos como um Piano com Buzzer.",
    highlights: ["Nível iniciante ao intermediário", "Esquemas de montagem", "Troubleshooting incluso"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

export default function SolutionSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      {/* Circuit Lines */}
      <div className="absolute left-0 top-1/4 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute right-0 bottom-1/3 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 
                          border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            A Solução
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que você vai{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              dominar
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Conteúdo direto ao ponto, sem enrolação, criado para você aprender de verdade.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl 
                        border border-slate-700/50 hover:border-cyan-500/50 
                        p-6 lg:p-8 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 
                                 border border-cyan-500/30 flex items-center justify-center
                                 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-shadow">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="ml-[72px] space-y-2">
                  {feature.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-transparent 
                             rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "200+", label: "Páginas" },
            { value: "10", label: "Projetos" },
            { value: "50+", label: "Ilustrações" },
            { value: "∞", label: "Acesso Vitalício" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
              <div className="text-3xl font-bold text-transparent bg-clip-text 
                             bg-gradient-to-r from-cyan-400 to-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


