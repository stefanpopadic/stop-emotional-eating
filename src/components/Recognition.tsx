import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const quotes = [
  "I eat perfectly all day and then demolish an entire bag of chips at 9 PM.",
  "I literally ordered pizza while watching a weight loss video.",
  "I know I'm not hungry. But I can't stop.",
  "I eat my feelings and then feel worse about eating my feelings.",
  "Every Monday is a fresh start... until Tuesday.",
  "I'm not eating to stop hunger. I'm eating to stop feeling."
];

export function Recognition() {
  return (
    <section className="bg-deep-sage py-20 md:py-32 px-6 md:px-12 text-warm-linen">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-center mb-16 text-balance mx-auto">
            Does This Sound Like You?
          </h2>
        </FadeIn>

        <div className="space-y-8 mb-20">
          {quotes.map((quote, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="border-l-4 border-sand pl-6 md:pl-8 py-2">
                <p className="font-serif italic text-2xl md:text-4xl leading-snug text-oat">
                  "{quote}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="space-y-8 text-center">
            <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              If any of this sounds familiar, stop blaming yourself. You don't lack discipline. Your brain is simply using food to solve an emotional problem.
            </p>
            <p className="font-sans text-xl md:text-2xl leading-relaxed font-medium text-oat max-w-2xl mx-auto">
              To break the cycle, you need to know exactly which problem your brain is trying to solve. Is it stress? Boredom? Avoidance?
            </p>
            
            <div className="pt-8 text-center">
              <Link to="/quiz" className="font-sans text-lg font-medium text-sand hover:text-white transition-colors underline underline-offset-8 decoration-sand/50 hover:decoration-white">
                Find your exact trigger in the free 2-minute quiz →
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
