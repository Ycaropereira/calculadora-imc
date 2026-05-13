import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato | Calculadora IMC',
  description: 'Entre em contato conosco para dúvidas, sugestões ou feedback sobre nossa calculadora de IMC. Estamos aqui para ajudar!',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-100">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <nav className="mb-6">
          <Link 
            href="/"
            className="text-emerald-700 hover:text-emerald-800 text-sm font-medium transition-colors"
          >
            ← Voltar para calculadora
          </Link>
        </nav>

        <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Entre em contato
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Estamos aqui para ajudar e ouvir suas sugestões
            </p>
          </header>

          <div className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">Como podemos ajudar?</h2>
                
                <div className="mt-6 space-y-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-emerald-900">Dúvidas sobre a calculadora</h3>
                    <p className="text-emerald-700 leading-relaxed mt-2">
                      Problemas técnicos, dúvidas sobre como usar ou interpretar resultados.
                    </p>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-emerald-900">Sugestões de melhoria</h3>
                    <p className="text-emerald-700 leading-relaxed mt-2">
                      Ideias para novas funcionalidades ou melhorias na ferramenta.
                    </p>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-emerald-900">Correções de conteúdo</h3>
                    <p className="text-emerald-700 leading-relaxed mt-2">
                      Encontrou alguma informação incorreta? Nos avise!
                    </p>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-emerald-900">Parcerias</h3>
                    <p className="text-emerald-700 leading-relaxed mt-2">
                      Propostas de parceria ou colaboração.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900">Informações de contato</h2>
                
                <div className="mt-6 space-y-4">
                  <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-zinc-900">E-mail principal</h3>
                    <p className="text-zinc-700 mt-2">
                      <a
                        className="font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                        href="mailto:suportcalculo@gmail.com"
                      >
                        suportcalculo@gmail.com
                      </a>
                    </p>
                    <p className="text-zinc-600 text-sm mt-1">
                      Resposta em até 48 horas úteis
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-900">Tempo de resposta</h3>
                  <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                    <li>• E-mails: até 48 horas úteis</li>
                    <li>• Sugestões: analisadas semanalmente</li>
                    <li>• Bugs críticos: prioridade máxima</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-8">
              <h2 className="text-xl font-semibold text-zinc-900">Aviso importante</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-4">
                <p className="text-amber-900 font-semibold mb-2">Limitações do nosso suporte:</p>
                <ul className="text-amber-700 leading-relaxed space-y-2">
                  <li>• Não oferecemos aconselhamento médico ou diagnóstico</li>
                  <li>• Não interpretamos resultados individuais de IMC</li>
                  <li>• Não recomendamos dietas ou tratamentos específicos</li>
                  <li>• Para decisões de saúde, consulte sempre um profissional qualificado</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-zinc-900">Antes de entrar em contato</h2>
              <p className="text-zinc-700 leading-relaxed mt-2">
                Verifique se sua dúvida já foi respondida em nosso blog:
              </p>
              <div className="mt-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
                >
                  Ver artigos do blog →
                </Link>
              </div>
            </div>

            <div className="mt-8 bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Agradecemos seu feedback!</h3>
              <p className="text-emerald-700 leading-relaxed">
                Cada mensagem nos ajuda a melhorar nossa ferramenta e oferecer um serviço cada vez melhor para todos os brasileiros. Sua opinião é fundamental para nós.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
