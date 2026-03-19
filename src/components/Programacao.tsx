"use client";

import { useState } from "react";
import { Clock, Music, Coffee, Mic, MessageSquare, Utensils, Palette } from "lucide-react";

type Tipo = "plenaria" | "networking" | "social" | "operacional" | "painel";

interface Item {
  horario: string;
  titulo: string;
  descricao?: string;
  palestrantes?: { nome: string; cargo: string }[];
  mediadores?: string[];
  tema?: string;
  icon: React.ReactNode;
  tipo: Tipo;
}

const dia1: Item[] = [
  {
    horario: "20h",
    titulo: "Coquetel de Abertura da MFA",
    descricao: "Abertura oficial da Modal Fair Aracruz com coquetel de boas-vindas",
    icon: <Music size={20} className="text-[#f5a623]" />,
    tipo: "social",
  },
];

const dia2: Item[] = [
  {
    horario: "9h",
    titulo: "Fala das Autoridades",
    descricao: "Exposição de Artes da Artista Plástica Maria Alice Furtado",
    icon: <Mic size={20} className="text-[#f5a623]" />,
    tipo: "operacional",
  },
  {
    horario: "10h",
    titulo: "Palestra — Convidado Especial",
    icon: <Mic size={20} className="text-[#f5a623]" />,
    tipo: "plenaria",
  },
  {
    horario: "14h",
    titulo: "1º Painel",
    tema: "Reforma Tributária, ZPE e SUDENE: Oportunidades fiscais e novos desafios para o desenvolvimento logístico e industrial de Aracruz e região.",
    palestrantes: [
      { nome: "Marcus M. Vicente", cargo: "MVLM Advogados" },
      { nome: "Luciano Kelly do Nascimento", cargo: "Advogado Especialista em Direito Portuário" },
      { nome: "Anderson Carvalho", cargo: "IMETAME LOGÍSTICA PORTO" },
      { nome: "Erimar Trindade", cargo: "SINDIEX" },
    ],
    mediadores: ["Abdo Filho", "Ícaro Dominisini"],
    icon: <MessageSquare size={20} className="text-[#4db8d4]" />,
    tipo: "painel",
  },
  {
    horario: "15h",
    titulo: "Intervalo",
    icon: <Coffee size={20} className="text-[#8dc63f]" />,
    tipo: "social",
  },
  {
    horario: "16h",
    titulo: "2º Painel",
    tema: "Raio-X do Comércio Exterior Capixaba tendo o Espírito Santo como Hub Logístico e o Fim dos Incentivos Fiscais.",
    palestrantes: [
      { nome: "Samir Nemer", cargo: "FURTADO NEMER ADVOGADOS" },
      { nome: "Alexandre Malta", cargo: "Presidente da Avenpesbr" },
      { nome: "Sidemar Acosta", cargo: "Presidente do SINDIEX" },
      { nome: "Paulo Alves", cargo: "TERCA ZILLI Armazéns Gerais" },
      { nome: "Henrique Mauri", cargo: "Dotcdode" },
    ],
    mediadores: ["Abdo Filho", "Sebastião V. Neto"],
    icon: <MessageSquare size={20} className="text-[#4db8d4]" />,
    tipo: "painel",
  },
];

