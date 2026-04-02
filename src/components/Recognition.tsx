import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const signals = [
  "You eat perfectly all day — then demolish a bag of chips at 9 PM.",
  "You open the fridge knowing you're not hungry. You eat anyway.",
  "After a stressful day, food is the first thing your brain reaches for.",
  "You've tried every diet. They work for a week. Then the pattern returns.",
  "You eat past full — not because you're hungry, but because stopping feels harder.",
  "You know exactly what to eat. You just can't make yourself do it consistently."
];

export function Recognition() {
  return (
    <section className="bg-deep-sage py-20 md:py-32 px-6 md:px-12 text-warm-linen">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-center mb-16 text-balance mx-auto">
            Sound Familiar?
          </h2>
        </FadeIn>

        <div className="space-y-8 mb-20">
          {signals.map((signal, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border-l-4 border-sand pl-6 md:pl-8 py-2">
                <p className="font-serif italic text-2xl md:text-4xl leading-snug text-oat">
                  "{signal}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="space-y-8 text-center">
            <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              This isn't a willpower problem. Your brain has learned to use food to get something it needs. There's a specific reason it does this — and it's different for everyone.
            </p>
            <p className="font-sans text-xl md:text-2xl leading-relaxed font-medium text-oat max-w-2xl mx-auto">
              The quiz shows you exactly what's driving yours.
            </p>

            <div className="pt-8 text-center">
              <Link to="/quiz" className="font-sans text-lg font-medium text-sand hover:text-white transition-colors underline underline-offset-8 decoration-sand/50 hover:decoration-white cursor-pointer">
                Identify your brain's pattern in 2 minutes →
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
