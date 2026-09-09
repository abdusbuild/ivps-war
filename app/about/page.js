import About from "@/components/sections/About";
import OurStory from "@/components/sections/OurStory";
import Leaders from "@/components/sections/Leaders";

export const metadata = {
  title: "About Us",
  description:
    "About Indo Valley Public School, War (Aurangabad), Bihar — our approach to teaching, and messages from the Director and Principal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <About />
      <OurStory />
      <Leaders />
    </main>
  );
}
