import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Como perder peso de forma saudável | Guia prático 2024',
  description: 'Dicas práticas e seguras para perder peso sem dietas radicais. Aprenda estratégias sustentáveis baseadas em ciência para alcançar seu peso ideal.',
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
              Como perder peso de forma saudável
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Publicado em 12 de maio de 2024 • 6 minutos de leitura
            </p>
          </header>

          <div className="mt-8 prose prose-emerald max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">Perder peso não precisa ser sofrimento</h2>
            <p className="text-zinc-700 leading-relaxed">
              A maioria das pessoas que tenta perder peso acaba desistindo porque adota abordagens extremas e insustentáveis. Dietas radicais, cortes completos de grupos alimentares e exercícios excessivos levam à frustração e ao efeito sanfona.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A chave para perder peso de forma saudável e definitiva é focar em mudanças graduais que você possa manter para sempre. Este guia mostra estratégias comprovadas pela ciência para alcançar seu peso ideal sem sacrificar sua qualidade de vida.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Os princípios fundamentais</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">1. Déficit calórico moderado</h3>
            <p className="text-zinc-700 leading-relaxed">
              Para perder peso, você precisa consumir menos calorias do que gasta. Mas o segredo é o déficit moderado:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-4">
              <p className="text-emerald-900">
                <strong>Regra de ouro:</strong> Crie um déficit de 300-500 calorias por dia
              </p>
              <p className="text-emerald-700 text-sm mt-1">
                Isso resulta em perda de 0,5-1kg por semana - a taxa mais sustentável
              </p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Déficits maiores que 1000 calorias por dia levam à perda de massa muscular, metabolismo lento e reganho de peso.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">2. Nutrientes em equilíbrio</h3>
            <p className="text-zinc-700 leading-relaxed">
              Não se trata apenas de contar calorias, mas de escolher os nutrientes certos:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Proteínas:</strong> 25-30% das calorias totais. Ajudam a preservar músculos e aumentam a saciedade.</li>
              <li><strong>Carboidratos:</strong> 40-50% das calorias. Prefira complexos (grãos integrais, vegetais).</li>
              <li><strong>Gorduras:</strong> 20-30% das calorias. Foque em gorduras saudáveis (abacate, azeite, nozes).</li>
              <li><strong>Fibras:</strong> Mínimo 25g por dia. Aumentam a saciedade e melhoram a digestão.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">3. Hidratação adequada</h3>
            <p className="text-zinc-700 leading-relaxed">
              A água é essencial para o metabolismo e controle do apetite:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Beba 2-3 litros de água por dia</li>
              <li>Um copo de água antes das refeições reduz o apetite</li>
              <li>Às vezes, a sede é confundida com fome</li>
              <li>A água melhora o funcionamento do metabolismo em até 3%</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Estratégias alimentares práticas</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Coma mais, não menos</h3>
            <p className="text-zinc-700 leading-relaxed">
              Parece contraintuitivo, mas você pode comer mais volume com menos calorias:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Vegetais:</strong> Preencha metade do prato com vegetais não amiláceos</li>
              <li><strong>Sopas e caldos:</strong> Aumentam a saciedade com poucas calorias</li>
              <li><strong>Frutas:</strong> Substituam doces industrializados</li>
              <li><strong>Grãos integrais:</strong> Mais fibra e nutrientes que refinados</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Controle de porções inteligente</h3>
            <p className="text-zinc-700 leading-relaxed">
              Você não precisa pesar tudo, mas use referências visuais:
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <ul className="text-zinc-700 text-sm">
                <li>• <strong>Proteína:</strong> tamanho da palma da mão</li>
                <li>• <strong>Carboidratos:</strong> punho fechado</li>
                <li>• <strong>Vegetais:</strong> duas mãos juntas</li>
                <li>• <strong>Gorduras:</strong> polegar</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Planejamento de refeições</h3>
            <p className="text-zinc-700 leading-relaxed">
              Planejar evita decisões impulsivas:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Prepare lanches saudáveis para levar</li>
              <li>Cozinhe em lote no fim de semana</li>
              <li>Tenha sempre opções saudáveis disponíveis</li>
              <li>Nunca faça compras com fome</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">O papel dos exercícios</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Combinação ideal</h3>
            <p className="text-zinc-700 leading-relaxed">
              Exercícios aceleram a perda de peso e melhoram a composição corporal:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Cardio:</strong> 150 minutos por semana moderado ou 75 minutos intenso</li>
              <li><strong>Força:</strong> 2-3 vezes por semana, todos os grupos musculares</li>
              <li><strong>Atividades diárias:</strong> 8.000-10.000 passos por dia</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Comece devagar</h3>
            <p className="text-zinc-700 leading-relaxed">
              Se você está sedentário:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Semana 1-2: Caminhadas de 15-20 minutos diários</li>
              <li>Semana 3-4: Aumente para 30 minutos</li>
              <li>Semana 5-6: Introduza exercícios leves de força</li>
              <li>Semana 7+: Aumente gradualmente a intensidade</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Sono e estresse: os fatores esquecidos</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Sono de qualidade</h3>
            <p className="text-zinc-700 leading-relaxed">
              Dormir mal sabot seus esforços:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Menos de 6 horas aumenta os hormônios da fome</li>
              <li>Reduz o metabolismo em até 20%</li>
              <li>Aumenta os desejos por alimentos calóricos</li>
              <li>Objetivo: 7-9 horas de sono por noite</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Gerenciamento do estresse</h3>
            <p className="text-zinc-700 leading-relaxed">
              O estresse crônico eleva o cortisol, que:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Aumenta o apetite, especialmente por comfort food</li>
              <li>Promove acúmulo de gordura abdominal</li>
              <li>Dificulta a perda de peso mesmo com dieta</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Soluções:</strong> meditação, yoga, caminhadas na natureza, hobbies relaxantes.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">O que evitar a todo custo</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Dietas da moda</h3>
            <p className="text-zinc-700 leading-relaxed">
              Evite dietas que:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Eliminam grupos alimentares inteiros</li>
              <li>Prometem perda rápida (>2kg por semana)</li>
              <li>Restringem calorias abaixo de 1200 por dia</li>
              <li>Exigem suplementos caros</li>
              <li>Não são sustentáveis a longo prazo</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Armadilhas comportamentais</h3>
            <p className="text-zinc-700 leading-relaxed">
              Cuidado com:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Comer emocional (estresse, tédio, tristeza)</li>
              <li>Comer assistindo TV ou no celular</li>
              <li>Pular refeições (leva a excessos depois)</li>
              <li>Recompensas alimentares excessivas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Monitoramento e ajustes</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Como medir o progresso</h3>
            <p className="text-zinc-700 leading-relaxed">
              Não confie apenas na balança:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Medições corporais (cintura, quadril)</li>
              <li>Fotos de progresso mensais</li>
              <li>Como suas roupas estão servindo</li>
              <li>Níveis de energia e bem-estar</li>
              <li>Resultados de exames de sangue</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Plataus são normais</h3>
            <p className="text-zinc-700 leading-relaxed">
              Todo mundo enfrenta platôs de perda de peso. Não desista!
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Reavalie suas calorias (talvez você precise menos agora)</li>
              <li>Varie os exercícios</li>
              <li>Verifique seu sono e estresse</li>
              <li>Seja paciente - pode durar 2-4 semanas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Mantendo o peso perdido</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">A fase mais importante</h3>
            <p className="text-zinc-700 leading-relaxed">
              Manter é mais difícil que perder. Estratégias:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li>Continue monitorando seu peso semanalmente</li>
              <li>Mantenha hábitos saudáveis como estilo de vida</li>
              <li>Permita-se flexibilidade ocasional</li>
              <li>Encontre um sistema de suporte (amigos, grupos, profissional)</li>
              <li>Lembre-se por que você começou esta jornada</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Perder peso de forma saudável é uma maratona, não uma corrida. Foque em progresso, não perfeição. Cada pequena mudança conta e se acumula ao longo do tempo.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Lembre-se que seu valor como pessoa não está no seu peso. O objetivo é saúde, energia e bem-estar - o peso é apenas uma consequência desses hábitos saudáveis.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Seja paciente consigo mesmo, celebre pequenas vitórias e não hesite em procurar ajuda profissional quando necessário. Você consegue!
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Pronto para começar?</strong> Use nossa{' '}
                <Link href="/" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  calculadora de IMC
                </Link>
                {' '}para saber seu ponto de partida e acompanhar seu progresso.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
