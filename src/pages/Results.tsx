import type { ReactNode } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';
import { ArrowRight, BookOpen } from 'lucide-react';

function Section({ children, className = '', bg = 'bg-warm-linen' }: { children: ReactNode; className?: string; bg?: string }) {
  return (
    <section className={`${bg} py-16 md:py-24 px-6 md:px-12 ${className}`}>
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
}

function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Results() {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();

  const validTypes = ['stress-soother', 'comfort-seeker', 'autopilot-eater', 'perfectionist-restrictor'];
  const resultType = type && validTypes.includes(type) ? type : 'stress-soother';
  const data = resultsData[resultType as keyof typeof resultsData];

  const userName = searchParams.get('name') || '';
  const trigger = searchParams.get('trigger') || '';
  const food = searchParams.get('food') || '';
  const aftermath = searchParams.get('aftermath') || '';

  const safeTrigger = trigger in data.pattern ? (trigger as keyof typeof data.pattern) : 'stress';
  const safeAftermath = aftermath in data.pattern[safeTrigger]
    ? (aftermath as keyof typeof data.pattern.stress)
    : 'guilt';
  const safeFood = food in data.cravings ? (food as keyof typeof data.cravings) : 'sweet';

  const cravingData = data.cravings[safeFood];
  const patternData = data.pattern[safeTrigger][safeAftermath];

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      {/* Header */}
      <header className="py-5 px-6 flex items-center justify-center bg-warm-linen border-b border-sand/20 sticky top-0 z-50 backdrop-blur-md bg-warm-linen/92">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={28} />
        </Link>
      </header>

      <main className="flex-grow">

        {/* ═══ SECTION 1: HERO ═══ */}
        <section className="bg-deep-sage text-warm-linen py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-warm-linen/10 font-sans font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                Your Emotional Eating Type
              </span>
              {userName && (
                <p className="font-sans text-lg opacity-70 mb-4">
                  {userName}, your results are in.
                </p>
              )}
              <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]">
                {data.headline}
              </h1>
              <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl mx-auto">
                {data.subhead}
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-warm-linen/65 mt-6">
                Not a diagnosis. A pattern you can actually work with.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ SECTION 2: YOUR PATTERN ═══ */}
        <Section bg="bg-oat">
          <FadeIn>
            <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
              Why This Keeps Happening
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              What seems to be driving it
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="font-sans text-lg md:text-xl text-soft-black leading-relaxed space-y-6">
              <p>{data.patternIntro}</p>
              <div className="bg-warm-linen p-6 md:p-8 rounded-xl border-l-4 border-muted-teal">
                <p className="font-medium text-deep-sage">{patternData}</p>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* ═══ SECTION 3: WHAT YOUR CRAVINGS MEAN ═══ */}
        <Section>
          <FadeIn>
            <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
              What Your Cravings Are Trying To Do
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              {cravingData.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed">
              {cravingData.meaning}
            </p>
          </FadeIn>
        </Section>

        {/* ═══ SECTION 4: BRIDGE — READ CHAPTER 1 FREE ═══ */}
        <Section bg="bg-deep-sage" className="text-warm-linen">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
                Go Deeper
              </span>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl mb-6 leading-tight">
                Now you see the pattern.<br className="hidden md:block" /> Here's how to break it.
              </h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-4">
                Your result shows what's driving your eating. The full guide shows you why it happens, how the loop works, and what to do in the moment instead of reaching for food.
              </p>
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-70 max-w-2xl mx-auto mb-10">
                Read the intro free. No card, no signup. See if it clicks.
              </p>

              <a
                href="/course.html"
                className="inline-flex items-center gap-3 bg-terracotta text-white font-sans font-semibold text-xl px-10 py-5 rounded-xl hover:bg-terracotta/90 transition-colors shadow-xl"
              >
                <BookOpen size={22} />
                Start Reading Free
                <ArrowRight size={22} />
              </a>

              <p className="font-sans text-sm text-warm-linen/50 mt-6">
                10 chapters. Science-backed. No dieting. No shame.
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* Footer */}
        <section className="bg-soft-black text-white/60 py-10 px-6 font-sans text-[13px]">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <p className="text-white/50">
              Need support? <strong className="text-white/70">NEDA Helpline:</strong> 1-800-931-2237 | <strong className="text-white/70">988 Crisis Lifeline:</strong> Call or text 988
            </p>
            <p>
              Educational information only. Not medical or mental health care.{' '}
              <Link to="/privacy" className="underline hover:text-white">Privacy</Link>{' · '}
              <Link to="/terms" className="underline hover:text-white">Terms</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
