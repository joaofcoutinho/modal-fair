import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Programacao from "@/components/Programacao";
import Palestrantes from "@/components/Palestrantes";
import Local from "@/components/Local";
import Patrocinio from "@/components/Patrocinio";
import Stand from "@/components/Stand";
import Inscricao from "@/components/Inscricao";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Programacao />
      <Palestrantes />
      <Local />
      <Patrocinio />
      <Stand />
      <Inscricao />
      <Footer />
    </main>
  );
}
