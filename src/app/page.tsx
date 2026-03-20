import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Programacao from "@/components/Programacao";
import Apoiadores from "@/components/Apoiadores";
import Palestrantes from "@/components/Palestrantes";
import Local from "@/components/Local";
import Patrocinio from "@/components/Patrocinio";
import Stand from "@/components/Stand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Apoiadores />
      <Palestrantes />
      <Programacao />
      <Local />
      <Patrocinio />
      <Stand />
      <Footer />
    </main>
  );
}
