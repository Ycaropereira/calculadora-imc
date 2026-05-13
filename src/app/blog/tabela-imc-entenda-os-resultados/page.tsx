import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tabela IMC: entenda os resultados | Faixas e Classificações',
  description: 'Guia completo da tabela de IMC com todas as faixas de classificação, o que cada resultado significa para sua saúde e quando se preocupar.',
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
              Tabela IMC: entenda os resultados
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Publicado em 12 de maio de 2024 • 4 minutos de leitura
            </p>
          </header>

          <div className="mt-8 prose prose-emerald max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">A tabela oficial de IMC</h2>
            <p className="text-zinc-700 leading-relaxed">
              A tabela de IMC (Índice de Massa Corporal) é uma ferramenta padronizada pela Organização Mundial da Saúde para classificar o peso dos adultos em relação à sua altura. Compreender cada faixa é fundamental para interpretar corretamente seu resultado e tomar decisões informadas sobre sua saúde.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Tabela de Classificação do IMC (Adultos)</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left text-sm text-emerald-800">
                    <th className="border-b border-emerald-300 pb-2">IMC</th>
                    <th className="border-b border-emerald-300 pb-2">Classificação</th>
                    <th className="border-b border-emerald-300 pb-2">Risco à Saúde</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">&lt; 18,5</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-sky-700 font-semibold">Abaixo do peso</span></td>
                    <td className="border-b border-emerald-200 py-3">Baixo</td>
                  </tr>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">18,5 - 24,9</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-emerald-700 font-semibold">Peso normal</span></td>
                    <td className="border-b border-emerald-200 py-3">Médio (referência)</td>
                  </tr>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">25,0 - 29,9</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-amber-700 font-semibold">Sobrepeso</span></td>
                    <td className="border-b border-emerald-200 py-3">Aumentado</td>
                  </tr>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">30,0 - 34,9</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-red-700 font-semibold">Obesidade grau I</span></td>
                    <td className="border-b border-emerald-200 py-3">Moderado</td>
                  </tr>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">35,0 - 39,9</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-red-700 font-semibold">Obesidade grau II</span></td>
                    <td className="border-b border-emerald-200 py-3">Alto</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">≥ 40,0</td>
                    <td className="py-3"><span className="text-red-800 font-semibold">Obesidade grau III</span></td>
                    <td className="py-3">Muito alto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Análise detalhada de cada faixa</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Abaixo do peso (IMC &lt; 18,5)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Estar abaixo do peso pode indicar desnutrição, problemas de absorção de nutrientes ou outras condições médicas. Pessoas nesta faixa podem apresentar:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Fraqueza e fadiga constante</li>
              <li>Sistema imunológico enfraquecido</li>
              <li>Problemas de fertilidade</li>
              <li>Perda de massa muscular</li>
              <li>Osteoporose (perda de densidade óssea)</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Recomendação:</strong> Consulte um médico para investigar as causas e receber orientação sobre ganho de peso saudável.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Peso normal (IMC 18,5 - 24,9)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Esta é considerada a faixa ideal para a maioria dos adultos. Pessoas com IMC normal geralmente apresentam:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Menor risco de doenças crônicas</li>
              <li>Maior expectativa de vida</li>
              <li>Melhor função imunológica</li>
              <li>Níveis de energia mais estáveis</li>
              <li>Saúde reprodutiva otimizada</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Recomendação:</strong> Mantenha hábitos saudáveis de alimentação e exercícios para continuar nesta faixa.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Sobrepeso (IMC 25,0 - 29,9)</h3>
            <p className="text-zinc-700 leading-relaxed">
              O sobrepeso indica excesso de peso corporal, mas ainda não classificado como obesidade. Riscos associados:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Risco aumentado de diabetes tipo 2</li>
              <li>Pressão arterial elevada</li>
              <li>Colesterol desregulado</li>
              <li>Problemas nas articulações (joelhos, quadris)</li>
              <li>Apneia do sono</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Recomendação:</strong> Pequenas mudanças no estilo de vida podem levar de volta à faixa normal. Perder 5-10% do peso já traz benefícios significativos.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Obesidade grau I (IMC 30,0 - 34,9)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Primeiro nível de obesidade, com riscos moderados a altos para a saúde. Complicações comuns:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Risco significativo de doenças cardiovasculares</li>
              <li>Diabetes tipo 2 quase inevitável sem intervenção</li>
              <li>Doença hepática gordurosa</li>
              <li>Problemas respiratórios</li>
              <li>Dificuldades de mobilidade</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Recomendação:</strong> Acompanhamento médico e nutricional é essencial. Mudanças drásticas no estilo de vida são necessárias.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Obesidade grau II (IMC 35,0 - 39,9)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Obesidade severa com riscos altos. Complicações graves podem incluir:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Doença coronariana em estágio avançado</li>
              <li>Insuficiência cardíaca</li>
              <li>Derrame cerebral</li>
              <li>Cânceres relacionados à obesidade</li>
              <li>Expectativa de vida reduzida em 5-10 anos</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Recomendação:</strong> Tratamento médico intensivo necessário. Pode incluir medicamentos, terapia e, em alguns casos, cirurgia bariátrica.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Obesidade grau III (IMC ≥ 40,0)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Também chamada de obesidade mórbida, é a forma mais grave. Riscos muito altos:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Mortalidade aumentada significativamente</li>
              <li>Múltiplas comorbidades simultâneas</li>
              <li>Qualidade de vida severamente comprometida</li>
              <li>Limitações extremas de mobilidade</li>
              <li>Depressão e problemas psicológicos</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Recomendação:</strong> Tratamento multidisciplinar urgente. Cirurgia bariátrica frequentemente recomendada.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Fatores que modificam a interpretação</h2>
            <p className="text-zinc-700 leading-relaxed">
              A tabela de IMC não é absoluta. Vários fatores podem modificar como interpretar seu resultado:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Idade:</strong> Idosos podem ter IMC ligeiramente maior sem riscos</li>
              <li><strong>Etnia:</strong> Grupos asiáticos podem ter riscos com IMC mais baixo</li>
              <li><strong>Condição física:</strong> Atletas podem ter IMC alto por massa muscular</li>
              <li><strong>Condições médicas:</strong> Gravidez, amamentação, doenças crônicas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Quando se preocupar?</h2>
            <p className="text-zinc-700 leading-relaxed">
              Procure atenção médica se seu IMC estiver:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Abaixo de 17 (muito abaixo do peso)</li>
              <li>Acima de 30 (obesidade)</li>
              <li>Acima de 35 (obesidade severa)</li>
              <li>Se houver mudança rápida não planejada</li>
              <li>Se acompanhado de sintomas como fadiga extrema, dor ou dificuldades respiratórias</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              A tabela de IMC é uma ferramenta valiosa, mas lembre-se que saúde vai além dos números. Use-a como guia, não como sentença. O mais importante é manter um estilo de vida saudável, buscar equilíbrio e consultar profissionais quando necessário.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Cada pessoa é única, e o caminho para a saúde deve ser personalizado. Use o IMC como ponto de partida, não como destino final.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Quer saber seu IMC?</strong> Use nossa{' '}
                <Link href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  calculadora online
                </Link>
                {' '}para obter resultados instantâneos e comparar com esta tabela.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
