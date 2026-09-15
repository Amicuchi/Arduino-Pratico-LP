import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const HOTMART_LINK = "https://pay.hotmart.com/R103911345A";
const LOGO_URL = "/images/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img src={LOGO_URL} alt="Arduino Prático" className="w-9 h-9 rounded-full object-cover relative z-10" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full -z-10" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                <span className="text-white">Arduino</span>
                <span className="text-cyan-400">Prático</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={HOTMART_LINK}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center px-6 py-2.5 rounded-lg font-semibold text-sm
                         bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900
                         shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                         transition-shadow duration-300"
            >
              <span className="relative z-10">Quero Começar Agora</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-800"
          >
            <a
              href={HOTMART_LINK}
              className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-sm
                         bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900"
            >
              Quero Começar Agora
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}


