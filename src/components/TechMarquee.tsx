import { TECHNOLOGIES } from "./data";

export function TechMarquee() {
  const list = [...TECHNOLOGIES, ...TECHNOLOGIES];
  return (
    <section className="relative border-y border-border py-10">
      <p className="mb-7 text-center text-xs tracking-[0.25em] text-muted-foreground uppercase">
        Tecnologias que dominamos
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {list.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="glass-panel rounded-xl px-5 py-2.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
