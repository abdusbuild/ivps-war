import TermsConditions from "@/components/sections/TermsConditions";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Indo Valley Public School website, War (Aurangabad), Bihar.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsConditionsPage() {
  return (
    <main id="main">
      <TermsConditions />
    </main>
  );
}
