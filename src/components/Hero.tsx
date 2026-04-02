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
          You're Not Addicted to Food. <br className="hidden md:block" />
          <span className="italic">Your Brain Is Asking for Something.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-12 max-w-3xl mx-auto">
          Neuroscience shows that when you reach for food and you're not hungry, your brain is signaling an unmet need — stress relief, comfort, stimulation. The free quiz identifies exactly what your brain is asking for and how to give it what it actually needs.
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
            Discover what your brain is really asking for — backed by research.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
