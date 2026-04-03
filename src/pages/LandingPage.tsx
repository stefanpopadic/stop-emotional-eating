import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Recognition } from '../components/Recognition';
import { Science } from '../components/Science';
import { Stats } from '../components/Stats';
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
        <Recognition />
        <Science />
        <Stats />
        <TypesPreview />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
