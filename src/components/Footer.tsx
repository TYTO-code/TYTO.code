import { DISCORD_URL } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 font-mono text-[0.85rem] text-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="m-0">© TYTO.CODE</p>
        <p className="m-0 flex flex-wrap gap-x-5 gap-y-1">
          <span>guarda pretoriana / cibersegurança</span>
          <a
            href={DISCORD_URL}
            className="rounded-input text-dim underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-current"
          >
            Discord
          </a>
        </p>
      </div>
    </footer>
  );
}
