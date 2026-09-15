import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/landing/PageLayout";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Arduino Prático</title>
        <meta
          name="description"
          content="Política de Privacidade do Arduino Prático: como coletamos, usamos e protegemos seus dados pessoais."
        />
        <link
          rel="canonical"
          href="https://www.arduinopratico.com.br/PoliticaPrivacidade"
        />
      </Head>

      <PageLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Página Inicial
          </Link>

          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
            <p className="text-lg">
              <strong>Última atualização:</strong>{" "}
              01/09/2026
              {/* {new Date().toLocaleDateString("pt-BR")} */}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                1. Informações que Coletamos
              </h2>
              <p>
                Ao adquirir nosso ebook, coletamos apenas as informações
                necessárias para processar sua compra e entregar o produto:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Informações de pagamento (processadas pela Hotmart)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                2. Como Usamos suas Informações
              </h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Processar e entregar sua compra</li>
                <li>Enviar o ebook e materiais bônus para seu e-mail</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Enviar atualizações sobre o produto (se autorizado)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                3. Compartilhamento de Dados
              </h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações
                pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Hotmart: plataforma de pagamento que processa as transações
                </li>
                <li>Quando exigido por lei</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                4. Segurança
              </h2>
              <p>
                Implementamos medidas de segurança para proteger suas
                informações pessoais contra acesso não autorizado, alteração,
                divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                5. Cookies
              </h2>
              <p>
                Utilizamos cookies para melhorar sua experiência de navegação e
                analisar o tráfego do site. Você pode desabilitar os cookies nas
                configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                6. Seus Direitos
              </h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar exclusão de seus dados</li>
                <li>Cancelar o recebimento de e-mails promocionais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                7. Contato
              </h2>
              <p>
                Para questões sobre esta política de privacidade, entre em
                contato:
                <br />
                <strong>E-mail:</strong> AndersonAmicuchi@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                8. Alterações nesta Política
              </h2>
              <p>
                Podemos atualizar esta política periodicamente. A data da última
                atualização será sempre indicada no topo desta página.
              </p>
            </section>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
