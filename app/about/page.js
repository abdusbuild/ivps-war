import About from "@/components/sections/About";
import Leaders from "@/components/sections/Leaders";

export const metadata = {
  title: "About Us — Indo Valley Public School",
  description:
    "About Indo Valley Public School, War (Aurangabad), Bihar — our approach to teaching, and messages from the Director and Principal.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <About />
      <Leaders />
    </main>
  );
}
