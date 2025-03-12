import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "CV - Développeur Fullstack",
  description:
    "CV de développeur fullstack spécialisé en Next.js, React, Node.js et TypeScript",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @media print {
            body {
              background: white !important;
              color: black !important;
              margin: 0 !important;
              padding: 0 !important;
              font-size: 11pt !important;
              width: 100% !important;
              height: 100% !important;
            }
            
            /* Masquer tous les éléments sauf le CV */
            .min-h-screen {
              display: block !important;
              height: auto !important;
              padding: 0 !important;
              margin: 0 !important;
              background: none !important;
              width: 100% !important;
            }
            
            /* Masquer les éléments d'interface */
            .print-hidden {
              display: none !important;
            }
            
            /* Optimiser le conteneur du CV */
            .max-w-6xl {
              max-width: 100% !important;
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            
            /* Optimiser le CV lui-même */
            .resume-content {
              border: none !important;
              box-shadow: none !important;
              border-radius: 0 !important;
              margin: 0 !important;
              width: 100% !important;
              height: 100% !important;
              max-height: 100% !important;
              overflow: visible !important;
            }
            
            /* Ajuster les espacements pour l'impression */
            .p-3 {
              padding: 0.5rem !important;
            }
            
            .p-2 {
              padding: 0.3rem 0.5rem !important;
            }
            
            .space-y-4 > * + * {
              margin-top: 0.5rem !important;
            }
            
            .space-y-7 > * + * {
              margin-top: 0.5rem !important;
            }
            
            .space-y-1\\.5 > * + * {
              margin-top: 0.25rem !important;
            }
            
            .mb-4 {
              margin-bottom: 0.5rem !important;
            }
            
            .mb-3 {
              margin-bottom: 0.4rem !important;
            }
            
            .mb-2 {
              margin-bottom: 0.3rem !important;
            }
            
            .mt-4 {
              margin-top: 0.5rem !important;
            }
            
            .mt-3 {
              margin-top: 0.4rem !important;
            }
            
            .mt-2 {
              margin-top: 0.3rem !important;
            }
            
            .pt-4 {
              padding-top: 0.5rem !important;
            }
            
            .pt-3 {
              padding-top: 0.4rem !important;
            }
            
            .py-0\\.5 {
              padding-top: 0.15rem !important;
              padding-bottom: 0.15rem !important;
            }
            
            .px-1\\.5 {
              padding-left: 0.25rem !important;
              padding-right: 0.25rem !important;
            }
            
            .gap-1\\.5 {
              gap: 0.25rem !important;
            }
            
            /* Ajuster la taille des textes pour l'impression */
            .text-sm, .print\\:text-xs {
              font-size: 9pt !important;
              line-height: 1.3 !important;
            }
            
            .text-base {
              font-size: 10pt !important;
              line-height: 1.3 !important;
            }
            
            .text-2xl {
              font-size: 16pt !important;
              line-height: 1.2 !important;
              margin-bottom: 0.2rem !important;
            }
            
            .text-xs {
              font-size: 8pt !important;
              line-height: 1.2 !important;
            }
            
            /* Force background colors for printing */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            /* Ensure all text is visible */
            p, h1, h2, h3, span, li {
              color: black !important;
            }
            
            /* Style for section headers in print */
            h2.bg-slate-100 {
              background-color: #f1f5f9 !important;
              border-bottom: 2px solid #10b981 !important;
              border-radius: 4px !important;
              padding: 0.25rem 0.5rem !important;
              margin-bottom: 0.4rem !important;
              font-size: 12pt !important;
            }
            
            /* Style for experience titles in print */
            h3.border-l-4 {
              border-left: 3px solid #10b981 !important;
              padding-left: 0.4rem !important;
              padding-top: 0.1rem !important;
              padding-bottom: 0.1rem !important;
              font-size: 11pt !important;
            }
            
            /* Style for subsection headers in print */
            h3.border-b-2 {
              border-bottom: 1px solid rgba(16, 185, 129, 0.3) !important;
              padding-bottom: 0.2rem !important;
              margin-bottom: 0.3rem !important;
              font-size: 11pt !important;
            }
            
            /* Style for checkmark icons in print */
            svg.text-emerald-500, 
            svg.text-emerald-600, 
            svg.text-emerald-400 {
              color: #059669 !important;
              width: 12px !important;
              height: 12px !important;
              margin-top: 3px !important;
              flex-shrink: 0 !important;
            }
            
            /* Style for language level dots in print */
            .h-2.w-2.rounded-full.bg-emerald-500 {
              background-color: #059669 !important;
              width: 6px !important;
              height: 6px !important;
            }
            
            .h-2.w-2.rounded-full.bg-slate-200 {
              background-color: #e2e8f0 !important;
              width: 6px !important;
              height: 6px !important;
            }
            
            /* QR code styles for print */
            .dark\\:invert {
              filter: none !important;
            }
            
            /* Adjust badge colors for better printing */
            .badge {
              border: 1px solid #ddd !important;
              background-color: #f8f8f8 !important;
              color: #333 !important;
              font-size: 8pt !important;
              padding: 0.1rem 0.2rem !important;
              height: auto !important;
              margin: 0.1rem !important;
            }
            
            /* Force desktop layout for printing */
            .flex-col {
              flex-direction: row !important;
            }
            
            .md\\:flex-row {
              flex-direction: row !important;
            }
            
            .md\\:w-1\\/4 {
              width: 25% !important;
              padding-right: 0.5rem !important;
            }
            
            .md\\:w-3\\/4 {
              width: 75% !important;
              padding-left: 0.5rem !important;
            }
            
            /* Ensure border is visible in print */
            .border-r {
              border-right-width: 1px !important;
              border-right-style: solid !important;
              border-right-color: #e2e8f0 !important;
            }
            
            /* Ajuster la taille des avatars */
            .h-24.w-24 {
              height: 5rem !important;
              width: 5rem !important;
              margin-bottom: 0.3rem !important;
            }
            
            /* Ajuster la taille des boutons sociaux */
            .h-7.w-7 {
              height: 1.5rem !important;
              width: 1.5rem !important;
            }
            
            /* Ajuster l'espacement des en-têtes */
            .border-b {
              border-bottom-width: 1px !important;
              padding-bottom: 0.2rem !important;
              margin-bottom: 0.3rem !important;
            }
            
            /* Ajuster l'espacement des bordures */
            .border-t {
              border-top-width: 1px !important;
              padding-top: 0.3rem !important;
              margin-top: 0.3rem !important;
            }
            
            /* Ensure proper margins */
            @page {
              margin: 1cm;
              size: A4 portrait;
            }
            
            /* Prevent page breaks inside elements */
            .md\\:w-1\\/4, .md\\:w-3\\/4 {
              break-inside: avoid;
            }
            
            /* Optimiser les icônes */
            .mr-1\\.5 {
              margin-right: 0.3rem !important;
            }
            
            .size-4 {
              width: 16px !important;
              height: 16px !important;
              flex-shrink: 0 !important;
            }
            
            .size-3\\.5 {
              width: 0.9rem !important;
              height: 0.9rem !important;
            }
            
            /* Ajuster l'espacement des listes */
            .pl-2 {
              padding-left: 0.4rem !important;
            }
            
            /* Assurer que les textes longs se coupent correctement */
            .break-words {
              word-break: break-word !important;
              overflow-wrap: break-word !important;
              max-width: 100% !important;
            }
            
            /* Ajuster la taille des boutons sociaux */
            .h-8.w-8 {
              height: 32px !important;
              width: 32px !important;
            }
          }
        `}</style>
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
