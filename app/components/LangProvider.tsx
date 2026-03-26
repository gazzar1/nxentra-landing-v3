"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ar";

const dict: Record<Lang, Record<string, string>> = {
  en: {
    navModules: "Modules",
    navWhy: "Why Nxentra",
    navHow: "How it works",
    navContact: "Contact",
    ctaTry: "Start free",
    ctaDemo: "Watch demo",
    heroTag: "The ERP that ingests everything",
    heroH1a: "Your Shopify store deserves",
    heroH1b: "real accounting.",
    heroSub: "Nxentra connects your Shopify, Stripe, POS, and bank feeds into one financial truth. Auto-reconciled. Multi-currency. Audit-ready from day one.",
    trustFree: "Free to start",
    trustNoCard: "No credit card",
    trustSetup: "Setup in minutes",
    liveOn: "Live on",
    // Shopify Spotlight
    shopifyBadge: "Shopify Integration",
    shopifyH2a: "Selling on Shopify?",
    shopifyH2b: "Your accounting is already done.",
    shopifyDesc: "Every Shopify order, refund, discount, tax, and payout automatically becomes a proper double-entry journal entry. COGS calculated at weighted average cost. Multi-currency conversions handled. Inventory levels synced in real-time.",
    shopifyBullet1: "Orders auto-post to Sales, AR, Tax, and Inventory accounts",
    shopifyBullet2: "Shopify payouts reconcile against bank deposits automatically",
    shopifyBullet3: "Refunds create proper reversal entries — no manual corrections",
    shopifyBullet4: "Multi-currency orders converted at transaction-date rates",
    shopifyCta: "Connect your Shopify store",
    shopifyFlow1Label: "Shopify Order #1042",
    shopifyFlow1Sub: "3 items · $287.50 · USD",
    shopifyFlow2Label: "Ingestion Engine",
    shopifyFlow2Sub: "Normalize → Map accounts → Validate",
    shopifyFlow3Label: "Journal Entry JE-1-000847",
    shopifyFlow3Sub: "DR Accounts Receivable $287.50 · CR Sales $250.00 · CR Tax $37.50",
    shopifyFlow4Label: "Auto-Reconciled",
    shopifyFlow4Sub: "Matched with Shopify Payout #P-2891",
    // Modules
    modulesTitle: "One platform. Every module.",
    modulesSub: "Stop stitching together disconnected tools. Nxentra gives you a complete operating system for your business.",
    modAccounting: "Accounting",
    modAccountingDesc: "GL, chart of accounts, journal entries, multi-currency, bank reconciliation",
    modSales: "Sales & Invoicing",
    modSalesDesc: "Invoices, tax codes, posting profiles, customer receipts, AR aging",
    modInventory: "Inventory",
    modInventoryDesc: "Warehouses, stock balances, COGS tracking, weighted average costing",
    modPurchases: "Purchases",
    modPurchasesDesc: "Purchase bills, vendor payments, AP aging, multi-currency payables",
    modProperties: "Properties",
    modPropertiesDesc: "Unit management, lease contracts, rent collection, tenant accounting",
    modClinic: "Clinic",
    modClinicDesc: "Patient billing, appointment revenue, insurance claims, medical AR",
    modShopify: "Shopify Sync",
    modShopifyDesc: "Auto-ingest orders, refunds, and payouts. Real-time financial mapping.",
    modStripe: "Stripe Connect",
    modStripeDesc: "Payment reconciliation, fee tracking, payout matching, multi-currency",
    // Why Nxentra
    whyTitle: "Why teams switch to Nxentra",
    whySub: "Built different from legacy ERPs. Every transaction is an immutable event. Every report is derived, never manually fixed.",
    why1Title: "Universal Ingestion Engine",
    why1Desc: "Every order, payment, refund, and payout from any source becomes an immutable financial event. Shopify, Stripe, POS, bank feeds — all normalized into one ledger. No CSV imports. No manual entry. No data drift.",
    why2Title: "Auto-Reconciliation Engine",
    why2Desc: "Nxentra matches transactions across sources automatically. Bank payouts reconcile against Shopify orders. Stripe fees match journal entries. Discrepancies surface instantly — not at month-end when it's too late.",
    why3Title: "Immutable Audit Trail",
    why3Desc: "Every number on every report traces back to a source event. Nothing is manually edited. Nothing is overwritten. Your books aren't just accurate — they're provably accurate. Auditors love this.",
    why4Title: "Multi-Currency Native",
    why4Desc: "EGP, USD, SAR, EUR — all in one ledger. Automatic exchange rate lookups, currency revaluation, and unrealized gain/loss tracking. Built for businesses that operate across borders.",
    // How It Works
    howTitle: "How it works",
    howSub: "Three engines. Zero guesswork.",
    eng1Label: "Engine 01",
    eng1Title: "Universal Ingestion",
    eng1Desc: "Connect any source — Shopify, Stripe, POS, bank feeds, CSV. Every transaction is normalized into an immutable financial event. No data loss. No format wars.",
    eng2Label: "Engine 02",
    eng2Title: "Auto-Reconciliation",
    eng2Desc: "Cross-reference transactions across all sources automatically. Bank statements match invoices. Shopify payouts match deposits. Discrepancies flagged in real-time, not at month-end.",
    eng3Label: "Engine 03",
    eng3Title: "Live Projections",
    eng3Desc: "Trial balance, P&L, balance sheet, cash flow — all derived from events in real-time. No month-end close needed. No manual adjustments. Your reports are always current.",
    // Video
    videoTitle: "See Nxentra in action",
    videoSub: "Watch how Nxentra turns disconnected data into financial clarity.",
    // Dashboard Charts
    chartsTitle: "Real-time financial visibility",
    chartsSub: "Every chart is derived from live events. Revenue, expenses, cash flow, and reconciliation rates update as transactions flow in.",
    // Stats
    statModules: "Modules",
    statCurrencies: "Currencies supported",
    statEngines: "Core engines",
    statSetup: "Setup time",
    // Contact
    contactTitle: "Ready to take control?",
    contactSub: "Get in touch and we will set you up in minutes.",
    contactTry: "Try Nxentra free",
    contactEmail: "Email us",
    // Footer
    footer: "Nxentra",
    quickLinks: "Quick links",
    footerRights: "All rights reserved.",
    // Contact Form
    formName: "Your name",
    formEmailPlaceholder: "Email address",
    formMessage: "Tell us about your business...",
    formSend: "Send message",
    formSending: "Sending...",
    formSent: "Message sent! We'll get back to you shortly.",
    formRoleSme: "SME Owner",
    formRoleAccountant: "Accountant",
    formRoleEcommerce: "E-commerce Merchant",
    formRoleInvestor: "Investor",
    formRolePartner: "Partner / Integrator",
  },
  ar: {
    navModules: "الوحدات",
    navWhy: "لماذا Nxentra",
    navHow: "كيف يعمل",
    navContact: "تواصل",
    ctaTry: "ابدأ مجاناً",
    ctaDemo: "شاهد العرض",
    heroTag: "نظام ERP يستوعب كل شيء",
    heroH1a: "متجرك على Shopify يستحق",
    heroH1b: "محاسبة حقيقية.",
    heroSub: "Nxentra يربط Shopify وStripe ونقاط البيع والبنوك في حقيقة مالية واحدة. مطابقة تلقائية. متعدد العملات. جاهز للتدقيق من اليوم الأول.",
    trustFree: "مجاني للبدء",
    trustNoCard: "بدون بطاقة ائتمان",
    trustSetup: "إعداد في دقائق",
    liveOn: "متصل بـ",
    // Shopify Spotlight
    shopifyBadge: "تكامل Shopify",
    shopifyH2a: "تبيع على Shopify؟",
    shopifyH2b: "محاسبتك جاهزة تلقائياً.",
    shopifyDesc: "كل طلب وإرجاع وخصم وضريبة ودفعة من Shopify يتحول تلقائياً إلى قيد يومية مزدوج. تكلفة البضاعة المباعة بالمتوسط المرجح. تحويلات العملات تُعالج تلقائياً. مستويات المخزون متزامنة لحظياً.",
    shopifyBullet1: "الطلبات تُقيَّد تلقائياً في حسابات المبيعات والذمم والضرائب والمخزون",
    shopifyBullet2: "دفعات Shopify تتطابق مع الإيداعات البنكية تلقائياً",
    shopifyBullet3: "المرتجعات تُنشئ قيود عكسية صحيحة — بدون تعديلات يدوية",
    shopifyBullet4: "الطلبات متعددة العملات تُحوَّل بأسعار تاريخ المعاملة",
    shopifyCta: "اربط متجر Shopify الخاص بك",
    shopifyFlow1Label: "طلب Shopify #1042",
    shopifyFlow1Sub: "3 عناصر · $287.50 · USD",
    shopifyFlow2Label: "محرك الاستيعاب",
    shopifyFlow2Sub: "تطبيع ← ربط الحسابات ← تحقق",
    shopifyFlow3Label: "قيد يومية JE-1-000847",
    shopifyFlow3Sub: "مدين ذمم مدينة $287.50 · دائن مبيعات $250.00 · دائن ضريبة $37.50",
    shopifyFlow4Label: "مطابقة تلقائية",
    shopifyFlow4Sub: "تمت المطابقة مع دفعة Shopify #P-2891",
    // Modules
    modulesTitle: "منصة واحدة. كل الوحدات.",
    modulesSub: "توقف عن ربط أدوات منفصلة. Nxentra يعطيك نظام تشغيل كامل لعملك.",
    modAccounting: "المحاسبة",
    modAccountingDesc: "دفتر الأستاذ، دليل الحسابات، قيود اليومية، متعدد العملات، تسوية بنكية",
    modSales: "المبيعات والفواتير",
    modSalesDesc: "فواتير، أكواد ضريبية، ملفات ترحيل، إيصالات عملاء، أعمار الذمم المدينة",
    modInventory: "المخزون",
    modInventoryDesc: "مستودعات، أرصدة مخزون، تتبع تكلفة البضاعة المباعة، المتوسط المرجح",
    modPurchases: "المشتريات",
    modPurchasesDesc: "فواتير شراء، مدفوعات موردين، أعمار الذمم الدائنة، متعدد العملات",
    modProperties: "العقارات",
    modPropertiesDesc: "إدارة الوحدات، عقود إيجار، تحصيل إيجارات، محاسبة المستأجرين",
    modClinic: "العيادة",
    modClinicDesc: "فوترة المرضى، إيرادات المواعيد، مطالبات التأمين، ذمم مدينة طبية",
    modShopify: "مزامنة Shopify",
    modShopifyDesc: "استيعاب تلقائي للطلبات والمرتجعات والدفعات. ربط مالي لحظي.",
    modStripe: "ربط Stripe",
    modStripeDesc: "تسوية مدفوعات، تتبع رسوم، مطابقة دفعات، متعدد العملات",
    // Why Nxentra
    whyTitle: "لماذا ينتقلون إلى Nxentra",
    whySub: "مبني بشكل مختلف عن أنظمة ERP التقليدية. كل معاملة حدث غير قابل للتعديل. كل تقرير مشتق، ليس معدلاً يدوياً.",
    why1Title: "محرك الاستيعاب الشامل",
    why1Desc: "كل طلب ودفعة وإرجاع من أي مصدر يصبح حدثاً مالياً غير قابل للتعديل. Shopify وStripe ونقاط البيع والبنوك — الكل يُطبَّع في دفتر واحد. بدون استيراد CSV. بدون إدخال يدوي. بدون انحراف بيانات.",
    why2Title: "محرك المطابقة التلقائية",
    why2Desc: "Nxentra يطابق المعاملات عبر المصادر تلقائياً. دفعات البنك تتسوى مع طلبات Shopify. رسوم Stripe تطابق قيود اليومية. التباينات تظهر فوراً — ليس في نهاية الشهر عندما يكون الوقت قد فات.",
    why3Title: "مسار تدقيق غير قابل للتغيير",
    why3Desc: "كل رقم في كل تقرير يرجع إلى حدث مصدري. لا شيء يُعدَّل يدوياً. لا شيء يُكتب فوقه. دفاترك ليست دقيقة فقط — بل يمكن إثبات دقتها. المدققون يحبون هذا.",
    why4Title: "متعدد العملات أصلياً",
    why4Desc: "جنيه مصري، دولار، ريال، يورو — الكل في دفتر واحد. أسعار صرف تلقائية، إعادة تقييم العملات، وتتبع الأرباح/الخسائر غير المحققة. مبني للشركات العابرة للحدود.",
    // How It Works
    howTitle: "كيف يعمل",
    howSub: "ثلاثة محركات. صفر تخمين.",
    eng1Label: "المحرك 01",
    eng1Title: "الاستيعاب الشامل",
    eng1Desc: "اربط أي مصدر — Shopify، Stripe، نقاط البيع، البنوك، CSV. كل معاملة تُطبَّع إلى حدث مالي غير قابل للتعديل. بدون فقدان بيانات. بدون حروب الصيغ.",
    eng2Label: "المحرك 02",
    eng2Title: "المطابقة التلقائية",
    eng2Desc: "مراجعة تبادلية للمعاملات عبر كل المصادر تلقائياً. كشوف البنك تطابق الفواتير. دفعات Shopify تطابق الإيداعات. التباينات تُرصد لحظياً، ليس في نهاية الشهر.",
    eng3Label: "المحرك 03",
    eng3Title: "الإسقاطات الحية",
    eng3Desc: "ميزان المراجعة، الأرباح والخسائر، الميزانية، التدفق النقدي — الكل مشتق من الأحداث لحظياً. بدون إقفال شهري. بدون تعديلات يدوية. تقاريرك دائماً محدثة.",
    // Video
    videoTitle: "شاهد Nxentra عملياً",
    videoSub: "شاهد كيف يحول Nxentra البيانات المتفرقة إلى وضوح مالي.",
    // Dashboard Charts
    chartsTitle: "رؤية مالية لحظية",
    chartsSub: "كل رسم بياني مشتق من أحداث حية. الإيرادات والمصروفات والتدفق النقدي ومعدلات المطابقة تتحدث مع تدفق المعاملات.",
    // Stats
    statModules: "وحدات",
    statCurrencies: "عملات مدعومة",
    statEngines: "محركات أساسية",
    statSetup: "وقت الإعداد",
    // Contact
    contactTitle: "مستعد للسيطرة؟",
    contactSub: "تواصل معنا وسنعدك في دقائق.",
    contactTry: "جرب Nxentra مجاناً",
    contactEmail: "راسلنا",
    // Footer
    footer: "Nxentra",
    quickLinks: "روابط سريعة",
    footerRights: "جميع الحقوق محفوظة.",
    // Contact Form
    formName: "اسمك",
    formEmailPlaceholder: "البريد الإلكتروني",
    formMessage: "أخبرنا عن عملك...",
    formSend: "إرسال الرسالة",
    formSending: "جارٍ الإرسال...",
    formSent: "تم إرسال الرسالة! سنتواصل معك قريباً.",
    formRoleSme: "صاحب مشروع صغير",
    formRoleAccountant: "محاسب",
    formRoleEcommerce: "تاجر إلكتروني",
    formRoleInvestor: "مستثمر",
    formRolePartner: "شريك / مُدمج",
  },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  dir: "ltr",
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("nx_lang") as Lang | null;
    if (stored && (stored === "en" || stored === "ar")) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("nx_lang", l);
  };

  const t = (key: string) => dict[lang]?.[key] ?? dict.en?.[key] ?? key;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
