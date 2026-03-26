import type { Metadata } from "next";
import { LangProvider } from "./components/LangProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nxentra - The ERP that ingests everything",
  description:
    "Connect Shopify, Stripe, POS, and bank feeds into one financial truth. Auto-reconciled. Multi-currency. Audit-ready.",
  openGraph: {
    title: "Nxentra - The ERP that ingests everything",
    description:
      "Connect Shopify, Stripe, POS, and bank feeds into one financial truth. Auto-reconciled. Multi-currency. Audit-ready.",
    url: "https://www.nxentra.com",
    siteName: "Nxentra",
    type: "website",
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
      </body>
    </html>
  );
}
