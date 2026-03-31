"use client";

import { useState } from "react";
import { Music, Coffee, Mic, MessageSquare, Utensils } from "lucide-react";

type Tipo = "plenaria" | "social" | "operacional" | "painel";

interface Item {
  horario: string;
  titulo: string;
  descricao?: string;
  palestrantes?: { nome: string; cargo: string }[];
  mediadores?: string[];
  tema?: string;
  tipo: Tipo;
}

const dia1: Item[] = [
  {
    horario: "20h",
    titulo: "Coquetel de Abertura da MFA",
    descricao: "Abertura oficial da Modal Fair Aracruz com coquetel de boas-vindas",
    tipo: "social",
  },
];

const dia2: Item[] = [
  {
    horario: "8h30",
    titulo: "Coffee-break",
    tipo: "social",
  },
  {
    horario: "9h",
    titulo: "Fala das Autoridades",
    descricao: "Exposição de Artes da Artista Plástica Maria Alice Furtado",
    tipo: "operacional",
  },
  {
    horario: "10h",
    titulo: "Palestra — Convidado Especial",
    tipo: "plenaria",
  },
  {
    horario: "14h",
    titulo: "1º Painel",
    tema: "Espírito Santo: Desafios Estruturais para um Mercado de Trabalho Competitivo e de Oportunidades para os próximos anos.",
    palestrantes: [
      { nome: "Roberta Kato", cargo: "CEO da Kato Consultoria Empresarial" },
      { nome: "Pablo Lira", cargo: "Diretor Geral do Instituto Jones dos Santos Neves" },
      { nome: "Glegson Ninz", cargo: "SENAC / FECOMÉRCIO" },
      { nome: "Rafael Henrique G. T. de Freitas", cargo: "FINDES" },
      { nome: "Jean Pedrini", cargo: "Câmara Municipal de Aracruz" },
    ],
    mediadores: ["Larissa Baroni", "Guilherme Loureiro"],
    tipo: "painel",
  },
  {
    horario: "15h",
    titulo: "2º Painel",
    tema: "PARKLOG – Plataforma de Exportação do ES.",
    palestrantes: [
      { nome: "Anderson Abreu", cargo: "Diretor Executivo do PARKLOG/ES" },
      { nome: "José Eduardo F. de Azevedo", cargo: "Secretário de Desenvolvimento Econômico de Aracruz" },
      { nome: "Valéria Becalli", cargo: "Diretora Executiva da AMEAR" },
      { nome: "Bruno Carlesso", cargo: "Diretor Jurídico da IMETAME" },
    ],
    mediadores: ["Maurício Xavier", "Filipe Loureiro"],
    tipo: "painel",
  },
];

