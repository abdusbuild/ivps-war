import PrivacyPolicy from "@/components/sections/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Indo Valley Public School, War (Aurangabad), Bihar, collects and uses information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main">
      <PrivacyPolicy />
    </main>
  );
}
