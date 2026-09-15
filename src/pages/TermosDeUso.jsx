import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/landing/PageLayout";

export default function TermosDeUso() {
  return (
    <>
      <Head>
        <title>Termos de Uso | Arduino Prático</title>
        <meta
          name="description"
          content="Termos de Uso do Arduino Prático: regras de uso do site, do ebook e dos bônus inclusos na compra."
        />
        <link
          rel="canonical"
          href="https://www.arduinopratico.com.br/TermosDeUso"
        />
      </Head>

      <PageLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>

          <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
            <p className="text-lg">
              <strong>Última atualização:</strong>{" "}
              {new Date().toLocaleDateString("pt-BR")}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao adquirir o ebook "Eletrônica Básica com Arduino", você
                concorda com estes Termos de Uso. Se não concordar, não utilize
                o material.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                2. Licença de Uso
              </h2>
              <p>
                Ao comprar o ebook, você recebe uma licença pessoal,
                não-transferível e não-exclusiva para:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Ler e estudar o conteúdo</li>
                <li>Imprimir uma cópia para uso pessoal</li>
                <li>
                  Utilizar os códigos fornecidos em seus projetos pessoais
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                3. Restrições
              </h2>
              <p>Você NÃO pode:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Revender, redistribuir ou compartilhar o ebook</li>
                <li>
                  Publicar o conteúdo em sites, redes sociais ou plataformas
                  públicas
                </li>
                <li>
                  Modificar, adaptar ou criar obras derivadas sem autorização
                </li>
                <li>Remover avisos de copyright ou marcas d'água</li>
                <li>Usar o material para fins comerciais sem autorização</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                4. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo do ebook, incluindo textos, imagens, códigos e
                design, é protegido por direitos autorais e pertence ao autor
                Anderson Amicuchi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                5. Isenção de Responsabilidade
              </h2>
              <p>O ebook é fornecido "como está". O autor não garante que:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>O conteúdo atenderá a todas as suas necessidades</li>
                <li>
                  Os projetos funcionarão perfeitamente em todos os cenários
                </li>
                <li>Não haverá erros ou imprecisões no material</li>
              </ul>
              <p className="mt-4">
                <strong>Importante:</strong> Trabalhar com eletrônica envolve
                riscos. Tome precauções de segurança adequadas. O autor não se
                responsabiliza por danos a equipamentos ou ferimentos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                6. Garantia de Reembolso
              </h2>
              <p>
                Oferecemos garantia incondicional de 7 dias. Se não ficar
                satisfeito, solicite o reembolso integral dentro deste prazo.
                Consulte nossa Política de Reembolso para mais detalhes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                7. Suporte
              </h2>
              <p>
                Fornecemos suporte para dúvidas sobre o conteúdo do ebook. O
                suporte não inclui:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Desenvolvimento de projetos personalizados</li>
                <li>Diagnóstico de problemas em seu hardware</li>
                <li>Suporte técnico avançado de Arduino</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                8. Modificações
              </h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer
                momento. Alterações serão notificadas via e-mail e atualizadas
                nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                9. Lei Aplicável
              </h2>
              <p>
                Estes termos são regidos pelas leis brasileiras. Quaisquer
                disputas serão resolvidas no foro da comarca de residência do
                autor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                10. Contato
              </h2>
              <p>
                Para questões sobre estes termos, entre em contato:
                <br />
                <strong>E-mail:</strong> AndersonAmicuchi@gmail.com
              </p>
            </section>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
