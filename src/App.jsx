import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import PageViewTracker from './lib/PageViewTracker';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaReembolso from './pages/PoliticaReembolso';

// Este arquivo exporta "routes" (config, não componente) por exigência do
// vite-react-ssg; por isso o Fast Refresh sempre recarrega a página inteira
// aqui — é esperado.
// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <PageViewTracker />
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}

// Formato de rotas exigido pelo vite-react-ssg (baseado no react-router v6):
// cada objeto vira uma página pré-renderizada em HTML no momento do build.
export const routes = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'About', Component: About },
      { path: 'Contact', Component: Contact },
      { path: 'PoliticaPrivacidade', Component: PoliticaPrivacidade },
      { path: 'TermosDeUso', Component: TermosDeUso },
      { path: 'PoliticaReembolso', Component: PoliticaReembolso },
      { path: '*', Component: PageNotFound },
    ],
  },
];
