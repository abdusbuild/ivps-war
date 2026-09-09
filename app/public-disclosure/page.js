import PublicDisclosure from "@/components/sections/PublicDisclosure";

export const metadata = {
  title: "Public Disclosure",
  description:
    "Mandatory public disclosure information for Indo Valley Public School, War (Aurangabad), Bihar, as required under CBSE affiliation norms.",
  alternates: { canonical: "/public-disclosure" },
};

export default function PublicDisclosurePage() {
  return (
    <main id="main">
      <PublicDisclosure />
    </main>
  );
}
