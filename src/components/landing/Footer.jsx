import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

const HOTMART_LINK = "https://pay.hotmart.com/R103911345A";
const LOGO_URL = "/images/logo.png";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden border-t border-slate-800">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para começar sua jornada no mundo da eletrônica?
          </h3>
          <motion.a
            href={HOTMART_LINK}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg
                       bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 
                       shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                       transition-shadow duration-300"
          >
            Comprar por R$19,90
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="Arduino Prático"
              className="w-9 h-9 rounded-full object-cover relative z-10"
            />
            <span className="font-bold text-lg">
              <span className="text-white">Arduino</span>
              <span className="text-cyan-400">Prático</span>
            </span>
          </div>

          {/* Made with */}
          <p className="flex items-center gap-1 text-slate-500 text-sm">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
            por Anderson Amicuchi
          </p>
        </div>

        {/* Legal Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-white">
          <a href="/About" className="hover:text-cyan-400 transition-colors">
            Sobre
          </a>
          <span>•</span>
          <a href="/Contact" className="hover:text-cyan-400 transition-colors">
            Contato
          </a>
          <span>•</span>
          <a
            href="/TermosDeUso"
            className="hover:text-cyan-400 transition-colors"
          >
            Termos de Uso
          </a>
          <span>•</span>
          <a
            href="/PoliticaPrivacidade"
            className="hover:text-cyan-400 transition-colors"
          >
            Política de Privacidade
          </a>
          <span>•</span>
          <a
            href="/PoliticaReembolso"
            className="hover:text-cyan-400 transition-colors"
          >
            Política de Reembolso
          </a>
        </div>
        {/* Copyright */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Arduino Prático. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
