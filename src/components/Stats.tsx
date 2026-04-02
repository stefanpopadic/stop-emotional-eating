import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const stats = [
  {
    number: "53M",
    text: "Americans experience this neurochemical pattern regularly. 1 in 5 adults. Their brains have learned to use food as the default stress response.",
    source: "NIH National Study"
  },
  {
    number: "44.9%",
    text: "of adults who struggle with weight have this brain pattern active. Across 18 studies and 21,237 participants. The connection between emotions and eating is one of the most replicated findings in neuroscience.",
    source: "British Journal of Psychology, 2025"
  },
  {
    number: "70%",
    text: "of emotional eaters are women. Research shows women process cortisol differently and are more likely to develop food-based coping pathways — not because of weakness, but because of neurochemistry.",
    source: "NIH National Study"
  },
  {
    number: "5:30 PM",
    text: "Peak time for stress-driven eating. Cortisol accumulates throughout the day and peaks in late afternoon. Self-regulation is at its lowest. The second peak: 11 PM, when the brain seeks one final dopamine hit before sleep.",
    source: "Journal of Psychosomatic Research, 2023"
  }
];

export function Stats() {
  return (
    <section className="bg-deep-sage py-20 md:py-32 px-6 md:px-12 text-warm-linen">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Data
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl mb-10 text-balance leading-tight">
            The Numbers Behind the Pattern
          </h2>
          <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 mb-16">
            This is one of the most studied behavioral patterns in neuroscience. The data is clear — and it explains why willpower alone never works.
          </p>
        </FadeIn>

        <div className="space-y-12 mb-16">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border-t border-white/20 pt-8">
                <div className="font-serif font-bold text-7xl md:text-8xl lg:text-9xl text-oat md:w-1/3 flex-shrink-0">
                  {stat.number}
                </div>
                <div className="md:w-2/3 md:pt-4 lg:pt-6">
                  <p className="font-sans text-xl leading-relaxed opacity-90 mb-4">
                    {stat.text}
                  </p>
                  <p className="font-sans text-sm uppercase tracking-wider text-sand">
                    Source: {stat.source}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="text-center mt-20">
          <Link to="/quiz" className="inline-flex bg-sand text-deep-sage font-sans font-medium text-xl px-10 py-5 rounded-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
            Find Your Brain Pattern — Free Quiz
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
