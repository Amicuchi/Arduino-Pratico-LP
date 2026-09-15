import { motion } from 'framer-motion';
import { Flame, BookX, Code2, ArrowDown, Heart } from 'lucide-react';

const painPoints = [
  {
    icon: Flame,
    title: "Medo de ver fumaça saindo da placa",
    description: "Aquele pavor de conectar algo errado e ver seu Arduino virar churrasquinho.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30"
  },
  {
    icon: BookX,
    title: "Tutoriais complexos cheios de matemática",
    description: "Fórmulas, cálculos e teoria que mais confundem do que ajudam.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30"
  },
  {
    icon: Code2,
    title: "Frustração de copiar códigos que não funcionam",
    description: "Ctrl+C, Ctrl+V... e nada. Erro atrás de erro sem explicação.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ProblemSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 
                          border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            O Problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Você já sentiu aquele medo de{' '}
            <span className="text-amber-400">ligar o fio errado e queimar seu Arduino?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Se você já passou por alguma dessas situações, você não está sozinho.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative p-6 rounded-2xl ${pain.bgColor} border ${pain.borderColor}
                         backdrop-blur-sm transition-all duration-300 text-center md:text-left`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${pain.bgColor} border ${pain.borderColor}
                             flex items-center justify-center mb-4 mx-auto md:mx-0`}>
                <pain.icon className={`w-7 h-7 ${pain.color}`} />
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{pain.title}</h3>
              <p className="text-slate-400">{pain.description}</p>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${pain.bgColor} 
                             rounded-bl-full opacity-50`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pivot Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center mb-8"
          >
            <ArrowDown className="w-8 h-8 text-cyan-400" />
          </motion.div>

          {/* Card */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 
                          backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 md:p-10
                          shadow-2xl shadow-cyan-500/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 
                             border border-cyan-500/40 flex items-center justify-center">
                <Heart className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Este ebook foi criado pensando em{' '}
                  <span className="text-cyan-400">você</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Escrito por um <span className="text-white font-medium">pai (estudante de engenharia de computação)</span>, 
                  que queria ensinar Arduino para seu filho de 6 anos. O objetivo sempre foi{' '}
                  <span className="text-cyan-400 font-medium">simplificar ao máximo</span>, 
                  tornando a eletrônica acessível para qualquer pessoa, em qualquer idade.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


