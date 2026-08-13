import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { ICONS } from "./icons";
import { SOCIALS } from "./data";

const fieldClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon/60 focus:ring-2 focus:ring-ring/40 focus:outline-none transition-colors";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Solicitação enviada!", {
        description: "Nossa equipe entra em contato em até 1 dia útil.",
      });
    }, 700);
  }

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="glow-orb pointer-events-none absolute top-1/3 -left-40 size-[26rem] opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-neon uppercase">Contato</p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Vamos construir seu <span className="text-gradient">próximo produto</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Conte seu desafio. Respondemos com um diagnóstico inicial e uma proposta clara de
            escopo, prazo e investimento.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-neon" /> tyto.code@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-neon" /> Atendimento remoto em todo o Brasil
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {SOCIALS.map((social) => {
              const Icon = ICONS[social.icon]!;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/40 hover:text-foreground"
                >
                  <Icon className="size-4 text-neon" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="glass-panel rounded-2xl p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="mb-2 block text-xs text-muted-foreground">
                  Nome
                </label>
                <input id="nome" name="nome" required placeholder="Seu nome" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="empresa" className="mb-2 block text-xs text-muted-foreground">
                  Empresa
                </label>
                <input id="empresa" name="empresa" placeholder="Sua empresa" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="voce@empresa.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="telefone" className="mb-2 block text-xs text-muted-foreground">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="mensagem" className="mb-2 block text-xs text-muted-foreground">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                placeholder="Conte sobre o seu projeto..."
                className={fieldClass}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Solicitar orçamento"}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
