import Admissions from "@/components/sections/Admissions";
import AdmissionsInfo from "@/components/sections/AdmissionsInfo";

export const metadata = {
  title: "Admissions",
  description:
    "Admissions 2026-27 at Indo Valley Public School — four steps from enquiry to your child's first day, Nursery to Class X.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <main id="main">
      <Admissions />
      <AdmissionsInfo />
    </main>
  );
}
