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
            Your Brain Is Sending a Signal. Find Out What It Is.
          </h2>
        </FadeIn>

        <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed opacity-90 mb-16">
          <FadeIn delay={0.1}>
            <p>
              You've seen the science. You recognize the pattern. Now identify the specific neurochemical trigger behind your eating — so you can address it directly.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              The quiz maps your answers to peer-reviewed research and tells you exactly which brain pattern you're running — and how to interrupt it.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="font-medium text-oat">
              10 questions. 2 minutes. Science-backed results. Free.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="flex flex-col items-center">
          <Link
            to="/quiz"
            className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-xl mb-8 cursor-pointer"
          >
            Take the Free Quiz
          </Link>
          <p className="font-sans text-base text-sand uppercase tracking-wider">
            Neuroscience-backed · Personalized results · 100% free
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
