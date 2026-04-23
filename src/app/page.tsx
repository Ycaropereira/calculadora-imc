"use client";

import { useMemo, useState } from "react";

type Sexo = "M" | "F";

type Faixa = {
  min: number;
  max: number;
  label: string;
  color: string;
  descricao: string;
};

const faixasAdulto: Faixa[] = [
  {
    min: 0,
    max: 18.49,
    label: "Abaixo do peso",
    color: "text-sky-700",
    descricao:
      "Pode indicar baixo peso. Avalie com um profissional, principalmente se houver perda de peso não intencional.",
  },
  {
    min: 18.5,
    max: 24.99,
    label: "Peso normal",
    color: "text-emerald-700",
    descricao:
      "Faixa considerada adequada para a maioria dos adultos. Combine alimentação equilibrada e atividade física.",
  },
  {
    min: 25,
    max: 29.99,
    label: "Sobrepeso",
    color: "text-amber-700",
    descricao:
      "Pode indicar excesso de peso. Pequenas mudanças de hábitos já ajudam (sono, alimentação e movimento diário).",
  },
  {
    min: 30,
    max: 34.99,
    label: "Obesidade grau I",
    color: "text-red-700",
    descricao:
      "Risco aumentado para algumas condições de saúde. Procure acompanhamento para um plano individualizado.",
  },
  {
    min: 35,
    max: 39.99,
    label: "Obesidade grau II",
    color: "text-red-700",
    descricao:
      "Risco aumentado. Acompanhamento médico/nutricional é recomendado.",
  },
  {
    min: 40,
    max: Number.POSITIVE_INFINITY,
    label: "Obesidade grau III",
    color: "text-red-700",
    descricao:
      "Risco elevado. Procure acompanhamento médico para avaliação e conduta adequadas.",
  },
];

function parseNumber(value: string): number {
  const normalized = value.replace(",", ".");
  const n = Number(normalized);
  return Number.isFinite(n) ? n : 0;
}

function round(valor: number, casas: number): number {
  const fator = 10 ** casas;
  return Math.round(valor * fator) / fator;
}

function classificarImc(imc: number): Faixa {
  const faixa = faixasAdulto.find((f) => imc >= f.min && imc <= f.max);
  return (
    faixa ?? {
      min: 0,
      max: Number.POSITIVE_INFINITY,
      label: "Não classificado",
      color: "text-zinc-900",
      descricao: "Não foi possível classificar.",
    }
  );
}

