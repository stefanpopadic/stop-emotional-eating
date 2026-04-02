import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function DietsDontWork() {
  return (
    <section className="bg-warm-linen py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Real Problem
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            Why Diets Are Making Your Problem Worse
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black text-center max-w-2xl mx-auto">
            <p>
              Diets assume your problem is food. So they give you food rules. But if the problem was just food, diets would have worked for you years ago.
            </p>
            <p>
              Diets rely on restriction. Restriction increases cortisol (stress). Cortisol triggers emotional eating. <strong>By dieting, you are literally pouring gasoline on the fire.</strong>
            </p>
            <p>
              You cannot fix a psychological and chemical response with a meal plan. You have to treat the root cause.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="my-16 bg-oat rounded-2xl p-8 md:p-12 border border-sand/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-terracotta"></div>
            <h3 className="font-serif font-semibold text-2xl md:text-3xl text-deep-sage mb-6">
              The Restriction-Binge Cycle
            </h3>
            <ol className="space-y-6 font-sans text-lg md:text-xl text-soft-black list-decimal list-inside marker:text-terracotta marker:font-bold">
              <li>You feel out of control, so you start a strict diet.</li>
              <li>The restriction increases cortisol and hunger hormones.</li>
              <li>A stressful event triggers your emotional eating pathway.</li>
              <li>You break the diet, leading to intense guilt.</li>
              <li>The guilt creates more stress, triggering more eating.</li>
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black text-center mt-12">
            <p>
              <strong>To stop the cycle, you must identify your specific emotional eating type.</strong>
            </p>
            <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-10 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-lg mt-4">
              Take the Quiz to Find Your Root Cause
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
