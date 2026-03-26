"use client";

import { useLang } from "./components/LangProvider";
import ContactForm from "./components/ContactForm";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function IconShopify() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15.5 3.5l.5 2.5 2-.5s-.5-1.5-2.5-2z" />
      <path d="M15.5 3.5s-1-0.5-2.5-.5c-4 0-6 3-6 6.5 0 0-2 .5-2.5.7l-.5 .3 3.5 12 5-1.5s-.5-10-.5-11c0-1 .5-2.5 2-2.5s1.5 1 1.5 1l.5 2.5 2-.5-.5-2.5" />
      <path d="M17 6l1.5 12-5 1.5" />
    </svg>
  );
}

function IconStripe() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M12 9c-1.5 0-2.5.5-2.5 1.5s1 1.2 2.5 1.5c1.5.3 2.5.7 2.5 1.5s-1 1.5-2.5 1.5" />
      <path d="M12 8v1m0 6v1" />
    </svg>
  );
}

function IconAccounting() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  );
}

function IconSales() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function IconInventory() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

function IconPurchases() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <path d="M1 10h22" />
    </svg>
  );
}

function IconProperties() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M3 7v14M21 7v14M6 7V4a1 1 0 011-1h10a1 1 0 011 1v3" />
      <path d="M7 11h2v2H7zM11 11h2v2h-2zM15 11h2v2h-2zM7 16h2v2H7zM11 16h2v2h-2zM15 16h2v2h-2z" />
    </svg>
  );
}

function IconClinic() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function IconIngestion() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="20" cy="18" r="2" />
    </svg>
  );
}

function IconReconciliation() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function IconProjection() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const modules = [
  { icon: <IconAccounting />, name: "Accounting", desc: "GL, chart of accounts, journal entries, multi-currency, bank reconciliation", color: "text-blue-400" },
  { icon: <IconSales />, name: "Sales & Invoicing", desc: "Invoices, tax codes, posting profiles, customer receipts, AR aging", color: "text-emerald-400" },
  { icon: <IconInventory />, name: "Inventory", desc: "Warehouses, stock balances, COGS tracking, weighted average costing", color: "text-amber-400" },
  { icon: <IconPurchases />, name: "Purchases", desc: "Purchase bills, vendor payments, AP aging, multi-currency payables", color: "text-violet-400" },
  { icon: <IconProperties />, name: "Properties", desc: "Unit management, lease contracts, rent collection, tenant accounting", color: "text-rose-400" },
  { icon: <IconClinic />, name: "Clinic", desc: "Patient billing, appointment revenue, insurance claims, medical AR", color: "text-cyan-400" },
  { icon: <IconShopify />, name: "Shopify Sync", desc: "Auto-ingest orders, refunds, and payouts. Real-time financial mapping.", color: "text-green-400" },
  { icon: <IconStripe />, name: "Stripe Connect", desc: "Payment reconciliation, fee tracking, payout matching, multi-currency", color: "text-indigo-400" },
];

