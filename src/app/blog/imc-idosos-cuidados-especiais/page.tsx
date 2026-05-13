import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IMC para idosos: cuidados especiais | Guia completo 2024',
  description: 'Como interpretar o IMC em pessoas mais velhas, quais faixas são adequadas para idosos e que cuidados especiais são necessários na avaliação do peso na terceira idade.',
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
              IMC para idosos: cuidados especiais
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Publicado em 12 de maio de 2024 • 4 minutos de leitura
            </p>
          </header>

          <div className="mt-8 prose prose-emerald max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">Por que o IMC é diferente para idosos?</h2>
            <p className="text-zinc-700 leading-relaxed">
              O Índice de Massa Corporal (IMC) é uma ferramenta útil, mas sua interpretação em idosos requer cuidados especiais. Com o envelhecimento, o corpo passa por mudanças significativas que afetam a composição corporal e, consequentemente, a forma como o IMC deve ser interpretado.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Este guia explica as particularidades do IMC na terceira idade, quais faixas são consideradas saudáveis para idosos, e que cuidados adicionais você deve tomar ao avaliar o peso de pessoas mais velhas.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Mudanças corporais com o envelhecimento</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Perda muscular natural</h3>
            <p className="text-zinc-700 leading-relaxed">
              A partir dos 30 anos, as pessoas perdem naturalmente 3-8% de massa muscular por década. Esse processo, chamado sarcopenia, acelera após os 60 anos. Consequências:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Metabolismo mais lento</li>
              <li>Menor força e mobilidade</li>
              <li>Risco aumentado de quedas</li>
              <li>Dificuldade nas atividades diárias</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Redução da altura</h3>
            <p className="text-zinc-700 leading-relaxed">
              Idosos geralmente perdem altura devido à compressão das vértebras e postura alterada. Uma perda de 2-5cm é comum e afeta diretamente o cálculo do IMC, tornando-o artificialmente mais alto.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Redistribuição de gordura</h3>
            <p className="text-zinc-700 leading-relaxed">
              Com a idade, a gordura tende a se acumular mais na área abdominal (gordura visceral), que é mais perigosa para a saúde do que a gordura subcutânea.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Faixas de IMC recomendadas para idosos</h2>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Tabela de IMC para Idosos (65+ anos)</h3>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-emerald-800">
                    <th className="border-b border-emerald-300 pb-2">IMC</th>
                    <th className="border-b border-emerald-300 pb-2">Classificação</th>
                    <th className="border-b border-emerald-300 pb-2">Recomendação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">&lt; 22</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-sky-700 font-semibold">Abaixo do peso</span></td>
                    <td className="border-b border-emerald-200 py-3">Atenção - risco de desnutrição</td>
                  </tr>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">22 - 27</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-emerald-700 font-semibold">Peso ideal</span></td>
                    <td className="border-b border-emerald-200 py-3">Faixa recomendada para idosos</td>
                  </tr>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">27 - 30</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-amber-700 font-semibold">Sobrepeso leve</span></td>
                    <td className="border-b border-emerald-200 py-3">Monitorar, pode ser protetor</td>
                  </tr>
                  <tr>
                    <td className="border-b border-emerald-200 py-3 font-medium">&gt; 30</td>
                    <td className="border-b border-emerald-200 py-3"><span className="text-red-700 font-semibold">Obesidade</span></td>
                    <td className="border-b border-emerald-200 py-3">Intervenção necessária</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
              <p className="text-amber-900">
                <strong>Importante:</strong> Note que a faixa "ideal" para idosos (22-27) é mais alta que para adultos jovens (18,5-24,9).
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Por que um IMC ligeiramente mais alto pode ser benéfico?</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Reserva nutricional</h3>
            <p className="text-zinc-700 leading-relaxed">
              Um pouco de peso extra funciona como reserva energética para:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Períodos de doença</li>
              <li>Recuperação pós-cirúrgica</li>
              <li>Estresse agudo</li>
              <li>Redução do apetite temporária</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Proteção óssea</h3>
            <p className="text-zinc-700 leading-relaxed">
              Peso ligeiramente maior está associado a:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Maior densidade óssea</li>
              <li>Menor risco de osteoporose</li>
              <li>Redução de fraturas por queda</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Maior sobrevida</h3>
            <p className="text-zinc-700 leading-relaxed">
              Estudos mostram que idosos com IMC entre 24-27 frequentemente apresentam menor mortalidade do que aqueles com IMC "normal" mais baixo.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Riscos específicos do peso em idosos</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Riscos do peso muito baixo (IMC &lt; 22)</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Desnutrição:</strong> Deficiência de vitaminas e minerais</li>
              <li><strong>Sarcopenia agravada:</strong> Perda muscular acelerada</li>
              <li><strong>Imunidade enfraquecida:</strong> Maior risco de infecções</li>
              <li><strong>Fraturas:</strong> Menor proteção óssea</li>
              <li><strong>Delírio e confusão:</strong> Associados à desnutrição</li>
              <li><strong>Menor expectativa de vida:</strong> Risco aumentado de mortalidade</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Riscos do excesso de peso (IMC &gt; 30)</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Doenças cardiovasculares:</strong> Pressão alta, insuficiência cardíaca</li>
              <li><strong>Diabetes tipo 2:</strong> Risco aumentado significativamente</li>
              <li><strong>Mobilidade reduzida:</strong> Dificuldade para caminhar e levantar</li>
              <li><strong>Dor articular:</strong> Sobrecarga em joelhos e quadris</li>
              <li><strong>Apneia do sono:</strong> Problemas respiratórios noturnos</li>
              <li><strong>Demência:</strong> Associação com declínio cognitivo</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Avaliação completa do idoso</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Além do IMC</h3>
            <p className="text-zinc-700 leading-relaxed">
              Para idosos, o IMC deve ser apenas uma parte da avaliação. Considere também:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Circunferência abdominal:</strong> Máximo 88cm (mulheres) ou 102cm (homens)</li>
              <li><strong>Circunferência do braço:</strong> Indica reserva muscular</li>
              <li><strong>Força de preensão manual:</strong> Avalia massa muscular funcional</li>
              <li><strong>Velocidade de caminhada:</strong> Teste funcional importante</li>
              <li><strong>Teste "levanta e senta":</strong> Avalia força e equilíbrio</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Avaliação nutricional</h3>
            <p className="text-zinc-700 leading-relaxed">
              Sinais de alerta nutricional:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Perda de peso não intencional (mais de 5% em 6 meses)</li>
              <li>Falta de apetite persistente</li>
              <li>Dificuldade para mastigar ou engolir</li>
              <li>Comer sozinho frequentemente</li>
              <li>Depressão ou isolamento social</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Recomendações práticas</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Para idosos com IMC abaixo de 22</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Consulte um médico para investigar causas da perda de peso</li>
              <li>Procure um nutricionista especializado em geriatria</li>
              <li>Foque em alimentos calóricos mas nutritivos</li>
              <li>Considere suplementação se necessário</li>
              <li>Inclua exercícios de resistência para ganhar músculo</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Para idosos com IMC entre 22-27</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Mantenha o peso atual se estiver saudável</li>
              <li>Foque em manter massa muscular</li>
              <li>Pratique atividades físicas regularmente</li>
              <li>Monitore circunferência abdominal</li>
              <li>Mantenha exames de saúde em dia</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Para idosos com IMC acima de 30</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Busque acompanhamento médico e nutricional</li>
              <li>Perca peso lentamente (0,5kg por semana máximo)</li>
              <li>Preserve massa muscular durante a perda de peso</li>
              <li>Foque em alimentos nutritivos em porções menores</li>
              <li>Evite dietas muito restritivas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Cuidados especiais na medição</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Medindo altura corretamente</h3>
            <p className="text-zinc-700 leading-relaxed">
              Para idosos, use a altura medida recentemente, não a altura quando mais jovem. Se não conseguir medir:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Use a altura autorreportada subtraindo 2-3cm</li>
              <li>Meça a envergadura dos braços como alternativa</li>
              <li>Use altura do joelho em fórmulas específicas</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Medindo peso</h3>
            <p className="text-zinc-700 leading-relaxed">
              Desafios comuns e soluções:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Balanças inadequadas:</strong> Use balanças clínicas com capacidade para peso elevado</li>
              <li><strong>Dificuldade de ficar em pé:</strong> Cadeiras de balança ou balanças para deitar</li>
              <li><strong>Horário inconsistente:</strong> Meça sempre no mesmo horário, de preferência pela manhã</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              O IMC para idosos exige uma abordagem diferenciada e mais cuidadosa. As faixas ideais são mais altas, e um pouco de peso extra pode até ser protetor. No entanto, tanto o excesso quanto a falta de peso trazem riscos significativos que precisam ser monitorados.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Lembre-se que cada idoso é único, com histórico de saúde, medicamentos e condições específicas. O IMC deve ser usado como ferramenta complementar, nunca como único critério de avaliação. Acompanhamento médico regular e uma abordagem holística são essenciais para manter a saúde e qualidade de vida na terceira idade.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              O mais importante não é o número na balança, mas sim a funcionalidade, bem-estar e capacidade de aproveitar a vida com saúde e independência.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Calculando IMC de idosos?</strong> Use nossa{' '}
                <Link href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  calculadora online
                </Link>
                {' '}mas lembre-se de interpretar os resultados com as faixas adequadas para a terceira idade.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
