import type { Metadata } from "next";
import Script from "next/script";
import { LangProvider } from "./components/LangProvider";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  title: "Nxentra - Shopify Accounting, Automated",
  description:
    "The accounting system built for Shopify merchants. Auto-reconcile orders, payouts, and bank deposits. Multi-currency. Audit-ready from day one.",
  keywords: [
    "Shopify accounting",
    "e-commerce accounting",
    "Shopify reconciliation",
    "automated bookkeeping",
    "multi-currency accounting",
    "Shopify ERP",
  ],
  openGraph: {
    title: "Nxentra - Shopify Accounting, Automated",
    description:
      "The accounting system built for Shopify merchants. Auto-reconcile orders, payouts, and bank deposits.",
    url: "https://www.nxentra.com",
    siteName: "Nxentra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nxentra - Shopify Accounting, Automated",
    description:
      "Auto-reconcile Shopify orders, payouts, and bank deposits. Multi-currency. Audit-ready.",
  },
  alternates: {
    canonical: "https://www.nxentra.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
