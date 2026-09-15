import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}


