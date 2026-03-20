import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Modal Fair Aracruz 2026 | 1ª Feira de Comércio Exterior, Logística e Portos",
  description: "O maior evento de Comércio Exterior, Logística e Portos de Aracruz. 14, 15 e 16 de outubro de 2026, Sítio Santa Joana, Aracruz/ES.",
  keywords: "comércio exterior, logística, portos, Aracruz, Espírito Santo, evento, feira, Modal Fair",
  openGraph: {
    title: "Modal Fair Aracruz 2026",
    description: "1ª Feira de Comércio Exterior, Logística e Portos de Aracruz",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
