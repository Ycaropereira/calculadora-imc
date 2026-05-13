import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Calculadora IMC | Artigos sobre saúde e bem-estar',
  description: 'Aprenda tudo sobre IMC, saúde, nutrição e bem-estar com nossos guias completos e artigos especializados.',
};

const posts = [
  {
    slug: 'o-que-e-imc-como-calcular',
    title: 'O que é IMC e como calcular?',
    excerpt: 'Entenda o Índice de Massa Corporal, sua importância para a saúde e como fazer o cálculo correto.',
    date: '2024-05-12',
    readTime: '5 min',
  },
  {
    slug: 'tabela-imc-entenda-os-resultados',
    title: 'Tabela IMC: entenda os resultados',
    excerpt: 'Guia completo sobre as faixas de IMC e o que cada classificação significa para sua saúde.',
    date: '2024-05-12',
    readTime: '4 min',
  },
  {
    slug: 'como-perder-peso-forma-saudavel',
    title: 'Como perder peso de forma saudável',
    excerpt: 'Dicas práticas e seguras para perder peso sem dietas radicais, focando em mudanças sustentáveis.',
    date: '2024-05-12',
    readTime: '6 min',
  },
  {
    slug: 'diferenca-imc-percentual-gordura',
    title: 'Diferença entre IMC e percentual de gordura',
    excerpt: 'Entenda por que o IMC não é suficiente para avaliar a composição corporal e quando usar outras métricas.',
    date: '2024-05-12',
    readTime: '5 min',
  },
  {
    slug: 'imc-idosos-cuidados-especiais',
    title: 'IMC para idosos: cuidados especiais',
    excerpt: 'Como interpretar o IMC em pessoas mais velhas e quais considerações especiais são necessárias.',
    date: '2024-05-12',
    readTime: '4 min',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Blog sobre IMC e Saúde
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700">
            Guias completos, dicas práticas e artigos especializados sobre Índice de Massa Corporal e bem-estar.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="mt-3 text-xl font-semibold text-zinc-900">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                Ler artigo completo →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
