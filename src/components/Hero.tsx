import { ArrowRight, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { TECHNOLOGIES } from "./data";

const HERO_TECHS = TECHNOLOGIES.slice(0, 7);

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_70%_20%,black,transparent_75%)]" />
      <div className="glow-orb animate-pulse-glow pointer-events-none absolute -top-32 right-0 size-[42rem] opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <h1 className="font-display text-4xl leading-[1.03] font-bold tracking-tight sm:text-6xl lg:text-[4.4rem]">
              Transformamos ideias
              <span className="mt-1 block text-neon">em soluções digitais.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A <span className="text-foreground">TYTO.code</span> é a softhouse do Grupo TYTO.
              Desenvolvemos softwares personalizados e escaláveis com tecnologia, estratégia e
              excelência.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Fale com a gente
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="glass-panel group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-neon/50"
              >
                Ver nossos projetos
                <ChevronRight className="size-4 text-neon transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-12 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Tecnologias que dominamos
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {HERO_TECHS.map((tech) => (
                <span
                  key={tech}
                  title={tech}
                  className="glass-panel flex size-11 items-center justify-center rounded-xl font-display text-sm font-semibold text-neon transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/50"
                >
                  {tech.slice(0, 2)}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="glow-orb pointer-events-none absolute inset-4 opacity-90" />
          <div className="relative animate-float">
            <img
              src="/owl-hero.png"
              alt="Coruja futurista TYTO formada por circuitos holográficos roxos"
              width={1024}
              height={1024}
              className="relative mx-auto w-full max-w-lg drop-shadow-[0_0_80px_color-mix(in_oklab,var(--neon)_55%,transparent)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
