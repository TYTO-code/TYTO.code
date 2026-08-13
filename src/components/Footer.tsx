import { ICONS } from "./icons";
import { CLUB_URL, NAV_LINKS, SOCIALS } from "./data";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center overflow-hidden rounded-xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
              <img src="/logocirculo2.png" alt="TYTO.code" className="size-full object-cover" />
            </span>
            <span className="font-display text-lg font-semibold">
              TYTO<span className="text-neon">.code</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Softhouse de engenharia de software, inteligência artificial, automação e incubação
            de produtos digitais.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Links rápidos</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Contato</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>tyto.code@gmail.com</li>
            <li>Brasil · atendimento remoto</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Redes sociais</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {SOCIALS.map((social) => {
              const Icon = ICONS[social.icon]!;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/40 hover:text-neon"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <a
            href={CLUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-sm font-medium text-neon hover:underline"
          >
            Conheça o Clube TYTO →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TYTO.code. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
