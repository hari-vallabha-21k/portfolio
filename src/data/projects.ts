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
  /** Real screenshot (path under /public). Falls back to the generated gradient art when absent. */
  image?: string;
  imageAlt?: string;
}

const GH = "https://github.com/hari-vallabha-21k";

export const PROJECTS: Project[] = [
  {
    i: "01",
    code: "P-01",
    year: "2026",
    kind: "RAG + evals",
    title: "DocChat",
    tag: "Ask 10-K filings anything — and measure which retrieval method actually finds the answer.",
    role: "Design + build, end to end",
    stackStr: "Python · LangChain · ChromaDB · RAGAS",
    stack: ["Python", "LangChain", "ChromaDB", "RAGAS"],
    sys: "SYS — RAG / EVAL",
    chip: "HYBRID + RERANK",
    spark: "M0,30 L16,24 L32,26 L48,16 L64,20 L80,10 L96,14 L120,6",
    artBg:
      "radial-gradient(110% 100% at 22% 78%, rgba(244,135,75,.22), transparent 50%), linear-gradient(200deg, #131210 0%, #22201b 60%, #171512 100%)",
    points: [
      {
        i: "/01",
        t: "Built a retrieval pipeline over four public 10-K filings (Apple, Nike, Tesla): token-aware chunking, dense search in Chroma, BM25 keyword search, and Reciprocal Rank Fusion written by hand.",
      },
      {
        i: "/02",
        t: "Added a cross-encoder reranker and LLM answers that cite the file and page of every passage, with a refusal path for questions the filings cannot answer.",
      },
      {
        i: "/03",
        t: "Wrote a 48-question evaluation set (44 answerable, 4 not) and compared four retrieval modes on hit@5, MRR and latency. The baseline showed keyword search (77%) beating dense (48%) and hybrid (68%) on financial filings.",
      },
    ],
    metrics: [
      { v: "48", l: "eval questions, 4 retrieval modes" },
      { v: "77%", l: "hit@5 — BM25 beat dense at 48%" },
      { v: "0.577", l: "best MRR — hybrid + rerank" },
    ],
    links: [{ label: "GitHub", href: `${GH}/DocChat` }],
  },
  {
    i: "02",
    code: "P-02",
    year: "2026",
    kind: "AI analytics",
    title: "AI Business Intelligence Copilot",
    tag: "Messy Excel in, evidence-backed answers out — analytics calculates, the AI only explains.",
    role: "Design + build, end to end",
    stackStr: "React · FastAPI · pandas · PostgreSQL",
    stack: ["React", "FastAPI", "pandas", "PostgreSQL"],
    sys: "SYS — BI COPILOT",
    chip: "WHAT → WHY → FOCUS",
    spark: "M0,30 L14,26 L28,28 L42,20 L56,22 L70,14 L84,17 L98,8 L120,10",
    artBg:
      "radial-gradient(120% 110% at 20% 20%, rgba(244,135,75,.26), transparent 52%), linear-gradient(160deg, #151310 0%, #221f1a 58%, #2f2418 100%)",
    points: [
      {
        i: "/01",
        t: "Built a FastAPI pipeline that takes messy multi-branch Excel and CSV business data through profiling, quality checks, cleaning and semantic mapping before any figure is shown.",
      },
      {
        i: "/02",
        t: "Designed a 25-concept business semantic layer that maps differently named columns and branch spellings to one vocabulary, refuses ambiguous merges, and says so when the data cannot support a metric.",
      },
      {
        i: "/03",
        t: "Kept the LLM out of the maths: the analytics engine computes KPIs, branch comparisons and problem detection, and the AI layer explains them with evidence the user can inspect.",
      },
    ],
    metrics: [
      { v: "25", l: "concepts in the semantic layer" },
      { v: "4-state", l: "metric availability, never silent" },
      { v: "evidence", l: "every answer traceable to data" },
    ],
    links: [{ label: "GitHub", href: `${GH}/AI-Business-Intelligence` }],
  },
  {
    i: "03",
    code: "P-03",
    year: "2026",
    kind: "Data analysis",
    title: "Customer Review Intelligence",
    tag: "Which complaints should a clothing brand fix first? Six themes ranked from 23k reviews.",
    role: "Analysis, end to end",
    stackStr: "Python · PostgreSQL · NLP · Power BI",
    stack: ["Python", "PostgreSQL", "NLP", "Power BI"],
    sys: "SYS — VOICE OF CUSTOMER",
    chip: "6 THEMES · RANKED",
    spark: "M0,8 L20,12 L40,10 L60,18 L80,22 L100,28 L120,32",
    artBg:
      "radial-gradient(120% 100% at 80% 24%, rgba(244,135,75,.24), transparent 52%), linear-gradient(145deg, #181612 0%, #232019 55%, #34281a 100%)",
    points: [
      {
        i: "/01",
        t: "Cleaned and validated 23,000+ women's e-commerce clothing reviews in Python, then loaded them into PostgreSQL for data-quality checks and business analysis in SQL.",
      },
      {
        i: "/02",
        t: "Applied sentiment analysis and transparent, rule-based theme extraction (fit, fabric, style, colour, comfort, price) so every classification can be explained.",
      },
      {
        i: "/03",
        t: "Ranked themes by frequency times rating gap, not frequency alone: fit and sizing tops the list (in 73% of reviews), while price reviews score lowest at 3.88 stars with 17.9% negative. Packaged as a Power BI dashboard.",
      },
    ],
    metrics: [
      { v: "23k+", l: "reviews cleaned & analysed" },
      { v: "73%", l: "of reviews mention fit / sizing" },
      { v: "3.88★", l: "lowest-rated theme — price" },
    ],
    links: [{ label: "GitHub", href: `${GH}/customer-review-intelligence` }],
  },
  {
    i: "04",
    code: "P-04",
    year: "2025",
    kind: "ML tooling",
    title: "ML Model Monitoring",
    tag: "Watching the watchers — drift, health and retraining calls for models in production.",
    role: "Design + build, end to end",
    stackStr: "Python · Flask · Plotly",
    stack: ["Python", "Flask", "Plotly", "REST APIs"],
    sys: "SYS — MODEL OPS",
    chip: "PSI 0.05 · OK",
    spark: "M0,30 L12,27 L24,29 L36,24 L48,26 L60,21 L72,23 L84,17 L96,8 L108,14 L120,11",
    artBg:
      "radial-gradient(120% 110% at 82% 18%, rgba(244,135,75,.28), transparent 55%), linear-gradient(155deg, #17150f 0%, #262019 55%, #3a2c1c 100%)",
    points: [
      {
        i: "/01",
        t: "Developed backend services to monitor deployed machine learning models and visualize system health metrics through interactive dashboards.",
      },
      {
        i: "/02",
        t: "Designed APIs and data pipelines to track model performance indicators including Kolmogorov-Smirnov and PSI drift detection.",
      },
      {
        i: "/03",
        t: "Built real-time Plotly dashboards for monitoring model behavior in production environments with retraining recommendation logic.",
      },
    ],
    metrics: [
      { v: "2", l: "drift tests wired — KS · PSI" },
      { v: "live", l: "production dashboards" },
      { v: "auto", l: "retraining flags" },
    ],
    links: [{ label: "GitHub", href: `${GH}/ml-drift-monitoring` }],
  },
  {
    i: "05",
    code: "P-05",
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
        t: "Built backend services and API integrations for a multilingual AI-powered voice assistant supporting real-time speech-to-text and NLP processing.",
      },
      {
        i: "/02",
        t: "Designed RESTful APIs to automate customer support workflows, reducing average issue resolution time from 8 minutes to 3 minutes.",
      },
      {
        i: "/03",
        t: "Implemented logging and monitoring to analyze system usage patterns across three languages with comprehensive query distribution analytics.",
      },
    ],
    metrics: [
      { v: "−62%", l: "avg. resolution — 8 → 3 min" },
      { v: "3", l: "languages, realtime STT" },
      { v: "12.7k", l: "queries analysed / 90d" },
    ],
    links: [],
  },
  {
    i: "06",
    code: "P-06",
    year: "2025",
    kind: "Web platform",
    title: "ProjectPulse",
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
        t: "Built full-stack project management platform with real-time health scoring, team assignments, and stakeholder dashboards for comprehensive project oversight.",
      },
      {
        i: "/02",
        t: "Developed weekly progress tracking, risk reporting, and confidence level monitoring with seamless employee-client feedback loops.",
      },
      {
        i: "/03",
        t: "Implemented satisfaction ratings, issue flagging, and visual status indicators (Healthy/Yellow/Red) to ensure project success and transparency.",
      },
    ],
    metrics: [
      { v: "3-state", l: "health signal — H / Y / R" },
      { v: "weekly", l: "progress & risk cadence" },
      { v: "2-way", l: "client–team feedback" },
    ],
    links: [
      { label: "Live demo", href: "https://project-pluse.vercel.app" },
      { label: "GitHub", href: `${GH}/ProjectPluse` },
    ],
    image: "/images/projects/projectpluse.webp",
    imageAlt: "ProjectPulse landing page: Manage projects. Assign tasks. Track progress.",
  },
  {
    i: "07",
    code: "P-07",
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
        t: "Developed and deployed a custom Shopify-based e-commerce platform for a premium streetwear brand, focusing on mobile responsiveness and user experience.",
      },
      {
        i: "/02",
        t: "Implemented custom storefront functionality, product management workflows, and branded UI components aligned with business requirements.",
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
    links: [],
  },
];
