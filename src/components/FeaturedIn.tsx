import { FadeIn } from './FadeIn';

export function FeaturedIn() {
  return (
    <section className="py-16 md:py-24 bg-oat border-y border-sand/20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-deep-sage/70 mb-10 font-semibold text-center">
            Real results from real people
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-warm-linen rounded-xl border border-sand/30 overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-sand/20 flex items-center justify-center">
                <span className="font-sans text-sm text-sand uppercase tracking-wider">Screenshot placeholder</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-warm-linen rounded-xl border border-sand/30 overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-sand/20 flex items-center justify-center">
                <span className="font-sans text-sm text-sand uppercase tracking-wider">Screenshot placeholder</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-warm-linen rounded-xl border border-sand/30 overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-sand/20 flex items-center justify-center">
                <span className="font-sans text-sm text-sand uppercase tracking-wider">Screenshot placeholder</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
