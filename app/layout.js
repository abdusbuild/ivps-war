import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import ClientInteractions from "@/components/ClientInteractions";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Lightbox from "@/components/Lightbox";
import WelcomeModal from "@/components/WelcomeModal";
import { SITE_URL, SITE_NAME, ORG } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Indo Valley Public School — CBSE School in War, Aurangabad, Bihar",
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Indo Valley Public School, War (Aurangabad), Bihar. An English-medium CBSE school from Nursery to Class X, managed by Indo Valley Foundation Trust. Admissions open for 2026-27.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: SITE_NAME,
    title: "Indo Valley Public School — Where Curiosity Grows Roots",
    description:
      "An English-medium CBSE school in War, Aurangabad, Bihar. Nursery to Class X, planned up to 10+2.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/indo/school-building.jpeg",
        width: 1280,
        height: 720,
        alt: "Front elevation of the Indo Valley Public School building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indo Valley Public School — Where Curiosity Grows Roots",
    description:
      "An English-medium CBSE school in War, Aurangabad, Bihar. Nursery to Class X, planned up to 10+2.",
    images: ["/indo/school-building.jpeg"],
  },
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: ORG.name,
  legalName: ORG.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}${ORG.logo}`,
  image: `${SITE_URL}/indo/school-building.jpeg`,
  telephone: ORG.telephone,
  email: ORG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ORG.streetAddress,
    addressLocality: ORG.addressLocality,
    addressRegion: ORG.addressRegion,
    postalCode: ORG.postalCode,
    addressCountry: ORG.addressCountry,
  },
};

export const viewport = {
  themeColor: "#0D2A5C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${jakarta.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
        <Preloader />
        <div className="grain" aria-hidden="true" />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <TopBar />
        <Nav />
        <MobileMenu />
        {children}
        <Footer />
        <FloatingActions />
        <Lightbox />
        <WelcomeModal />
        <ClientInteractions />
      </body>
    </html>
  );
}
