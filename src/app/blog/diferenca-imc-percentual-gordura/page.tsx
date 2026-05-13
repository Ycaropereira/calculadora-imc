import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diferença entre IMC e percentual de gordura | Qual é melhor?',
  description: 'Entenda por que o IMC não é suficiente para avaliar a composição corporal e quando usar o percentual de gordura. Compare as duas métricas e saiba qual escolher.',
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
              Diferença entre IMC e percentual de gordura
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Publicado em 12 de maio de 2024 • 5 minutos de leitura
            </p>
          </header>

          <div className="mt-8 prose prose-emerald max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">IMC vs Percentual de Gordura: qual é melhor?</h2>
            <p className="text-zinc-700 leading-relaxed">
              Muitas pessoas usam o IMC (Índice de Massa Corporal) como única métrica para avaliar seu peso e saúde, mas essa abordagem é limitada. O percentual de gordura corporal oferece uma visão mais detalhada e precisa da sua composição corporal.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Neste artigo, vamos explorar as diferenças entre essas duas métricas, quando usar cada uma, e por que a combinação delas oferece a melhor avaliação da sua saúde.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">O que cada métrica mede?</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">IMC (Índice de Massa Corporal)</h3>
            <p className="text-zinc-700 leading-relaxed">
              O IMC é uma relação simples entre peso e altura:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-4">
              <p className="font-mono text-center text-emerald-900">
                IMC = Peso (kg) ÷ Altura² (m)
              </p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              <strong>O que ele mede:</strong> Relação geral entre peso e altura<br />
              <strong>O que não mede:</strong> Composição corporal (músculo vs gordura)
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Percentual de Gordura Corporal</h3>
            <p className="text-zinc-700 leading-relaxed">
              O percentual de gordura mede a proporção de massa gorda em relação ao peso corporal total:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-4">
              <p className="font-mono text-center text-emerald-900">
                % Gordura = (Massa Gorda ÷ Peso Total) × 100
              </p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              <strong>O que ele mede:</strong> Proporção exata de gordura no corpo<br />
              <strong>O que não mede:</strong> Distribuição da gordura ou saúde geral
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">As limitações do IMC</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">O problema dos atletas</h3>
            <p className="text-zinc-700 leading-relaxed">
              O IMC frequentemente classifica atletas como "sobrepeso" ou "obesos":
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700">
                <strong>Exemplo:</strong> Um jogador de futebol profissional<br />
                • Altura: 1,85m • Peso: 95kg<br />
                • IMC: 27,8 (classificado como sobrepeso)<br />
                • Percentual de gordura: 12% (excelente)
              </p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              O IMC não distingue entre massa muscular densa e gordura. Músculo pesa mais que gordura, então pessoas musculosas podem ter IMC elevado mesmo estando em excelente forma.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">O problema do "skinny fat"</h3>
            <p className="text-zinc-700 leading-relaxed">
              O oposto também é verdadeiro. Pessoas com IMC normal podem ter excesso de gordura:
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700">
                <strong>Exemplo:</strong> Pessoa sedentária<br />
                • Altura: 1,70m • Peso: 65kg<br />
                • IMC: 22,5 (peso normal)<br />
                • Percentual de gordura: 32% (elevado)
              </p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Essa condição, conhecida como "skinny fat" (magro gordo), apresenta riscos à saúde mesmo com IMC normal.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">As faixas de percentual de gordura</h2>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Faixas de Percentual de Gordura (Adultos)</h3>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-emerald-800">
                    <th className="border-b border-emerald-300 pb-2">Gênero</th>
                    <th className="border-b border-emerald-300 pb-2">Essencial</th>
                    <th className="border-b border-emerald-300 pb-2">Atleta</th>
                    <th className="border-b border-emerald-300 pb-2">Fitness</th>
                    <th className="border-b border-emerald-300 pb-2">Aceitável</th>
                    <th className="border-b border-emerald-300 pb-2">Obesidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">Mulheres</td>
                    <td className="border-b border-emerald-200 py-3">10-13%</td>
                    <td className="border-b border-emerald-200 py-3">14-20%</td>
                    <td className="border-b border-emerald-200 py-3">21-24%</td>
                    <td className="border-b border-emerald-200 py-3">25-31%</td>
                    <td className="border-b border-emerald-200 py-3">&gt;32%</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Homens</td>
                    <td className="py-3">2-5%</td>
                    <td className="py-3">6-13%</td>
                    <td className="py-3">14-17%</td>
                    <td className="py-3">18-24%</td>
                    <td className="py-3">&gt;25%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Como medir o percentual de gordura?</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Métodos profissionais</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>DEXA (Absorciometria de Raios-X de Dupla Energia):</strong> Considerado o padrão ouro, preciso e mede também densidade óssea</li>
              <li><strong>Bod Pod (Pletismografia por Deslocamento de Ar):</strong> Preciso, não invasivo, mede composição corporal completa</li>
              <li><strong>Hidrodensitometria (pesagem subaquática):</strong> Muito preciso, mas complexo de executar</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Métodos acessíveis</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Bioimpedância:</strong> Balanças e aparelhos que enviam corrente elétrica pelo corpo. Prático, mas pode variar com hidratação</li>
              <li><strong>Adipômetros:</strong> Mede espessura de dobras cutâneas. Barato, mas requer técnica correta</li>
              <li><strong>Medidas circunferenciais:</strong> Fórmulas baseadas em medidas de cintura, quadril e pescoço. Acessível, mas menos preciso</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Quando usar cada métrica?</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Use o IMC quando:</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Para triagem inicial em grandes populações</li>
              <li>Quando você precisa de uma estimativa rápida e fácil</li>
              <li>Para monitorar tendências gerais de peso ao longo do tempo</li>
              <li>Em consultas médicas de rotina como primeiro indicador</li>
              <li>Quando não há acesso a equipamentos especializados</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Use o percentual de gordura quando:</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Você é atleta ou pratica musculação intensamente</li>
              <li>Seu IMC está normal mas você visualmente tem excesso de gordura</li>
              <li>Está em um programa de perda de peso e quer monitorar perda de gordura vs músculo</li>
              <li>Precisa de avaliação mais precisa para competição esportiva</li>
              <li>Quer monitorar mudanças na composição corporal</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">A combinação perfeita</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Por que usar ambos?</h3>
            <p className="text-zinc-700 leading-relaxed">
              A combinação do IMC com o percentual de gordura oferece uma visão completa:
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700 font-semibold mb-2">Cenários possíveis:</p>
              <ul className="text-zinc-700 text-sm space-y-2">
                <li>• <strong>IMC normal + % gordura normal:</strong> Situação ideal</li>
                <li>• <strong>IMC alto + % gordura normal:</strong> Provavelmente musculoso</li>
                <li>• <strong>IMC normal + % gordura alto:</strong> "Skinny fat" - precisa de atenção</li>
                <li>• <strong>IMC alto + % gordura alto:</strong> Obesidade confirmada - precisa de intervenção</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Outras métricas complementares</h3>
            <p className="text-zinc-700 leading-relaxed">
              Para uma avaliação ainda mais completa, considere também:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Circunferência abdominal:</strong> Indica gordura visceral (perigosa)</li>
              <li><strong>Relação cintura-quadril:</strong> Avalia distribuição de gordura</li>
              <li><strong>Força muscular:</strong> Indica massa muscular funcional</li>
              <li><strong>Exames de sangue:</strong> Colesterol, glicose, triglicerídeos</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Implicações para a saúde</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Riscos do excesso de gordura</h3>
            <p className="text-zinc-700 leading-relaxed">
              Percentual de gordura elevado está associado a:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Doenças cardiovasculares</li>
              <li>Diabetes tipo 2</li>
              <li>Pressão alta</li>
              <li>Câncer (mama, cólon, próstata)</li>
              <li>Problemas nas articulações</li>
              <li>Apneia do sono</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Riscos da gordura muito baixa</h3>
            <p className="text-zinc-700 leading-relaxed">
              Percentual de gordura muito baixo também é perigoso:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Problemas hormonais (infertilidade, amenorreia)</li>
              <li>Sistema imunológico enfraquecido</li>
              <li>Osteoporose</li>
              <li>Fadiga crônica</li>
              <li>Distúrbios alimentares</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Recomendações práticas</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Para o público geral</h3>
            <p className="text-zinc-700 leading-relaxed">
              Comece com o IMC, mas não pare por aí:
            </p>
            <ol className="list-decimal pl-6 text-zinc-700 leading-relaxed">
              <li>Calcule seu IMC como ponto de partida</li>
              <li>Se IMC normal, verifique percentual de gordura se possível</li>
              <li>Meça sua circunferência abdominal (máximo: 88cm mulheres, 102cm homens)</li>
              <li>Considere como suas roupas servem e seu nível de energia</li>
              <li>Consulte um profissional para avaliação completa</li>
            </ol>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Para atletas e praticantes de musculação</h3>
            <p className="text-zinc-700 leading-relaxed">
              Dê prioridade ao percentual de gordura:
            </p>
            <ol className="list-decimal pl-6 text-zinc-700 leading-relaxed">
              <li>Use o IMC apenas como referência secundária</li>
              <li>Meça o percentual de gordura regularmente</li>
              <li>Foque em manter ou aumentar massa muscular</li>
              <li>Monitore força e performance, não apenas peso</li>
              <li>Trabalhe com profissionais de nutrição esportiva</li>
            </ol>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Nem o IMC nem o percentual de gordura isoladamente oferecem a imagem completa da sua saúde. O IMC é útil como triagem inicial rápida e fácil, mas o percentual de gordura oferece insights mais detalhados sobre sua composição corporal real.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A melhor abordagem é usar o IMC como ponto de partida e, quando possível, complementar com o percentual de gordura e outras métricas. Lembre-se que saúde é mais do que números - é sobre bem-estar geral, energia, função e qualidade de vida.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Use essas métricas como ferramentas para tomar decisões informadas sobre sua saúde, mas não como definição do seu valor ou como motivo para ansiedade. O objetivo é usar esses dados para otimizar sua saúde, não para se obcecar com números perfeitos.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Quer calcular seu IMC?</strong> Use nossa{' '}
                <Link href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  calculadora online
                </Link>
                {' '}e considere medir seu percentual de gordura para uma avaliação completa.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
