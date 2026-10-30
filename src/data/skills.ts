export interface StackItem {
  c: string;
  n: string;
}
export interface StackGroup {
  label: string;
  count: string;
  items: StackItem[];
}

const RAW_STACKS: [label: string, code: string, items: string[]][] = [
  [
    "Frontend",
    "FE",
    ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  ],
  ["Backend", "BE", ["Node.js", "Express.js", "Flask", "FastAPI", "RESTful APIs"]],
  ["Databases", "DB", ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQLite"]],
  ["DevOps & deploy", "OP", ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions"]],
  ["Languages", "LG", ["Python", "JavaScript", "TypeScript", "C++"]],
  ["Tools", "TL", ["Git", "GitHub", "Postman", "VS Code", "Jupyter"]],
];

export const STACKS: StackGroup[] = RAW_STACKS.map(([label, code, items]) => ({
  label,
  count: `${String(items.length).padStart(2, "0")} ITEMS`,
  items: items.map((n, i) => ({ c: `${code}-${String(i + 1).padStart(2, "0")}`, n })),
}));

/** [name, group index into LBLS, rank 1–4 into RANKS] */
export type Skill = [name: string, group: number, rank: number];

export const SKILLS: Skill[] = [
  ["React", 0, 4],
  ["Next.js", 0, 4],
  ["TypeScript", 0, 3],
  ["JavaScript", 0, 3],
  ["Tailwind", 0, 2],
  ["HTML5", 0, 1],
  ["CSS3", 0, 1],
  ["Node.js", 1, 4],
  ["Express", 1, 3],
  ["Flask", 1, 3],
  ["FastAPI", 1, 2],
  ["REST APIs", 1, 3],
  ["Python", 2, 4],
  ["PostgreSQL", 2, 3],
  ["SQL", 2, 3],
  ["Plotly", 2, 3],
  ["Supabase", 2, 2],
  ["MongoDB", 2, 2],
  ["Jupyter", 2, 2],
  ["KS · PSI drift", 2, 1],
  ["OpenAI APIs", 2, 2],
  ["PyTorch", 2, 3],
  ["LangChain", 2, 3],
  ["ChromaDB", 2, 2],
  ["RAGAS", 2, 2],
  ["HuggingFace Transformers", 2, 2],
  ["Sentence-BERT", 2, 2],
  ["FAISS", 2, 1],
  ["MLflow", 2, 1],
  ["Docker", 3, 3],
  ["AWS", 3, 3],
  ["Vercel", 3, 2],
  ["CI/CD", 3, 2],
  ["GitHub Actions", 3, 2],
  ["Git", 4, 2],
  ["Postman", 4, 1],
];

export const LBLS = ["FRONTEND", "BACKEND", "DATA & ML", "DEVOPS", "TOOLS"];
export const TREE_NAMES = ["Frontend", "Backend", "Data & ML", "DevOps", "Tools"];
export const TREE_KANJI = ["前端", "後端", "分析", "運用", "道具"];
export const RANKS = ["", "C", "B", "A", "S"];

/** Stat-card bars: [label, group index into LBLS, value 0–100]. */
export const STATS: [label: string, group: number, value: number][] = [
  ["DATA & ML", 2, 94],
  ["FRONTEND", 0, 86],
  ["BACKEND", 1, 80],
  ["DEVOPS", 3, 68],
  ["TOOLS", 4, 62],
];

export interface Formation {
  k: string;
  kanji: string;
  mission: string;
  name: string;
  desc: string;
  proof: string;
  href: string;
  /** [role, tool, code] */
  slots: [role: string, tool: string, code: string][];
}

export const FORMS: Formation[] = [
  {
    k: "A",
    kanji: "製品",
    mission: "SAAS PRODUCT",
    name: "The product build",
    desc: "Auth to dashboard in one stack — the formation for shipping a product fast.",
    proof: "PROJECTPULSE",
    href: "#work",
    slots: [
      ["UI", "React", "FE-01"],
      ["FRAMEWORK", "Next.js", "FE-02"],
      ["AUTH + DATA", "Supabase", "DB-04"],
      ["DATABASE", "PostgreSQL", "DB-01"],
      ["DEPLOY", "Vercel", "OP-03"],
    ],
  },
  {
    k: "B",
    kanji: "分析",
    mission: "DATA / ML",
    name: "The evidence engine",
    desc: "From raw rows to a monitored model — the formation an analyst lives in.",
    proof: "DOCCHAT · ML MONITORING",
    href: "#work",
    slots: [
      ["ANALYSIS", "Python", "LG-01"],
      ["QUERY", "SQL", "DB-02"],
      ["SERVING", "FastAPI", "BE-03"],
      ["VIZ", "Plotly", "DA-04"],
      ["RUNTIME", "Docker · AWS", "OP-01"],
    ],
  },
  {
    k: "C",
    kanji: "商店",
    mission: "CLIENT E-COM",
    name: "The storefront sprint",
    desc: "Concept to production storefront, directly with the client — speed over ceremony.",
    proof: "APPAREL STOREFRONT",
    href: "#work",
    slots: [
      ["PLATFORM", "Shopify", "EC-01"],
      ["TEMPLATE", "Liquid", "EC-02"],
      ["CUSTOM UX", "JavaScript", "LG-02"],
      ["CI / SHIP", "GitHub Actions", "OP-05"],
      ["CLIENT", "Direct", "★"],
    ],
  },
];
