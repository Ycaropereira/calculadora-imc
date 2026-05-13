import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre nós | Calculadora IMC',
  description: 'Conheça nossa missão de fornecer ferramentas gratuitas e confiáveis para monitoramento de saúde e bem-estar através do Índice de Massa Corporal.',
};

export default function SobrePage() {
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
              Sobre a Calculadora IMC
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Ferramenta gratuita e confiável para seu monitoramento de saúde
            </p>
          </header>

          <div className="mt-8 prose prose-emerald max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">Nossa missão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Criamos esta calculadora de IMC para oferecer uma ferramenta gratuita, acessível e confiável para que qualquer pessoa possa monitorar sua saúde e bem-estar. Acreditamos que o acesso a informações de saúde de qualidade deve ser universal, independentemente de condição financeira ou localização.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Nosso objetivo é democratizar o acesso a ferramentas de saúde, permitindo que brasileiros de todas as regiões possam tomar decisões informadas sobre seu peso e bem-estar geral.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Por que criamos esta ferramenta?</h2>
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-900">Acessibilidade</h3>
                <p className="text-emerald-700 leading-relaxed mt-2">
                  Uma ferramenta online que funciona em qualquer dispositivo, sem necessidade de downloads ou cadastros, disponível 24/7 para todos os brasileiros.
                </p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-900">Precisão</h3>
                <p className="text-emerald-700 leading-relaxed mt-2">
                  Cálculos baseados nas fórmulas oficiais da Organização Mundial da Saúde, com explicações claras e contextuais para cada resultado.
                </p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-900">Educação</h3>
                <p className="text-emerald-700 leading-relaxed mt-2">
                  Não apenas calculamos o IMC, mas educamos sobre o que significa, suas limitações e como usar essa informação de forma saudável.
                </p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-900">Confidencialidade</h3>
                <p className="text-emerald-700 leading-relaxed mt-2">
                  Seus dados nunca saem do seu navegador. Calculamos localmente para garantir total privacidade das suas informações pessoais.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Nossos valores</h2>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Transparência:</strong> Explicamos claramente como o IMC funciona e suas limitações</li>
              <li><strong>Responsabilidade:</strong> Incentivamos sempre a consulta profissional para decisões de saúde</li>
              <li><strong>Inclusão:</strong> Ferramenta acessível para pessoas de todas as idades e condições</li>
              <li><strong>Qualidade:</strong> Conteúdo revisado e baseado em fontes científicas confiáveis</li>
              <li><strong>Gratuidade:</strong> Acreditamos que saúde básica não deve ter barreiras financeiras</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">O IMC como ferramenta de saúde pública</h2>
            <p className="text-zinc-700 leading-relaxed">
              O Índice de Massa Corporal é uma das métricas mais utilizadas mundialmente para triagem de saúde. Embora tenha limitações, é um ponto de partida valioso para identificar possíveis problemas relacionados ao peso.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              No Brasil, onde crescentes taxas de sobrepeso e obesidade representam um desafio de saúde pública, ferramentas como esta ajudam na conscientização e prevenção de doenças crônicas associadas ao excesso de peso.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Compromisso com a precisão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Mantemos nossa calculadora atualizada com as diretrizes mais recentes da:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Organização Mundial da Saúde (OMS)</li>
              <li>Ministério da Saúde do Brasil</li>
              <li>Sociedade Brasileira de Endocrinologia e Metabologia</li>
              <li>Literatura científica atualizada sobre obesidade e nutrição</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Nossa equipe</h2>
            <p className="text-zinc-700 leading-relaxed">
              Somos um grupo dedicado de profissionais e desenvolvedores apaixonados por saúde digital. Nossa equipe inclui especialistas em:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Desenvolvimento de software e saúde digital</li>
              <li>Nutrição e ciências da nutrição</li>
              <li>Educação em saúde</li>
              <li>Design de experiência do usuário</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Impacto que buscamos</h2>
            <p className="text-zinc-700 leading-relaxed">
              Queremos que cada visita à nossa calculadora resulte em:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Maior consciência sobre a importância do peso saudável</li>
              <li>Compreensão sobre limitações e uso adequado do IMC</li>
              <li>Motivação para buscar acompanhamento profissional quando necessário</li>
              <li>Adoção de hábitos mais saudáveis</li>
              <li>Prevenção de doenças crônicas relacionadas ao peso</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Transparência e financiamento</h2>
            <p className="text-zinc-700 leading-relaxed">
              Esta ferramenta é mantida através de publicidade, o que nos permite oferecê-la gratuitamente para todos os usuários. Nosso compromisso é:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Nunca cobrar pelo uso da calculadora</li>
              <li>Nunca vender seus dados pessoais</li>
              <li>Manter publicidade discreta e não invasiva</li>
              <li>Ser transparentes sobre nosso modelo de negócio</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Feedback e melhorias</h2>
            <p className="text-zinc-700 leading-relaxed">
              Estamos sempre buscando melhorar. Se você tiver sugestões, encontrou algum problema ou quer compartilhar sua experiência, adoraríamos ouvir. Seu feedback nos ajuda a criar uma ferramenta cada vez melhor para todos os brasileiros.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Aviso importante</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <p className="text-amber-900 font-semibold mb-2">Lembre-se sempre:</p>
              <p className="text-amber-700 leading-relaxed">
                Esta calculadora é uma ferramenta de triagem e educação, não substitui consultas médicas. Sempre procure um profissional de saúde para diagnóstico, tratamento e decisões importantes sobre sua saúde.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Junte-se a nós</h2>
            <p className="text-zinc-700 leading-relaxed">
              Obrigado por confiar em nossa ferramenta para monitorar sua saúde. Juntos, podemos construir um Brasil mais saudável e consciente sobre a importância do equilíbrio e bem-estar.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Sua saúde é nosso compromisso. Sua confiança é nossa maior responsabilidade.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Pronto para calcular?</strong> Use nossa{' '}
                <Link href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  calculadora de IMC gratuita
                </Link>
                {' '}e comece a monitorar sua saúde hoje mesmo.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
