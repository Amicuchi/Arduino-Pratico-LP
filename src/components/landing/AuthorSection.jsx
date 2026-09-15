import { motion } from "framer-motion";
import { GraduationCap, Heart, Quote } from "lucide-react";

const LOGO_URL = "/images/favicon.svg";

export default function AuthorSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 
                            border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4"
            >
              O Autor
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Quem escreveu?
            </h2>
          </div>

          {/* Author Card */}
          <div
            className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl 
                          border border-slate-700/50 p-8 md:p-12 overflow-hidden"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-700/50" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Glow Ring */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 
                                  rounded-full blur-md opacity-50"
                  />

                  {/* Avatar Container */}
                  <div
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full 
                                  border-4 border-slate-600 overflow-hidden"
                  >
                    <img
                      src="/images/autor-foto.png"
                      alt="Anderson Amicuchi"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 -right-2 bg-black/70 rounded-full p-2 shadow-lg"
                  >
                    <img
                      src={LOGO_URL}
                      alt="Arduino Prático"
                      className="w-9 h-9 rounded-full object-cover relative z-10"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Anderson Amicuchi
                </h3>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
                                  bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Estudante de Engenharia de Computação
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
                                  bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
                  >
                    <Heart className="w-4 h-4" />
                    Maker & Pai
                  </span>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  "Escrevi este material originalmente como{" "}
                  <span className="text-white font-medium">
                    minhas anotações pessoais
                  </span>{" "}
                  para ensinar meu filho de 6 anos e para meus próprios estudos.
                  O objetivo sempre foi ser{" "}
                  <span className="text-cyan-400 font-medium">
                    didático, direto e seguro
                  </span>
                  . Nada de linguagem rebuscada ou fórmulas desnecessárias —
                  apenas o essencial para você começar a criar."
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  {[
                    { value: "2+", label: "Anos de Arduino" },
                    { value: "50+", label: "Projetos Criados" },
                    { value: "1", label: "Filho Curioso 😊" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-slate-500 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
