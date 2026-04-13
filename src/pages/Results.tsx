import type { ReactNode } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';
import { ArrowRight, BookOpen, Brain, Zap } from 'lucide-react';

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

  const headline = userName
    ? data.headline.replace('{name}', userName)
    : data.headline.replace('{name}, ', '');

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      {/* Header */}
      <header className="py-5 px-6 flex items-center justify-center bg-warm-linen border-b border-sand/20 sticky top-0 z-50 backdrop-blur-md bg-warm-linen/92">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={39} />
        </Link>
      </header>

      <main className="flex-grow">

        {/* ═══ HERO ═══ */}
        <section className="bg-deep-sage text-warm-linen py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                {headline}
              </h1>
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto">
                {data.subhead}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ THE SCIENCE ═══ */}
        <Section bg="bg-oat">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-muted-teal flex-shrink-0" size={22} />
              <span className="font-sans font-medium text-sm uppercase tracking-widest text-sand">
                The Neuroscience
              </span>
            </div>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              {data.science.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed mb-10">
              {data.science.body}
            </p>
          </FadeIn>
          <div className="space-y-4">
            {data.science.chemicals.map((chem, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.08}>
                <div className="bg-warm-linen rounded-xl p-5 md:p-6 border border-sand/20">
                  <p className="font-sans font-semibold text-deep-sage mb-1">{chem.name}</p>
                  <p className="font-sans text-soft-black/80 leading-relaxed">{chem.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* ═══ YOUR PATTERN ═══ */}
        <Section>
          <FadeIn>
            <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
              Your Specific Pattern
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              Here's what's happening in your loop
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-deep-sage text-warm-linen rounded-2xl p-6 md:p-8">
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90">
                {patternData}
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* ═══ WHY YOU CRAVE THIS FOOD ═══ */}
        <Section bg="bg-oat">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-terracotta flex-shrink-0" size={22} />
              <span className="font-sans font-medium text-sm uppercase tracking-widest text-sand">
                Why You Crave What You Crave
              </span>
            </div>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              {cravingData.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed mb-6">
              {cravingData.neuroscience}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-warm-linen p-5 md:p-6 rounded-xl border-l-4 border-terracotta">
              <p className="font-sans font-medium text-sm uppercase tracking-wider text-sand mb-2">What your body is signaling</p>
              <p className="font-sans text-lg font-medium text-deep-sage leading-relaxed">{cravingData.signal}</p>
            </div>
          </FadeIn>
        </Section>

        {/* ═══ TRY THIS ═══ */}
        <Section>
          <FadeIn>
            <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
              Your Best Move This Week
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              {data.tryThis.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed">
              {data.tryThis.body}
            </p>
          </FadeIn>
        </Section>

        {/* ═══ BRIDGE — GET THE FULL GUIDE ═══ */}
        <Section bg="bg-deep-sage" className="text-warm-linen">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
                Go Deeper
              </span>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl mb-6 leading-tight">
                This is the surface.<br className="hidden md:block" /> The guide goes all the way down.
              </h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-10">
                Your result mapped the pattern. The full guide gives you the complete framework — the emotional eating loop, your 6 drivers, the choice point toolkit, and a 7-day practice to rewire the response.
              </p>

              <a
                href="/course.html"
                className="inline-flex items-center gap-3 bg-terracotta text-white font-sans font-semibold text-xl px-10 py-5 rounded-xl hover:bg-terracotta/90 transition-colors shadow-xl"
              >
                <BookOpen size={22} />
                Get the Full Guide — $27
                <ArrowRight size={22} />
              </a>

              <p className="font-sans text-sm text-warm-linen/50 mt-6">
                10 chapters. Science-backed. One-time payment. 30-day money-back guarantee.
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
