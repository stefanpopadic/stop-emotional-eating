import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const types = [
  {
    name: "The Stress Reactor",
    desc: "Eats under pressure. Grabs whatever's fastest. Barely tastes it. The urge hits hardest at 5:30 PM when cortisol peaks and self-control bottoms out."
  },
  {
    name: "The Comfort Seeker",
    desc: "Turns to food to soothe sadness, loneliness, or anxiety. Reaches for warm, sweet, familiar foods. Eats at night, alone, when the feelings get too loud."
  },
  {
    name: "The Dopamine Chaser",
    desc: "Grazes all day. Opens the fridge, stares, doesn't know what they want. Eats not from hunger but from having nothing better to do. The brain is bored."
  },
  {
    name: "The Emotional Avoider",
    desc: "Uses food to not feel. Eats past full, past comfort, past reason — because stopping means sitting with whatever they're avoiding. The eating is the escape."
  }
];

export function TypesPreview() {
  return (
    <section className="bg-oat py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Solution
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            There Are 4 Types of Emotional Eaters. Which One Are You?
          </h2>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-16 max-w-2xl mx-auto">
            <p>
              You can't fix a problem you don't understand. The reason you haven't been able to stop is that you don't know your specific trigger profile. 
            </p>
            <p>
              Once you know your type, you can stop fighting your biology and start rewiring the exact trigger that's keeping you stuck.
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
            The free assessment takes 2 minutes. You'll get your type, your primary trigger, and the exact first step to break the cycle.
          </p>
          <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-lg w-full md:w-auto justify-center">
            Take the Free Quiz Now
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
