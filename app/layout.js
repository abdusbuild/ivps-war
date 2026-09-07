import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ClientInteractions from "@/components/ClientInteractions";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--ff-display",
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--ff-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://indovalleypublicschool.example"),
  title: "Indo Valley Public School — CBSE School in War, Aurangabad, Bihar",
  description:
    "Indo Valley Public School, War (Aurangabad), Bihar. An English-medium CBSE school from Nursery to Class X, managed by Indo Valley Foundation Trust. Admissions open for 2026-27.",
  openGraph: {
    title: "Indo Valley Public School — Where Curiosity Grows Roots",
    description:
      "An English-medium CBSE school in War, Aurangabad, Bihar. Nursery to Class X, planned up to 10+2.",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export const viewport = {
  themeColor: "#0D2A5C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${jakarta.variable}`}>
        <Preloader />
        <CustomCursor />
        <div className="grain" aria-hidden="true" />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <ClientInteractions />
      </body>
    </html>
  );
}
