import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Lightbox from "@/components/Lightbox";

import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Pillars from "@/components/sections/Pillars";
import Academics from "@/components/sections/Academics";
import Campus from "@/components/sections/Campus";
import Life from "@/components/sections/Life";
import Leaders from "@/components/sections/Leaders";
import Admissions from "@/components/sections/Admissions";
import News from "@/components/sections/News";
import Voices from "@/components/sections/Voices";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <MobileMenu />

      <main id="main">
        <span id="top"></span>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Pillars />
        <Academics />
        <Campus />
        <Life />
        <Leaders />
        <Admissions />
        <News />
        <Voices />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
      <Lightbox />
    </>
  );
}
