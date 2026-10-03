import { AGENTES } from "../content";
import { Section } from "./Section";
import { TerminalListing } from "./TerminalListing";

export function Agentes() {
  return (
    <Section id="agentes" titulo="Agentes">
      <TerminalListing comando="ls agentes/" entradas={AGENTES} rotulo="Agentes de IA da comunidade" />
      <p className="mt-6 max-w-[62ch] text-dim">
        Os agentes funcionam no Discord, no app da TYTO e, em breve, numa extensão de navegador.
      </p>
    </Section>
  );
}
