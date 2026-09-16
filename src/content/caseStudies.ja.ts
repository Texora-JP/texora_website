import type { CaseStudy } from "./types";

/** Japanese copy for the lead case studies. Same rules as caseStudies.en.ts. */
export const caseStudiesJa: CaseStudy[] = [
  {
    eyebrow: "主要事例",
    id: "beauty",
    name: "Enterprise Beauty Commerce",
    // 秘密保持契約のため、企業名はサイト上のどこにも掲載しないこと。
    client: "大手化粧品ブランド",
    kicker: "一人ひとりの美しさに、寄り添う。",
    category: "AI / コマース / オムニチャネル",
    year: "",
    status: "納品済み",
    summary:
      "パーソナライズされた商品選び、会員体験、グローバル規模の購買までを支える、AI搭載のオムニチャネル化粧品コマース基盤です。",
    problem:
      "従来の化粧品ECでは、商品との出会い、美容カウンセリング、ロイヤルティ、購買がそれぞれ分断されていました。お客さまにはより個別の提案が必要で、ブランド側にはオンラインと店頭を横断した顧客理解が必要でした。",
    solution:
      "パーソナライズされた商品発見、AIによるカウンセリング、会員・ロイヤルティ、ビューティコンテンツ、レコメンド、在庫の可視化、決済までをひとつの体験としてつなぐ、フルスタックのコマース基盤を構築しました。",
    image: "/projects/beauty.png",
    // ビルド時にぼかし処理。元画像はクライアントが特定できるため public/ には置かない。
    imageAlt: "守秘のため、ぼかし処理をしたプラットフォームの画面。",
    specs: [
      {
        label: "体験",
        items: [
          "パーソナライズされた商品発見",
          "ビューティコンテンツと編集記事",
          "商品レコメンド",
          "スキンケアルーティンの提案",
        ],
      },
      {
        label: "AIレイヤー",
        items: ["AIによる美容カウンセリング", "レコメンドエンジン", "個別最適化された商品表示順"],
      },
      {
        label: "コマース",
        items: [
          "グローバル規模の決済・購買",
          "在庫の可視化",
          "会員・ロイヤルティ",
          "複数市場への対応",
        ],
      },
      {
        label: "オムニチャネル",
        items: ["オンラインと店頭の統合ビュー", "チャネルを越えた会員基盤", "接客・購買履歴"],
      },
      {
        label: "担当範囲",
        items: [
          "プロダクト設計",
          "フロントエンド",
          "バックエンド・API",
          "AI連携",
          "コマース・会員基盤",
        ],
      },
    ],
    metrics: [],
    metricsNote: "",
    result:
      "商品との出会いから、カウンセリング、会員体験、購買までを、オンラインと店頭でひと続きの体験として提供しています。",
    access: "秘密保持契約により企業名は非公開です。詳細は個別にご説明します。",
    liveLabel: "",
    caseStudyLabel: "",
    liveHref: "",
    caseStudyHref: "",
  },

  {
    eyebrow: "主要事例",
    id: "bizpilotai",
    name: "BizPilotAI",
    client: "自社プロダクト",
    kicker: "「デモ」で終わらせない。",
    category: "AI / SaaS / フルスタック",
    year: "2026",
    status: "商用リリース済みSaaS",
    summary: "実際に課金が動いている商用AI SaaS。見せるためではなく、運用するためにつくりました。",
    problem:
      "AIツールは試作で止まりがちです。課金も、同意の記録も、切り戻しの手順もなければ、本番環境では生き残れません。",
    solution:
      "AIツール、課金、運用上の安全性をひとつのシステムとして設計したサブスクリプション型プロダクト。アーキテクチャはスクリーンショットではなく、文書として公開しています。",
    image: "/projects/bizpilotai.png",
    imageAlt: "BizLinkのシステム連携ページを表示したBizDX AIのサイト。",
    specs: [
      {
        label: "アーキテクチャ",
        items: [
          "Next.js（App Router）· TypeScript",
          "PostgreSQL",
          "nginxでのTLS終端",
          "Docker Compose",
        ],
      },
      {
        label: "AIレイヤー",
        items: [
          "AIライター · チャット · 画像生成",
          "複数プロバイダのオーケストレーション",
          "APIキー持ち込み（BYO）対応",
          "実行前の権限チェックとPIIガード",
        ],
      },
      {
        label: "プラットフォーム",
        items: [
          "Stripe Checkout・サブスクリプション",
          "Free / Pro / BYO のプラン設計",
          "再送に耐える署名付きWebhook",
          "決済前の法的同意をログに記録",
          "日英バイリンガルのルーティング",
        ],
      },
      {
        label: "インフラ",
        items: [
          "ステージングと本番の分離",
          "SHAタグ付きリリース · ロールバック手順書",
          "トレースIDつき構造化ログ",
          "監査ログ · レート制限 · ヘルスチェック",
        ],
      },
      {
        label: "担当範囲",
        items: [
          "システムアーキテクチャ",
          "フロントエンド・バックエンド",
          "AIエンジニアリング",
          "課金基盤の実装",
          "クラウド構築と運用",
        ],
      },
    ],
    metrics: [],
    metricsNote: "",
    result: "有料プロダクトとして稼働中。課金も、同意も、切り戻しも、本番環境で実証済みです。",
    liveLabel: "プロダクトを見る",
    caseStudyLabel: "詳細な事例を読む",
    liveHref: "https://bizpilotai.jp",
    caseStudyHref: "https://bizdxai.com/portfolio/bizpilotai",
  },

  {
    eyebrow: "主要事例",
    id: "kadai",
    name: "0120.co.jp",
    client: "株式会社課題解決プラットフォーム",
    kicker: "サイトそのものが、実証。",
    category: "AI / コンテンツ基盤 / 自動化",
    year: "2026",
    status: "公開・実測中",
    summary: "サイト自身が記事を書き、公開し、その結果を数値で公表しつづけるコンテンツ基盤です。",
    problem:
      "コンテンツ運用は人を増やして拡大しがちです。執筆も公開もインデックス登録も表示速度の改善も手作業のままでは、量と質が引っ張り合います。",
    solution:
      "下書き、公開、インデックス登録までをスケジュールで回すAIパイプライン。Core Web VitalsとAI検索での見え方は、本番サイトで継続的に計測しています。",
    image: "/projects/kadai.png",
    imageAlt: "自前のAIパイプラインが公開している0120.co.jpのトップページ。",
    specs: [
      {
        label: "アーキテクチャ",
        items: [
          "Next.js · TypeScript",
          "Cloudflare",
          "GitHub Actions によるCI/CD",
          "JSON-LD：Article · FAQPage · BreadcrumbList · Organization",
        ],
      },
      {
        label: "AIレイヤー",
        items: [
          "Claude Code と MCP 連携",
          "Anthropic・OpenAI API",
          "既存記事を対象としたRAG",
          "定時実行の下書き生成とレビュー",
        ],
      },
      {
        label: "自動化",
        items: [
          "毎朝の定時自動公開",
          "インデックス登録の自動送信",
          "生成から本番反映まで約15分",
          "AIクローラー向けのllms.txt",
        ],
      },
      {
        label: "計測",
        items: [
          "MCP経由のLighthouse計測",
          "Core Web Vitalsを毎月追跡",
          "GA4・Search Console",
          "AI検索の流入比率を公開",
        ],
      },
      {
        label: "担当範囲",
        items: [
          "プラットフォーム設計",
          "公開パイプライン",
          "AI連携",
          "表示速度の最適化",
          "計測とレポーティング",
        ],
      },
    ],
    metrics: [
      { value: "500+", label: "公開ページ数" },
      { value: "600+", label: "公開記事数" },
      { value: "4本 / 日", label: "自動公開" },
      { value: "約15分", label: "生成から本番反映まで" },
      { value: "1.4秒", label: "モバイルLCP" },
      { value: "0", label: "レイアウトシフト（CLS）" },
    ],
    metricsNote: "2026年7月時点、本番サイトでの実測値。",
    result:
      "サイト自体が実証になっています。AI検索からの流入は検索全体の約3%、平均掲載順位3.3位、CLSは0を維持。",
    liveLabel: "サイトを見る",
    caseStudyLabel: "公開されている実測値",
    liveHref: "https://0120.co.jp",
    caseStudyHref: "https://0120.co.jp/blog/aio-165/",
  },
];
