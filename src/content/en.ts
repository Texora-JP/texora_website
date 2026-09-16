import { caseStudiesEn } from "./caseStudies.en";

export const en = {
  meta: {
    title: "TEXORA — Engineering from Japan, for the world",
    description:
      "TEXORA is a five-member software development team based in Japan, building AI, full-stack, mobile and blockchain products for startups and businesses worldwide.",
  },

  brand: {
    name: "TEXORA",
    kana: "テクソラ",
    tagline: "TECHNOLOGY FOR A BRIGHTER TOMORROW",
    seal: "拓",
  },

  nav: {
    about: "About",
    services: "Services",
    projects: "Projects",
    team: "Team",
    partnership: "Partnership",
    contact: "Contact",
    contactCta: "Contact",
    menu: "Menu",
    close: "Close menu",
    skipToContent: "Skip to content",
    themeToggle: "Switch colour theme",
    languageToggle: "Switch language",
  },

  hero: {
    eyebrow: "技術で、人と世界をつなぐ",
    titleJa: "日本から、世界へ。",
    titleEn: "From Japan to the world.",
    lead: "We are a five-member development team building AI, Full-Stack, Mobile and Blockchain products.",
    primaryCta: "View Projects",
    secondaryCta: "Work With TEXORA",
    strap: "SMALL TEAM. A BIGGER TOMORROW.",
    vertical: "良い技術で、より良い社会を",
    nodes: [
      { id: "europe", label: "EUROPE", note: "Ideas to impact" },
      { id: "usa", label: "USA", note: "Together further" },
      { id: "japan", label: "JAPAN", note: "Built with care" },
    ],
  },

  about: {
    index: "01",
    labelJa: "私たちについて",
    labelEn: "ABOUT",
    headingJa: "TEXORAは、日本を拠点とする5人のエンジニアチームです。",
    headingJaSub: "私たちは、技術の力で国や文化を越え、より良い未来をつくることを目指しています。",
    body: [
      "TEXORA is a five-member engineering team based in Japan.",
      "We use technology to transcend borders and create a brighter future together.",
    ],
    stats: [
      { value: "5", label: "Members", icon: "members" },
      { value: "Global", label: "Mindset", icon: "globe" },
      { value: "Real", label: "Impact", icon: "impact" },
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
        title: "AI & Automation",
        summary: "Turn ideas into intelligent solutions.",
        detail:
          "AI agents, LLM integration, RAG pipelines and workflow automation that take manual work out of the day.",
        tags: ["LLM", "AI Agents", "Automation"],
      },
      {
        id: "fullstack",
        icon: "code",
        tone: "matcha",
        title: "Full-Stack Development",
        summary: "Scalable web applications from idea to impact.",
        detail:
          "Modern SaaS platforms, APIs and dashboards built to stay maintainable long after launch.",
        tags: ["Next.js", "Node.js", "Cloud"],
      },
      {
        id: "mobile",
        icon: "mobile",
        tone: "matcha",
        title: "Mobile Development",
        summary: "Native and cross-platform mobile experiences.",
        detail:
          "Cross-platform products with real backend integration — payments, notifications and offline support.",
        tags: ["iOS", "Android", "Flutter"],
      },
      {
        id: "blockchain",
        icon: "cube",
        tone: "coral",
        title: "Blockchain & Web3",
        summary: "Build a more open and connected future.",
        detail:
          "Smart contracts, wallets, token systems and decentralised applications, written to be audited.",
        tags: ["Solidity", "Rust", "DeFi"],
      },
    ],
  },

  projects: {
    index: "03",
    labelJa: "実績",
    labelEn: "PROJECTS",
    note: "アイデアを、\n社会と実装する。",
    viewAll: "View All Projects",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    clientLabel: "Client",

    featured: caseStudiesEn,
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
    link: "Our Team",
    quoteJa: "ちがう視点が、\nもっといいものをつくる。",
    quoteEn: "Different perspectives create better solutions.",
    members: [
      {
        id: "kenji",
        seal: "鈴",
        name: "Kenji Suzuki",
        nameAlt: "鈴木 健二",
        role: "Founder / Senior Software Engineer",
        bio: "Senior software engineer with 8 years across full-stack, AI, blockchain and system architecture. Leads technical strategy and delivery.",
        skills: ["AI", "Architecture", "Product"],
        location: "Tokyo, Japan",
      },
      {
        id: "mika",
        seal: "田",
        name: "Mika Tanaka",
        nameAlt: "田中 美香",
        role: "Frontend Engineer",
        bio: "Builds interfaces where design and engineering meet, with a focus on accessibility and motion.",
        skills: ["UI/UX", "Next.js", "Design"],
        location: "Tokyo, Japan",
      },
      {
        id: "ryo",
        seal: "中",
        name: "Ryo Nakamura",
        nameAlt: "中村 涼",
        role: "Backend Engineer",
        bio: "Designs APIs and infrastructure that stay calm under load, and the pipelines that ship them.",
        skills: ["API", "Infrastructure", "DevOps"],
        location: "Osaka, Japan",
      },
      {
        id: "yuta",
        seal: "小",
        name: "Yuta Kobayashi",
        nameAlt: "小林 悠太",
        role: "Mobile Engineer",
        bio: "Ships cross-platform mobile products end to end, from prototype to store release.",
        skills: ["iOS", "Android", "Flutter"],
        location: "Fukuoka, Japan",
      },
      {
        id: "ayaka",
        seal: "佐",
        name: "Ayaka Sato",
        nameAlt: "佐藤 彩香",
        role: "Blockchain Engineer",
        bio: "Works on smart contracts and decentralised systems, with a research-first approach to security.",
        skills: ["Web3", "Solidity", "Research"],
        location: "Tokyo, Japan",
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
        title: "Discovery",
        body: "Understand the business problem, the users and the constraints before writing code.",
      },
      {
        step: "02",
        title: "Planning",
        body: "Define architecture, scope, timeline and milestones you can hold us to.",
      },
      {
        step: "03",
        title: "Development",
        body: "Build in short cycles, with visible progress in a shared repository.",
      },
      {
        step: "04",
        title: "Review",
        body: "Regular demos and feedback, so direction is corrected early rather than late.",
      },
      {
        step: "05",
        title: "Delivery",
        body: "Testing, deployment, documentation and continued support after launch.",
      },
    ],
    facts: [
      "Remote collaboration",
      "English communication",
      "GitHub-based development",
      "Regular progress updates",
      "Flexible engagement models",
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
      "We are looking for global partners to create value together,",
      "building long-term relationships based on technology and trust.",
    ],
    cta: "Work With TEXORA",
    vertical: "ともに、まだ見ぬ未来へ",
    nodes: [
      { id: "europe", label: "Europe", note: "Co-innovate" },
      { id: "us", label: "United States", note: "Build together" },
      { id: "japan", label: "Japan", note: "From here to the world" },
    ],
  },

  materials: {
    index: "07",
    labelJa: "資料・お問い合わせ",
    labelEn: "SUPPORTING MATERIALS",
    items: [
      { id: "profile", icon: "pdf", title: "Team Profile PDF", note: "チーム紹介資料", href: "#" },
      { id: "cv", icon: "cv", title: "Founder CV", note: "創業者の経歴", href: "#" },
      {
        id: "github",
        icon: "github",
        title: "GitHub",
        note: "ソースコードを見る",
        href: "https://github.com",
      },
      { id: "cases", icon: "cases", title: "Case Studies", note: "導入事例集", href: "#" },
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
    location: "Tokyo, Japan — Global Remote Development",
  },
};
