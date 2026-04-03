import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function FinalCTA() {
  return (
    <section id="quiz" className="bg-deep-sage py-20 md:py-32 px-6 md:px-12 text-warm-linen">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            Next Step
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl mb-10 text-balance leading-tight">
            2 Minutes. 8 Questions. Your Answer.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 mb-16 max-w-2xl mx-auto">
            The quiz identifies your specific pattern — which trigger fires, which brain chemistry drives it, and the one thing you can do this week to interrupt it. Free. No diet advice.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col items-center">
          <Link
            to="/quiz"
            className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-xl mb-8 cursor-pointer"
          >
            Take the Free Quiz
          </Link>
          <p className="font-sans text-base text-sand uppercase tracking-wider">
            Science-backed · Personalized results · 100% free
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
