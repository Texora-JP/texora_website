import { caseStudiesJa } from "./caseStudies.ja";
import type { en } from "./en";

export const ja: typeof en = {
  meta: {
    title: "TEXORA — 日本から、世界へ。",
    description:
      "TEXORAは、日本を拠点とする5人のソフトウェア開発チームです。AI・フルスタック・モバイル・ブロックチェーンのプロダクトを、世界のスタートアップと企業に向けて開発しています。",
  },

  brand: {
    name: "TEXORA",
    kana: "テクソラ",
    tagline: "TECHNOLOGY FOR A BRIGHTER TOMORROW",
    seal: "拓",
  },

  nav: {
    about: "私たちについて",
    services: "技術",
    projects: "実績",
    team: "チーム",
    partnership: "パートナーシップ",
    contact: "お問い合わせ",
    contactCta: "ご相談はこちら",
    menu: "メニュー",
    close: "メニューを閉じる",
    skipToContent: "本文へスキップ",
    themeToggle: "配色を切り替える",
    languageToggle: "言語を切り替える",
  },

  hero: {
    eyebrow: "技術で、人と世界をつなぐ",
    titleJa: "日本から、世界へ。",
    titleEn: "From Japan to the world.",
    lead: "AI・フルスタック・モバイル・ブロックチェーンのプロダクトをつくる、5人の開発チームです。",
    primaryCta: "実績を見る",
    secondaryCta: "TEXORAと働く",
    strap: "SMALL TEAM. A BIGGER TOMORROW.",
    vertical: "良い技術で、より良い社会を",
    nodes: [
      { id: "europe", label: "EUROPE", note: "アイデアを形に" },
      { id: "usa", label: "USA", note: "ともに、さらに先へ" },
      { id: "japan", label: "JAPAN", note: "ていねいに、つくる" },
    ],
  },

  about: {
    index: "01",
    labelJa: "私たちについて",
    labelEn: "ABOUT",
    headingJa: "TEXORAは、日本を拠点とする5人のエンジニアチームです。",
    headingJaSub: "私たちは、技術の力で国や文化を越え、より良い未来をつくることを目指しています。",
    body: [
      "日本市場での開発経験を土台に、いま海外のクライアントやパートナーとの長期的な関係を築いています。",
      "AI、Web、モバイル、ブロックチェーン、バックエンド、アーキテクチャ。5人の専門領域が重なり合うチームです。",
    ],
    stats: [
      { value: "5", label: "メンバー", icon: "members" },
      { value: "Global", label: "視点", icon: "globe" },
      { value: "Real", label: "成果", icon: "impact" },
    ],
  },

  services: {
    index: "02",
    labelJa: "技術",
    labelEn: "SERVICES",
    note: "技術で、\n可能性を広げる",
    items: [
      {
        id: "ai",
        icon: "ai",
        tone: "indigo",
        title: "AI & 自動化",
        summary: "アイデアを、知性のあるしくみへ。",
        detail:
          "AIエージェント、LLM連携、RAG、業務フローの自動化。手作業を減らし、人が考える時間を増やします。",
        tags: ["LLM", "AIエージェント", "業務自動化"],
      },
      {
        id: "fullstack",
        icon: "code",
        tone: "matcha",
        title: "フルスタック開発",
        summary: "構想から公開まで、スケールするWebを。",
        detail: "モダンなSaaS、API、ダッシュボード。公開したあとも保守しやすい設計で構築します。",
        tags: ["Next.js", "Node.js", "クラウド"],
      },
      {
        id: "mobile",
        icon: "mobile",
        tone: "matcha",
        title: "モバイル開発",
        summary: "ネイティブとクロスプラットフォームの両方で。",
        detail:
          "決済、通知、オフライン対応まで含めたバックエンド連携込みのモバイルプロダクトを開発します。",
        tags: ["iOS", "Android", "Flutter"],
      },
      {
        id: "blockchain",
        icon: "cube",
        tone: "coral",
        title: "ブロックチェーン & Web3",
        summary: "ひらかれた、つながる未来へ。",
        detail:
          "スマートコントラクト、ウォレット、トークン設計、分散型アプリケーション。監査に耐える実装を前提に。",
        tags: ["Solidity", "Rust", "DeFi"],
      },
    ],
  },

  projects: {
    index: "03",
    labelJa: "実績",
    labelEn: "PROJECTS",
    note: "アイデアを、\n社会と実装する。",
    viewAll: "すべての実績を見る",
    problemLabel: "課題",
    solutionLabel: "解決",
    resultLabel: "成果",
    clientLabel: "クライアント",

    featured: caseStudiesJa,
  },

  stack: {
    labelEn: "TECHNOLOGY STACK",
    labelJa: "使用技術",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Solidity",
      "Rust",
      "AWS",
      "Docker",
    ],
  },

  team: {
    index: "04",
    labelJa: "チーム",
    labelEn: "TEAM",
    note: "5つの個性が、\n大きな力に。",
    link: "チームを見る",
    quoteJa: "ちがう視点が、\nもっといいものをつくる。",
    quoteEn: "Different perspectives create better solutions.",
    members: [
      {
        id: "kenji",
        seal: "鈴",
        name: "鈴木 健二",
        nameAlt: "Kenji Suzuki",
        role: "代表 / シニアソフトウェアエンジニア",
        bio: "フルスタック、AI、ブロックチェーン、システムアーキテクチャに8年。技術戦略とプロジェクト推進を担当。",
        skills: ["AI", "設計", "プロダクト"],
        location: "東京",
      },
      {
        id: "mika",
        seal: "田",
        name: "田中 美香",
        nameAlt: "Mika Tanaka",
        role: "フロントエンドエンジニア",
        bio: "デザインと実装が出会う場所をつくる。アクセシビリティとモーションにこだわる。",
        skills: ["UI/UX", "Next.js", "デザイン"],
        location: "東京",
      },
      {
        id: "ryo",
        seal: "中",
        name: "中村 涼",
        nameAlt: "Ryo Nakamura",
        role: "バックエンドエンジニア",
        bio: "負荷がかかっても静かに動くAPIと基盤、そしてそれを届けるパイプラインを設計。",
        skills: ["API", "インフラ", "DevOps"],
        location: "大阪",
      },
      {
        id: "yuta",
        seal: "小",
        name: "小林 悠太",
        nameAlt: "Yuta Kobayashi",
        role: "モバイルエンジニア",
        bio: "プロトタイプからストア公開まで、クロスプラットフォームのプロダクトを一貫して担当。",
        skills: ["iOS", "Android", "Flutter"],
        location: "福岡",
      },
      {
        id: "ayaka",
        seal: "佐",
        name: "佐藤 彩香",
        nameAlt: "Ayaka Sato",
        role: "ブロックチェーンエンジニア",
        bio: "スマートコントラクトと分散システム。セキュリティはリサーチから始める。",
        skills: ["Web3", "Solidity", "リサーチ"],
        location: "東京",
      },
    ],
  },

  process: {
    index: "05",
    labelJa: "進め方",
    labelEn: "HOW WE WORK",
    headingJa: "小さなチームだから、まっすぐ届く。",
    headingEn: "A small team means a short path from idea to release.",
    steps: [
      {
        step: "01",
        title: "ヒアリング",
        body: "コードを書く前に、事業の課題とユーザー、制約を理解します。",
      },
      {
        step: "02",
        title: "設計・計画",
        body: "アーキテクチャ、スコープ、スケジュール、マイルストーンを明確にします。",
      },
      {
        step: "03",
        title: "開発",
        body: "短いサイクルで開発し、進捗は共有リポジトリでいつでも確認できます。",
      },
      {
        step: "04",
        title: "レビュー",
        body: "定期的なデモとフィードバックで、方向のずれを早い段階で直します。",
      },
      {
        step: "05",
        title: "提供・運用",
        body: "テスト、デプロイ、ドキュメント、公開後の継続的なサポートまで。",
      },
    ],
    facts: [
      "リモートでの協働",
      "英語でのコミュニケーション",
      "GitHubベースの開発",
      "定期的な進捗共有",
      "柔軟な契約形態",
    ],
  },

  partnership: {
    index: "06",
    labelJa: "グローバルパートナーシップ",
    labelEn: "PARTNERSHIP",
    note: "国境を越え、\nともに未来をつくる。",
    headingJa: "日本から、世界のパートナーへ。",
    headingEn: "Long-term collaboration for a brighter future.",
    bodyJa: [
      "私たちは、国や地域を越えて、共に価値をつくるパートナーを求めています。",
      "技術と信頼をもとに、持続的な関係を築いていきましょう。",
    ],
    bodyEn: [
      "私たちが技術と設計を担い、パートナーの皆さまには市場の知見や",
      "顧客との関係、営業やコミュニケーションを担っていただけます。",
    ],
    cta: "TEXORAと働く",
    vertical: "ともに、まだ見ぬ未来へ",
    nodes: [
      { id: "europe", label: "ヨーロッパ", note: "ともに生み出す" },
      { id: "us", label: "アメリカ", note: "ともにつくる" },
      { id: "japan", label: "日本", note: "ここから、世界へ" },
    ],
  },

  materials: {
    index: "07",
    labelJa: "資料・お問い合わせ",
    labelEn: "SUPPORTING MATERIALS",
    items: [
      { id: "profile", icon: "pdf", title: "チーム紹介資料", note: "Team Profile PDF", href: "#" },
      { id: "cv", icon: "cv", title: "創業者の経歴", note: "Founder CV", href: "#" },
      {
        id: "github",
        icon: "github",
        title: "GitHub",
        note: "ソースコードを見る",
        href: "https://github.com",
      },
      { id: "cases", icon: "cases", title: "導入事例集", note: "Case Studies", href: "#" },
    ],
    contact: {
      titleJa: "お問い合わせ",
      titleEn: "Let us build something great together.",
      email: "hello@texora.jp",
    },
  },

  footer: {
    taglineJa: "技術で、もっとやさしい未来を。",
    rights: "All rights reserved.",
    location: "東京 — グローバル・リモート開発",
  },
};
