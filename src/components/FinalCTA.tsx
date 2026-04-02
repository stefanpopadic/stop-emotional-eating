import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function FinalCTA() {
  return (
    <section id="quiz" className="bg-deep-sage py-20 md:py-32 px-6 md:px-12 text-warm-linen">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Next Step
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl mb-10 text-balance leading-tight">
            Stop Guessing. Start Fixing.
          </h2>
        </FadeIn>

        <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed opacity-90 mb-16">
          <FadeIn delay={0.1}>
            <p>
              You've read this far because you know this is your exact problem. You're tired of the cycle. You're tired of the guilt. And you're ready for a real, science-backed solution.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              Take the quiz to find out exactly why you eat when you're not hungry, and get the exact first step to break your specific cycle today.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-medium text-oat">
              10 questions. 2 minutes. Science-backed results. No judgment.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="flex flex-col items-center">
          <Link 
            to="/quiz" 
            className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-xl mb-8"
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