export default function Home() {
  const [pesoKg, setPesoKg] = useState("80");
  const [alturaCm, setAlturaCm] = useState("175");
  const [sexo, setSexo] = useState<Sexo>("M");
  const [idade, setIdade] = useState("30");

  const calculo = useMemo(() => {
    const peso = parseNumber(pesoKg);
    const altura = parseNumber(alturaCm) / 100;
    const idadeNum = parseNumber(idade);

    const valido = peso > 0 && altura > 0.5 && altura < 2.5;
    const imc = valido ? peso / (altura * altura) : 0;

    const faixa = classificarImc(imc);

    const pesoMin = valido ? 18.5 * (altura * altura) : 0;
    const pesoMax = valido ? 24.9 * (altura * altura) : 0;

    const avisoIdade =
      idadeNum > 0 && idadeNum < 18
        ? "Para crianças e adolescentes, a interpretação do IMC deve ser feita por percentis (idade/sexo)."
        : idadeNum > 65
          ? "Em idosos, a interpretação do IMC pode variar. Considere avaliação profissional."
          : "";

    return {
      valido,
      peso,
      altura,
      idadeNum,
      imc: valido ? round(imc, 2) : 0,
      faixa,
      pesoMin: valido ? round(pesoMin, 1) : 0,
      pesoMax: valido ? round(pesoMax, 1) : 0,
      avisoIdade,
    };
  }, [pesoKg, alturaCm, idade]);

  const avisoSexo =
    "O sexo é usado apenas para contexto. O IMC é uma medida geral e não diferencia massa magra e gordura.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Calculadora de IMC
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700">
            Calcule seu <strong>IMC (Índice de Massa Corporal)</strong> e veja a
            classificação, a faixa considerada saudável e dicas rápidas.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Dados</h2>

            <div className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-zinc-700">Peso (kg)</span>
                  <input
                    className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    type="text"
                    inputMode="decimal"
                    value={pesoKg}
                    onChange={(e) => setPesoKg(e.target.value)}
                    placeholder="Ex: 80"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-zinc-700">Altura (cm)</span>
                  <input
                    className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    type="text"
                    inputMode="numeric"
                    value={alturaCm}
                    onChange={(e) => setAlturaCm(e.target.value)}
                    placeholder="Ex: 175"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-zinc-700">Sexo</span>
                  <select
                    className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value as Sexo)}
                  >
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-zinc-700">Idade</span>
                  <input
                    className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    type="number"
                    min={0}
                    step={1}
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    placeholder="Ex: 30"
                  />
                </label>
              </div>

              <div className="rounded-xl bg-zinc-50 p-4">
                <p className="text-sm text-zinc-700">
                  <strong>Contexto:</strong> {sexo === "M" ? "masculino" : "feminino"}.
                </p>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{avisoSexo}</p>
                {calculo.avisoIdade ? (
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                    {calculo.avisoIdade}
                  </p>
                ) : null}
              </div>

              <p className="text-xs text-zinc-500 leading-relaxed">
                Observação: IMC é um indicador populacional. Atletas e pessoas com muita
                massa muscular podem ter IMC alto sem excesso de gordura.
              </p>
            </div>
          </section>

          <section className="grid gap-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-900">Resultado</h2>

              {!calculo.valido ? (
                <p className="mt-3 text-zinc-700">
                  Informe peso e altura válidos para calcular seu IMC.
                </p>
              ) : (
                <div className="mt-5 grid gap-4">
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-sm text-zinc-700">Seu IMC</p>
                    <p className="mt-1 text-3xl font-extrabold text-zinc-900">
                      {calculo.imc}
                    </p>
                    <p className={`mt-2 text-base font-semibold ${calculo.faixa.color}`}>
                      {calculo.faixa.label}
                    </p>
                    <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                      {calculo.faixa.descricao}
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-200 bg-white p-4">
                    <p className="text-sm font-medium text-zinc-900">Faixa saudável (adultos)</p>
                    <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                      Para a sua altura ({round(calculo.altura * 100, 0)} cm), a faixa de
                      peso correspondente a IMC entre <strong>18,5</strong> e <strong>24,9</strong>
                      é aproximadamente:
                    </p>
                    <p className="mt-2 text-lg font-bold text-emerald-700">
                      {calculo.pesoMin} kg a {calculo.pesoMax} kg
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-900">Dicas rápidas</h2>
              <div className="mt-4 grid gap-3 text-sm text-zinc-700">
                <p>
                  1) Foque em consistência: pequenas mudanças por 8 a 12 semanas valem mais do
                  que dietas radicais.
                </p>
                <p>
                  2) Priorize proteína e fibras nas refeições para melhorar saciedade.
                </p>
                <p>3) Caminhadas diárias e treino de força ajudam muito na composição corporal.</p>
                <p>
                  4) Se houver histórico de doença, gestação ou condições específicas,
                  procure avaliação profissional.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900">Tabela de classificação do IMC (adultos)</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="text-left text-sm text-zinc-600">
                  <th className="border-b border-zinc-200 pb-3 pr-4">IMC</th>
                  <th className="border-b border-zinc-200 pb-3">Classificação</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {faixasAdulto.map((f) => (
                  <tr key={f.label} className="align-top">
                    <td className="border-b border-zinc-100 py-3 pr-4 text-zinc-700">
                      {Number.isFinite(f.max)
                        ? `${f.min.toFixed(2).replace(/\.00$/, "")} a ${f.max
                            .toFixed(2)
                            .replace(/\.00$/, "")}`
                        : `≥ ${f.min.toFixed(0)}`}
                    </td>
                    <td className="border-b border-zinc-100 py-3">
                      <span className={`font-semibold ${f.color}`}>{f.label}</span>
                      <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{f.descricao}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-zinc-900">Perguntas frequentes (FAQ)</h2>
          <div className="mt-6 grid gap-5">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">O que é IMC?</h3>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                O IMC (Índice de Massa Corporal) é uma relação entre peso e altura. Ele ajuda
                a estimar se uma pessoa está em uma faixa de peso considerada saudável.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">IMC alto significa gordura?</h3>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                Nem sempre. O IMC não diferencia massa muscular de gordura corporal. Atletas
                ou pessoas com maior massa magra podem ter IMC elevado.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">Qual é o IMC ideal?</h3>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                Para adultos, a faixa geralmente considerada saudável é entre <strong>18,5</strong>
                e <strong>24,9</strong>. Porém, isso pode variar por contexto e saúde individual.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">IMC serve para crianças?</h3>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
                Para crianças e adolescentes, o IMC deve ser interpretado por curvas e
                percentis específicos de idade e sexo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
