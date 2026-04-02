import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const types = [
  {
    name: "The Stress Reactor",
    desc: "Your brain uses food to lower cortisol fast. The urge hits hardest at 5:30 PM when stress hormones peak. You grab whatever's fastest — barely tasting it — because your brain needs relief now."
  },
  {
    name: "The Comfort Seeker",
    desc: "Your brain has mapped food to emotional safety. When sadness, loneliness, or anxiety spike, it reaches for warm, familiar foods — the same way it would reach for a hug. The eating happens at night, alone."
  },
  {
    name: "The Dopamine Chaser",
    desc: "Your brain is understimulated. It's not hunger — it's boredom. You open the fridge, scroll the apps, graze all day. Your brain is chasing dopamine and food is the lowest-effort source available."
  },
  {
    name: "The Emotional Avoider",
    desc: "Your brain uses food to suppress feelings. You eat past full, past comfort — because stopping means sitting with whatever you're avoiding. The eating isn't the problem. It's the escape mechanism."
  }
];

export function TypesPreview() {
  return (
    <section className="bg-oat py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            4 Brain Patterns
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            Your Brain Runs One of These 4 Patterns. Which One?
          </h2>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-16 max-w-2xl mx-auto">
            <p>
              Each pattern has a different neurochemical trigger — stress, comfort-seeking, understimulation, or avoidance. Knowing yours changes everything because the solution is different for each one.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {types.map((type, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-warm-linen border border-sand/30 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif font-semibold text-2xl text-deep-sage mb-3">
                  {type.name}
                </h3>
                <p className="font-sans text-lg text-soft-black leading-relaxed">
                  {type.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="text-center">
          <p className="font-sans text-xl md:text-2xl font-medium text-soft-black mb-8">
            The free quiz takes 2 minutes. You'll get your brain pattern, your primary trigger, and the specific first step to interrupt the cycle.
          </p>
          <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-lg w-full md:w-auto justify-center cursor-pointer">
            Take the Free Quiz Now
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
