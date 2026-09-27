import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { OQueFazemos } from "./components/OQueFazemos";
import { GuardaPretoriana } from "./components/GuardaPretoriana";
import { Agentes } from "./components/Agentes";
import { Skills } from "./components/Skills";
import { Entrar } from "./components/Entrar";

export default function App() {
  return (
    <Layout>
      <Hero />
      <OQueFazemos />
      <GuardaPretoriana />
      <Agentes />
      <Skills />
      <Entrar />
    </Layout>
  );
}
