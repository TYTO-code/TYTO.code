import { OWL_SRC } from "../content";
import { MarcaImg } from "./MarcaImg";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden">
      {/* Marca-d'água: a única ocorrência da coruja grande na página. */}
      <MarcaImg
        src={OWL_SRC}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 w-[26rem] max-w-none -translate-y-1/2 select-none opacity-5 sm:-right-16 sm:w-[34rem] lg:right-[-6rem] lg:w-[40rem]"
      />

      <div className="hero-enter relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28">
        <h1
          id="hero-titulo"
          className="max-w-[24ch] font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[2.5rem] lg:max-w-none lg:text-[2.6rem]"
        >
          Comunidade técnica de hardening, LGPD e proteção de perfil no mercado brasileiro.
        </h1>

        <p className="mt-6 max-w-[52ch] text-lg text-ink-soft">
          Devs, red team, blue team e consultores de LGPD trabalhando juntos em segurança aplicada.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a href="#entrar" className="cta-cut">
            Pedir entrada
          </a>
          <a href="#guarda-pretoriana" className="link-violet">
            Conhecer a Guarda Pretoriana
          </a>
        </div>
      </div>
    </section>
  );
}