const dia3: Item[] = [
  {
    horario: "8h30",
    titulo: "Coffee-break",
    tipo: "social",
  },
  {
    horario: "10h",
    titulo: "1º Painel",
    tema: "Portos: Motores da Economia Capixaba no Comércio Internacional.",
    palestrantes: [
      { nome: "Adriana Junger Lacerda", cargo: "Delegada da Alfândega da Receita Federal do ES" },
      { nome: "Christiane Menezes", cargo: "Gerente Executiva da Agência Nova ES" },
      { nome: "Carla Rios do Amaral", cargo: "Gerente Comercial da VPORTS" },
      { nome: "Luciana Mattar", cargo: "Advogada do Mattar Vilela Advogados Associados" },
    ],
    mediadores: ["Carla Fregona", "Eder Muller"],
    tipo: "painel",
  },
  {
    horario: "11h",
    titulo: "2º Painel",
    tema: "Raio-X do Comércio Exterior Capixaba e o Fim dos Incentivos Fiscais.",
    palestrantes: [
      { nome: "Samir Nemer", cargo: "Advogado do Furtado Nemer Advogados Associados" },
      { nome: "Alexandre Malta", cargo: "Diretor de Relações Institucionais da Agência Nova ES" },
      { nome: "Sidemar Acosta", cargo: "Presidente do SINDIEX" },
      { nome: "Paulo Alves", cargo: "Diretor Executivo do TERCA ZILLI Armazéns Gerais" },
      { nome: "Henrique Mauri", cargo: "CEO da Dotcode Tecnologia" },
    ],
    mediadores: ["Abdo Filho", "Sebastião V. Neto"],
    tipo: "painel",
  },
  {
    horario: "12h",
    titulo: "Almoço",
    tipo: "social",
  },
  {
    horario: "14h",
    titulo: "3º Painel",
    tema: "Reforma Tributária, ZPE e SUDENE: Oportunidades fiscais e novos desafios para o desenvolvimento logístico e industrial de Aracruz e região.",
    palestrantes: [
      { nome: "Marcus M. Vicente", cargo: "Sócio fundador do MVLM Advogados Associados" },
      { nome: "Luciano Kelly do Nascimento", cargo: "Advogado Especialista em Direito Marítimo e Portuário" },
      { nome: "Alexandre Bilot Mori", cargo: "Gerente Executivo da PORTOCEL" },
      { nome: "Anderson Carvalho", cargo: "Diretor Executivo do IMETAME LOGÍSTICA PORTO" },
      { nome: "Erimar Trindade", cargo: "Vice-Presidente do SINDIEX" },
    ],
    mediadores: ["Luciana Mattar", "Ícaro Dominisini"],
    tipo: "painel",
  },
];

const tipoCor: Record<Tipo, string> = {
  plenaria:    "#f5a623",
  painel:      "#4db8d4",
  social:      "#8dc63f",
  operacional: "rgba(255,255,255,0.25)",
};

const tipoLabel: Record<Tipo, string> = {
  plenaria:    "Plenária",
  painel:      "Painel",
  social:      "Social",
  operacional: "Abertura",
};

type DiaId = "dia1" | "dia2" | "dia3";

const dias = [
  { id: "dia1" as const, label: "Abertura", data: "14/10", diaSemana: "Quarta-feira", cor: "#f5a623", itens: dia1 },
  { id: "dia2" as const, label: "Dia 1",    data: "15/10", diaSemana: "Quinta-feira",  cor: "#4db8d4", itens: dia2 },
  { id: "dia3" as const, label: "Dia 2",    data: "16/10", diaSemana: "Sexta-feira",   cor: "#8dc63f", itens: dia3 },
];

