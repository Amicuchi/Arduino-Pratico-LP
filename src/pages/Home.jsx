import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import BundleSection from "@/components/landing/BundleSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import BonusSection from "@/components/landing/BonusSection";
import AuthorSection from "@/components/landing/AuthorSection";
import PricingSection from "@/components/landing/PriceSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export const HOTMART_LINK = "https://pay.hotmart.com/R103911345A";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Arduino Prático | Eletrônica Básica com Arduino</title>
        <meta
          name="description"
          content="Aprenda Arduino e eletrônica do zero, sem medo de queimar componentes. Ebook completo + 3 bônus, por R$19,90. Guia prático para hobistas e iniciantes."
        />
        <link rel="canonical" href="https://www.arduinopratico.com.br/" />
        <meta
          property="og:title"
          content="Arduino Prático | Eletrônica Básica com Arduino"
        />
        <meta
          property="og:description"
          content="Aprenda Arduino e eletrônica do zero, sem medo de queimar componentes. Ebook completo + 3 bônus, por R$19,90."
        />
        <meta property="og:url" content="https://www.arduinopratico.com.br/" />
      </Head>
      
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        {/* Circuit Board Background Pattern */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%2322d3ee' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%2322d3ee'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%2322d3ee'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%2322d3ee'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%2322d3ee'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%2322d3ee'/%3E%3Cpath d='M50 10v30M50 60v30M10 50h30M60 50h30' stroke='%2322d3ee' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />

        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <BundleSection />
          <SolutionSection />
          <ProjectsSection />
          <BonusSection />
          <AuthorSection />
          <PricingSection />
          <FAQSection />
        </main>

        <Footer />

        {/* Floating CTA for Mobile */}
        <div
          className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent 
                      md:hidden z-40 pointer-events-none"
        >
          <a
            href={HOTMART_LINK}
            className="pointer-events-auto block w-full py-4 rounded-xl font-bold text-center
                     bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 
                     shadow-lg shadow-emerald-500/30"
          >
            Comprar por R$19,90
          </a>
        </div>
      </div>
    </>
  );
}
