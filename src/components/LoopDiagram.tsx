import { FadeIn } from './FadeIn';
import { ArrowDown } from 'lucide-react';

const loopSteps = [
  { color: 'bg-deep-sage', text: "Emotional trigger — stress, boredom, loneliness, overwhelm" },
  { color: 'bg-muted-teal', text: "Cortisol spikes — prefrontal cortex goes offline" },
  { color: 'bg-sand', text: "Brain signals a need — demands fastest dopamine source" },
  { color: 'bg-terracotta', text: "You eat — brief neurochemical relief, not resolution" },
  { color: 'bg-dusty-blush', text: "Guilt response — new stress hormones released" },
  { color: 'bg-[#b8a090]', text: "Neural pathway strengthens — the loop becomes automatic" }
];

export function LoopDiagram() {
  return (
    <section className="bg-warm-linen py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-6">
            The Brain Loop
          </span>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-10 text-balance leading-tight">
            The Neurochemical Cycle Your Brain Runs on Autopilot
          </h2>
          <p className="font-sans text-xl md:text-2xl leading-relaxed text-soft-black mb-16">
            Researchers call this the affect regulation model. Every time the loop completes, the neural pathway gets stronger — making the next cycle faster and more automatic. Here's the sequence:
          </p>
        </FadeIn>

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

        <FadeIn delay={0.6}>
          <div className="border-l-4 border-sand pl-6 md:pl-8 py-2 mb-16">
            <p className="font-serif italic text-2xl md:text-3xl font-medium leading-relaxed text-deep-sage mb-4">
              "Ecological momentary assessment confirms: emotional distress triggers the eating. But the eating doesn't resolve the distress. It reinforces the neural pathway."
            </p>
            <p className="font-sans text-sm text-sand uppercase tracking-wider">
              Source: Appetite, 2025
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
