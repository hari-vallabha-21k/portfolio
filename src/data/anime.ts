export interface AnimeQuote {
  q: string;
  w: string;
}
export interface AnimeCard {
  kanji: string;
  label: string;
  rot: string;
  quotes: AnimeQuote[];
}

export const ANIME: AnimeCard[] = [
  {
    kanji: "進撃の巨人",
    label: "SHINGEKI NO KYOJIN — AOT",
    rot: "-2.2deg",
    quotes: [
      {
        q: "If you win, you live. If you lose, you die. If you don’t fight, you can’t win.",
        w: "EREN YEAGER",
      },
      { q: "Dedicate your hearts!", w: "ERWIN SMITH" },
      { q: "This world is cruel — and also very beautiful.", w: "MIKASA ACKERMAN" },
    ],
  },
  {
    kanji: "ナルト 疾風伝",
    label: "NARUTO — SHIPPŪDEN",
    rot: "1.6deg",
    quotes: [
      { q: "I never go back on my word — that’s my ninja way.", w: "NARUTO UZUMAKI" },
      { q: "A failure can surpass a genius through hard work.", w: "ROCK LEE" },
      { q: "If you don’t like your destiny, don’t accept it.", w: "NARUTO UZUMAKI" },
    ],
  },
  {
    kanji: "僕のヒーローアカデミア",
    label: "BOKU NO HERO ACADEMIA",
    rot: "-1.4deg",
    quotes: [
      { q: "Go beyond. Plus Ultra!", w: "ALL MIGHT" },
      { q: "It’s fine now. Why? Because I am here!", w: "ALL MIGHT" },
      { q: "If you feel yourself hitting up against your limit — surpass it.", w: "ALL MIGHT" },
    ],
  },
  {
    kanji: "ブラッククローバー",
    label: "BLACK CLOVER — CLOVER KINGDOM",
    rot: "2deg",
    quotes: [
      { q: "Not giving up is my magic!", w: "ASTA" },
      { q: "Surpass your limits. Right here, right now.", w: "YAMI SUKEHIRO" },
      { q: "Being weak is nothing to be ashamed of — staying weak is.", w: "FUEGOLEON VERMILLION" },
    ],
  },
  {
    kanji: "ワンピース",
    label: "ONE PIECE — GRAND LINE",
    rot: "-1.8deg",
    quotes: [
      { q: "I’m gonna be King of the Pirates!", w: "MONKEY D. LUFFY" },
      { q: "When do you think people die? When they are forgotten.", w: "DR. HILULUK" },
      {
        q: "Inherited will, the destiny of the age, the dreams of the people — these will not be stopped.",
        w: "GOL D. ROGER",
      },
    ],
  },
];
