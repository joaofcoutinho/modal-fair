import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modal Fair Aracruz 2026 | 1ª Feira de Comércio Exterior, Logística e Portos",
  description: "O maior evento de Comércio Exterior, Logística e Portos de Aracruz. 14 e 15 de maio de 2026, Sítio Santa Joana, Aracruz/ES. 500 participantes por dia.",
  keywords: "comércio exterior, logística, portos, Aracruz, Espírito Santo, evento, feira, Modal Fair",
  openGraph: {
    title: "Modal Fair Aracruz 2026",
    description: "1ª Feira de Comércio Exterior, Logística e Portos de Aracruz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
