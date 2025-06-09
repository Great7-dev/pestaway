import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, servicesRef, aboutRef, contactRef }}
      />

      <main>
        <section ref={homeRef} className="pt-20">
          <Hero scrollToContact={() => scrollToSection(contactRef)} />
        </section>

        <section ref={aboutRef} className="scroll-mt-24">
          <About />
        </section>

        <section ref={servicesRef} className="scroll-mt-24">
          <Services scrollToContact={() => scrollToSection(contactRef)} />
        </section>

        <Reviews />

        <FAQ />

        <section ref={contactRef} className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
