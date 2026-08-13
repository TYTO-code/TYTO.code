import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";
import { CLUB_URL, NAV_LINKS } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled ? "glass-panel shadow-[var(--shadow-card)]" : "border border-transparent",
        )}
        style={{ width: "calc(100% - 2rem)" }}
      >
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
            <img src="/logocirculo2.png" alt="TYTO.code" className="size-full object-cover" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            TYTO<span className="text-neon">.code</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CLUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hidden flex-col rounded-xl border-neon/30 px-4 py-2 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/60 sm:inline-flex"
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Conheça o Clube
              <ExternalLink className="size-3.5 text-neon" />
            </span>
            <span className="text-[11px] text-neon">club.tytocode.com.br</span>
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 lg:hidden">
          <ul className="glass-panel flex flex-col gap-1 rounded-2xl p-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-lg bg-[image:var(--gradient-brand)] px-3 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Conheça o Clube
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
