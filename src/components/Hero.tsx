import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <FadeIn>
        <span className="inline-block font-sans font-bold text-sm uppercase tracking-widest text-sand mb-8">
          Based on peer-reviewed neuroscience
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-deep-sage mb-8 text-balance mx-auto">
          You're not hungry. <br className="hidden md:block" />
          <span className="italic">So why can't you stop eating?</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-12 max-w-3xl mx-auto">
          Every night, millions of people open the fridge knowing they're not hungry — and eat anyway. It's not a discipline problem. It's a brain chemistry problem, and there's a specific reason yours does it. The 2-minute quiz tells you exactly what's going on.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-col items-center">
          <Link
            to="/quiz"
            className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-10 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Take the Free 2-Minute Quiz
          </Link>
          <p className="mt-6 font-sans text-base text-sand">
            Find out what's really driving your cravings — backed by research.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
