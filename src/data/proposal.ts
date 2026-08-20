export const meta = {
  firm: "Ribbon Protocol",
  division: "Frontier Technology Development",
  title: "Tokenized Real World Assets for ZEEX",
  subtitle:
    "A Proposal to ZSE Holdings for Onchain Capital Markets Infrastructure, Global Liquidity and Base Ecosystem Funding",
  from: "Ribbon Protocol — Frontier Technology Development",
  to: "ZSE Holdings — Zimbabwe Entrepreneurship Exchange (ZEEX)",
  role: "CEO (Chief Executive Officer)",
  date: "20 August 2026",
  reference: "RB-ZEEX-RWA-2026-01",
  confidential:
    "Private & Confidential — For the attention of the Chief Executive Officer, ZSE Holdings",
};

export const contact = {
  heading: "Proposal Lead & Executive Contact",
  name: "Gugu Nyathi",
  role: "CEO (Chief Executive Officer), Ribbon Protocol",
  assignment:
    "Frontier Technology Development — Integration Architect & Investment Lead",
  email: "gugu@ribbonprotocol.org",
  mobile: "+27 66 296 8376",
  website: "https://ribbonprotocol.org",
};

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "numbers"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "quote"; text: string };

export type Section = {
  number: string;
  title: string;
  kicker: string;
  image?: "sme" | "network" | "mobile";
  blocks: Block[];
};

