import { Section } from "./Section";

export function Entrar() {
  return (
    <Section id="entrar" titulo="Entrar">
      <p className="m-0 max-w-[62ch] text-[1.05rem] text-ink-soft">
        Não há cadastro aberto: a entrada na TYTO.CODE é por convite de um membro ou por um
        processo de indicação.
      </p>
      <a href="[preencher: link do processo de indicação]" className="cta-cut mt-8">
        Pedir indicação
      </a>
    </Section>
  );
}
