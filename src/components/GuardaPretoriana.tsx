import { GUARDA_METRICAS } from "../content";
import { Section } from "./Section";

export function GuardaPretoriana() {
  return (
    <Section id="guarda-pretoriana" titulo="Guarda Pretoriana">
      <div className="grid gap-10 md:grid-cols-[1fr_auto_minmax(0,22rem)] md:gap-12">
        <div className="max-w-[62ch] space-y-5 text-[1.05rem] text-ink-soft">
          <p>
            A TYTO.CODE tem uma equipe própria de cibersegurança, a Guarda Pretoriana, formada por
            membros da comunidade. [preencher: escopo de atuação da Guarda]
          </p>
          <p>[preencher: descrição do time]</p>
        </div>

        {/* Traço âmbar de 2px entre as colunas; no celular vira horizontal. */}
        <div aria-hidden="true" className="h-0.5 w-16 bg-amber md:h-auto md:w-0.5" />

        <dl className="m-0 self-start rounded-card bg-elevated p-6 font-mono">
          {GUARDA_METRICAS.map((metrica, i) => (
            <div key={metrica.label} className={i > 0 ? "mt-5 border-t border-line pt-5" : ""}>
              <dt className="text-[0.8rem] text-dim">{metrica.label}</dt>
              <dd className="m-0 mt-1 text-lg font-medium text-ink">{metrica.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
