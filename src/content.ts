/*
 * Conteúdo da landing num lugar só. Tudo que aparece como
 * "[preencher: …]" é marcador explícito para completar; não há texto
 * inventado no lugar de dado real.
 */

export const DISCORD_URL = "[preencher: link de convite do Discord]";

/** Arquivos da marca em `public/`. A página não quebra se ainda não existirem. */
export const OWL_SRC = "/owl.svg";

export type NavItem = { label: string; href: string; route: string };

/** `route` decide qual item fica ativo: só um por rota. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Comunidade", href: "/", route: "/" },
  { label: "Segurança", href: "/#guarda-pretoriana", route: "/seguranca" },
  { label: "Agentes", href: "/#agentes", route: "/agentes" },
  { label: "Skills", href: "/skills/", route: "/skills" },
];

export type ListingEntry = { name: string; description: string };

export const AREAS: ListingEntry[] = [
  {
    name: "hardening",
    description: "Endurecimento de servidores, containers e pipelines de deploy.",
  },
  {
    name: "lgpd",
    description: "Adequação à LGPD: mapeamento de dados, bases legais e resposta a incidentes.",
  },
  {
    name: "perfil",
    description: "Proteção de perfil profissional: o que está exposto sobre você e como reduzir.",
  },
  {
    name: "guarda-pretoriana",
    description: "Equipe própria de cibersegurança da comunidade.",
  },
  {
    name: "agentes",
    description: "Agentes de IA mantidos pelos membros.",
  },
];

export const AGENTES: ListingEntry[] = [
  {
    name: "atena",
    description: "Oráculo do servidor no Discord: XP, patentes, agenda e dúvidas sobre o regulamento.",
  },
  {
    name: "[preencher: nome]",
    description: "[preencher: descrição curta do agente]",
  },
];

export type Metric = { label: string; value: string };

export const GUARDA_METRICAS: Metric[] = [
  { label: "membros ativos", value: "[preencher: ~N]" },
  { label: "incidentes analisados", value: "[preencher: N]" },
  { label: "tempo médio de resposta", value: "[preencher: Xh]" },
];

export const SKILLS: ListingEntry[] = [
  {
    name: "[preencher: nome da skill]",
    description: "[preencher: o que ela aplica no projeto]",
  },
];

/** Repositório de onde os membros copiam as skills. */
export const SKILLS_REPO = "[preencher: repositório das skills]";
