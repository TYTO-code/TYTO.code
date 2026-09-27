import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { OQueFazemos } from "./components/OQueFazemos";
import { GuardaPretoriana } from "./components/GuardaPretoriana";
import { Agentes } from "./components/Agentes";
import { Skills } from "./components/Skills";
import { Entrar } from "./components/Entrar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-ink">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-input focus:bg-elevated focus:px-3 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <OQueFazemos />
        <GuardaPretoriana />
        <Agentes />
        <Skills />
        <Entrar />
      </main>
      <Footer />
    </div>
  );
}
