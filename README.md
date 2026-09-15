# ArduinoPrático

Landing page de vendas do ebook **Eletrônica Básica com Arduino**, com três bônus inclusos. Site estático, pré-renderizado (SSG), construído em React + Vite.

🔗 **Produção:** [www.arduinopratico.com.br](https://www.arduinopratico.com.br) <br> <br>
📦 **Produto:** [Hotmart](https://pay.hotmart.com/R103911345A)


## Stack

| Camada | Tecnologia |
|---|---|
| UI | React 18 + Tailwind CSS + shadcn/ui (Radix UI) |
| Roteamento | React Router 6 |
| Build / SSG | Vite 6 + [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg) |
| Dados assíncronos | TanStack Query |
| Animação | Framer Motion |
| Ícones | lucide-react |
| Analytics | Google Analytics 4 (gtag.js) |
| Checkout | Hotmart (link direto) |

Sem backend, sem banco de dados, sem variáveis de ambiente sensíveis.


## Arquitetura

O projeto usa **SSG (Static Site Generation)**: cada rota é renderizada em HTML completo no momento do build (`vite-react-ssg build`), não no navegador do usuário. Isso significa que buscadores e redes sociais recebem o conteúdo já pronto, sem precisar executar JavaScript — importante tanto para indexação no Google quanto para pré-visualização de links (WhatsApp, etc.).

Em desenvolvimento (`pnpm dev`), o projeto roda em CSR puro (Vite comum), que é mais simples para o dia a dia. 
A pré-renderização só acontece no build de produção.

Título, meta description, canonical e Open Graph são definidos **por página**, via o componente `<Head>` do `vite-react-ssg` (dentro de cada `src/pages/*.jsx`) — não no `index.html`, que guarda apenas o que é comum a todas as páginas (ícones, manifest, schema.org, GA4).


## Estrutura do projeto

```

├── public/
│   ├── images/                  # logo, capas, ícones do manifest (ver Configuração)
│   ├── amostra-gratis.pdf
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   ├── 404.html                 # página de erro estática (não passa pelo React Router)
│   ├── _redirects               # fallback de rota para Netlify
│   └── vercel.json              # fallback de rota para Vercel
├── src/
│   ├── components/
│   │   ├── landing/             # seções da home (Hero, Bundle, Pricing, FAQ, Footer...)
│   │   └── ui/                  # componentes shadcn/ui (Radix)
│   ├── lib/
│   │   ├── analytics.js         # wrapper do gtag (GA4)
│   │   ├── PageNotFound.jsx
│   │   ├── PageViewTracker.jsx  # dispara page_view a cada troca de rota
│   │   └── query-client.js
│   ├── pages/                   # uma página por rota, cada uma com seu <Head>
│   ├── App.jsx                  # define as rotas (formato exigido pelo vite-react-ssg)
│   └── main.jsx                 # ponto de entrada (ViteReactSSG)
├── index.html                   # template base (tags comuns a todas as páginas)
└── vite.config.js

```


## Como rodar localmente

Pré-requisitos: Node 18+ e pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:5173 — modo CSR, recarregamento rápido
```

Para testar o build de produção (SSG) localmente:

```bash
pnpm build        # gera dist/ com um .html por rota
pnpm preview:csr  # serve uma build CSR simples, se precisar comparar
```

Sempre valide com `pnpm build` antes de subir uma mudança grande — é nele que bugs de renderização no servidor (uso de `window`/`document` fora de `useEffect`, por exemplo) aparecem; `pnpm dev` sozinho não pega isso.



## Configuração

Não há segredos neste projeto — tudo que roda no navegador já é público por natureza (Measurement ID do GA4, ID de conversão do Google Ads, link de checkout). Não há `.env` a configurar.

**Antes do primeiro deploy, adicione em `public/images/`:**

| Arquivo | Uso |
|---|---|
| `logo.png` | Navbar e Footer |
| `hero-capa.png` | Hero Section + imagem de Open Graph |
| `autor-foto.png` | Seção do autor |
| `capa-ebook-principal.png` | Capa do ebook principal |
| `capa-bonus-19-componentes.png` | Capa do bônus |
| `capa-bonus-guia-555.png` | Capa do bônus |
| `capa-bonus-drivers-motor.png` | Capa do bônus |
| `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` | Ícones do `manifest.json` (PWA) |

E um `favicon.svg` na raiz de `public/`.


## Analytics e conversão

- **Navegação/funil (GA4)**: propriedade já criada, Measurement ID `G-416CGR86JE` em `index.html`. `PageViewTracker.jsx` dispara um evento `page_view` a cada troca de rota via React Router (necessário porque a navegação entre páginas, após o carregamento inicial, acontece no cliente). Os 3 botões "Ver amostra grátis" disparam `amostra_gratis_click`, com a origem (`hero`, `pricing` ou `bundle`) como parâmetro.
- **Conversão de venda (Google Ads)**: **não é feita pelo código do site** — o checkout acontece inteiramente no domínio da Hotmart, então o site nunca sabe com certeza se uma compra foi concluída. A conversão é registrada via **Pixel de Rastreamento da Hotmart** (painel da Hotmart → Ferramentas → Pixel de Rastreamento → Google Ads), usando:
  - ID de conversão: `AW-18265777984`
  - Rótulo de conversão: `a_wgCLzBscwcEMDO5oVE`


## SEO

- **Pré-renderização (SSG)** — ver [Arquitetura](#arquitetura).
- **Meta tags por página**: título, description, canonical e Open Graph próprios em cada rota.
- **Schema.org (JSON-LD)** em `index.html`: `FAQPage` (10 perguntas, espelhando o conteúdo visível do `FAQSection`) e `Product` (preço, moeda, disponibilidade). Mesmo que o Google tenha aposentado o rich snippet visual de FAQ em 7/mai/2026 — a marcação foi mantida porque ainda é lida por Bing (usado pelo ChatGPT/Copilot ao buscar na web), Perplexity e sistemas de IA em geral.
- **`robots.txt`** liberando indexação total, apontando para o sitemap.
- **`sitemap.xml`** estático com as 6 páginas do site — atualize manualmente se adicionar/remover rotas.
- **Google Search Console**: propriedade de domínio (`arduinopratico.com.br`), verificada via registro TXT no DNS (Registro.br).


## Deploy

Build estático puro (`dist/`), com um `.html` gerado por rota. 
Compatível com Netlify e Vercel sem configuração adicional além do repositório conectado.

`public/_redirects` (Netlify) e `public/vercel.json` (Vercel) existem como rede de segurança para rotas não encontradas, mas já são pouco necessários: como o SSG gera um arquivo real por página, cada rota é servida diretamente. 
O 404 de uma URL inexistente é o `public/404.html`, estático — as duas plataformas o detectam automaticamente.


## Limitações conhecidas / próximos passos

- Open Graph por página (`og:title`/`og:description`/`og:url`) implementado só para Home, About e Contact — as 3 páginas de política usam apenas o Open Graph fixo do `index.html`.
- FAQ do schema/página cobre perguntas de objeção de compra; uma expansão com perguntas técnicas do conteúdo do ebook (ex. "qual resistor usar com LED no Arduino") foi cogitada como estratégia de conteúdo, mas ainda não implementada.
- Verificar periodicamente no Google Ads se a ação de conversão usada pelo Pixel da Hotmart segue ativa.

---

## Autor

Anderson Amicuchi

