import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import Pillars from "@/components/sections/Pillars";
import Leaders from "@/components/sections/Leaders";
import News from "@/components/sections/News";
import Voices from "@/components/sections/Voices";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <main id="main">
      <span id="top"></span>
      <Hero />
      <Marquee />
      <Stats />
      <Pillars />
      <Leaders aboutCtaHref="/about" />
      <News />
      <Voices />
      <Faq />
    </main>
  );
}
