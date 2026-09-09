// Central place for the site's public URL and organization details.
// Set NEXT_PUBLIC_SITE_URL in your deploy environment (e.g. Vercel project
// settings) to the real production domain once it's finalized — everything
// that needs the domain (metadata, sitemap, robots.txt, JSON-LD) reads it
// from here, so nothing else needs to change.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.indovalleypublicschool.com";

export const SITE_NAME = "Indo Valley Public School";

export const ORG = {
  name: SITE_NAME,
  legalName: "Indo Valley Foundation Trust",
  streetAddress: "Near DBGB Bank, War",
  addressLocality: "Aurangabad",
  addressRegion: "Bihar",
  postalCode: "824103",
  addressCountry: "IN",
  telephone: ["+91-8002730317", "+91-9711333779"],
  email: "ivps786@gmail.com",
  logo: "/indo/logo.png",
};
