import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const evidenceCards = [
  {
    title: "1. Stress Shuts Down Your Logic",
    body: "When you're stressed or exhausted, your body floods with cortisol. This physically shuts down your prefrontal cortex (the logical part of your brain) and activates your survival center.",
    source: "Psychoneuroendocrinology, 2021"
  },
  {
    title: "2. Your Brain Demands Fast Relief",
    body: "In this survival state, your brain demands fast, high-calorie energy to feel safe. You aren't 'giving in' to an urge. You are fighting a chemical survival response.",
    source: "Journal of Psychosomatic Research, 2023"
  },
  {
    title: "3. Biology Wins Every Time",
    body: "Willpower is no match for cortisol and ghrelin. The connection between emotions and eating is one of the most replicated findings in nutritional psychology. It's not a character flaw. It's biology.",
    source: "British Journal of Psychology, 2025"
  },
  {
    title: "4. Guilt Is The Accelerator",
    body: "The shame you feel after eating doesn't stop the cycle—it fuels it. Guilt creates more stress, which triggers more urges to eat. To stop, you have to rewire the trigger itself.",
    source: "International Journal of Eating Disorders, 2023"
  }
];

export function Science() {
  return (
    <section className="bg-oat py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="mb-16 text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Science
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            Why It Is Literally Not Your Fault
          </h2>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black max-w-2xl mx-auto">
            <p>
              For years, the diet industry has lied to you. They told you that if you just had more discipline, you could stop overeating. 
            </p>
            <p>
              <strong>Science proves them wrong.</strong> Emotional eating isn't a lack of willpower. It is a hardwired, chemical response in your brain.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {evidenceCards.map((card, index) => (
            <FadeIn key={index} delay={0.1}>
              <div className="bg-warm-linen rounded-2xl p-8 md:p-10 shadow-sm border border-sand/20">
                <h4 className="font-serif font-semibold text-2xl md:text-3xl text-soft-black mb-6 leading-snug">
                  {card.title}
                </h4>
                <p className="font-sans text-lg md:text-xl leading-relaxed text-soft-black mb-6">
                  {card.body}
                </p>
                <p className="font-sans text-sm font-medium uppercase tracking-wider text-sand">
                  Source: {card.source}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.3} className="mt-16 text-center">
          <p className="font-sans text-xl md:text-2xl font-medium text-soft-black mb-8">
            You can't beat biology with a diet. You have to understand your specific trigger.
          </p>
          <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-lg px-8 py-4 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-md">
            Find Your Trigger in the Free Quiz
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
