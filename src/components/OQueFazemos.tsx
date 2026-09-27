import { AREAS } from "../content";
import { Section } from "./Section";
import { TerminalListing } from "./TerminalListing";

export function OQueFazemos() {
  return (
    <Section id="o-que-fazemos" titulo="O que fazemos">
      <TerminalListing comando="ls areas/" entradas={AREAS} rotulo="Áreas da comunidade" />
    </Section>
  );
}
