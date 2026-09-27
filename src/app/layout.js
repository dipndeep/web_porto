import { Plus_Jakarta_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "Ganendra Pradipa — Data Analyst & ML Explorer",
  description:
    "Data-focused professional specializing in applied Machine Learning, predictive simulations, and data storytelling.",
  keywords: [
    "Data Analyst",
    "Machine Learning",
    "Data Science",
    "Monte Carlo Simulation",
    "Computer Vision",
    "Ganendra Pradipa",
    "Portfolio",
  ],
  authors: [{ name: "Ganendra Pradipa" }],
  openGraph: {
    title: "Ganendra Pradipa — Data Analyst & ML Explorer",
    description:
      "Transforming complex datasets and predictive models into clear, decisive narratives.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
