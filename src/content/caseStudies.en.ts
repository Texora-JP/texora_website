import type { CaseStudy } from "./types";

/**
 * Lead case studies, in the order they appear.
 *
 * Rule for this file: every figure must be one the project genuinely supports,
 * and every `metrics` block must say where and when it was measured. If a
 * source marks its numbers illustrative, they do not belong here — describe
 * what shipped instead.
 */
export const caseStudiesEn: CaseStudy[] = [
  {
    eyebrow: "FEATURED CASE STUDY",
    id: "beauty",
    name: "Enterprise Beauty Commerce",
    // Client is under NDA. Do not name or link them anywhere on this site.
    client: "Japanese Cosmetics Brand",
    kicker: "一人ひとりの美しさに、寄り添う。",
    category: "AI / COMMERCE / OMNICHANNEL",
    // Delivery year not yet confirmed — the category line hides an empty year.
    year: "",
    status: "Delivered",
    summary:
      "An AI-powered omnichannel beauty commerce platform built for personalised discovery, membership and global-scale purchasing.",
    problem:
      "Traditional cosmetics e-commerce separates product discovery, beauty consultation, loyalty and purchasing into disconnected experiences. Customers need more personalised guidance, while the brand needs a unified view of online and offline engagement.",
    solution:
      "A full-stack beauty commerce platform that brings personalised discovery, AI-assisted consultation, loyalty membership, beauty content, product recommendations, inventory visibility and checkout into one continuous experience.",
    image: "/projects/beauty.png",
    // Blurred at build time by scripts/process-project-images.mjs — the original
    // identifies the client and is kept out of public/.
    imageAlt: "A deliberately blurred view of the platform, redacted for client confidentiality.",
    // DRAFT — derived from the solution description, not from a confirmed
    // technical brief. Deliberately capability-level: no technology is named
    // until the client-approved stack is confirmed. See README.
    specs: [
      {
        label: "Experience",
        items: [
          "Personalised product discovery",
          "Beauty content and editorial",
          "Product recommendations",
          "Guided routine building",
        ],
      },
      {
        label: "AI Layer",
        items: [
          "AI-assisted beauty consultation",
          "Recommendation engine",
          "Personalised discovery ranking",
        ],
      },
      {
        label: "Commerce",
        items: [
          "Checkout and purchasing at global scale",
          "Inventory visibility",
          "Loyalty membership",
          "Multi-market support",
        ],
      },
      {
        label: "Omnichannel",
        items: [
          "Unified online and in-store view",
          "Membership across channels",
          "Engagement history",
        ],
      },
      {
        label: "Our Role",
        items: [
          "Product architecture",
          "Frontend",
          "Backend and APIs",
          "AI integration",
          "Commerce and membership systems",
        ],
      },
    ],
    metrics: [],
    metricsNote: "",
    result:
      "Discovery, consultation, membership and purchase delivered as one continuous experience, online and in store.",
    access: "Client name withheld under NDA. Further detail available on request.",
    liveLabel: "",
    caseStudyLabel: "",
    liveHref: "",
    caseStudyHref: "",
  },

  {
    eyebrow: "FEATURED CASE STUDY",
    id: "bizpilotai",
    name: "BizPilotAI",
    client: "In-house product",
    kicker: "「デモ」で終わらせない。",
    category: "AI / SAAS / FULL-STACK",
    year: "2026",
    status: "Live commercial SaaS",
    summary:
      "A commercial AI SaaS that runs on real subscriptions — built to be operated, not demonstrated.",
    problem:
      "AI tools stall at prototype stage. Without billing, a consent trail or a rollback path, they never survive contact with production.",
    solution:
      "A live subscription product where the AI tools, the billing and the operational safety were designed as one system — with the architecture published rather than screenshotted.",
    image: "/projects/bizpilotai.png",
    imageAlt: "The BizDX AI site, showing the BizLink system-integration pages.",
    specs: [
      {
        label: "Architecture",
        items: [
          "Next.js (App Router) · TypeScript",
          "PostgreSQL",
          "nginx TLS termination",
          "Docker Compose",
        ],
      },
      {
        label: "AI Layer",
        items: [
          "AI Writer · Chat · Image generation",
          "Multi-provider orchestration",
          "Bring-your-own API keys",
          "Entitlement and PII guards before tool execution",
        ],
      },
      {
        label: "Platform",
        items: [
          "Stripe Checkout and subscriptions",
          "Free / Pro / BYO plan matrix",
          "Replay-safe signed webhooks",
          "Legal consent logged before checkout",
          "Bilingual JA / EN routing",
        ],
      },
      {
        label: "Infrastructure",
        items: [
          "Isolated staging and production stacks",
          "SHA-tagged releases · rollback runbooks",
          "Structured logging with trace IDs",
          "Audit logs · rate limiting · health checks",
        ],
      },
      {
        label: "Our Role",
        items: [
          "System architecture",
          "Frontend and backend",
          "AI engineering",
          "Billing integration",
          "Cloud deployment and operations",
        ],
      },
    ],
    // The published ROI figures are marked illustrative at the source, so they
    // are deliberately not repeated here as measured outcomes.
    metrics: [],
    metricsNote: "",
    result:
      "Shipped and operating as a paid product: billing, consent and rollback all proven in production rather than promised.",
    liveLabel: "Live product",
    caseStudyLabel: "Full case study",
    liveHref: "https://bizpilotai.jp",
    caseStudyHref: "https://bizdxai.com/en/portfolio/bizpilotai",
  },

  {
    eyebrow: "FEATURED CASE STUDY",
    id: "kadai",
    name: "0120.co.jp",
    client: "株式会社課題解決プラットフォーム",
    kicker: "サイトそのものが、実証。",
    category: "AI / CONTENT PLATFORM / AUTOMATION",
    year: "2026",
    status: "Live and measured",
    summary:
      "A content platform that publishes itself — and reports its own numbers rather than describing them.",
    problem:
      "Content operations usually scale by hiring. Writing, publishing, indexing and performance work stay manual, so volume and quality pull against each other.",
    solution:
      "An AI pipeline that drafts, publishes and submits for indexing on a schedule, with Core Web Vitals and AI-search visibility measured continuously on the live site.",
    image: "/projects/kadai.png",
    imageAlt: "The 0120.co.jp home page, published by its own AI pipeline.",
    specs: [
      {
        label: "Architecture",
        items: [
          "Next.js · TypeScript",
          "Cloudflare",
          "GitHub Actions CI/CD",
          "JSON-LD: Article · FAQPage · BreadcrumbList · Organization",
        ],
      },
      {
        label: "AI Layer",
        items: [
          "Claude Code with MCP tooling",
          "Anthropic and OpenAI APIs",
          "RAG over the existing corpus",
          "Scheduled drafting and review",
        ],
      },
      {
        label: "Automation",
        items: [
          "Scheduled morning publishing",
          "Automatic indexing submission",
          "Generation to production in ~15 minutes",
          "llms.txt for AI crawlers",
        ],
      },
      {
        label: "Measurement",
        items: [
          "Lighthouse through MCP",
          "Core Web Vitals tracked monthly",
          "GA4 and Search Console",
          "AI-search share reported publicly",
        ],
      },
      {
        label: "Our Role",
        items: [
          "Platform architecture",
          "Publishing pipeline",
          "AI integration",
          "Performance engineering",
          "Measurement and reporting",
        ],
      },
    ],
    metrics: [
      { value: "500+", label: "Pages live" },
      { value: "600+", label: "Articles published" },
      { value: "4 / day", label: "Published automatically" },
      { value: "~15 min", label: "Generation to production" },
      { value: "1.4s", label: "Mobile LCP" },
      { value: "0", label: "Cumulative layout shift" },
    ],
    metricsNote: "Measured on the live site, July 2026.",
    result:
      "The site is its own proof: AI search reached roughly 3% of search traffic at an average position of 3.3, with layout stability held at zero.",
    liveLabel: "Live site",
    caseStudyLabel: "Published results",
    liveHref: "https://0120.co.jp",
    caseStudyHref: "https://0120.co.jp/blog/aio-165/",
  },
];