const dia3: Item[] = [
  {
    horario: "9h",
    titulo: "Coffee-break",
    icon: <Coffee size={20} className="text-[#8dc63f]" />,
    tipo: "social",
  },
  {
    horario: "10h",
    titulo: "1º Painel",
    tema: "Portos: Motores da Economia Capixaba no Comércio Internacional.",
    palestrantes: [
      { nome: "Adriana Junger Lacerda", cargo: "Delegada da Alfândega da Receita Federal do ES" },
      { nome: "Christiane Menezes", cargo: "Gerente da Nova — Agência de Atração de Investimentos" },
      { nome: "Carla Rios do Amaral", cargo: "Gerente Comercial da VPORTS" },
      { nome: "Luciana Mattar", cargo: "Mattar Vilela Advogados Associados" },
    ],
    mediadores: ["Carla Fregona", "Eder Muller"],
    icon: <MessageSquare size={20} className="text-[#4db8d4]" />,
    tipo: "painel",
  },
  {
    horario: "12h",
    titulo: "Almoço",
    icon: <Utensils size={20} className="text-[#8dc63f]" />,
    tipo: "social",
  },
  {
    horario: "14h30",
    titulo: "2º Painel",
    tema: "PARKLOG – Plataforma de Exportação do ES.",
    palestrantes: [
      { nome: "Anderson Abreu", cargo: "Diretor Executivo do PARKLOG" },
      { nome: "José Eduardo Faria de Azevedo", cargo: "Secretário de Desenvolvimento Econômico de Aracruz" },
      { nome: "Valéria Becalli", cargo: "PORTOCEL" },
      { nome: "Bruno Carlesso", cargo: "IMETAME" },
    ],
    mediadores: ["Maurício Xavier", "Felipe Loureiro"],
    icon: <MessageSquare size={20} className="text-[#4db8d4]" />,
    tipo: "painel",
  },
  {
    horario: "16h",
    titulo: "3º Painel",
    tema: "Espírito Santo: Desafios Estruturais para um Mercado de Trabalho Competitivo e de Oportunidades para os próximos anos.",
    palestrantes: [
      { nome: "Roberta Kato", cargo: "CEO da Kato Soluções Empresariais" },
      { nome: "Pablo Lira", cargo: "Presidente IJSN" },
      { nome: "Glegson Ninz", cargo: "SENAC (FECOMÉRCIO)" },
      { nome: "Rafael Henrique G. T. de Freitas", cargo: "COAL (FINDES)" },
    ],
    mediadores: ["Larissa Baroni"],
    icon: <MessageSquare size={20} className="text-[#4db8d4]" />,
    tipo: "painel",
  },
];

const tipoColors: Record<Tipo, string> = {
  plenaria: "border-l-[#f5a623]",
  painel: "border-l-[#4db8d4]",
  networking: "border-l-[#4db8d4]",
  social: "border-l-[#8dc63f]",
  operacional: "border-l-white/20",
};

const tipoBg: Record<Tipo, string> = {
  plenaria: "bg-[#f5a623]/8",
  painel: "bg-[#4db8d4]/8",
  networking: "bg-[#4db8d4]/8",
  social: "bg-[#8dc63f]/8",
  operacional: "bg-white/5",
};

const eixos = [
  {
    numero: "01",
    titulo: "Reforma Tributária, ZPE e SUDENE",
    descricao: "Oportunidades fiscais e novos desafios para o desenvolvimento logístico e industrial de Aracruz",
    cor: "#f5a623",
  },
  {
    numero: "02",
    titulo: "Raio X do Comércio Exterior Capixaba",
    descricao: "Espírito Santo como hub logístico e o fim dos incentivos fiscais",
    cor: "#4db8d4",
  },
  {
    numero: "03",
    titulo: "Portos: Motores da Economia",
    descricao: "Os portos capixabas como protagonistas do Comércio Internacional",
    cor: "#8dc63f",
  },
  {
    numero: "04",
    titulo: "PARKLOG — Plataforma de Exportação",
    descricao: "Plataforma de exportação do Agronegócio Brasileiro no Espírito Santo",
    cor: "#c0392b",
  },
  {
    numero: "05",
    titulo: "Mercado de Trabalho Competitivo",
    descricao: "Desafios estruturais e oportunidades para o ES nos próximos anos",
    cor: "#9b59b6",
  },
];

type DiaId = "dia1" | "dia2" | "dia3";

