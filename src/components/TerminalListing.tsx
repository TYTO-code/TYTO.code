import type { ListingEntry } from "../content";

type Props = {
  comando: string;
  entradas: ListingEntry[];
  rotulo: string;
};

/**
 * Bloco estilo terminal: um `ls` com uma linha por entrada. Usado em
 * "O que fazemos" e em "Agentes"; o prompt em âmbar é o detalhe da seção.
 */
export function TerminalListing({ comando, entradas, rotulo }: Props) {
  return (
    <figure
      aria-label={rotulo}
      className="m-0 overflow-hidden rounded-card border border-line bg-surface font-mono text-[0.9rem] leading-relaxed"
    >
      <div className="border-b border-line px-4 py-2.5 text-[0.8rem] text-dim sm:px-5">
        ~/tyto.code
      </div>

      <div className="px-4 py-5 sm:px-5">
        <p className="m-0 text-ink">
          <span className="text-amber" aria-hidden="true">
            ${" "}
          </span>
          {comando}
        </p>

        <ul className="mt-4 space-y-3 sm:space-y-2">
          {entradas.map((entrada) => (
            <li
              key={entrada.name}
              className="grid gap-x-6 gap-y-0.5 sm:grid-cols-[minmax(12rem,auto)_1fr]"
            >
              <span className="font-medium text-ink">
                {entrada.name}
                <span className="text-dim">/</span>
              </span>
              <span className="text-dim">{entrada.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
