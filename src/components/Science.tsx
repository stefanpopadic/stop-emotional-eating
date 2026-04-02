import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';

const evidenceCards = [
  {
    title: "1. Cortisol Hijacks Your Decision-Making",
    body: "Under stress, cortisol floods your system and suppresses your prefrontal cortex — the part of your brain responsible for planning and self-control. Your brain literally switches from 'thinking mode' to 'survival mode.'",
    source: "Psychoneuroendocrinology, 2021"
  },
  {
    title: "2. Your Brain Takes Over",
    body: "In survival mode, your brain bypasses your decision-making and demands the fastest fix available. Food delivers it in minutes. You're not choosing to eat — your brain is choosing for you.",
    source: "Journal of Psychosomatic Research, 2023"
  },
  {
    title: "3. Ghrelin and Leptin Get Disrupted",
    body: "Chronic stress dysregulates your hunger hormones. Ghrelin (the hunger hormone) spikes. Leptin (the fullness hormone) drops. Your body physically signals hunger even when you've eaten enough. This is measurable biology, not a lack of discipline.",
    source: "British Journal of Psychology, 2025"
  },
  {
    title: "4. The Guilt Loop Reinforces the Pattern",
    body: "After eating, guilt and shame create a new stress response — which triggers the exact same cycle again. The brain learns: stress → eat → brief relief. Each repetition strengthens the neural pathway. Understanding this is the first step to rewiring it.",
    source: "International Journal of Eating Disorders, 2023"
  }
];

export function Science() {
  return (
    <section className="bg-oat py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="mb-16 text-center">
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Neuroscience
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight mx-auto">
            What's Actually Happening in Your Brain
          </h2>
          <div className="space-y-8 font-sans text-xl md:text-2xl leading-relaxed text-soft-black max-w-2xl mx-auto">
            <p>
              You're not addicted to food. Your brain is simply running a biological sequence — and it's doing it for a reason.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {evidenceCards.map((card, index) => (
            <FadeIn key={index} delay={0.1}>
              <div className="bg-warm-linen rounded-2xl p-8 md:p-10 shadow-sm border border-sand/20">
                <h4 className="font-sans font-semibold text-2xl md:text-3xl text-soft-black mb-6 leading-snug">
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
            Once you know why your brain is doing this, you can actually stop it.
          </p>
          <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-lg px-8 py-4 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer">
            Take the Free Quiz
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
