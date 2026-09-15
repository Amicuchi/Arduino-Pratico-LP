import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';

// Envia um page_view ao GA4 a cada troca de rota. 
// Necessário porque isto é uma SPA: o gtag.js só vê o carregamento inicial sozinho, 
// sem isso o GA4 acharia que o visitante nunca sai da primeira página.
export default function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return null;
}
