import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, Mail } from "lucide-react";
import PageLayout from "@/components/landing/PageLayout";

export default function PoliticaReembolso() {
  return (
    <>
      <Head>
        <title>Política de Reembolso | Arduino Prático</title>
        <meta
          name="description"
          content="Garantia incondicional de 7 dias: se não gostar do ebook Eletrônica Básica com Arduino, devolvemos 100% do seu dinheiro."
        />
        <link
          rel="canonical"
          href="https://www.arduinopratico.com.br/PoliticaReembolso"
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

          <h1 className="text-4xl font-bold mb-8">Política de Reembolso</h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
            <p className="text-lg">
              <strong>Última atualização:</strong> 01/09/2026
            </p>

            {/* Guarantee Badge */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 my-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                    Garantia Incondicional de 7 Dias
                  </h3>
                  <p className="text-slate-300">
                    Se você não ficar satisfeito com os ebooks, devolvemos seu
                    dinheiro. Sem perguntas, sem complicação.
                  </p>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                1. Prazo de Garantia
              </h2>
              <p>
                Você tem <strong className="text-white">7 dias corridos</strong>{" "}
                a partir da data da compra para solicitar o reembolso integral.
              </p>
              <div className="flex items-center gap-2 mt-4 bg-slate-800/50 rounded-lg p-4">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>
                  Exemplo: Se comprou hoje,{" "}
                  {new Date().toLocaleDateString("pt-BR")}, tem até o dia{" "}
                  {new Date(
                    new Date().setDate(new Date().getDate() + 7),
                  ).toLocaleDateString("pt-BR")}{" "}
                  para solicitar o reembolso.
                </span>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                2. Como Solicitar o Reembolso
              </h2>
              <h3>
                Na plataforma da Hotmart, você pode solicitar o reembolso de sua
                compra com muita facilidade. Essa é a maneira mais rápida e
                segura de obter seu dinheiro de volta.
              </h3>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4 bg-slate-800/50 rounded-lg p-4">
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Acesse o canal de reembolso e siga as instruções
                    </h4>
                    <ul className="list-disc ml-6 space-y-1 mt-2">
                      <li>
                        Acesse o link{" "}
                        <a
                          href="https://refund.hotmart.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://refund.hotmart.com/
                        </a>
                      </li>
                      <li>
                        Informe o número de transação da sua compra e o e-mail
                        que você utilizou na compra. <br></br>
                        <small>
                          Você pode encontrar este número no e-mail que recebeu
                          com os detalhes de acesso ao produto (ele inicia com
                          duas letras e uma série de números, como
                          HP000000000).{" "}
                        </small>
                      </li>
                      <li>
                        Após esses passos, você receberá um código de
                        verificação de segurança no e-mail cadastrado em sua
                        compra, e é fundamental que você faça essa verificação
                        para que sua solicitação seja efetuada corretamente.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br></br>
              <h3>Direto comigo:</h3>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4 bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Envie um e-mail
                    </h4>
                    <p>
                      Envie para:{" "}
                      <strong className="text-cyan-400">
                        AndersonAmicuchi@gmail.com
                      </strong>
                      <br />
                      Assunto: "Solicitação de Reembolso"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Inclua as informações
                    </h4>
                    <ul className="list-disc ml-6 space-y-1 mt-2">
                      <li>Nome completo usado na compra</li>
                      <li>E-mail da compra</li>
                      <li>Data da compra (se souber)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Aguarde a confirmação
                    </h4>
                    <p>
                      Processaremos seu reembolso em até{" "}
                      <strong className="text-white">2 dias úteis</strong>. O
                      prazo para o dinheiro aparecer na sua conta depende do seu
                      banco/cartão (geralmente 5 a 10 dias úteis).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                3. Condições
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  O reembolso é concedido sem necessidade de justificativa
                </li>
                <li>
                  Você pode solicitar o reembolso mesmo após baixar o material
                </li>
                <li>Após o reembolso, o acesso ao material será revogado</li>
                <li>
                  O reembolso é processado através da Hotmart (plataforma de
                  pagamento)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                4. Formas de Pagamento
              </h2>
              <p>O reembolso será processado da seguinte forma:</p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>
                  <strong className="text-white">Cartão de Crédito:</strong>{" "}
                  Estorno na fatura (5 a 10 dias úteis)
                </li>
                <li>
                  <strong className="text-white">PIX:</strong> Devolução na
                  mesma chave (2 a 5 dias úteis)
                </li>
                <li>
                  <strong className="text-white">Boleto:</strong> Depósito em
                  conta informada (5 a 10 dias úteis)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                5. Fora do Prazo de Garantia
              </h2>
              <p>
                Após os 7 dias de garantia, não realizamos reembolsos. Por isso,
                recomendamos que:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-4">
                <li>Baixe e avalie o material assim que receber</li>
                <li>
                  Entre em contato caso tenha dúvidas antes do prazo expirar
                </li>
                <li>
                  Teste os projetos e códigos durante o período de garantia
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                6. Perguntas Frequentes
              </h2>

              <div className="space-y-4 mt-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">
                    Preciso devolver o ebook?
                  </h4>
                  <p>
                    Não. Como é um produto digital, não há necessidade de
                    devolução física.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">
                    Preciso justificar o pedido?
                  </h4>
                  <p>
                    Não. Nossa garantia é incondicional. Você não precisa
                    explicar o motivo.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">
                    Quanto tempo demora o reembolso?
                  </h4>
                  <p>
                    Processamos em até 2 dias úteis. O prazo total depende do
                    seu banco (5 a 10 dias úteis).
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">
                    Posso comprar novamente depois?
                  </h4>
                  <p>
                    Sim, você pode recomprar o produto a qualquer momento no
                    futuro.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                7. Contato
              </h2>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-300">
                    Dúvidas sobre reembolsos ou problemas com sua solicitação?
                  </p>
                  <p className="mt-2">
                    <strong className="text-white">E-mail:</strong>{" "}
                    <a
                      href="mailto:AndersonAmicuchi@gmail.com"
                      className="text-cyan-400 hover:underline"
                    >
                      AndersonAmicuchi@gmail.com
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm mt-2">
                    Respondemos em até 24 horas úteis
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
