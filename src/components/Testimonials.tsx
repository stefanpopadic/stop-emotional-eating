import { FadeIn } from './FadeIn';

export function Testimonials() {
  return (
    <section className="bg-oat py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            Proof
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-6 text-balance leading-tight mx-auto">
            What People Say After Taking the Quiz
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <FadeIn delay={0.4}>
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
