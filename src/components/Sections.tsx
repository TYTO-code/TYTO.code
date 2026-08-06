import {
  ArrowUpRight,
  Star,
  Quote,
  ArrowRight,
  Rocket,
  Users,
  Code2,
  Trophy,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Reveal } from "./Reveal";
import { ICONS } from "./icons";
import {
  CLUB_URL,
  DIFFERENTIALS,
  FAQS,
  PARTNERS,
  PROCESS,
  PROJECTS,
  SERVICES,
  TESTIMONIALS,
} from "./data";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-5 w-[3px] rounded-full bg-neon shadow-[var(--shadow-glow)]" />
        <p className="text-xs tracking-[0.25em] text-neon uppercase">{eyebrow}</p>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

export function Stats() {
  const items = [
    { icon: Rocket, value: "+15", label: "Projetos entregues" },
    { icon: Users, value: "+20", label: "Clientes satisfeitos" },
    { icon: Code2, value: "+100k", label: "Linhas de código" },
    { icon: Trophy, value: "100%", label: "Compromisso" },
  ];

  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="glass-panel grid gap-6 rounded-[1.75rem] p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-neon">
                  <item.icon className="size-6" />
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


export function About() {
  const stats = [
    { value: "+20", label: "projetos entregues" },
    { value: "+100 mil", label: "linhas de código" },
    { value: "100%", label: "comprometimento" },
    { value: "Diversos", label: "clientes atendidos" },
  ];

  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="glow-orb pointer-events-none absolute top-1/3 -left-40 size-[26rem] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Sobre a TYTO"
          title={
            <>
              Engenharia, IA e design em um <span className="text-gradient">só time</span>
            </>
          }
          description="A TYTO.code é uma softhouse focada em criar soluções digitais inteligentes, unindo engenharia de software, inteligência artificial e design para desenvolver produtos escaláveis e de alto impacto."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="glass-panel group h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[var(--shadow-card)]">
                <p className="font-display text-3xl font-semibold text-gradient">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Tudo o que seu produto precisa, <span className="text-gradient">ponta a ponta</span>
            </>
          }
          description="Do primeiro protótipo à operação em escala, com um único time responsável pela sua tecnologia."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]!;
            return (
              <Reveal key={service.title} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-neon/40 hover:shadow-[var(--shadow-card)]">
                  <div className="glow-orb pointer-events-none absolute -top-20 -right-20 size-48 opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                  <span className="relative inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-neon transition-colors duration-500 group-hover:bg-[image:var(--gradient-brand)] group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Processo"
          title={
            <>
              Um método claro, <span className="text-gradient">sem caixas-pretas</span>
            </>
          }
          description="Você acompanha cada etapa, com entregas visíveis e decisões documentadas."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--neon)_50%,transparent),transparent)] md:block" />
          {PROCESS.map((item, i) => (
            <Reveal as="li" key={item.step} delay={(i % 3) * 100} className="relative">
              <div className="glass-panel group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[var(--shadow-card)]">
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-neon/40 bg-background font-display text-sm font-semibold text-neon shadow-[var(--shadow-glow)]">
                  {item.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfólio"
          title={
            <>
              Produtos reais, <span className="text-gradient">resultados reais</span>
            </>
          }
          description="Uma seleção de sistemas e plataformas que projetamos, construímos e mantemos."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 4) * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-neon/40 hover:shadow-[var(--shadow-card)]">
                <div
                  className="grid-bg relative h-36 overflow-hidden"
                  style={{
                    backgroundColor: `oklch(0.2 0.09 ${project.hue})`,
                  }}
                >
                  <div className="glow-orb absolute -bottom-16 left-1/2 size-40 -translate-x-1/2 opacity-70 transition-transform duration-700 group-hover:scale-125" />
                  <span className="absolute top-3 left-3 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <a
                    href="#contato"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-neon transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Ver detalhes <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#contato"
            className="glass-panel inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition-colors hover:border-neon/50"
          >
            Ver todos os projetos <ArrowRight className="size-4 text-neon" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Diferenciais"
          title={
            <>
              Por que escolher a <span className="text-gradient">TYTO.code</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item, i) => {
            const Icon = ICONS[item.icon]!;
            return (
              <Reveal key={item.title} delay={(i % 4) * 80}>
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[var(--shadow-card)]">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-neon">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="glow-orb pointer-events-none absolute top-1/4 -right-40 size-[26rem] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              Quem constrói com a gente <span className="text-gradient">recomenda</span>
            </>
          }
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <figure className="glass-panel relative h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[var(--shadow-card)]">
                <Quote className="size-7 text-neon/50" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-neon text-neon" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] font-display text-sm font-semibold text-primary-foreground">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="border-y border-border py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Parceiros e clientes
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="font-display text-lg font-semibold text-muted-foreground/50 grayscale transition-all duration-500 hover:text-foreground"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClubCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-neon/30 bg-[image:var(--gradient-brand)] p-10 text-center sm:p-16">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
            <div className="glow-orb pointer-events-none absolute -bottom-24 left-1/2 size-[30rem] -translate-x-1/2 opacity-60" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-xs text-primary-foreground/80">
                Ecossistema TYTO
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold text-primary-foreground sm:text-5xl">
                Faça parte do ecossistema TYTO
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
                Além da softhouse, a TYTO mantém um clube de tecnologia onde desenvolvedores
                colaboram em projetos reais, estudam juntos e evoluem profissionalmente.
              </p>
              <a
                href={CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 font-display text-base font-semibold text-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Conheça o Clube
                <ArrowUpRight className="size-5 text-neon transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Perguntas <span className="text-gradient">frequentes</span>
            </>
          }
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="glass-panel mb-3 rounded-2xl px-5"
              >
                <AccordionTrigger className="text-left font-display text-base hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
