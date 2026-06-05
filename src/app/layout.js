import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Ganendra | Portfolio",
  description:
    "Personal portfolio of a data-focused professional specializing in Data Analysis, Machine Learning, Data Mining, and Data Science. Transforming raw data into actionable insights.",
  keywords: [
    "Data Analyst",
    "Machine Learning",
    "Data Science",
    "Portfolio",
    "Python",
    "Data Mining",
  ],
  authors: [{ name: "Ganendra" }],
  openGraph: {
    title: "Portfolio | Data Enthusiast & ML Explorer",
    description:
      "Transforming raw data into actionable insights through analysis, machine learning, and data-driven storytelling.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <body>
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
