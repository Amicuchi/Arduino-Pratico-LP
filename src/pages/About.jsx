import { Head } from "vite-react-ssg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, BookOpen, Shield } from "lucide-react";
import PageLayout from "@/components/landing/PageLayout";

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre o Arduino Prático | Quem está por trás do projeto</title>
        <meta
          name="description"
          content="Conheça o Arduino Prático: um pacote de 4 ebooks (+200 páginas) para aprender eletrônica e Arduino do zero, escrito por Anderson Amicuchi."
        />
        <link rel="canonical" href="https://www.arduinopratico.com.br/About" />
        <meta property="og:title" content="Sobre o Arduino Prático" />
        <meta
          property="og:description"
          content="Conheça o Arduino Prático: um pacote de 4 ebooks para aprender eletrônica e Arduino do zero."
        />
        <meta
          property="og:url"
          content="https://www.arduinopratico.com.br/About"
        />
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
              Sobre o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Arduino Prático
              </span>
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert max-w-none space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              O <strong className="text-white">Arduino Prático</strong> é um
              pacote completo de e-books criado para ensinar eletrônica e
              programação com Arduino do zero, sem enrolação e sem jargões
              complicados. Reunimos quatro guias que formam uma trilha de
              aprendizado contínua:{" "}
              <em className="text-emerald-400">
                Eletrônica Básica com Arduino
              </em>
              , <em className="text-emerald-400">19 Componentes Essenciais</em>,
              <em className="text-emerald-400"> Guia Completo do 555</em> e
              <em className="text-emerald-400">
                {" "}
                Do L298N ao IBT-2 — Drivers de Motor DC
              </em>
              . São mais de 200 páginas de conteúdo prático, com mais de 50
              ilustrações, esquemas de montagem e códigos comentados.
            </p>

            <p>
              Este material foi desenvolvido para{" "}
              <strong className="text-white">iniciantes absolutos</strong> que
              sempre tiveram curiosidade pela eletrônica mas não sabiam por onde
              começar, estudantes que precisam de uma base sólida para projetos
              escolares e universitários, hobbistas que querem ir além do básico
              e até profissionais de outras áreas que desejam agregar
              conhecimentos em automação e eletrônica. Não é necessário saber
              física avançada nem programação prévia — tudo é explicado passo a
              passo, com analogias do dia a dia e exemplos visuais que tornam
              cada conceito fácil de entender.
            </p>

            <p>
              O projeto é idealizado e escrito por{" "}
              <strong className="text-white">Anderson Amicuchi</strong>,
              entusiasta de eletrônica e Arduino que decidiu compartilhar seu
              conhecimento de forma acessível e direta. A motivação nasceu da
              frustração com materiais que ou são superficiais demais ou assumem
              conhecimentos que o iniciante ainda não tem. Aqui o foco é claro:
              ensinar de verdade, do primeiro LED piscando até o controle de
              motores DC com drivers profissionais, sempre com segurança e
              clareza. Cada e-book é independente, mas juntos formam uma jornada
              completa — do "não sei nem ligar um LED" ao "consigo controlar um
              motor de verdade".
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: BookOpen, label: "200+ páginas" },
              { icon: Target, label: "10 projetos práticos" },
              { icon: Users, label: "Para iniciantes" },
              { icon: Shield, label: "Capítulo de segurança" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <item.icon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </PageLayout>
    </>
  );
}
