import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

// Define a type alias for the shape of the object returned by Inter
type FontObject = {
  className: string;
};

// Use the type alias to annotate the inter variable
const inter: FontObject = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enhanced Internationalization(i18n) in Next.js 14",
  description:
    "A guide on how to setup enhanced Internationalization(i18n) in Next.js 14",
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: string;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
