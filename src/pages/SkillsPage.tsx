import { SKILLS, SKILLS_REPO } from "../content";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";
import { TerminalListing } from "../components/TerminalListing";

function Comando({ children }: { children: string }) {
  return (
    <p className="m-0 break-words text-ink">
      <span className="text-amber" aria-hidden="true">
        ${" "}
      </span>
      {children}
    </p>
  );
}

export function SkillsPage() {
  return (
    <Layout>
      <section aria-labelledby="skills-titulo">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
          <h1
            id="skills-titulo"
            className="font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[2.5rem]"
          >
            Skills
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg text-ink-soft">
            Uma skill é um pacote de instruções que o Claude Code carrega quando a tarefa pede. As
            da TYTO.CODE levam a identidade e os padrões da comunidade para qualquer projeto em
            que um membro trabalhe.
          </p>
        </div>
      </section>

      <Section id="disponiveis" titulo="Disponíveis">
        <TerminalListing comando="ls skills/" entradas={SKILLS} rotulo="Skills da comunidade" />
      </Section>

      <Section id="instalar" titulo="Como instalar">
        <div className="max-w-[62ch] space-y-5 text-[1.05rem] text-ink-soft">
          <p>
            Copie a pasta da skill para <code className="font-mono text-[0.95em] text-ink">.claude/skills/</code>{" "}
            na raiz do projeto, para valer só nele, ou para{" "}
            <code className="font-mono text-[0.95em] text-ink">~/.claude/skills/</code>, para valer
            em todos os seus projetos. O Claude Code encontra a skill na próxima sessão.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-card border border-line bg-surface px-4 py-5 font-mono text-[0.9rem] leading-relaxed sm:px-5">
          <Comando>{`git clone ${SKILLS_REPO} tyto-skills`}</Comando>
          <Comando>cp -r tyto-skills/&lt;nome-da-skill&gt; .claude/skills/</Comando>
        </div>
      </Section>
    </Layout>
  );
}
