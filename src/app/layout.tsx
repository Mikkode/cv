import "./globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mickaël WARIN - Développeur Fullstack",
  description:
    "CV développeur fullstack spécialisé en Next.js, React, Node.js et TypeScript. Expertise en développement web moderne SAAS et applications performantes.",
  keywords: [
    "développeur fullstack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "développeur web",
    "CV",
    "portfolio",
    "Mickaël WARIN",
  ],
  authors: [{ name: "Mickaël WARIN" }],
  creator: "Mickaël WARIN",
  publisher: "Mickaël WARIN",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.variable} font-sans`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
