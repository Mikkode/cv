import "./globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "CV - Développeur Fullstack | Next.js, React, Node.js, TypeScript",
  description:
    "CV développeur fullstack spécialisé en Next.js, React, Node.js et TypeScript. Expertise en développement web moderne SAAS et applications performantes.",
  keywords: [
    "développeur fullstack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "développeur web",
    "SAAS",
  ],
  authors: [{ name: "Mickaël WARIN" }],
  openGraph: {
    title: "CV - Développeur Fullstack | Next.js, React, Node.js, TypeScript",
    description:
      "CV développeur fullstack spécialisé en Next.js, React, Node.js et TypeScript. Expertise en développement web moderne SAAS et applications performantes.",
    type: "website",
    locale: "fr_FR",
    url: "https://cv.carrotpixel.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV - Développeur Fullstack | Next.js, React, Node.js, TypeScript",
    description:
      "CV développeur fullstack spécialisé en Next.js, React, Node.js et TypeScript. Expertise en développement web moderne SAAS et applications performantes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cv.carrotpixel.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
