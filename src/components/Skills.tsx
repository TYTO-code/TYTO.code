import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" titulo="Skills">
      <p className="m-0 max-w-[62ch] text-[1.05rem] text-ink-soft">
        Membros da TYTO.CODE podem levar a identidade e os padrões da comunidade para qualquer
        projeto em que trabalhem: as skills rodam no{" "}
        <span className="font-mono text-[0.95em] text-amber">Claude Code</span> e aplicam as
        mesmas convenções em qualquer repositório.
      </p>
      <a href="/skills" className="link-violet mt-6 inline-block">
        Ver skills disponíveis
      </a>
    </Section>
  );
}