const whyCards = [
  {
    title: "Universal Ingestion Engine",
    desc: "Every order, payment, refund, and payout from any source becomes an immutable financial event. Shopify, Stripe, POS, bank feeds \u2014 all normalized into one ledger. No CSV imports. No manual entry. No data drift.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Auto-Reconciliation Engine",
    desc: "Nxentra matches transactions across sources automatically. Bank payouts reconcile against Shopify orders. Stripe fees match journal entries. Discrepancies surface instantly \u2014 not at month-end when it's too late.",
    gradient: "from-cyan-500/20 to-violet-500/20",
  },
  {
    title: "Immutable Audit Trail",
    desc: "Every number on every report traces back to a source event. Nothing is manually edited. Nothing is overwritten. Your books aren't just accurate \u2014 they're provably accurate. Auditors love this.",
    gradient: "from-violet-500/20 to-rose-500/20",
  },
  {
    title: "Multi-Currency Native",
    desc: "EGP, USD, SAR, EUR \u2014 all in one ledger. Automatic exchange rate lookups, currency revaluation, and unrealized gain/loss tracking. Built for businesses that operate across borders.",
    gradient: "from-rose-500/20 to-amber-500/20",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="min-h-screen bg-[#09090b]">
      {/* ── Navigation ──────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white">
              N
            </span>
            <span className="text-lg font-bold text-white">Nxentra</span>
          </a>

          {/* Nav links - desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#modules" className="text-sm text-zinc-400 hover:text-white transition">{t("navModules")}</a>
            <a href="#why" className="text-sm text-zinc-400 hover:text-white transition">{t("navWhy")}</a>
            <a href="#how" className="text-sm text-zinc-400 hover:text-white transition">{t("navHow")}</a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition">{t("navContact")}</a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-white transition"
            >
              {lang === "en" ? "\u0639\u0631\u0628\u064a" : "English"}
            </button>
            <a
              href="https://app.nxentra.com"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              {t("ctaTry")}
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left column */}
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-blue-300">{t("heroTag")}</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {t("heroH1a")}{" "}
                <span className="text-gradient">{t("heroH1b")}</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400 max-w-xl">
                {t("heroSub")}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://app.nxentra.com"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition shadow-lg shadow-blue-500/25"
                >
                  {t("ctaTry")} &rarr;
                </a>
                <a
                  href="#video"
                  className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:border-white/20 transition"
                >
                  {t("ctaDemo")}
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex items-center gap-6 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                  Free to start
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                  No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                  Setup in minutes
                </span>
              </div>
            </div>

            {/* Right column - Product screenshot */}
            <div className="relative">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-blue-500/10">
                <Image
                  src="/nxentra-dashboard.png"
                  alt="Nxentra Dashboard"
                  width={800}
                  height={500}
                  className="rounded-lg"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-lg border border-white/10 bg-[#09090b] px-4 py-2 shadow-lg md:-left-8">
                <div className="text-xs text-zinc-500">Live on</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-400 font-semibold text-sm">Shopify</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="text-indigo-400 font-semibold text-sm">Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopify Spotlight ───────────────────────────── */}
      <section className="relative border-y border-white/5 bg-gradient-to-r from-green-950/30 via-[#09090b] to-green-950/30">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">
                <IconShopify />
                <span className="text-xs font-medium text-green-300">Shopify Integration</span>
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Selling on Shopify?<br />
                <span className="text-green-400">Your accounting is already done.</span>
              </h2>
              <p className="mt-4 text-zinc-400 leading-relaxed max-w-lg">
                Every Shopify order, refund, discount, tax, and payout automatically becomes a proper double-entry journal entry.
                COGS calculated at weighted average cost. Multi-currency conversions handled.
                Inventory levels synced in real-time.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Orders auto-post to Sales, AR, Tax, and Inventory accounts",
                  "Shopify payouts reconcile against bank deposits automatically",
                  "Refunds create proper reversal entries \u2014 no manual corrections",
                  "Multi-currency orders converted at transaction-date rates",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.nxentra.com"
                className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition"
              >
                Connect your Shopify store &rarr;
              </a>
            </div>
            <div className="relative flex items-center justify-center">
              {/* Shopify flow visualization */}
              <div className="w-full max-w-md space-y-3">
                {[
                  { label: "Shopify Order #1042", sub: "3 items \u00b7 $287.50 \u00b7 USD", color: "border-green-500/30 bg-green-500/5" },
                  { label: "Ingestion Engine", sub: "Normalize \u2192 Map accounts \u2192 Validate", color: "border-blue-500/30 bg-blue-500/5" },
                  { label: "Journal Entry JE-1-000847", sub: "DR Accounts Receivable $287.50 \u00b7 CR Sales $250.00 \u00b7 CR Tax $37.50", color: "border-cyan-500/30 bg-cyan-500/5" },
                  { label: "Auto-Reconciled", sub: "Matched with Shopify Payout #P-2891", color: "border-emerald-500/30 bg-emerald-500/5" },
                ].map((step, i) => (
                  <div key={i}>
                    <div className={`rounded-lg border ${step.color} p-4`}>
                      <div className="text-sm font-medium text-white">{step.label}</div>
                      <div className="text-xs text-zinc-500 mt-1">{step.sub}</div>
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center py-1">
                        <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modules Grid ────────────────────────────────── */}
      <section id="modules" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{t("modulesTitle")}</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">{t("modulesSub")}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <div
                key={m.name}
                className="card-glow group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition"
              >
                <div className={`mb-4 ${m.color}`}>{m.icon}</div>
                <h3 className="font-semibold text-white">{m.name}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Why Nxentra ─────────────────────────────────── */}
      <section id="why" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{t("whyTitle")}</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">{t("whySub")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl border border-white/5 bg-gradient-to-br ${card.gradient} p-8 hover:border-white/10 transition`}
              >
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── How It Works ────────────────────────────────── */}
      <section id="how" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{t("howTitle")}</h2>
            <p className="mt-4 text-zinc-400">{t("howSub")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Engine 1 */}
            <div className="relative rounded-xl border border-white/5 bg-white/[0.02] p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <IconIngestion />
              </div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">Engine 01</div>
              <h3 className="text-lg font-bold text-white">Universal Ingestion</h3>
              <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                Connect any source &mdash; Shopify, Stripe, POS, bank feeds, CSV.
                Every transaction is normalized into an immutable financial event.
                No data loss. No format wars.
              </p>
            </div>

            {/* Engine 2 */}
            <div className="relative rounded-xl border border-white/5 bg-white/[0.02] p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                <IconReconciliation />
              </div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">Engine 02</div>
              <h3 className="text-lg font-bold text-white">Auto-Reconciliation</h3>
              <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                Cross-reference transactions across all sources automatically.
                Bank statements match invoices. Shopify payouts match deposits.
                Discrepancies flagged in real-time, not at month-end.
              </p>
            </div>

            {/* Engine 3 */}
            <div className="relative rounded-xl border border-white/5 bg-white/[0.02] p-8 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                <IconProjection />
              </div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-400">Engine 03</div>
              <h3 className="text-lg font-bold text-white">Live Projections</h3>
              <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                Trial balance, P&L, balance sheet, cash flow &mdash; all derived from events in real-time.
                No month-end close needed. No manual adjustments.
                Your reports are always current.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Video ───────────────────────────────────────── */}
      <section id="video" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">{t("videoTitle")}</h2>
            <p className="mt-4 text-zinc-400">{t("videoSub")}</p>
          </div>

          <div className="relative aspect-video rounded-xl border border-white/10 bg-white/5 overflow-hidden shadow-2xl shadow-blue-500/10">
            <iframe
              src="https://www.youtube.com/embed/-jN2oIwz91Y"
              title="Nxentra Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Numbers / Social Proof ──────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {[
              { value: "8+", label: "Modules" },
              { value: "15+", label: "Currencies supported" },
              { value: "3", label: "Core engines" },
              { value: "<5min", label: "Setup time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gradient md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── Contact ─────────────────────────────────────── */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">{t("contactTitle")}</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed max-w-md">{t("contactSub")}</p>

              <div className="mt-8 space-y-4">
                <a
                  href="https://app.nxentra.com"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </span>
                  <div>
                    <div className="text-sm font-medium text-white">Try Nxentra free</div>
                    <div className="text-xs text-zinc-500">app.nxentra.com</div>
                  </div>
                </a>
                <a
                  href="mailto:hello@nxentra.com"
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <div>
                    <div className="text-sm font-medium text-white">Email us</div>
                    <div className="text-xs text-zinc-500">hello@nxentra.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-cyan-500 text-[10px] font-bold text-white">
              N
            </span>
            <span className="text-sm font-semibold text-zinc-400">Nxentra</span>
          </div>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Nxentra. All rights reserved.
          </p>
          <a
            href="https://app.nxentra.com"
            className="text-xs text-zinc-500 hover:text-white transition"
          >
            app.nxentra.com &rarr;
          </a>
        </div>
      </footer>

      {/* ── Mobile sticky CTA ───────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#09090b]/90 backdrop-blur-lg p-3 md:hidden">
        <a
          href="https://app.nxentra.com"
          className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center text-sm font-semibold text-white"
        >
          {t("ctaTry")} &rarr;
        </a>
      </div>
    </div>
  );
}
