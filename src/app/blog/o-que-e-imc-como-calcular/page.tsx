import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'O que é IMC e como calcular? | Guia Completo 2024',
  description: 'Aprenda o que é IMC (Índice de Massa Corporal), sua importância para a saúde, como calcular corretamente e interpretar os resultados.',
};

export default function Post() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-100">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <nav className="mb-6">
          <Link 
            href="/blog"
            className="text-emerald-700 hover:text-emerald-800 text-sm font-medium transition-colors"
          >
            ← Voltar para o blog
          </Link>
        </nav>

        <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              O que é IMC e como calcular?
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Publicado em 12 de maio de 2024 • 5 minutos de leitura
            </p>
          </header>

          <div className="mt-8 prose prose-emerald max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">O que é IMC?</h2>
            <p className="text-zinc-700 leading-relaxed">
              O <strong>IMC (Índice de Massa Corporal)</strong> é uma medida internacional utilizada para avaliar se uma pessoa está em um peso saudável em relação à sua altura. Criado no século XIX pelo matemático belga Adolphe Quetelet, o IMC se tornou uma ferramenta fundamental na medicina moderna para triagem inicial de problemas relacionados ao peso.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              O cálculo é simples: divide-se o peso (em quilogramas) pela altura (em metros) ao quadrado. O resultado é um número que indica em qual faixa de classificação você se encontra, desde abaixo do peso até obesidade.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Por que o IMC é importante?</h2>
            <p className="text-zinc-700 leading-relaxed">
              O IMC é importante porque serve como um indicador preliminar de possíveis problemas de saúde. Pessoas com IMC muito baixo ou muito elevado têm maior risco de desenvolver diversas condições, como:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Doenças cardiovasculares</li>
              <li>Diabetes tipo 2</li>
              <li>Pressão alta</li>
              <li>Problemas nas articulações</li>
              <li>Dificuldades respiratórias</li>
              <li>Alguns tipos de câncer</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              No entanto, é importante entender que o IMC é apenas uma ferramenta de triagem. Ele não diagnostica doenças e deve ser interpretado em conjunto com outros fatores de saúde.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Como calcular o IMC corretamente?</h2>
            <p className="text-zinc-700 leading-relaxed">
              O cálculo do IMC é direto e pode ser feito em casa. Você só precisa de duas informações: seu peso e sua altura.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Fórmula do IMC</h3>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-4">
              <p className="font-mono text-center text-emerald-900">
                IMC = Peso (kg) ÷ [Altura (m)]²
              </p>
            </div>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Passo a passo</h3>
            <ol className="list-decimal pl-6 text-zinc-700 leading-relaxed">
              <li>Meça seu peso em quilogramas (use uma balança confiável)</li>
              <li>Meça sua altura em metros (ex: 1,75m para 175cm)</li>
              <li>Eleva sua altura ao quadrado (ex: 1,75 × 1,75 = 3,0625)</li>
              <li>Divide seu peso pelo resultado (ex: 70 ÷ 3,0625 = 22,86)</li>
            </ol>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Exemplo prático</h3>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700">
                <strong>Pessoa:</strong> 70kg, 1,75m<br />
                <strong>Cálculo:</strong> 70 ÷ (1,75 × 1,75) = 70 ÷ 3,0625 = 22,86<br />
                <strong>IMC:</strong> 22,9 (classificado como peso normal)
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Interpretação dos resultados</h2>
            <p className="text-zinc-700 leading-relaxed">
              Após calcular seu IMC, você precisa interpretar o resultado. A Organização Mundial da Saúde estabeleceu as seguintes faixas para adultos:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Abaixo de 18,5:</strong> Abaixo do peso</li>
              <li><strong>18,5 a 24,9:</strong> Peso normal</li>
              <li><strong>25,0 a 29,9:</strong> Sobrepeso</li>
              <li><strong>30,0 a 34,9:</strong> Obesidade grau I</li>
              <li><strong>35,0 a 39,9:</strong> Obesidade grau II</li>
              <li><strong>40,0 ou mais:</strong> Obesidade grau III</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Limitações do IMC</h2>
            <p className="text-zinc-700 leading-relaxed">
              Apesar de útil, o IMC tem limitações importantes que você deve conhecer:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Não diferencia massa muscular de gordura:</strong> Atletas podem ter IMC elevado por causa da massa muscular</li>
              <li><strong>Não considera distribuição de gordura:</strong> Não distingue entre gordura abdominal e subcutânea</li>
              <li><strong>Não é adequado para crianças:</strong> Crianças e adolescentes usam curvas de percentis</li>
              <li><strong>Não considera idade:</strong> Idosos podem ter interpretações diferentes</li>
              <li><strong>Não considera etnia:</strong> Diferentes grupos étnicos podem ter padrões distintos</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Quando procurar um profissional?</h2>
            <p className="text-zinc-700 leading-relaxed">
              Calcule seu IMC regularmente, mas não hesite em procurar um médico ou nutricionista se:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Seu IMC estiver muito abaixo ou acima da faixa normal</li>
              <li>Você tiver perda ou ganho de peso repentino</li>
              <li>Houver histórico de doenças crônicas na família</li>
              <li>Você estiver grávida ou planejando engravidar</li>
              <li>Tiver mais de 65 anos</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              O IMC é uma ferramenta valiosa e fácil de usar para monitorar seu peso em relação à altura. No entanto, deve ser visto como um indicador inicial, não como um diagnóstico definitivo. Use-o como ponto de partida para conversas com profissionais de saúde sobre seu bem-estar geral.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Lembre-se: saúde é mais do que números. Foco em alimentação equilibrada, atividade física regular e bem-estar emocional são igualmente importantes para uma vida saudável.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Pronto para calcular seu IMC?</strong> Use nossa{' '}
                <Link href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  calculadora online gratuita
                </Link>
                {' '}para obter resultados instantâneos e personalizados.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
