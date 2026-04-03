import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const types = [
  {
    name: "The Stress Soother",
    desc: "Pressure builds all day. By evening, your cortisol is maxed out and your willpower is gone. You eat fast, barely taste it. The food isn't about flavor — it's your nervous system trying to come down."
  },
  {
    name: "The Comfort Seeker",
    desc: "When loneliness, sadness, or emotional emptiness hits, food becomes warmth. You reach for sweet, familiar things — not because you're hungry, but because your brain learned that sugar raises serotonin faster than anything else."
  },
  {
    name: "The Autopilot Eater",
    desc: "You eat before you realize you're doing it. The bag is half-gone before you notice. This isn't a willpower problem — it's a habit loop so deeply wired that it skips your conscious mind entirely."
  },
  {
    name: "The Perfectionist Restrictor",
    desc: "You control your eating all day — perfectly. Then something cracks. The restriction itself raises cortisol, and when the dam breaks, your brain overcorrects hard. The discipline IS the trigger."
  }
];

export function TypesPreview() {
  return (
    <section className="bg-oat py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            4 Patterns
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            There Are 4 Emotional Eating Patterns. Which One Runs Yours?
          </h2>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-16 max-w-2xl mx-auto">
            <p>
              Each pattern has a different trigger, different brain chemistry, and a different fix. The quiz identifies which one you have.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {types.map((type, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-warm-linen border border-sand/30 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-sans font-semibold text-2xl text-deep-sage mb-3">
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
          <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-lg w-full md:w-auto justify-center cursor-pointer">
            Which One Are You? Take the Free Quiz
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
