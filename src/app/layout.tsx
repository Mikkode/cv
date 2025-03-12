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
            }
            
            /* Masquer tous les éléments sauf le CV */
            .min-h-screen {
              display: block !important;
              height: auto !important;
              padding: 0 !important;
              margin: 0 !important;
              background: none !important;
            }
            
            /* Masquer les éléments d'interface */
            .print-hidden {
              display: none !important;
            }
            
            /* Optimiser le conteneur du CV */
            .max-w-6xl {
              max-width: 100% !important;
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
            }
            
            /* Style for experience titles in print */
            h3.border-l-4 {
              border-left: 4px solid #10b981 !important;
            }
            
            /* Style for subsection headers in print */
            h3.border-b-2 {
              border-bottom: 2px solid rgba(16, 185, 129, 0.3) !important;
            }
            
            /* Style for checkmark icons in print */
            svg.text-emerald-500, 
            svg.text-emerald-600, 
            svg.text-emerald-400 {
              color: #059669 !important;
            }
            
            /* Style for language level dots in print */
            .h-2.w-2.rounded-full.bg-emerald-500 {
              background-color: #059669 !important;
            }
            
            .h-2.w-2.rounded-full.bg-slate-200 {
              background-color: #e2e8f0 !important;
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
            }
            
            .md\\:w-3\\/4 {
              width: 75% !important;
            }
            
            /* Ensure border is visible in print */
            .border-r {
              border-right-width: 1px !important;
              border-right-style: solid !important;
              border-right-color: #e2e8f0 !important;
            }
            
            /* Add page breaks where needed */
            .page-break-after {
              page-break-after: always;
            }
            
            /* Ensure proper margins */
            @page {
              margin: 1.5cm;
              size: A4 portrait;
            }
            
            /* Improve line spacing for better readability */
            .text-sm {
              line-height: 1.5 !important;
            }
            
            /* Improve spacing between sections */
            .space-y-4 > * + * {
              margin-top: 1rem !important;
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
