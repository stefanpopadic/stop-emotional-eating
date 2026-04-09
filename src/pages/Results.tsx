import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';
import { ShieldCheck, BookOpen, CalendarDays, FileText, ArrowRight, AlertTriangle } from 'lucide-react';

function Section({ children, className = '', bg = 'bg-warm-linen' }: { children: React.ReactNode; className?: string; bg?: string }) {
  return (
    <section className={`${bg} py-16 md:py-24 px-6 md:px-12 ${className}`}>
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

  const cravingData = data.cravings[food] || data.cravings[Object.keys(data.cravings)[0]];
  const patternData = data.pattern[trigger]?.[aftermath] || data.pattern[Object.keys(data.pattern)[0]]?.[Object.keys(data.pattern[Object.keys(data.pattern)[0]])[0]];

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
            </motion.div>
          </div>
        </section>

        {/* ═══ SECTION 2: YOUR PATTERN ═══ */}
        <Section bg="bg-oat">
          <FadeIn>
            <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
              Your Pattern
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              Here's What's Actually Happening
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
              Your Cravings Decoded
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              {cravingData.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed mb-8">
              {cravingData.meaning}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-deep-sage text-warm-linen rounded-2xl p-8 md:p-10">
              <p className="font-sans font-medium text-lg mb-2 text-sand">Instead of reaching for food, try this:</p>
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90">{cravingData.alternative}</p>
            </div>
          </FadeIn>
        </Section>

        {/* ═══ SECTION 4: YOUR #1 STRATEGY ═══ */}
        <Section bg="bg-oat">
          <FadeIn>
            <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
              Your #1 Strategy This Week
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              {data.primaryStrategy.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed mb-8">
              {data.primaryStrategy.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-warm-linen rounded-2xl p-8 border border-sand/20">
              <p className="font-sans font-semibold text-deep-sage mb-4">How to do it:</p>
              <ol className="space-y-4">
                {data.primaryStrategy.howTo.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-terracotta text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">
                      {i + 1}
                    </span>
                    <p className="font-sans text-lg text-soft-black leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </Section>

        {/* ═══ SECTION 5: TWO MORE STRATEGIES ═══ */}
        <Section>
          <FadeIn>
            <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
              Bonus Strategies
            </span>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
              Two More Things You Can Do Right Now
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {data.bonusStrategies.map((strategy, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-oat rounded-xl p-6 md:p-8 border border-sand/20">
                  <h3 className="font-sans font-semibold text-xl text-deep-sage mb-3">{strategy.title}</h3>
                  <p className="font-sans text-lg text-soft-black leading-relaxed">{strategy.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* ═══ SECTION 6: COMMON MISTAKE ═══ */}
        <Section bg="bg-deep-sage" className="text-warm-linen">
          <FadeIn>
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="text-terracotta flex-shrink-0 mt-1" size={28} />
              <span className="font-sans font-medium text-sm uppercase tracking-widest text-sand pt-1">
                Watch Out For This
              </span>
            </div>
            <h2 className="font-serif font-semibold text-3xl md:text-4xl mb-8">
              {data.commonMistake.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90">
              {data.commonMistake.body}
            </p>
          </FadeIn>
        </Section>

        {/* ═══ SECTION 7: THE 21-DAY GUIDE ═══ */}
        <Section bg="bg-oat">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block font-sans font-medium text-sm uppercase tracking-widest text-sand mb-4">
                Go Deeper
              </span>
              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-6 leading-tight">
                This Is the Free Version.<br className="hidden md:block" /> The Full System Goes Further.
              </h2>
              <p className="font-sans text-lg md:text-xl text-soft-black leading-relaxed max-w-2xl mx-auto">
                What you just read is real, and it works. But it's the first layer. The 21-Day Guide gives you the complete system:
              </p>
            </div>
          </FadeIn>

          {/* What you get */}
          <FadeIn delay={0.1}>
            <div className="bg-warm-linen rounded-2xl p-8 md:p-10 border border-sand/20 mb-8">
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <BookOpen className="text-terracotta flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-sans font-semibold text-lg text-soft-black">The Stop Emotional Eating Guide</p>
                    <p className="font-sans text-soft-black/70 leading-relaxed">The complete framework — every trigger type, every craving pattern, mapped to specific alternative actions that work with your biology instead of against it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CalendarDays className="text-terracotta flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-sans font-semibold text-lg text-soft-black">The 21-Day Craving Tracker</p>
                    <p className="font-sans text-soft-black/70 leading-relaxed">Daily prompts that make your pattern visible in real time. Most people say by week 2, they see the craving coming before it arrives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileText className="text-terracotta flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-sans font-semibold text-lg text-soft-black">The Craving Decoder Cheat Sheet</p>
                    <p className="font-sans text-soft-black/70 leading-relaxed">One page, goes on your fridge. Craving hits → check the sheet → know what to do. No thinking required in the moment.</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-sand/30 pt-8 text-center">
                <p className="font-sans text-sm text-soft-black/50 line-through mb-1">$42 value</p>
                <p className="font-serif font-semibold text-5xl text-deep-sage mb-2">$27</p>
                <p className="font-sans text-sand">One-time payment. Instant download. Yours forever.</p>
              </div>
            </div>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.2}>
            <div className="text-center mb-8">
              <a
                href="/course.html"
                className="inline-flex items-center gap-3 bg-terracotta text-white font-sans font-semibold text-xl px-10 py-5 rounded-xl hover:bg-terracotta/90 transition-colors shadow-xl"
              >
                Get the 21-Day Guide — $27
                <ArrowRight size={22} />
              </a>
              <p className="font-sans text-sm text-soft-black/50 mt-4">
                Instant access. Start today.
              </p>
            </div>
          </FadeIn>

          {/* Guarantee */}
          <FadeIn delay={0.25}>
            <div className="flex items-center justify-center gap-4 bg-warm-linen border border-sand/30 rounded-xl p-6">
              <ShieldCheck className="text-muted-teal flex-shrink-0" size={32} />
              <div>
                <p className="font-sans font-semibold text-soft-black">30-Day Money-Back Guarantee</p>
                <p className="font-sans text-sm text-soft-black/60">Try it for a full month. If it doesn't change how you relate to food, email us for a complete refund. No questions, no hassle.</p>
              </div>
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
              This content is educational only. Not a substitute for professional help.{' '}
              <Link to="/privacy" className="underline hover:text-white">Privacy</Link>{' · '}
              <Link to="/terms" className="underline hover:text-white">Terms</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
