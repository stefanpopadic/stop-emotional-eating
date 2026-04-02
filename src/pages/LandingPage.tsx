import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { FeaturedIn } from '../components/FeaturedIn';
import { Recognition } from '../components/Recognition';
import { Science } from '../components/Science';
import { LoopDiagram } from '../components/LoopDiagram';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { DietsDontWork } from '../components/DietsDontWork';
import { TypesPreview } from '../components/TypesPreview';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { StickyMobileBar } from '../components/StickyMobileBar';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-warm-linen relative">
      <Navigation />
      <main>
        <Hero />
        <FeaturedIn />
        <Recognition />
        <Science />
        <LoopDiagram />
        <Stats />
        <Testimonials />
        <DietsDontWork />
        <TypesPreview />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