export const sections: Section[] = [
  {
    number: "01",
    title: "Executive Summary",
    kicker: "Mandate overview",
    blocks: [
      {
        kind: "p",
        text: "Ribbon Protocol proposes a strategic collaboration with ZSE Holdings to extend the newly launched Zimbabwe Entrepreneurship Exchange (ZEEX) onchain, converting securities issued by ZEEX-listed SMEs and startups into tokenized Real World Assets (RWAs) tradable by a global base of investors and digital asset traders.",
      },
      {
        kind: "p",
        text: "ZEEX solves the origination side of Zimbabwe's capital problem: it gives SMEs — 76% of business establishments, an estimated US$14.2 billion of annual output and more than 70% of the workforce — a regulated, collateral-free route to equity, debt and invoice discounting under SECZIM licensing. What ZEEX does not yet have is depth of demand. Domestic institutional and retail capital alone cannot absorb the issuance pipeline that formalisation will unlock.",
      },
      {
        kind: "p",
        text: "Our proposal supplies that demand. Ribbon Protocol brings existing working relationships within Base and Coinbase and will act as ZEEX's project manager, investment agent and technology integration architect to (a) secure non-dilutive grant funding of up to US$250,000 from the Base Ecosystem Fund, (b) raise up to US$3.5 million of seed equity from Base and Coinbase Ventures and aligned funds, and (c) channel liquidity from the Base and Coinbase ecosystem of investors, funds, market makers and traders into tokenized ZEEX instruments.",
      },
      {
        kind: "p",
        text: "The build comprises a digital RWA platform integrated with ZEEX, a Zimbabwe-currency stablecoin ($ZIG, pegged 1:1 to the Zimbabwe Investment Gold currency) as the onchain settlement and quote asset, desktop/tablet and mobile applications for global and diaspora investors, and a WhatsApp-based trading channel for local users on low-end devices.",
      },
      {
        kind: "quote",
        text: "The strategic prize is larger than a technology upgrade. Executed well, ZEEX becomes a globally investable venture funding venue — the Y Combinator and Silicon Valley capital formation engine for Africa — able to attract fast-moving venture capital to Zimbabwean startups, to list diaspora-owned Zimbabwean companies on ZEEX and other ZSE Holdings markets, and to position Zimbabwe as the Silicon Valley of Africa.",
      },
    ],
  },
  {
    number: "02",
    title: "The Opportunity",
    kicker: "Market context",
    image: "sme",
    blocks: [
      { kind: "h3", text: "2.1 What ZEEX has established" },
      {
        kind: "bullets",
        items: [
          "A SECZIM-licensed digital capital markets platform, launched in Bulawayo and sitting inside ZSE Holdings alongside the Zimbabwe Stock Exchange and the Victoria Falls Stock Exchange.",
          "A purpose-built incubator market: ZSE and VFEX issuers may not migrate to ZEEX, preserving ZEEX as a dedicated growth-enterprise venue backed by government incentives.",
          "Two market segments — ZEEX Private Markets and ZEEX Public Markets — supporting equity, debt securities and invoice discounting so issuers can choose the funding structure that fits their cash cycle.",
          "Trading and settlement in ZIG, and a formalisation flywheel: to raise on ZEEX, businesses must register for tax, maintain bank accounts and adopt proper governance, which builds investor confidence.",
        ],
      },
      { kind: "h3", text: "2.2 The constraint" },
      {
        kind: "p",
        text: "Demand-side depth, not supply-side pipeline, is the binding constraint. Growth-stage risk capital is scarce locally, exit paths are thin, secondary liquidity in an SME market is structurally shallow, and the largest natural buyer base — the Zimbabwean diaspora and global frontier-market investors — faces friction in FX, onboarding, custody and settlement.",
      },
      { kind: "h3", text: "2.3 The unlock" },
      {
        kind: "p",
        text: "Onchain markets settle 24/7, are natively composable, and reach investors wherever they are with wallet-level onboarding rather than correspondent banking. Tokenizing ZEEX instruments — equity, debt notes and invoice-financing receivables — and quoting them against a local stablecoin converts a domestic SME board into a globally accessible asset class without asking ZEEX to abandon its regulatory perimeter or its ZIG denomination.",
      },
      { kind: "h3", text: "2.4 Five pools of capital that want Zimbabwe exposure and cannot get it" },
      {
        kind: "bullets",
        items: [
          "Domestic retail savers — locked out by broker minimums, lot sizes, paperwork and account fees. Formal investing in Zimbabwe remains a product for people who already have money.",
          "The Zimbabwean diaspora — several million people who remitted approximately US$2.4 billion in 2024 (Reserve Bank of Zimbabwe). Almost all of it is consumption transfer: the money arrives, gets spent, and leaves no asset behind.",
          "Regional SADC capital — a bloc of roughly 380 million people and US$700+ billion of GDP pursuing capital market integration under the SADC Protocol on Finance and Investment, still executing through correspondent banking and fragmented national CSDs.",
          "Continental capital under AfCFTA — a single market of ~1.3 billion people and roughly US$3.4 trillion of GDP; the World Bank projects a US$450 billion income gain by 2035. Trade policy has been liberalised; investment rails have not.",
          "Global onchain capital — hundreds of billions in stablecoins seeking uncorrelated real-world yield, with no compliant on-ramp into African SME credit and equity.",
        ],
      },
      {
        kind: "p",
        text: "The exclusion is expensive rather than academic. The Zimbabwe Stock Exchange has repeatedly ranked among the best performing equity markets in the world, with 2023 nominal local-currency gains widely reported in excess of 800%, and All Share Index returns exceeding 60% in the most recent reporting period following the introduction of the ZiG currency. One of the highest-returning equity markets on earth is effectively closed to the people whose labour produces those returns.",
      },
      { kind: "h3", text: "2.5 Four specific failures this proposal attacks" },
      {
        kind: "numbers",
        items: [
          "Minimum ticket exclusion — no retail path below broker minimums. We take the floor to US$1.",
          "Working capital starvation — invoice discounting exists on ZEEX, but the funding pool is domestic, thin and slow. We connect it to global stablecoin liquidity.",
          "Currency and FX friction — local investors want ZiG exposure while diaspora and global investors think in USD; today that mismatch is intermediated expensively and opaquely, with remittance costs to Sub-Saharan Africa the highest of any region at roughly 8% (World Bank).",
          "Settlement latency and opacity — T+X settlement, manual registers and trust bottlenecks in a market that should run 24/7.",
        ],
      },
    ],

  },
  {
    number: "03",
    title: "Strategic Alignment with the Base Request for Builders",
    kicker: "Investment thesis fit",
    blocks: [
      {
        kind: "p",
        text: "Base has publicly stated that global onchain finance is the defining use case for blockchains and has published the theses it is actively funding. ZEEX maps onto four of those theses simultaneously — a rare degree of fit for a single venue, and the core of the investment case we will take to the Base Ecosystem Fund.",
      },
      {
        kind: "table",
        head: ["Base thesis", "ZEEX asset / capability", "Why it is a strong fit"],
        rows: [
          [
            "Alternative yield-bearing assets",
            "ZEEX invoice discounting and debt securities issued by formalised SMEs",
            "Base explicitly names invoice financing, trade finance and revenue-based financing as short-duration working capital instruments it wants onchain. ZEEX already originates exactly these, under a licensed exchange with vertical-specific underwriting and issuer governance requirements.",
          ],
          [
            "Local stablecoins",
            "$ZIG on Base, pegged 1:1 to the Zimbabwe Investment Gold currency",
            "Base notes that tokenizing local assets is constrained until local-currency liquidity exists onchain, and that local stablecoins are the essential quote pair for tokenized local assets. $ZIG is the quote asset for the entire ZEEX board and doubles as a settlement rail for local business transactions.",
          ],
          [
            "Stablecoin distribution in cash-centric emerging markets",
            "WhatsApp trading and payments channel, agent and merchant network",
            "Zimbabwe is a cash-centric, effectively multi-currency economy. Meeting users on WhatsApp and on low-end handsets is precisely the defensible distribution wedge Base describes, connecting physical cash behaviour to onchain rails.",
          ],
          [
            "Tokenized portfolios as collateral",
            "Phase 3 credit layer against tokenized ZEEX holdings",
            "A B2B2C securities-backed credit facility lets SME founders and investors draw stablecoin liquidity against tokenized holdings without forced selling — the model Base wants built end to end, from tokenization through credit deployment.",
          ],
          [
            "Foreign exchange markets",
            "$ZIG / USDC and $ZIG / major pairs, native onchain FX",
            "Direct local-currency pairs remove FX intermediation for diaspora remitters and for cross-border SME trade, creating 24/7 liquid pricing where none exists today.",
          ],
        ],
      },
      {
        kind: "quote",
        text: "Base is looking for deep domain experts who can originate and responsibly manage real-world assets in under-financialised markets. ZSE Holdings is that domain expert, with regulatory standing no crypto-native team can replicate. Ribbon Protocol supplies the onchain architecture, the funding process and the ecosystem relationships.",
      },
    ],
  },
  {
    number: "04",
    title: "The Proposed Solution: ZEEX Onchain",
    kicker: "Platform architecture",
    image: "network",
    blocks: [
      { kind: "h3", text: "4.1 The product suite: five interlocking products" },
      {
        kind: "numbers",
        items: [
          "ZEEX Shares (tokenized equity rail) — permissioned ERC-3643 / ERC-1400 style share tokens representing legally recognised ownership in ZEEX-listed SMEs and, in Phase 2, dual-listed ZSE and VFEX equities, each 1:1 backed by securities held in trust by ZSE Debtbridge Capital.",
          "Fractional Access from US$1 — a fractionalization engine dividing a single share into up to 1,000,000 onchain units, with recurring micro-investing, fractional dividend rights, index and sector baskets, and native stokvel/mukando group-investing vaults.",
          "InvoiceX Onchain (invoice discounting) — verified SME receivables minted as invoice NFTs and funded from ERC-4626 vaults, releasing 80–90% of face value in stablecoin, typically same day.",
          "DebtBridge (onchain credit, escrow and collateral) — programmable debt notes, securities-backed lines of credit against tokenized portfolios, deal-room escrow, and multi-party guarantor credit.",
          "$ZIG — a fully reserved, Zimbabwe Gold (ZiG)-referenced local stablecoin on Base, serving as the native quote pair for every tokenized local asset and as a globally accessible FX instrument for the ZiG/USDC corridor.",
        ],
      },
      {
        kind: "p",
        text: "Everything settles on Base. Everything quotes in $ZIG or USDC. Everything is composable — a tokenized share can be collateral, a vault asset or an index component without asking permission.",
      },
      { kind: "h3", text: "4.2 Platform architecture" },

      {
        kind: "numbers",
        items: [
          "Tokenization engine — issuance, register-of-members mirroring, corporate actions, lock-ups and transfer restrictions expressed in smart contracts, so every token remains the onchain representation of a SECZIM-recognised instrument.",
          "Compliance and identity layer — KYC/AML, investor accreditation, jurisdictional allow-lists, sanctions screening and a permissioned transfer standard, with audit trails formatted for SECZIM reporting.",
          "$ZIG stablecoin on Base — 1:1 to the Zimbabwe Investment Gold currency, with reserve attestation, authorised mint/redeem partners, and use as the quote and settlement asset for all ZEEX onchain trading as well as day-to-day local business payments.",
          "Liquidity and market structure — primary offering module, onchain order book and/or curated automated market making, designated market makers from the Base ecosystem, and RWA vaults for the working-capital and invoice-financing book.",
          "Applications — web and tablet terminal for institutions and global investors, iOS and Android apps for diaspora and retail, and a WhatsApp trading and account channel for local users on low-end devices.",
          "ZEEX integration — bi-directional interfaces to the existing ZEEX platform for listings, order routing, positions, corporate actions and settlement reconciliation, so the onchain venue extends ZEEX rather than competing with it.",
          "Custody and treasury — institutional custody options, self-custody wallets with recovery, and treasury controls for issuer proceeds.",
        ],
      },
      { kind: "h3", text: "4.2 Mapping ZEEX services onto onchain instruments" },
      {
        kind: "table",
        head: ["ZEEX service", "Onchain instrument", "Global demand"],
        rows: [
          [
            "Equity raise (Private Markets)",
            "Tokenized SME equity with transfer restrictions and cap-table mirroring",
            "Venture and frontier-market funds seeking early exposure with a credible register and eventual secondary route",
          ],
          [
            "Equity raise (Public Markets)",
            "Freely transferable tokenized equity, quoted in $ZIG",
            "Diaspora retail, global retail, index and thematic RWA allocators",
          ],
          [
            "Debt securities",
            "Tokenized notes with programmatic coupon and amortisation",
            "Onchain fixed-income and private-credit buyers seeking uncorrelated yield",
          ],
          [
            "Invoice discounting",
            "Tokenized receivables pools with tranching and vault deployment",
            "Stablecoin treasuries and yield vaults seeking short-duration working-capital exposure",
          ],
        ],
      },
      { kind: "h3", text: "4.3 Design principles" },
      {
        kind: "bullets",
        items: [
          "Regulation first: nothing is issued or traded outside the SECZIM perimeter; the chain is a settlement and distribution upgrade, not a regulatory bypass.",
          "ZIG-native: local currency is the unit of account, protecting monetary policy alignment and issuer reporting.",
          "Accessible by default: a founder in Gweru on a feature phone and a fund in New York must reach the same order book.",
          "Institutional-grade: audited contracts, formal reserve attestation for $ZIG, segregated client assets, and independent security review before launch.",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Product Suite in Detail",
    kicker: "Instruments & mechanics",
    blocks: [
      { kind: "h3", text: "5.1 ZEEX Shares — tokenized equity with a legal spine" },
      {
        kind: "numbers",
        items: [
          "An SME lists on ZEEX through the existing Deal Room flow — KYC/AML, company verification, financials, pitch, valuation and terms.",
          "The securities are immobilised in trust with ZSE Debtbridge Capital under SECZIM oversight.",
          "Ribbon Protocol's Base contracts mint a matching permissioned share token 1:1, with public onchain attestation so anyone can verify tokens outstanding equals shares in trust.",
          "Transfers are gated by an onchain identity registry — only wallets with a valid credential (KYC tier, jurisdiction, accreditation status) can hold. Compliance is enforced by the contract, not a back office.",
          "Dividends and corporate actions distribute in $ZIG or USDC pro rata, automatically. No dividend cheques, no unclaimed dividend pool.",
        ],
      },
      {
        kind: "p",
        text: "Phase 2 extends the same rail to ZSE and VFEX dual-listed equities. Settlement moves from days to seconds, the shareholder register becomes auditable in real time, and the share becomes composable.",
      },
      { kind: "h3", text: "5.2 Fractionalization from US$1 — the democratization engine" },
      {
        kind: "bullets",
        items: [
          "Minimum investment of US$1 (or the $ZIG equivalent), against broker minimums that exclude almost the entire population.",
          "Recurring micro-investing: a round-up flow where mobile money or stablecoin spend accumulates into a diversified basket of ZEEX SMEs.",
          "Baskets and indices: a ZEEX 20 index token, sector baskets (agri-processing, logistics, fintech, mining services) and diaspora-curated baskets, each an ERC-4626 vault of underlying share tokens.",
          "Group investing: stokvel and mukando savings clubs get a native onchain primitive with multi-sig ownership and transparent accounting — culturally native distribution, not imported product design.",
          "At a US$1 floor the addressable domestic investor base moves from tens of thousands of brokerage accounts to millions of mobile-money users: expanding a market rather than digitising one.",
        ],
      },
      { kind: "h3", text: "5.3 InvoiceX Onchain — invoice discounting as a global yield product" },
      {
        kind: "numbers",
        items: [
          "The SME uploads an invoice to ZEEX; the counterparty — typically a corporate, parastatal or NGO — is verified and the invoice confirmed payable.",
          "The receivable is minted as an invoice NFT on Base carrying face value, tenor, debtor rating and discount rate.",
          "It is funded from an ERC-4626 vault where global stablecoin holders, diaspora savers, DFIs and credit funds deposit USDC or $ZIG.",
          "The SME receives 80–90% of face value in stablecoin, typically same day.",
          "On settlement the debtor pays into smart-contract escrow operated with ZSE Debtbridge Capital; the vault is repaid and yield distributes automatically.",
        ],
      },
      {
        kind: "bullets",
        items: [
          "Short-duration (30–90 days), self-liquidating and asset-backed — the uncorrelated, productive yield profile onchain capital is looking for.",
          "Yield correlates to Zimbabwean commercial activity rather than crypto beta — a diversification benefit for onchain portfolios.",
          "Underwriting is originated by a licensed exchange and reinforced by onchain repayment history that compounds into a regional SME credit graph owned by no bank.",
          "Tranching: senior tranches for conservative capital and DFI first-loss, junior tranches for higher-yield onchain capital — blended finance expressed as two vault tokens.",
        ],
      },
      { kind: "h3", text: "5.4 DebtBridge — programmable debt, escrow and securities-backed credit" },
      {
        kind: "bullets",
        items: [
          "DebtBridge Notes — ZEEX debt securities issued as onchain bonds with programmable coupons, automated amortisation and covenant monitoring. An investor in Cape Town can buy a US$50 slice of an 18-month agri-processing note and receive coupons automatically.",
          "DebtBridge Credit (SBLOC) — holders of tokenized ZEEX/ZSE shares deposit them as collateral and draw a stablecoin credit line at conservative LTV with oracle-priced liquidation thresholds, solving an asset-rich, liquidity-poor market without forced selling.",
          "DebtBridge Escrow — deal-room transaction execution where conditions precedent are encoded and funds release only on verification, collapsing counterparty risk from a legal problem to a code problem.",
          "DebtBridge Guarantor (multi-party credit) — a diaspora sender in the UK pledges stablecoin into a recourse vault to guarantee a family SME loan in Gweru, converting remittance flow into credit enhancement and leverageable productive capital.",
        ],
      },
      { kind: "h3", text: "5.5 $ZIG — local stablecoin and global FX instrument" },
      {
        kind: "bullets",
        items: [
          "Reserve: ZiG deposits at a licensed Zimbabwean bank plus short-dated government / gold-referenced instruments, with monthly third-party attestation and a public proof-of-reserves dashboard.",
          "Issuance and redemption through licensed partners and the ZEEX/Debtbridge trust structure, under an RBZ / SECZIM sandbox pathway.",
          "Distribution through a cash-in/cash-out agent network — informal traders, mobile money agents, fuel stations, tuckshops — meeting a cash-centric economy where it already is.",
          "Native settlement: share trades, dividends, coupons and invoice settlements clear in the currency of account with no FX leg and no correspondent bank.",
          "FX market creation: a deep ZIG/USDC pool produces Zimbabwe's first continuous, transparent 24/7 market price for the local currency, with forwards and NDFs as a Phase 3 extension.",
          "Diaspora corridor economics: a sender converts USDC to $ZIG for cents rather than the ~8% regional average, and can deliver or invest it in the same transaction.",
          "Yield passthrough and hedging choice: reserve yield can be shared where regulation permits, and investors switch between $ZIG local exposure and USDC hedging instantly in-app.",
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Diaspora Capital and Distribution",
    kicker: "Turning remittance into ownership",
    image: "mobile",
    blocks: [
      {
        kind: "p",
        text: "The diaspora surface is a Base App Mini App with passkey sign-in, sponsored gas via Paymaster and card or stablecoin funding, so a first-time investor never buys ETH or writes down a seed phrase. Alongside it, the WhatsApp channel and agent network serve local users on low-end handsets.",
      },
      {
        kind: "bullets",
        items: [
          "Invest Home — buy fractional ZEEX/ZSE equity from anywhere in the world in under 60 seconds.",
          "Remit-to-Invest — split any remittance, for example 70% to family spending and 30% into a diversified ZEEX basket held in the recipient's name.",
          "Family Vaults — multi-signature vaults co-owned by diaspora sender and local recipient, with transparent, auditable use of funds, answering the real diaspora complaint: not the cost of sending but the inability to see what happened next.",
          "Guarantor Credit — remittance pledged as recourse collateral behind a family SME's working-capital facility.",
          "Basenames as trust identity, so a family vault reads as a human name rather than a hex string.",
          "Consumer rails: Base Account smart wallets, Base Pay stablecoin checkout, and Base App Mini Apps so investing lives inside a social feed rather than behind a brokerage login.",
        ],
      },
      {
        kind: "p",
        text: "Strategically, this is how a Zimbabwean SME raises capital from twelve countries without an investment bank, a roadshow or a prospectus in each jurisdiction — using a permissioned token that enforces per-jurisdiction eligibility in code.",
      },
    ],
  },
  {
    number: "07",
    title: "Regional Expansion: SADC and AfCFTA",
    kicker: "Scaling beyond Zimbabwe",
    blocks: [
      {
        kind: "p",
        text: "Zimbabwe is the wedge, not the market. SADC comprises roughly 380 million people and US$700+ billion of GDP, and its Protocol on Finance and Investment explicitly targets capital market integration. Regional exchanges remain fragmented with separate CSDs, separate brokers and slow cross-border settlement; a Base-native permissioned securities rail functions as an instant regional CSD overlay.",
      },
      {
        kind: "p",
        text: "AfCFTA creates a single market of ~1.3 billion people and roughly US$3.4 trillion of combined GDP, with the World Bank projecting a US$450 billion income gain by 2035. AfCFTA liberalised goods and services trade but did not build the investment plumbing. Cross-border SME trade generates precisely the instrument InvoiceX finances — a receivable from a buyer in one country owed to a supplier in another.",
      },
      {
        kind: "bullets",
        items: [
          "Expansion sequence: Zimbabwe (ZEEX/ZSE/VFEX) → Zambia and Botswana → South Africa (diaspora corridor and institutional capital) → Kenya and Nigeria (SME exchange partnerships) → AfCFTA-wide trade receivable financing.",
          "Each market reuses the same three contract families — permissioned equity, invoice vault, local stablecoin. Only the licence and the local stablecoin change.",
          "The templated playbook is what makes the business sustainable rather than grant-dependent: one infrastructure stack serving a large, policy-tailwinded, currently unserved market.",
        ],
      },
    ],
  },
  {
    number: "08",

    title: "Funding Strategy",
    kicker: "Capital formation",
    blocks: [
      {
        kind: "table",
        head: ["Source", "Type", "Quantum", "Use"],
        rows: [
          [
            "Base Ecosystem Fund",
            "Grant (non-dilutive)",
            "Up to US$250,000",
            "Architecture, $ZIG design and attestation framework, MVP build, security audit, pilot cohort of ZEEX issuers",
          ],
          [
            "Base Ecosystem Fund / Coinbase Ventures and co-investors",
            "Pre-seed / seed equity",
            "Up to US$3,500,000",
            "Full platform build, mobile and WhatsApp channels, market-maker incentives, compliance, licensing support, go-to-market across diaspora corridors",
          ],
        ],
      },
      { kind: "h3", text: "Indicative 18-month use of funds" },
      {
        kind: "bullets",
        items: [
          "40% — Protocol engineering: permissioned token standard, fractionalization engine, InvoiceX vaults, DebtBridge SBLOC contracts, and two independent audits.",
          "20% — Regulatory, legal and licensing: SECZIM engagement and sandbox, trust and custody documentation with ZSE Debtbridge Capital, $ZIG reserve structuring, reserve attestation provider, cross-border legal opinions for SADC distribution.",
          "20% — $ZIG liquidity and market operations: initial reserve seeding, Base DEX liquidity for ZIG/USDC, market maker incentives.",
          "15% — Go-to-market: diaspora corridor acquisition (South Africa, UK, Canada, UAE), agent and kiosk cash network, SME issuer onboarding.",
          "5% — Operations and compliance headcount.",
        ],
      },
      { kind: "h3", text: "Twelve-month post-funding targets" },
      {
        kind: "bullets",
        items: [
          "10,000 verified retail investors, of which 60% are first-time investors.",
          "US$2 million of tokenized invoice volume funded through InvoiceX vaults.",
          "25 ZEEX issuers tokenized on the equity rail.",
          "US$5 million of $ZIG in circulation with live ZIG/USDC liquidity on Base.",
          "250,000 Base transactions generated by the platform.",
        ],
      },
      {

        kind: "p",
        text: "Structuring of the seed vehicle — whether the platform entity is a ZSE Holdings subsidiary, a joint venture, or a licensed technology partner — is a decision for ZSE Holdings. We will present options with their governance, tax, control and regulatory consequences, and execute the option chosen.",
      },
    ],
  },
  {
    number: "09",
    title: "Ribbon Protocol's Role and Scope of Services",
    kicker: "Engagement model",
    blocks: [
      {
        kind: "p",
        text: "Ribbon Protocol is engaged in three defined capacities, each with its own deliverables and accountability.",
      },
      { kind: "h3", text: "6.1 Project Manager" },
      {
        kind: "bullets",
        items: [
          "Programme governance, delivery roadmap, milestone tracking and reporting to the ZSE Holdings executive and board.",
          "Vendor selection and management: smart contract developers, auditors, custody providers, mobile teams, market makers.",
          "Risk register, regulatory workstream coordination with SECZIM and the Reserve Bank, and issuer onboarding programme for the pilot cohort.",
        ],
      },
      { kind: "h3", text: "6.2 Investment Agent" },
      {
        kind: "bullets",
        items: [
          "Preparation and submission of the Base Ecosystem Fund grant application and the seed equity raise materials.",
          "Introductions to and management of Base, Coinbase Ventures and aligned funds; negotiation support on terms; diligence and data room management.",
          "Liquidity origination: market makers, stablecoin treasuries, RWA funds and diaspora distribution partners.",
        ],
      },
      { kind: "h3", text: "6.3 Technology Integration Architect" },
      {
        kind: "bullets",
        items: [
          "Target architecture, token standards, permissioned transfer design and $ZIG reserve and mint/redeem model.",
          "Integration design and delivery oversight between the onchain venue and the existing ZEEX platform, including settlement reconciliation and corporate actions.",
          "Security posture: audit scope, key management, incident response, and pre-launch penetration testing.",
          "Knowledge transfer and a documented handover so ZSE Holdings owns and operates the platform long term.",
        ],
      },
    ],
  },
  {
    number: "10",
    title: "Delivery Roadmap",
    kicker: "Execution plan",
    blocks: [
      {
        kind: "table",
        head: ["Phase", "Timeline", "Key outcomes"],
        rows: [
          [
            "Phase 0 — Mandate and design",
            "Weeks 1–6",
            "Signed engagement, regulatory mapping with SECZIM, target architecture, $ZIG design paper, grant application submitted",
          ],
          [
            "Phase 1 — MVP and pilot",
            "Months 2–6",
            "Tokenization engine, compliance layer, $ZIG testnet then mainnet on Base, web terminal, pilot cohort of 5–10 ZEEX issuers, security audit",
          ],
          [
            "Phase 2 — Scale and distribution",
            "Months 6–12",
            "Seed round closed, iOS/Android apps, WhatsApp channel live, designated market makers active, diaspora corridors opened, secondary liquidity in $ZIG pairs",
          ],
          [
            "Phase 3 — Credit and composability",
            "Months 12–24",
            "Invoice-financing vaults at scale, securities-backed credit against tokenized holdings, FX pairs, diaspora issuer listings across ZSE Holdings markets",
          ],
        ],
      },
    ],
  },
  {
    number: "11",
    title: "Revenue Model and Unit Economics",
    kicker: "Commercial sustainability",
    blocks: [
      {
        kind: "table",
        head: ["Revenue line", "Basis", "Notes"],
        rows: [
          [
            "Tokenization and issuance fee",
            "0.5–1.5% of capital raised",
            "Shared with ZEEX on every primary issuance of equity or debt",
          ],
          [
            "Trading fee",
            "10–30 bps on secondary transfers",
            "Charged on secondary transfers of tokenized shares and notes",
          ],
          [
            "InvoiceX origination and servicing",
            "1–3% of invoice face value",
            "Plus a performance fee on vault yield distributed to depositors",
          ],
          [
            "DebtBridge Credit",
            "Interest spread on SBLOC lines",
            "Spread between vault funding cost and borrower rate",
          ],
          [
            "$ZIG reserve and FX",
            "Reserve yield and FX spread",
            "Spread on ZIG/USDC conversion and permitted reserve yield retention",
          ],
          [
            "White-label licensing",
            "Licence and revenue share",
            "Stack licensed to other African exchanges from Year 3",
          ],
        ],
      },
      {
        kind: "p",
        text: "Unit economics illustration: US$100 million of annualised tokenized invoice volume at a 2% blended take rate is US$2 million of recurring revenue from a single product line — drawn from a segment (Zimbabwean SMEs) that already generates an estimated US$14.2 billion in annual output.",
      },
    ],
  },
  {
    number: "12",
    title: "Strategic Impact: Zimbabwe as the Silicon Valley of Africa",
    kicker: "National outcome",

    blocks: [
      {
        kind: "p",
        text: "The combination of a licensed startup exchange, onchain settlement and a local stablecoin creates something no other African market currently has: a regulated, globally accessible venue where a growth company can raise, be priced continuously, and offer investors a real exit path.",
      },
      {
        kind: "bullets",
        items: [
          "A globally viable venture funding platform. ZEEX becomes an institutional analogue to Y Combinator and the Silicon Valley funding stack — cohort formation, standardised instruments, transparent pricing and continuous liquidity — but with the public-market discipline of a licensed exchange.",
          "Fast-moving venture capital at the exchange. Onchain settlement, standardised documents and 24/7 secondary markets let funds move at software speed rather than correspondent-banking speed, drawing venture capital directly to Zimbabwean startups.",
          "Diaspora issuers and diaspora capital. Zimbabwean-owned startups operating abroad gain a natural home to list on ZEEX or other ZSE Holdings markets, while diaspora investors gain a compliant, low-friction way to invest in their own economy — deepening liquidity on both sides.",
          "Formalisation at scale. Every listing pulls an informal enterprise into the tax, banking and governance net, compounding the policy objective ZEEX was built to serve.",
          "National positioning. A functioning onchain capital market anchored in a local stablecoin is a credible claim to being the Silicon Valley of Africa — and a template ZSE Holdings can export across SADC.",
        ],
      },
    ],
  },
  {
    number: "13",
    title: "Risk and Compliance",
    kicker: "Governance",
    blocks: [
      {
        kind: "table",
        head: ["Risk", "Mitigation"],
        rows: [
          [
            "Regulatory uncertainty on tokenized securities",
            "Early, structured engagement with SECZIM; sandbox or no-objection pathway; tokens as records of existing licensed instruments, not new instruments",
          ],
          [
            "$ZIG peg and reserve integrity",
            "Ring-fenced reserves with authorised custodian, independent monthly attestation, published mint/redeem policy, RBZ engagement",
          ],
          [
            "Smart contract and cyber risk",
            "Two independent audits, bug bounty, staged rollout with caps, formal key management and incident response",
          ],
          [
            "Thin early liquidity",
            "Designated market makers funded from the raise, incentive programme, phased listing cadence, invoice-financing vaults as an anchor yield product",
          ],
          [
            "Investor protection and market abuse",
            "Permissioned transfers, surveillance, disclosure standards inherited from ZEEX listing rules",
          ],
          [
            "Capital controls and FX",
            "$ZIG-denominated settlement with regulated on/off ramps and full transaction traceability",
          ],
        ],
      },
    ],
  },
  {
    number: "14",
    title: "Commercials and Next Steps",
    kicker: "Mandate & mobilisation",
    blocks: [
      {
        kind: "p",
        text: "Ribbon Protocol proposes a mandate combining a monthly project management retainer, a success fee on capital raised in the investment agent capacity, and a fixed-fee architecture and integration workstream. Precise commercial terms will be tabled for negotiation once scope is confirmed, and can be structured to weight compensation toward successful funding outcomes.",
      },
      {
        kind: "numbers",
        items: [
          "Executive briefing with ZSE Holdings leadership to confirm strategic intent and scope (1 hour).",
          "Letter of intent and confidentiality agreement between ZSE Holdings and Ribbon Protocol.",
          "Two-week joint discovery: regulatory mapping, ZEEX technical review, pilot issuer shortlist.",
          "Submission of the Base Ecosystem Fund grant application with ZSE Holdings as named partner.",
          "Mobilisation of Phase 0 delivery on grant approval.",
        ],
      },
      {
        kind: "quote",
        text: "ZEEX has already done the hardest part: building a regulated venue where Zimbabwe's SMEs can raise capital without collateral. This proposal is about who shows up to buy. With Base and Coinbase capital, a local stablecoin and onchain distribution, that answer becomes the world.",
      },
    ],
  },
];
