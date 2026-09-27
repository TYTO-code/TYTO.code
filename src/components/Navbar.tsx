import { NAV_ITEMS, OWL_SRC } from "../content";
import { MarcaImg } from "./MarcaImg";

function rotaAtiva(pathname: string): string {
  const rota = pathname.replace(/\/+$/, "") || "/";
  return NAV_ITEMS.some((item) => item.route === rota) ? rota : "/";
}

export function Navbar() {
  const ativa = rotaAtiva(window.location.pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-sm">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6"
      >
        <a href="/" className="flex items-center gap-2.5 rounded-input">
          <MarcaImg src={OWL_SRC} alt="" width={24} height={24} className="size-6" />
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="text-ink">TYTO</span>
            <span className="text-violet">.CODE</span>
          </span>
        </a>

        <ul className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-end sm:gap-2 -mx-1.5 sm:mx-0">
          {NAV_ITEMS.map((item) => {
            const atual = item.route === ativa;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={atual ? "page" : undefined}
                  className={
                    "block rounded-input px-1.5 py-1.5 font-display text-[0.9rem] font-medium transition-colors sm:px-3 sm:text-[0.95rem] " +
                    (atual
                      ? "text-ink underline decoration-violet decoration-2 underline-offset-8"
                      : "text-dim hover:text-ink")
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
