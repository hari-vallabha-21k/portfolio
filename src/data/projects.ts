export interface ProjectPoint {
  i: string;
  t: string;
}
export interface ProjectMetric {
  v: string;
  l: string;
}
export interface ProjectLink {
  label: string;
  href: string;
}
export interface Project {
  i: string;
  code: string;
  year: string;
  kind: string;
  title: string;
  tag: string;
  role: string;
  stackStr: string;
  stack: string[];
  sys: string;
  chip: string;
  spark: string;
  artBg: string;
  points: ProjectPoint[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    i: "01",
    code: "P-01",
    year: "2025",
    kind: "ML tooling",
    title: "ML Model Monitoring",
    tag: "Watching the watchers — drift, health and retraining calls for models in production.",
    role: "Design + build, end to end",
    stackStr: "Python · Flask · Plotly",
    stack: ["Python", "Flask", "Plotly", "REST APIs"],
    sys: "SYS — MODEL OPS",
    chip: "PSI 0.08 · OK",
    spark: "M0,30 L12,27 L24,29 L36,24 L48,26 L60,21 L72,23 L84,17 L96,8 L108,14 L120,11",
    artBg:
      "radial-gradient(120% 110% at 82% 18%, rgba(244,135,75,.28), transparent 55%), linear-gradient(155deg, #17150f 0%, #262019 55%, #3a2c1c 100%)",
    points: [
      {
        i: "/01",
        t: "Developed backend services that monitor deployed machine-learning models and surface system health through interactive dashboards.",
      },
      {
        i: "/02",
        t: "Designed APIs and data pipelines tracking model performance indicators — Kolmogorov-Smirnov and PSI drift detection.",
      },
      {
        i: "/03",
        t: "Built realtime Plotly dashboards for production model behaviour, with retraining recommendation logic when drift crosses threshold.",
      },
    ],
    metrics: [
      { v: "2", l: "drift tests wired — KS · PSI" },
      { v: "live", l: "production dashboards" },
      { v: "auto", l: "retraining flags" },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Case notes", href: "#" },
    ],
  },
  {
    i: "02",
    code: "P-02",
    year: "2025",
    kind: "AI product",
    title: "SimplHome",
    tag: "A multilingual AI voice assistant that cut support resolution from eight minutes to three.",
    role: "Design + build, end to end",
    stackStr: "React · Node.js · OpenAI APIs",
    stack: ["React", "Node.js", "OpenAI APIs", "REST"],
    sys: "SYS — VOICE / NLP",
    chip: "STT · 3 LANGS",
    spark:
      "M0,22 L10,22 L14,10 L20,32 L26,16 L34,22 L44,22 L48,12 L54,30 L60,18 L70,22 L80,22 L84,14 L92,28 L100,20 L110,22 L120,22",
    artBg:
      "radial-gradient(110% 100% at 18% 22%, rgba(244,135,75,.22), transparent 50%), linear-gradient(200deg, #141311 0%, #24221e 60%, #171512 100%)",
    points: [
      {
        i: "/01",
        t: "Built backend services and API integrations for a multilingual AI voice assistant — realtime speech-to-text and NLP processing.",
      },
      {
        i: "/02",
        t: "Designed RESTful APIs automating customer-support workflows, cutting average issue resolution from 8 minutes to 3.",
      },
      {
        i: "/03",
        t: "Implemented logging and monitoring to analyse usage across three languages, with full query-distribution analytics.",
      },
    ],
    metrics: [
      { v: "−62%", l: "avg. resolution — 8 → 3 min" },
      { v: "3", l: "languages, realtime STT" },
      { v: "12.7k", l: "queries analysed / 90d" },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
  {
    i: "03",
    code: "P-03",
    year: "2025",
    kind: "Web platform",
    title: "ProjectPluse",
    tag: "Project health at a glance — scoring, risk and confidence for every stakeholder.",
    role: "Design + build, end to end",
    stackStr: "Next.js · TypeScript · React",
    stack: ["Next.js", "TypeScript", "React"],
    sys: "SYS — PM PLATFORM",
    chip: "HEALTH · GREEN",
    spark: "M0,32 L20,28 L40,30 L60,20 L80,24 L100,12 L120,16",
    artBg:
      "radial-gradient(130% 110% at 78% 82%, rgba(201,58,26,.3), transparent 55%), linear-gradient(150deg, #1a1815 0%, #211d18 55%, #2e2118 100%)",
    points: [
      {
        i: "/01",
        t: "Full-stack project management platform with realtime health scoring, team assignments and stakeholder dashboards.",
      },
      {
        i: "/02",
        t: "Weekly progress tracking, risk reporting and confidence-level monitoring with seamless employee–client feedback loops.",
      },
      {
        i: "/03",
        t: "Satisfaction ratings, issue flagging and Healthy / Yellow / Red status indicators keep every project transparent.",
      },
    ],
    metrics: [
      { v: "3-state", l: "health signal — H / Y / R" },
      { v: "weekly", l: "progress & risk cadence" },
      { v: "2-way", l: "client–team feedback" },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
  {
    i: "04",
    code: "P-04",
    year: "2025",
    kind: "SaaS — freelance",
    title: "Progress Tracker",
    tag: "Momentum, measured — a SaaS home for tasks, progress analytics and dashboards.",
    role: "Freelance — design + build",
    stackStr: "React · Next.js · Supabase · PostgreSQL",
    stack: ["React", "Next.js", "Supabase", "PostgreSQL"],
    sys: "SYS — SAAS",
    chip: "MULTI-USER READY",
    spark: "M0,34 L20,30 L40,31 L60,26 L80,18 L100,14 L120,6",
    artBg:
      "radial-gradient(120% 120% at 24% 80%, rgba(244,135,75,.2), transparent 52%), linear-gradient(160deg, #121110 0%, #1e1c18 60%, #262019 100%)",
    points: [
      {
        i: "/01",
        t: "Engineered a full-stack productivity platform on React, Next.js, Supabase and PostgreSQL.",
      },
      {
        i: "/02",
        t: "Built authentication, progress analytics, task tracking and dashboard modules for productivity monitoring.",
      },
      {
        i: "/03",
        t: "Designed a scalable database architecture and backend services ready for multi-user expansion.",
      },
    ],
    metrics: [
      { v: "auth→BI", l: "one platform, end to end" },
      { v: "multi-user", l: "ready schema design" },
      { v: "SaaS", l: "productivity platform" },
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
  {
    i: "05",
    code: "P-05",
    year: "2025",
    kind: "Client work",
    title: "Apparel Storefront",
    tag: "A premium streetwear storefront, concept to production on Shopify.",
    role: "Freelance — direct client",
    stackStr: "Shopify · Liquid · Custom storefront",
    stack: ["Shopify", "Liquid", "JavaScript"],
    sys: "CLIENT — E-COMMERCE",
    chip: "SHOPIFY · LIVE",
    spark: "M0,26 L16,26 L20,18 L36,18 L40,26 L64,26 L68,12 L92,12 L96,26 L120,26",
    artBg:
      "radial-gradient(120% 100% at 80% 30%, rgba(244,135,75,.25), transparent 55%), linear-gradient(145deg, #191713 0%, #211f1a 50%, #33281c 100%)",
    points: [
      {
        i: "/01",
        t: "Developed and deployed a custom Shopify e-commerce platform for a premium streetwear brand — mobile-first UX.",
      },
      {
        i: "/02",
        t: "Implemented custom storefront functionality, product-management workflows and branded UI components.",
      },
      {
        i: "/03",
        t: "Collaborated directly with stakeholders to translate design concepts into a production-ready online store.",
      },
    ],
    metrics: [
      { v: "mobile-first", l: "storefront experience" },
      { v: "custom", l: "workflows & branded UI" },
      { v: "prod", l: "shipped with stakeholders" },
    ],
    links: [
      { label: "Store", href: "#" },
      { label: "Case notes", href: "#" },
    ],
  },
];
