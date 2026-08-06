import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechMarquee } from "./components/TechMarquee";
import {
  About,
  ClubCTA,
  Differentials,
  FAQ,
  Partners,
  Portfolio,
  Process,
  Services,
  Stats,
  Testimonials,
} from "./components/Sections";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Portfolio />
        <About />
        <Services />
        <Differentials />
        <Stats />
        <Process />

        <Testimonials />
        <Partners />
        <ClubCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

