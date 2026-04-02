import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <FadeIn>
        <span className="inline-block font-sans font-bold text-sm uppercase tracking-widest text-sand mb-8">
          Backed by 18 peer-reviewed studies
        </span>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-deep-sage mb-8 text-balance mx-auto">
          You Can't Stop Eating Because <br className="hidden md:block" />
          <span className="italic">Your Brain Won't Let You.</span>
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <p className="font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-12 max-w-3xl mx-auto">
          <strong>It’s not your fault.</strong> Science shows emotional eating is a hardwired biological response to stress. Take the free quiz to find out exactly what's triggering your urge to eat—and how to stop.
        </p>
      </FadeIn>
      
      <FadeIn delay={0.3}>
        <div className="flex flex-col items-center">
          <Link 
            to="/quiz" 
            className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-10 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Take the Free 2-Minute Quiz
          </Link>
          <p className="mt-6 font-sans text-base text-sand">
            Find out what's actually driving your eating habits — and what to do about it.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