export default function Programacao() {
  const [diaSelecionado, setDiaSelecionado] = useState<DiaId>("dia2");

  const dias = [
    {
      id: "dia1" as const,
      label: "Abertura",
      data: "14/10",
      diaSemana: "Quarta-feira",
      cor: "#f5a623",
      itens: dia1,
      badge: null,
    },
    {
      id: "dia2" as const,
      label: "Dia 1",
      data: "15/10",
      diaSemana: "Quinta-feira",
      cor: "#4db8d4",
      itens: dia2,
      badge: "Painéis",
    },
    {
      id: "dia3" as const,
      label: "Dia 2",
      data: "16/10",
      diaSemana: "Sexta-feira",
      cor: "#8dc63f",
      itens: dia3,
      badge: "Programação principal",
    },
  ];

  const diaAtual = dias.find((d) => d.id === diaSelecionado)!;

  return (
    <section id="programacao" className="py-24 bg-[#091525] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#4db8d4] text-sm font-bold tracking-widest uppercase mb-4 block">
            Agenda
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Programação <span className="text-[#4db8d4]">Completa</span>
          </h2>
          <p className="text-white/40 text-sm">
            14, 15 e 16 de Outubro de 2026 · Cerimonial 2 – Sítio Santa Joana
          </p>
        </div>

        {/* Eixos Temáticos */}
        <div className="mb-16">
          <h3 className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 text-center">
            Eixos Temáticos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eixos.map((eixo, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors"
              >
                <span className="text-4xl font-black opacity-20 block mb-3" style={{ color: eixo.cor }}>
                  {eixo.numero}
                </span>
                <h4 className="text-white font-bold text-sm mb-1">{eixo.titulo}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{eixo.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Day selector */}
        <div className="mb-10">
          <p className="text-white/30 text-xs tracking-widest uppercase font-bold text-center mb-4">
            Selecione o dia
          </p>
          <div className="grid grid-cols-3 gap-3">
            {dias.map((dia) => {
              const ativo = diaSelecionado === dia.id;
              return (
                <button
                  key={dia.id}
                  onClick={() => setDiaSelecionado(dia.id)}
                  className="relative flex flex-col items-start gap-2 p-4 rounded-2xl border-2 transition-all duration-200 text-left"
                  style={
                    ativo
                      ? { borderColor: dia.cor, backgroundColor: `${dia.cor}15` }
                      : { borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.03)" }
                  }
                >
                  {dia.badge && (
                    <span
                      className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${dia.cor}25`, color: dia.cor }}
                    >
                      {dia.badge}
                    </span>
                  )}

                  <span
                    className="text-xl font-black tabular-nums"
                    style={{ color: ativo ? dia.cor : "rgba(255,255,255,0.25)" }}
                  >
                    {dia.data}
                  </span>
                  <div className="flex flex-col">
                    <span className={`font-black text-sm ${ativo ? "text-white" : "text-white/40"}`}>
                      {dia.label}
                    </span>
                    <span className="text-white/30 text-xs">{dia.diaSemana}</span>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    {dia.itens.map((_, idx) => (
                      <div
                        key={idx}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: ativo ? dia.cor : "rgba(255,255,255,0.15)" }}
                      />
                    ))}
                  </div>

                  {ativo && (
                    <div
                      className="absolute top-3 right-3 w-2 h-2 rounded-full"
                      style={{ backgroundColor: dia.cor }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule items */}
        <div className="space-y-3">
          {diaAtual.itens.map((item, i) => (
            <div
              key={`${diaSelecionado}-${i}`}
              className={`border-l-4 ${tipoColors[item.tipo]} ${tipoBg[item.tipo]} border border-white/10 rounded-r-2xl p-5 hover:border-white/20 transition-all`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5 p-2 bg-white/5 rounded-xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: diaAtual.cor }}
                    >
                      {item.horario}
                    </span>
                    {item.tipo === "painel" && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${diaAtual.cor}20`, color: diaAtual.cor }}
                      >
                        PAINEL
                      </span>
                    )}
                  </div>

                  <h4 className="text-white font-bold text-base mb-2">{item.titulo}</h4>

                  {item.descricao && (
                    <p className="text-white/50 text-sm leading-relaxed mb-3">{item.descricao}</p>
                  )}

                  {/* Tema */}
                  {item.tema && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-3">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Tema</p>
                      <p className="text-white/70 text-sm leading-relaxed italic">"{item.tema}"</p>
                    </div>
                  )}

                  {/* Palestrantes */}
                  {item.palestrantes && item.palestrantes.length > 0 && (
                    <div className="mb-3">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Palestrantes</p>
                      <div className="flex flex-col gap-1.5">
                        {item.palestrantes.map((p, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: diaAtual.cor }}
                            />
                            <span className="text-sm">
                              <span className="text-white font-semibold">{p.nome}</span>
                              <span className="text-white/40"> — {p.cargo}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mediadores */}
                  {item.mediadores && item.mediadores.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                        Mediadores:
                      </span>
                      {item.mediadores.map((m, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center">
          {[
            { cor: "#f5a623", label: "Plenária" },
            { cor: "#4db8d4", label: "Painéis" },
            { cor: "#8dc63f", label: "Social / Coffee" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40 text-xs">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.cor }} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
