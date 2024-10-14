import CallToAction from "./components/call-to-action";
import FAQ from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Plans from "./components/plans";
import SubHero from "./components/sub-hero";

export default function LandingPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <SubHero />
        <Features />
        <Plans />
        <CallToAction />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