export default function Programacao() {
  const [diaSelecionado, setDiaSelecionado] = useState<DiaId>("dia2");
  const diaAtual = dias.find((d) => d.id === diaSelecionado)!;

  const BG = "#0f0f0f";
  const BORDER = "rgba(255,255,255,0.08)";

  return (
    <section id="programacao" className="py-32" style={{ background: BG }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header — two columns */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.15)" }} />
              <span className="text-[11px] tracking-[0.4em] uppercase font-semibold" style={{ color: "#4db8d4" }}>Programação Oficial</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Três dias de<br />
              <span style={{ color: "#4db8d4" }}>debates e conexões</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-white/55 text-base leading-relaxed font-light mb-6">
              Uma programação densa e estratégica, com painéis de alto nível, palestrantes convidados e momentos de networking pensados para quem move o comércio exterior e a logística do Espírito Santo.
            </p>
            <div className="grid grid-cols-3 mt-4" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>

              <div className="flex items-center gap-3 px-4 py-4" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 flex-shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <div>
                  <p className="text-white font-semibold text-xs leading-tight">14–16 Out. 2026</p>
                  <p className="text-white/38 text-[11px]">Três dias</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-4" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 flex-shrink-0">
                  <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 12"/>
                </svg>
                <div>
                  <p className="text-white font-semibold text-xs leading-tight">A partir das 10h</p>
                  <p className="text-white/38 text-[11px]">Abertura</p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 flex-shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                </svg>
                <div>
                  <p className="text-white font-semibold text-xs leading-tight">Sítio Santa Joana</p>
                  <p className="text-white/38 text-[11px]">Aracruz, ES</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Day selector */}
        <div className="flex gap-0 mb-16" style={{ borderBottom: `1px solid ${BORDER}` }}>
          {dias.map((dia) => {
            const ativo = diaSelecionado === dia.id;
            return (
              <button
                key={dia.id}
                onClick={() => setDiaSelecionado(dia.id)}
                className="relative px-3 sm:px-8 py-4 sm:py-5 text-left transition-all duration-200 flex-1"
                style={{ background: "transparent", border: "none" }}
              >
                {/* Active underline */}
                {ativo && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: dia.cor }} />
                )}
                <div
                  className="text-2xl font-bold tabular-nums leading-none mb-1.5"
                  style={{ color: ativo ? dia.cor : "rgba(255,255,255,0.2)" }}
                >
                  {dia.data}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider leading-none mb-1"
                  style={{ color: ativo ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)" }}
                >
                  {dia.label}
                </div>
                <div className="text-[11px] font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {dia.diaSemana}
                </div>
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {diaAtual.itens.map((item, i) => {
            const cor = tipoCor[item.tipo];
            const isLast = i === diaAtual.itens.length - 1;
            const isPainel = item.tipo === "painel";

            return (
              <div key={`${diaSelecionado}-${i}`} className="grid gap-4 mb-4" style={{ gridTemplateColumns: "44px 1px 1fr" }}>

                {/* Time */}
                <div className="pt-7 text-right pr-2">
                  <span className="text-sm font-bold tabular-nums" style={{ color: diaAtual.cor }}>
                    {item.horario}
                  </span>
                </div>

                {/* Vertical line + dot */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-[26px]"
                    style={{ background: cor, boxShadow: `0 0 0 3px ${BG}, 0 0 0 5px ${cor}35` }}
                  />
                  {!isLast && (
                    <div className="w-px flex-1 mt-2" style={{ background: `linear-gradient(to bottom, ${cor}40, transparent)` }} />
                  )}
                </div>

                {/* Card */}
                <div className="pb-6 pt-4">
                  <div
                    className="p-6"
                    style={{
                      background: isPainel ? "rgba(77,184,212,0.05)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${isPainel ? "rgba(77,184,212,0.12)" : BORDER}`,
                      borderLeft: `3px solid ${cor}`,
                    }}
                  >
                    {/* Badge + hora mobile */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[10px] font-bold tracking-[0.25em] uppercase px-2 py-1"
                        style={{ background: `${cor}18`, color: cor }}
                      >
                        {tipoLabel[item.tipo]}
                      </span>
                    </div>

                    <h4 className="text-white font-bold text-base leading-snug mb-2">{item.titulo}</h4>

                    {item.descricao && (
                      <p className="text-white/52 text-sm leading-relaxed">{item.descricao}</p>
                    )}

                    {item.tema && (
                      <p className="text-white/60 text-sm leading-relaxed mt-3 font-light italic">
                        "{item.tema}"
                      </p>
                    )}

                    {item.palestrantes && item.palestrantes.length > 0 && (
                      <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: cor }}>
                          Convidados
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.palestrantes.map((p, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <div
                                className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
                                style={{ background: `${cor}20`, color: cor }}
                              >
                                {p.nome.charAt(0)}
                              </div>
                              <div>
                                <p className="text-white/85 text-xs font-semibold leading-tight">{p.nome}</p>
                                <p className="text-white/65 text-[11px] mt-0.5">{p.cargo}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        {item.mediadores && item.mediadores.length > 0 && (
                          <p className="text-white/35 text-xs mt-4 font-light">
                            <span className="text-white/50 font-medium">Mediação —</span>{" "}
                            {item.mediadores.join(" & ")}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
