import { motion } from 'framer-motion';

const projects = [
  {
    icon: "🚦",
    title: "Semáforo Inteligente",
    description: "Aprenda lógica de temporização e controle de LEDs.",
    level: "Iniciante",
    levelColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    icon: "🎹",
    title: "Piano com Buzzer e Botões",
    description: "Crie sons e melodias usando frequências e tons.",
    level: "Intermediário",
    levelColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
  },
  {
    icon: "🚗",
    title: "Sensor de Ré (Ultrassônico)",
    description: "Meça distâncias como nos carros de verdade.",
    level: "Intermediário",
    levelColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
  },
  {
    icon: "🌡️",
    title: "Alarme de Temperatura",
    description: "Use sensores para monitorar o ambiente.",
    level: "Iniciante",
    levelColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    icon: "🏠",
    title: "Automação com Sensor de Luz",
    description: "Acenda LEDs automaticamente com sensor LDR.",
    level: "Iniciante",
    levelColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    icon: "💡",
    title: "LED RGB Controlado",
    description: "Misture cores usando PWM e potenciômetros.",
    level: "Intermediário",
    levelColor: "bg-amber-500/20 text-amber-400 border-amber-500/30"
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default function ProjectsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #22d3ee 1px, transparent 1px),
            linear-gradient(-45deg, #22d3ee 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

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
            Mão na Massa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projetos que você vai montar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              em minutos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cada projeto vem com esquema de montagem, código comentado e explicação passo a passo.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl 
                        border border-slate-700/50 hover:border-cyan-500/50 
                        p-6 transition-all duration-300 overflow-hidden text-center md:text-left"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0 w-fit">
                  {project.icon}
                </div>

                {/* Level Badge */}
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium 
                                border ${project.levelColor} mb-3`}>
                  {project.level}
                </span>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm">{project.description}</p>
              </div>

              {/* Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 
                             rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            + mais 4 projetos bônus dentro do ebook! 🎁
          </p>
        </motion.div>
      </div>
    </section>
  );
}
