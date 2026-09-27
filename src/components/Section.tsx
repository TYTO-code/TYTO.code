import type { ReactNode } from "react";

type Props = {
  id: string;
  titulo: string;
  children: ReactNode;
};

export function Section({ id, titulo, children }: Props) {
  const tituloId = `${id}-titulo`;
  return (
    <section id={id} aria-labelledby={tituloId} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2
          id={tituloId}
          className="font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.125rem]"
        >
          {titulo}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
