import { Link } from 'react-router-dom';
import { FadeIn } from './FadeIn';
import { ArrowDown } from 'lucide-react';

const loopSteps = [
  { color: 'bg-deep-sage', text: "A trigger fires — stress, loneliness, boredom, exhaustion" },
  { color: 'bg-muted-teal', text: "Your stress hormones spike. Your decision-making brain goes dim." },
  { color: 'bg-sand', text: "A craving appears — sugar for serotonin, salt for grounding, carbs for dopamine" },
  { color: 'bg-terracotta', text: "You eat. Relief lasts about 90 seconds." },
  { color: 'bg-dusty-blush', text: "Guilt and shame hit — creating a new stress response" },
  { color: 'bg-[#b8a090]', text: "The loop restarts. Stronger this time." }
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
            Why Your Brain Reaches for Food When You're Not Hungry
          </h2>
          <p className="font-sans text-xl md:text-2xl leading-relaxed text-soft-black max-w-2xl mx-auto">
            Here's what's actually happening — step by step — every time you eat when you're not physically hungry:
          </p>
        </FadeIn>

        {/* Loop Diagram */}
        <div className="flex flex-col items-center max-w-lg mx-auto mb-20">
          {loopSteps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1} className="w-full flex flex-col items-center">
              <div className={`${step.color} text-white w-full text-center py-5 px-6 rounded-xl shadow-sm font-sans text-lg md:text-xl`}>
                {step.text}
              </div>
              {index < loopSteps.length - 1 && (
                <div className="py-4 text-sand/80">
                  <ArrowDown size={28} strokeWidth={2} />
                </div>
              )}
            </FadeIn>
          ))}
          <FadeIn delay={loopSteps.length * 0.1} className="w-full flex flex-col items-center">
            <div className="py-4 text-sand/80">
              <ArrowDown size={28} strokeWidth={2} />
            </div>
            <div className="font-serif italic text-2xl text-soft-black/70">
              ...the loop repeats, stronger each time
            </div>
          </FadeIn>
        </div>

        {/* Key Insight */}
        <FadeIn delay={0.6}>
          <div className="bg-warm-linen rounded-2xl p-8 md:p-10 shadow-sm border border-sand/20 mb-16">
            <p className="font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-6">
              This loop runs on autopilot. Most people are stuck at step 4 — trying to stop the eating. But the eating is the last domino. <strong>The decision was already made at step 1.</strong>
            </p>
            <p className="font-sans text-lg text-soft-black/70">
              The quiz identifies which trigger and which brain chemistry pattern is running YOUR loop.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <p className="font-sans text-sm text-center text-sand uppercase tracking-wider mb-8">
            Based on affect regulation research (Appetite, 2025; Psychoneuroendocrinology, 2021)
          </p>
        </FadeIn>

        <FadeIn delay={0.8} className="text-center">
          <Link to="/quiz" className="inline-flex bg-terracotta text-white font-sans font-medium text-lg px-8 py-4 rounded-lg hover:bg-terracotta/90 hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer">
            Take the Free Quiz
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
