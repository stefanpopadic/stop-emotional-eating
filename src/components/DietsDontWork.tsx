import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function DietsDontWork() {
  return (
    <section className="bg-warm-linen py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            Why Diets Fail
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            Diets Treat Food. The Problem Is Your Brain Chemistry.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black text-center max-w-2xl mx-auto">
            <p>
              Diets assume your problem is what you eat. So they give you food rules. But if the problem was food, diets would have worked for you years ago.
            </p>
            <p>
              Research shows restriction increases cortisol. Cortisol activates your brain's survival mode. Your brain takes over and demands food. <strong>Dieting literally triggers the thing you're trying to stop.</strong>
            </p>
            <p>
              You can't outsmart your own brain with a meal plan. You have to understand why it's doing this in the first place.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="my-16 bg-oat rounded-2xl p-8 md:p-12 border border-sand/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-terracotta"></div>
            <h3 className="font-sans font-semibold text-2xl md:text-3xl text-deep-sage mb-6">
              The Restriction → Binge Cycle (Neuroscience)
            </h3>
            <ol className="space-y-6 font-sans text-lg md:text-xl text-soft-black list-decimal list-inside marker:text-terracotta marker:font-bold">
              <li>You restrict food → cortisol and ghrelin (hunger hormone) spike.</li>
              <li>Your prefrontal cortex loses the energy to maintain control.</li>
              <li>A stress trigger activates your brain's survival pathway.</li>
              <li>You eat — your brain gets the dopamine hit it demanded.</li>
              <li>Guilt creates new stress → the cycle repeats, stronger.</li>
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black text-center mt-12">
            <p>
              <strong>To break the cycle, you need to know why your brain is doing this.</strong> The quiz tells you in 2 minutes.
            </p>
            <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-10 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-lg mt-4 cursor-pointer">
              Take the Free Quiz
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
