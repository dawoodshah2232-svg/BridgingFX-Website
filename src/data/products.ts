/**
 * BridgingFX product catalog — major fintech categories only.
 *
 * Presented as BridgingFX products in BridgingFX's own voice. NEVER mention
 * "BridgeX Apps", "BFX Apps", "BOSS", "bridgexapps.com", or any marketplace
 * codename on the public site. Plain descriptive product names only.
 */

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string[];
  features: string[];
  whoFor: string[];
  fitTitle: string;
  fitPoints: string[];
  faqs: { q: string; a: string }[];
};

export const PRODUCT_CATEGORIES = [
  "Brokerage Platforms",
  "Trading Operations",
  "Prop Firms",
  "Growth",
  "Client Experience",
  "Infrastructure",
] as const;

export const PRODUCTS: Product[] = [
  {
    slug: "trading-crm",
    name: "Trading CRM",
    tagline:
      "The operating system of your brokerage — every client, account, transaction, and partner in one command center.",
    category: "Brokerage Platforms",
    image: "/images/pages/crm.webp",
    imageAlt: "Trading CRM command center illustration",
    description: [
      "A brokerage without a real CRM runs on spreadsheets, chat threads, and memory — and it shows in slow onboarding, missed deposits, and IBs who leave over opaque commissions. Our Trading CRM replaces all of that with one system your entire team works from: sales, support, finance, compliance, and management, each with their own view of the same truth.",
      "Clients onboard through branded flows with KYC built in. Trading accounts across MT4, MT5, and cTrader are created and managed without touching an admin terminal. Deposits and withdrawals move through approval workflows. IBs and affiliates track earnings in real time. Marketing runs segmented campaigns on live trading data — not exported CSVs.",
      "It deploys cloud-hosted for the fastest go-live or self-hosted on your infrastructure for full data sovereignty. Standard setups are live in as little as 15 minutes; we migrate your existing clients, balances, documents, and IB trees from whatever you're running today.",
    ],
    features: [
      "360° client profiles — personal data, documents, accounts, transactions, and communications",
      "Trading account management across MT4, MT5, and cTrader from one screen",
      "Deposits, withdrawals, and transfers with multi-level approval workflows",
      "Built-in KYC & compliance — verification states, risk scoring, audit trails",
      "IB & affiliate layer — multi-tier structures, real-time earnings, automated payouts",
      "Communication hub — email, SMS, WhatsApp, live chat, and VoIP on the client record",
      "AI assistance — support automation and plain-language operational help",
      "Executive reporting — clients, revenue, IBs, and marketing in one dashboard",
    ],
    whoFor: [
      "New brokerages that need a complete back office from day one",
      "Growing brokers outgrowing spreadsheets or a generic CRM",
      "Multi-brand groups needing segregated workspaces under one roof",
      "Regulated entities that need audit-ready compliance records",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Ships inside every launch package — pre-connected to your platforms and liquidity",
      "We migrate your existing data, IB trees, and workflows — migration is included, not an upsell",
      "Your client portal, website, and mobile apps all read from the same client record",
    ],
    faqs: [
      {
        q: "How long does it take to go live?",
        a: "Standard deployments are live in as little as 15 minutes when you already have a company — we configure branding, platforms, and payment providers with you. Deeper enterprise customizations are scoped individually.",
      },
      {
        q: "Can we keep our current system running during migration?",
        a: "Yes. We import and validate your data in a staging environment while the old system stays live, then cut over with zero downtime for your clients.",
      },
      {
        q: "Cloud or self-hosted?",
        a: "Your choice. Cloud means we manage security, backups, and updates; self-hosted means the data never leaves your infrastructure. The product is the same.",
      },
    ],
  },
  {
    slug: "trading-platform-setup",
    name: "Trading Platform Setup",
    tagline:
      "MT4, MT5, and cTrader provisioned, configured, and managed — your team operates in plain English, we handle the terminals.",
    category: "Brokerage Platforms",
    image: "/images/services/mt4-mt5-white-label.webp",
    imageAlt: "Trading platform setup and management illustration",
    description: [
      "Trading platforms were built for engineers, not for the managers who actually run brokerages. We close that gap: your servers are provisioned and configured by our team, and your staff operate them through a plain-English management layer — request spreads, leverage, symbols, and groups without touching an admin terminal.",
      "We cover MT4, MT5, and cTrader estates, including multi-platform operations. Brokerage automations handle the repetitive operational work — scheduled maintenance, monitoring, routine configuration — while change control logs every action for audit.",
      "Clean, monitored price feeds are provisioned with the platforms, so your dealing team gets deviation alerts instead of discovering bad prints from angry tickets.",
    ],
    features: [
      "MT4, MT5, and cTrader provisioning and configuration",
      "Plain-English operations portal — no admin-terminal expertise required",
      "Group, symbol, spread, and leverage management with approval workflows",
      "Brokerage automations for routine operations and monitoring",
      "Dedicated, monitored price feeds with deviation alerting",
      "Multi-platform estates managed under one operational rhythm",
      "Full change history and audit trails",
      "24/7 monitoring and incident response",
    ],
    whoFor: [
      "New brokers launching on MT4, MT5, or cTrader",
      "Firms whose managers wait on engineers for simple changes",
      "Multi-platform brokerages wanting one operational standard",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Platforms, feeds, CRM, and bridge are provisioned together — one coordinated launch",
      "Your team is trained on the operations portal, not the admin terminal",
      "MT4-to-MT5 transitions managed in parallel when you're ready",
    ],
    faqs: [
      {
        q: "Which platform should we choose?",
        a: "We'll advise honestly during scoping — MT5 for most new launches, MT4 where the audience demands it, cTrader for the experience-led segment. Many brokers run more than one.",
      },
      {
        q: "Do we need in-house platform administrators?",
        a: "No. Our managed layer covers day-to-day administration; you keep strategic control and full access.",
      },
      {
        q: "What about price feed reliability?",
        a: "Dedicated feed accounts with monitoring, deviation alerts, and tick history for dispute evidence — provisioned as part of setup.",
      },
    ],
  },
  {
    slug: "white-label-solutions",
    name: "White Label Solutions",
    tagline:
      "A complete brokerage under your brand — platforms, CRM, liquidity, payments, and website, launched as one program.",
    category: "Brokerage Platforms",
    image: "/images/services/trading-platform-management.webp",
    imageAlt: "White label brokerage solution illustration",
    description: [
      "A white label should be a business, not a logo on someone else's terminal. Our White Label Solutions deliver the full stack under your brand: trading platforms, CRM, liquidity bridge, payment rails, client portal, website, and mobile apps — configured together, launched together, managed together.",
      "You choose the market positioning; we engineer everything underneath it. Spreads, leverage, symbols, and account types are set to your commercial model. Your clients never see a third-party brand — every touchpoint, from the trading terminal to the withdrawal email, is yours.",
      "And unlike a bare white label, you get an operator beside you: launch planning, migration from any existing setup, and ongoing technical management after go-live.",
    ],
    features: [
      "Full-stack white label — platforms, CRM, liquidity, payments, portal, website",
      "Your brand on every touchpoint — terminals, emails, apps, statements",
      "Commercial configuration — spreads, leverage, symbols, account types",
      "Liquidity and bridge provisioned with the platforms",
      "Client portal and branded mobile apps included",
      "Migration from existing providers with zero-downtime cutover",
      "Ongoing platform and infrastructure management",
      "Launch planning with honest timelines and clear pricing",
    ],
    whoFor: [
      "Entrepreneurs launching their first brokerage",
      "Existing brands adding a brokerage division",
      "Firms re-platforming off an expensive or limiting provider",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Delivered through our launch packages — Start-Up to Enterprise tiers",
      "Company formation available if you don't have an entity yet",
      "One team from scoping call to go-live and beyond",
    ],
    faqs: [
      {
        q: "How is this different from a standard platform white label?",
        a: "A standard white label gives you a terminal. This gives you the business around it — CRM, payments, website, liquidity, and the team that runs it all.",
      },
      {
        q: "Can we migrate from our current provider?",
        a: "Yes — client data, balances, and history migrate with a zero-downtime cutover plan. Your clients keep trading throughout.",
      },
      {
        q: "Do we own the client relationship?",
        a: "Completely. Your brand, your clients, your data — we're the technology and operations partner underneath.",
      },
    ],
  },
  {
    slug: "liquidity-bridge",
    name: "Liquidity Bridge",
    tagline:
      "Institutional-grade execution control — route flow across liquidity providers with precision and full transparency.",
    category: "Trading Operations",
    image: "/images/services/liquidity-aggregation.webp",
    imageAlt: "Liquidity bridge illustration",
    description: [
      "The bridge between your platform and your liquidity providers is the most consequential plumbing in your brokerage. Our Liquidity Bridge is an institutional control plane for that flow: multi-provider aggregation, smart routing rules, markup management, and execution analytics — visible in real time, explainable to auditors.",
      "Configure routing per symbol group, client segment, or flow profile. Monitor fill quality, slippage, and provider performance from one dashboard, and adjust with confidence because every routing decision is logged with the data behind it.",
      "Whether you run full STP, hybrid, or selective internalization, the bridge executes your model exactly as designed — and gives you the records to prove best execution.",
    ],
    features: [
      "Multi-provider aggregation with smart order routing",
      "Per-symbol and per-segment routing rules",
      "Markup and commission management",
      "Real-time execution analytics — fills, slippage, rejects",
      "Provider performance scoring and automatic failover",
      "Full audit trail of routing decisions",
      "Hybrid model support — STP, internalized, or mixed",
      "Latency monitoring across the execution path",
    ],
    whoFor: [
      "STP and hybrid brokers who live on execution quality",
      "Firms adding or changing liquidity providers",
      "Brokerages that need defensible best-execution records",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Provisioned with your platform setup — bridge, providers, and platforms configured together",
      "Execution data feeds your CRM and client statements",
      "We assist with provider selection and commercial terms during launch",
    ],
    faqs: [
      {
        q: "Can we use our existing liquidity providers?",
        a: "Yes — we integrate your current providers and can add new ones. Commercial relationships stay yours.",
      },
      {
        q: "How do we prove best execution?",
        a: "Every routing decision is logged with the data behind it — fill quality reports export for compliance.",
      },
      {
        q: "Does it work with our risk setup?",
        a: "Yes — exposure and routing share data, so hedging and internalization decisions stay consistent.",
      },
    ],
  },
  {
    slug: "risk-management",
    name: "Risk Management",
    tagline:
      "Real-time exposure control, abuse detection, and dealing-desk tooling — protect the book before it needs protecting.",
    category: "Trading Operations",
    image: "/images/services/risk-management.webp",
    imageAlt: "Risk management system illustration",
    description: [
      "Your book is your business. Our Risk Management gives your dealing desk real-time exposure visibility across every symbol, client, and liquidity venue — with configurable limits, alerts, and automated responses when thresholds are breached.",
      "A native detection engine watches for prohibited trading patterns — latency arbitrage, toxic flow markers, and other abuse signatures — flagging for review or enforcing automatically per your policy. Your risk team defines the rules in plain terms; the system executes them in milliseconds.",
      "Dealers get proper manual tooling too: intervention workflows, client-level controls, and a complete audit trail of every action taken. Automation handles the obvious cases; humans handle the judgment calls — with better data.",
    ],
    features: [
      "Real-time exposure dashboard — symbols, clients, venues, groups",
      "Configurable limits with alerting and automated responses",
      "Prohibited-trading detection — flag for review or enforce automatically",
      "Dealing desk toolkit — manual intervention and client-level controls",
      "A/B book analytics and flow toxicity scoring",
      "Complete audit trail of every risk action",
      "Plain-language rule configuration — no coding required",
      "Historical exposure replay for post-event analysis",
    ],
    whoFor: [
      "B-book and hybrid brokers managing their own risk",
      "Prop firms protecting challenge economics",
      "Any brokerage that has outgrown manual exposure checks",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Deploys on your MT4/MT5 infrastructure with our platform management",
      "Risk events feed into the CRM — client records show the full story",
      "We tune initial rules with you based on your flow profile",
    ],
    faqs: [
      {
        q: "Does it replace our dealers?",
        a: "No — it makes them faster and more consistent. Start in flag-only mode, enforce automatically once rules are proven on your flow.",
      },
      {
        q: "What abuse patterns does it detect?",
        a: "Latency arbitrage, toxic flow markers, and other prohibited-trading signatures — configurable to your policy, with evidence attached to every flag.",
      },
      {
        q: "Can we replay past exposure events?",
        a: "Yes — historical replay supports post-event analysis, dispute resolution, and rule tuning.",
      },
    ],
  },
  {
    slug: "copy-trading-pamm-mam",
    name: "Copy Trading, PAMM & MAM",
    tagline:
      "Turn performance into product — social copy trading, pooled PAMM accounts, and multi-account MAM management.",
    category: "Trading Operations",
    image: "/images/services/mam-pamm-copy-trading.webp",
    imageAlt: "Copy trading, PAMM and MAM illustration",
    description: [
      "Some of your best clients are also your best product — if you give them the rails. Our managed-trading suite covers all three models: social copy trading where followers subscribe to verified strategies, PAMM pooled accounts with transparent unit accounting, and MAM multi-account management for professional money managers.",
      "Copy traders get discovery, verified track records, and one-click subscribe; followers get risk controls — drawdown guards, allocation limits, instant unsubscribe. PAMM investors get branded statements and high-water-mark fee integrity. MAM managers trade one master while allocations replicate across unlimited sub-accounts.",
      "One dealing and risk layer watches all of it, and every fee — performance, subscription, or management — calculates transparently and settles through your normal finance workflow.",
    ],
    features: [
      "Real-time copy replication with proportional lot scaling",
      "Verified strategy pages — audited performance and risk stats",
      "Social discovery, rankings, and one-click subscribe",
      "Follower risk controls — drawdown guards, limits, instant unsubscribe",
      "PAMM pools with unit accounting and high-water-mark fees",
      "MAM master-to-sub replication with flexible allocation methods",
      "Manager and strategy-provider compensation engine",
      "Branded investor portal, statements, and mobile experience",
    ],
    whoFor: [
      "Brokers adding managed trading as a product line",
      "Money managers needing institutional-grade rails",
      "Prop firms monetizing top performers",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Runs on your existing MT4/MT5 infrastructure",
      "Investor and follower accounts are standard CRM client accounts",
      "Compliance documentation — agreements and disclosures — included",
    ],
    faqs: [
      {
        q: "What's the difference between copy, PAMM, and MAM?",
        a: "Copy trading replicates trades to followers' own accounts; PAMM pools funds into one account with unit accounting; MAM replicates a master trade across individual sub-accounts. Many brokers offer all three — this suite does.",
      },
      {
        q: "How are performance fees handled?",
        a: "High-water marks as standard — managers earn on new profits only, fully auditable per investor.",
      },
      {
        q: "Can followers control their risk?",
        a: "Yes — per-strategy allocation, drawdown guards, and instant unsubscribe are all follower-controlled.",
      },
    ],
  },
  {
    slug: "prop-firm-solutions",
    name: "Prop Firm Solutions",
    tagline:
      "Challenge infrastructure that sells in 30 minutes — evaluations, risk, payouts, and trader dashboards as one system.",
    category: "Prop Firms",
    image: "/images/services/propfirm-tech.webp",
    imageAlt: "Prop firm solutions illustration",
    description: [
      "Prop firms don't sell trading — they sell challenges, and challenges need purpose-built technology. Our Prop Firm Solutions cover the full stack: challenge configuration (1-step, 2-step, instant funding), real-time evaluation tracking, risk monitoring tuned for challenge economics, trader dashboards, and payout workflows.",
      "Traders see transparent progress they can trust — profit targets, drawdown, and consistency rules always current. Your team sees revenue, risk, and operations at a glance. Payout scheduling runs with approval workflows and full audit trails, so your reputation for paying on time is protected by process, not memory.",
      "New firms launch in as little as 30 minutes: challenges configured, risk and payouts wired, traders onboarding — the same day you decide to start.",
    ],
    features: [
      "Challenge engine — 1-step, 2-step, and instant-funding models",
      "Real-time evaluation sync — targets, drawdown, consistency rules",
      "Trader dashboards with transparent challenge progress",
      "Risk monitoring tuned for challenge economics",
      "Payout scheduling with approvals and audit trails",
      "Scaling plans and profit-split management",
      "Challenge-focused CRM — the full trader lifecycle",
      "Dispute-ready records — every rule event timestamped with evidence",
    ],
    whoFor: [
      "Entrepreneurs launching their first prop firm",
      "Existing prop firms replacing manual or generic tooling",
      "Brokerages adding a prop division alongside retail flow",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "The 30-minute launch: challenges sellable the same day",
      "Evaluation, risk, CRM, and dashboards share one data model — numbers always agree",
      "Affiliate tracking for challenge sales built in",
    ],
    faqs: [
      {
        q: "Can we really launch in 30 minutes?",
        a: "The technology can — challenges configured, risk and payouts wired, traders onboarding. You'll still want your brand assets and commercial terms ready; we guide you through the checklist.",
      },
      {
        q: "How are payouts handled?",
        a: "Scheduled with approval workflows and profit-split accounting. Funds move through your payment providers; the system tracks every cent.",
      },
      {
        q: "What happens when a trader disputes a breach?",
        a: "Every rule event carries timestamped evidence — disputes resolve with data instead of arguments.",
      },
    ],
  },
  {
    slug: "ib-partner-management",
    name: "IB & Partner Management",
    tagline:
      "Recruit, track, and pay partners with multi-tier structures and commission transparency that retains top IBs.",
    category: "Growth",
    image: "/images/services/ib-affiliate-portals.webp",
    imageAlt: "IB and partner management illustration",
    description: [
      "IBs are the growth engine of most brokerages — and the fastest way to lose them is opaque commissions and late payouts. Our IB & Partner Management gives every partner a branded portal with real-time earnings, referred-client activity, and marketing materials, while your team controls tiers, rebate plans, and payout schedules.",
      "Multi-level structures are fully supported: sub-IBs, regional masters, custom rebate schemes per partner. Commission runs execute on schedule with finance approval gates, and every calculation traces down to the individual trade.",
      "It works standalone or as the partner layer of your Trading CRM — partners, clients, and revenue reconcile in one system, and affiliate earnings never need a separate spreadsheet again.",
    ],
    features: [
      "Branded IB portal — earnings, network, and marketing assets in real time",
      "Multi-tier structures — sub-IBs, masters, custom hierarchies",
      "Flexible rebate & commission plans per partner and symbol group",
      "Automated commission runs with finance approval",
      "Referral link and campaign attribution",
      "Partner onboarding — agreements, KYC, tier assignment",
      "Affiliate earnings ledger — every cent traceable to the source trade",
      "Partner performance analytics — ROI, activation, churn signals",
    ],
    whoFor: [
      "Brokers scaling through IB networks",
      "Firms with manual or opaque commission processes",
      "Multi-brand groups running partner programs per brand",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Included in Growth and Enterprise launch packages; available standalone",
      "Commissions calculate from the same trade data as your CRM — no reconciliation gaps",
      "We import your existing IB tree and rebate plans during onboarding",
    ],
    faqs: [
      {
        q: "Can we run different rebate plans per IB?",
        a: "Yes — fully customizable per partner and symbol group, with tiered overrides and time-bound promotions.",
      },
      {
        q: "How do partners get paid?",
        a: "Commission runs on your schedule with finance approval, paid through your providers or credited to the partner's wallet.",
      },
      {
        q: "Can sub-IBs see their downline?",
        a: "Yes — each partner sees their own network; masters see downline rollups. Permissions are role-based throughout.",
      },
    ],
  },
  {
    slug: "marketing-growth-suite",
    name: "Marketing & Growth Suite",
    tagline:
      "Acquisition to retention — lead pipelines, campaigns, loyalty, referrals, and the website tooling that feeds them.",
    category: "Growth",
    image: "/images/services/growth-marketing.webp",
    imageAlt: "Marketing and growth suite illustration",
    description: [
      "Registrations are not revenue — funded, active traders are. The Marketing & Growth Suite covers the whole journey: a lead and sales pipeline with automated nurturing, email and SMS campaigns on live trading data, promotions and loyalty programs that keep traders active, and referral programs that turn clients into recruiters.",
      "Your marketing team also gets the website tooling to feed the funnel: a landing page builder for campaign pages, SEO tooling to compound organic growth, and event management for webinars and expos — every registration flowing into the pipeline with source attribution intact.",
      "Campaign performance ties back to revenue, so marketing spend is accountable to the number that matters.",
    ],
    features: [
      "Lead & sales pipeline — scoring, assignment, and conversion analytics",
      "Automated nurturing — registration, no-deposit, and dormancy sequences",
      "Email & SMS campaigns segmented on live trading data",
      "Promotions manager — bonuses, cashback, and contests with abuse controls",
      "Tiered loyalty programs with automated rewards",
      "Referral programs with tracking and automated payouts",
      "Landing page builder, SEO toolkit, and event management",
      "Revenue-attributed reporting from click to funded account",
    ],
    whoFor: [
      "Brokers investing in retention, not just acquisition",
      "Firms whose follow-up currently depends on memory",
      "Marketing teams without dedicated developers",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Segments read live data from your Trading CRM — no exports",
      "Bonus crediting executes through finance approval workflows",
      "Pairs with our digital marketing service for managed execution",
    ],
    faqs: [
      {
        q: "How do you prevent bonus abuse?",
        a: "Abuse pattern monitoring, eligibility rules, and clawback workflows are built into the promotions engine.",
      },
      {
        q: "Do we need developers for landing pages?",
        a: "No — the builder is designed for marketers, with templates matched to FX conversion patterns.",
      },
      {
        q: "Can it track which campaigns actually fund?",
        a: "Yes — attribution runs from first click through to funded account and lifetime revenue.",
      },
    ],
  },
  {
    slug: "trading-academy",
    name: "Trading Academy",
    tagline:
      "A branded learning platform — courses, live classes, and certificates that turn beginners into loyal traders.",
    category: "Growth",
    image: "/images/services/podcast-studio.webp",
    imageAlt: "Trading academy illustration",
    description: [
      "Educated traders deposit more, trade longer, and churn less. The Trading Academy is a full learning platform under your brand: structured courses, quizzes, live classes with streaming, and certificates clients can share.",
      "AI-assisted course generation accelerates production — outline a topic, get a structured draft your team refines. Instructor tools handle scheduling, attendance, and cohorts; marketing gets a new acquisition funnel in free education.",
      "Academy engagement feeds your CRM: you see who's learning, who's ready for a live account, and who needs a nudge — and course completion can trigger offers automatically.",
    ],
    features: [
      "Branded course library with structured learning paths",
      "Quizzes and assessments with progress tracking",
      "Live classes with integrated streaming and recordings",
      "AI-assisted course generation from your outlines",
      "Shareable certificates for graduates",
      "Instructor tools — scheduling, attendance, cohorts",
      "Free-tier funnels converting learners to depositors",
      "Learning analytics wired into your CRM",
    ],
    whoFor: [
      "Brokers competing on education and trust",
      "Firms targeting beginner-heavy markets",
      "Brands building community around learning",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Academy registrations flow into your sales pipeline",
      "Completion triggers CRM automations like live-account offers",
      "We help seed the initial course catalog with you",
    ],
    faqs: [
      {
        q: "Do we need to create all content ourselves?",
        a: "AI-assisted generation drafts from your outlines; we help structure the initial catalog. You refine with your expertise.",
      },
      {
        q: "Can courses be free and paid?",
        a: "Yes — free funnels for acquisition, premium tracks for revenue, certification for partners.",
      },
      {
        q: "How do live classes work?",
        a: "Scheduled in-platform with streaming, chat, attendance tracking, and automatic recordings added to the library.",
      },
    ],
  },
  {
    slug: "payment-solutions",
    name: "Payment Solutions",
    tagline:
      "Deposits that convert — multi-provider cashier, client wallets, and finance workflows without the spreadsheet.",
    category: "Client Experience",
    image: "/images/services/psp-payment-orchestration.webp",
    imageAlt: "Payment solutions illustration",
    description: [
      "The deposit screen is the moment of truth in every client relationship — and the moment most brokerages make hardest. Our Payment Solutions connect cards, e-wallets, crypto rails, and bank transfers into one cashier experience, backed by a client wallet that unifies balances across products.",
      "Finance gets proper tooling: invoicing, subscription billing, multi-level withdrawal approvals with maker-checker controls, and reconciliation that actually reconciles. Every transaction lands in the CRM with full audit trails.",
      "We integrate the providers that work in your jurisdictions — and tell you honestly about the ones that don't.",
    ],
    features: [
      "Multi-provider cashier — cards, e-wallets, crypto, bank transfer",
      "Client wallet unifying balances across products and currencies",
      "Invoicing and subscription billing",
      "Withdrawal approvals with maker-checker controls",
      "Automated reconciliation and exception handling",
      "Chargeback and fraud monitoring hooks",
      "Finance dashboard — flows, pending items, exceptions",
      "Full audit trail on every transaction",
    ],
    whoFor: [
      "New brokers setting up their first cashier",
      "Firms losing deposits to a clunky funding flow",
      "Businesses adding subscriptions or wallet products",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Providers integrated during launch — cashier live with your platforms",
      "Finance team trained on approvals and reconciliation",
      "Ongoing provider advisory as your jurisdictions evolve",
    ],
    faqs: [
      {
        q: "Which payment providers do you integrate?",
        a: "FX-friendly PSPs, crypto processors, and bank transfer rails — matched to your licenses and target markets during scoping.",
      },
      {
        q: "How are withdrawals approved?",
        a: "Configurable multi-level approvals with maker-checker controls — finance keeps control without becoming the bottleneck.",
      },
      {
        q: "Can clients hold multiple currencies?",
        a: "Yes — the wallet supports multi-currency balances with conversion at configurable rates.",
      },
    ],
  },
  {
    slug: "branded-mobile-apps",
    name: "Branded Mobile Apps",
    tagline:
      "Your brokerage in your clients' pockets — iOS and Android apps for traders, IBs, and your team.",
    category: "Client Experience",
    image: "/images/services/mobile-trading-apps.webp",
    imageAlt: "Branded mobile apps illustration",
    description: [
      "For most of your clients, your brand is a phone screen. Our Branded Mobile Apps put the full client experience on iOS and Android under your name and icon: account management, deposits and withdrawals, document upload, trading views, and support — all reading from the same CRM as everything else.",
      "Role-specific apps extend the ecosystem: IBs track earnings on the go, sales and relationship managers work their pipeline from the field, admins get operational visibility anywhere. One codebase strategy keeps iOS and Android in lockstep.",
      "We handle the part everyone underestimates: app store submission, review compliance, certificates, and ongoing updates.",
    ],
    features: [
      "Branded iOS and Android client apps — your name, your icon",
      "Accounts, funding, documents, and support in-app",
      "IB app — earnings, network, and marketing on the go",
      "Team apps — sales pipeline, RM views, admin oversight",
      "Push notifications for prices, margin calls, and operations",
      "Biometric login and mobile-grade security",
      "App store submission and review management",
      "Ongoing updates and OS compatibility",
    ],
    whoFor: [
      "Brokers whose clients are mobile-first",
      "Firms in mobile-dominant regions",
      "Brands that want app-store presence",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Apps read the same CRM and platforms as your web portal",
      "Designed alongside your website for brand consistency",
      "Submission, certificates, and updates managed for you",
    ],
    faqs: [
      {
        q: "How long does app store approval take?",
        a: "Timelines vary by store and region — we prepare submissions to Apple's and Google's financial-app requirements and manage the review process.",
      },
      {
        q: "Can the apps execute trades?",
        a: "Account management, funding, and trading views are standard; execution options depend on your platform setup and are scoped during planning.",
      },
      {
        q: "What about updates?",
        a: "Managed update cycles keep both platforms current with OS releases and your new features.",
      },
    ],
  },
  {
    slug: "infrastructure-hosting",
    name: "Infrastructure & Hosting",
    tagline:
      "Trading-grade VPS, dedicated servers, and managed hosting — infrastructure your clients can feel.",
    category: "Infrastructure",
    image: "/images/services/forex-vps-hosting.webp",
    imageAlt: "Infrastructure and hosting illustration",
    description: [
      "Execution quality starts with infrastructure. Our Infrastructure & Hosting provides latency-optimized VPS colocated near major trading venues, dedicated servers for platform workloads, and managed hosting for your websites, portals, and CRM — all under one support roof and one security standard.",
      "Offer VPS as a client perk or a revenue line: traders running automated strategies get the uptime and ping times they need, and you get the stickiness that comes with hosting their strategies. A security operations layer keeps the estate patched, monitored, and hardened.",
      "Domains, DNS, SSL, backups, and disaster recovery are handled as part of the package — the unglamorous foundations, done right.",
    ],
    features: [
      "Latency-optimized Forex VPS near major trading venues",
      "Dedicated servers for MT4/MT5 and platform workloads",
      "Managed hosting for websites, portals, and CRMs",
      "Domain registration, DNS, and SSL management",
      "Security hardening, patching, and 24/7 monitoring",
      "Client-facing VPS offerings — perk or revenue line",
      "Automated backups and disaster recovery",
      "24/7 infrastructure support",
    ],
    whoFor: [
      "Brokers who need reliable platform hosting",
      "Firms offering VPS to automated-strategy traders",
      "Anyone tired of juggling hosting providers",
    ],
    fitTitle: "How it fits your BridgingFX setup",
    fitPoints: [
      "Your platforms, CRM, and website hosted as one managed estate",
      "VPS offering configured as a client benefit or paid add-on",
      "Security baseline applied across every server we manage",
    ],
    faqs: [
      {
        q: "Where are the servers located?",
        a: "In data centers selected for proximity to major liquidity venues and your client base — specified during scoping.",
      },
      {
        q: "Can we offer VPS free to high-volume clients?",
        a: "Yes — eligibility rules on volume or balance are configurable, and it's a proven retention tool for automated traders.",
      },
      {
        q: "Who handles security incidents?",
        a: "Our operations team: hardening, patching, intrusion monitoring, and incident response around the clock.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
