import { FadeIn } from './FadeIn';

export function FeaturedIn() {
  return (
    <section className="py-12 bg-oat border-y border-sand/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-deep-sage/70 mb-8 font-semibold">
            Trusted by 50,000+ readers & featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <span className="font-serif text-2xl font-bold">The Wellness Journal</span>
            <span className="font-sans text-xl font-black tracking-tighter">MINDFUL</span>
            <span className="font-serif text-2xl italic">Psychology Today</span>
            <span className="font-sans text-xl font-bold tracking-widest">BALANCE</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
