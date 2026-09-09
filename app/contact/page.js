import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Indo Valley Public School, Near DBGB Bank, War, Aurangabad, Bihar — phone, email, office hours and the admission enquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <Contact />
    </main>
  );
}
