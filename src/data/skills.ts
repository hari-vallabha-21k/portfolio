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
export const TOPS = ["2 × S", "1 × S", "1 × S", "2 × A", "1 × B"];
export const RANKS = ["", "C", "B", "A", "S"];
export const RCOL: Record<string, string> = {
  S: "#F4874B",
  A: "#F5F4F0",
  B: "rgba(245,244,240,.55)",
  C: "rgba(245,244,240,.35)",
};
export const GDOT = ["#F5F4F0", "#b8b4a6", "#F4874B", "#8a8578", "#6f6c62"];
