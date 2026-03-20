"use client";

import { useState } from "react";
import { Send, CheckCircle, Check } from "lucide-react";

export default function Inscricao() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", cargo: "", telefone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inscricao" className="py-28" style={{ background: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium text-white/58">Inscrições</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Garanta sua<br />
              <span style={{ color: "#4db8d4" }}>vaga agora</span>
            </h2>
            <p className="text-white/65 text-sm leading-relaxed font-light mb-10">
              Não perca a oportunidade de fazer parte do maior evento de comércio exterior e portos de Aracruz. Vagas limitadas a 500 participantes por dia.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Acesso aos dois dias do evento",
                "Kit do participante (sacola, caneta, moleskin e garrafa)",
                "Certificado digital de participação",
                "Acesso ao networking lounge",
                "Coffee break e coquetel de abertura",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
                  <Check size={13} className="flex-shrink-0" style={{ color: "#f5a623" }} />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="flex items-start gap-3 p-4 text-sm font-light"
              style={{ border: "1px solid rgba(245,166,35,0.2)", background: "rgba(245,166,35,0.04)" }}
            >
              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#f5a623" }} />
              <p style={{ color: "#f5a623" }}>
                Vagas limitadas. As inscrições encerram ao atingirmos a capacidade máxima.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.07)" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 px-8 text-center gap-4">
                <CheckCircle size={40} style={{ color: "#8dc63f" }} />
                <h3 className="text-white font-bold text-xl">Inscrição realizada!</h3>
                <p className="text-white/58 text-sm font-light">
                  Obrigado! Você receberá mais informações no seu e-mail em breve.
                </p>
              </div>
            ) : (
              <div className="p-8 lg:p-10">
                <h3 className="text-white font-semibold text-base mb-8">Cadastre seu interesse</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: "Nome completo *", name: "nome",    type: "text",  req: true,  placeholder: "Seu nome",         span: 2 },
                    { label: "Empresa *",        name: "empresa", type: "text",  req: true,  placeholder: "Sua empresa",      span: 1 },
                    { label: "Cargo",            name: "cargo",   type: "text",  req: false, placeholder: "Seu cargo",        span: 1 },
                    { label: "E-mail *",         name: "email",   type: "email", req: true,  placeholder: "seu@email.com",    span: 2 },
                    { label: "WhatsApp",         name: "telefone",type: "tel",   req: false, placeholder: "(27) 99999-9999",  span: 2 },
                  ].map((field) => (
                    <div key={field.name} className={field.span === 1 ? "inline-block w-[calc(50%-8px)] odd:mr-4" : "block"}>
                      <label className="text-white/52 text-[11px] font-medium uppercase tracking-wider block mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.req}
                        value={(form as Record<string,string>)[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 text-white text-sm font-light focus:outline-none transition-colors placeholder:text-white/38"
                        style={{
                          background: "#0f0f0f",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold tracking-wide uppercase transition-all hover:opacity-80 mt-2"
                    style={{ background: "#f5a623", color: "#0f0f0f" }}
                  >
                    <Send size={13} />
                    Garantir minha vaga
                  </button>
                  <p className="text-white/38 text-xs text-center font-light">
                    Seus dados estão seguros. Não fazemos spam.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
