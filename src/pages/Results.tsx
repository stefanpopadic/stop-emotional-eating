import type { ReactNode } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';
import { ArrowRight } from 'lucide-react';

type ArchetypeKey = 'stress-regainer' | 'emotional-refueler' | 'unconscious-saboteur' | 'diet-rebounder';

const archetypeConfig: Record<ArchetypeKey, { label: string; display: string; accent: string; accentHex: string; mark: ReactNode }> = {
  'stress-regainer': {
    label: 'Pattern I',
    display: 'The Stress Regainer',
    accent: 'text-muted-teal',
    accentHex: '#8AABA7',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <circle cx="60" cy="60" r="40" />
        <circle cx="60" cy="60" r="28" />
        <circle cx="60" cy="60" r="16" />
        <path d="M20 60 L100 60" strokeDasharray="2 4" />
      </svg>
    ),
  },
  'emotional-refueler': {
    label: 'Pattern II',
    display: 'The Emotional Refueler',
    accent: 'text-terracotta',
    accentHex: '#D4856A',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <path d="M30 70 Q 60 30, 90 70 Q 60 110, 30 70 Z" />
        <path d="M40 70 Q 60 50, 80 70" />
        <circle cx="60" cy="70" r="3" fill="currentColor" />
      </svg>
    ),
  },
  'unconscious-saboteur': {
    label: 'Pattern III',
    display: 'The Unconscious Saboteur',
    accent: 'text-sand',
    accentHex: '#C4A882',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <path d="M20 60 Q 35 40, 50 60 T 80 60 T 110 60" />
        <path d="M20 80 Q 35 60, 50 80 T 80 80 T 110 80" opacity="0.5" />
        <path d="M20 40 Q 35 20, 50 40 T 80 40 T 110 40" opacity="0.3" />
      </svg>
    ),
  },
  'diet-rebounder': {
    label: 'Pattern IV',
    display: 'The Diet Rebounder',
    accent: 'text-dusty-blush',
    accentHex: '#D6C5B0',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
        <rect x="30" y="30" width="60" height="60" />
        <rect x="40" y="40" width="40" height="40" />
        <rect x="50" y="50" width="20" height="20" />
        <path d="M30 60 L90 60 M60 30 L60 90" strokeDasharray="1 3" />
      </svg>
    ),
  },
};

function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  );
}

function Paragraphs({ text, className = '' }: { text: string; className?: string }) {
  const paragraphs = text.split('\n\n').filter(Boolean);
  return (
    <div className={`space-y-5 font-sans text-lg md:text-xl text-soft-black/85 leading-[1.7] ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export function Results() {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();

  const validTypes: ArchetypeKey[] = ['stress-regainer', 'emotional-refueler', 'unconscious-saboteur', 'diet-rebounder'];
  const resultType: ArchetypeKey = type && validTypes.includes(type as ArchetypeKey) ? (type as ArchetypeKey) : 'stress-regainer';
  const data = resultsData[resultType];
  const cfg = archetypeConfig[resultType];

  const userName = searchParams.get('name') || '';
  const greeting = userName ? `${userName} — ` : '';

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-soft-black/10">
        <Link to="/" className="text-deep-sage hover:opacity-70 transition-opacity">
          <Logo height={34} />
        </Link>
        <div className="hidden sm:flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.accentHex }} />
          <span className="eyebrow">{cfg.label}</span>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO */}
        <section className="px-4 sm:px-6 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`eyebrow ${cfg.accent}`}>{cfg.label} · Your diet-breaking pattern</span>
              </div>
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-soft-black/60 mb-4">{cfg.display}</p>
              <h1 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-deep-sage leading-[1.0] tracking-tight mb-8 text-balance">
                {data.headline}
              </h1>
              <span className="rule-accent mb-8" style={{ color: cfg.accentHex }} />
              <p className="font-serif italic text-xl sm:text-2xl md:text-[1.65rem] text-soft-black/80 leading-relaxed max-w-2xl">
                {greeting}{data.subhead}
              </p>
              <p className="eyebrow mt-10">Your full pattern below</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block w-44 h-44 lg:w-52 lg:h-52"
              style={{ color: cfg.accentHex }}
            >
              {cfg.mark}
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
          <span className="rule" />
        </div>

        {/* 01 — YOUR PATTERN */}
        <Section>
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">01</span>
              <span className="eyebrow">Your Pattern</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-12 text-balance">
              How the loop runs.
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="border-t border-soft-black/15 mb-10">
              {data.pattern.steps.map((step, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[44px_1fr] sm:grid-cols-[60px_1fr] gap-4 items-baseline py-5 border-b border-soft-black/15"
                >
                  <span className="numeral text-lg sm:text-xl text-soft-black/50">0{i + 1}</span>
                  <span className="font-serif text-xl sm:text-2xl text-deep-sage leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="pl-6 md:pl-10" style={{ borderLeft: `1px solid ${cfg.accentHex}` }}>
              <p className="font-serif italic text-xl sm:text-2xl md:text-[1.65rem] text-soft-black/85 leading-relaxed">
                {data.pattern.summary}
              </p>
            </div>
          </FadeIn>
        </Section>

        {/* 02 — WHY THIS KEEPS HAPPENING */}
        <Section className="bg-oat/40">
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">02</span>
              <span className="eyebrow">Why this keeps happening</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-10 text-balance">
              The reason underneath.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Paragraphs text={data.why} />
          </FadeIn>
        </Section>

        {/* 03 — HOW YOU BREAK THE DIET */}
        <Section>
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">03</span>
              <span className="eyebrow">How you break the diet</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-10 text-balance">
              The exact behavior.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Paragraphs text={data.howYouBreak} />
          </FadeIn>
        </Section>

        {/* 04 — WHAT TO WATCH FOR */}
        <Section className="bg-oat/40">
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">04</span>
              <span className="eyebrow">What to watch for this week</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-10 text-balance">
              Spot the pattern, before it runs.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Paragraphs text={data.watchFor.intro} className="mb-8" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-3 mb-8">
              {data.watchFor.items.map((item, i) => (
                <li
                  key={i}
                  className="pl-5 font-serif text-xl sm:text-2xl text-deep-sage leading-snug"
                  style={{ borderLeft: `2px solid ${cfg.accentHex}` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          {data.watchFor.close && (
            <FadeIn delay={0.15}>
              <Paragraphs text={data.watchFor.close} />
            </FadeIn>
          )}
        </Section>

        {/* 05 — FIRST STEP */}
        <Section>
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">05</span>
              <span className="eyebrow">Your first step</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-10 text-balance">
              One move. Start here.
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Paragraphs text={data.firstStep} />
          </FadeIn>
        </Section>

        {/* CTA */}
        <section className="bg-deep-sage text-warm-linen px-4 sm:px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-center">
            <FadeIn>
              <span className="eyebrow text-warm-linen/70 block mb-6">Your result showed where your diet breaks</span>
              <h2 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight mb-8">
                Get the 21-day plan to break this loop.
              </h2>
              <p className="font-serif italic text-xl md:text-2xl text-warm-linen/80 leading-relaxed mb-10 max-w-xl">
                The 21-day plan shows what to do next — day by day — so you can interrupt the pattern before it turns into another restart.
              </p>

              <div className="border-t border-warm-linen/20">
                {[
                  { n: '01', title: 'Your specific pattern, fully mapped', sub: 'Where the diet breaks for you and why' },
                  { n: '02', title: 'The 21-day cycle-breaker schedule', sub: 'Daily steps that interrupt the loop' },
                  { n: '03', title: 'The 90-second pattern interrupt', sub: 'Works on any craving, in real time' },
                  { n: '04', title: 'Post-overeating recovery protocol', sub: "So one slip doesn't blow the week" },
                ].map((c) => (
                  <div key={c.n} className="grid grid-cols-[48px_1fr] gap-4 py-4 border-b border-warm-linen/20">
                    <span className="numeral text-warm-linen/60 text-lg">{c.n}</span>
                    <div>
                      <p className="font-serif text-xl md:text-2xl text-warm-linen leading-tight">{c.title}</p>
                      <p className="font-sans text-sm text-warm-linen/60 mt-1">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="flex flex-col items-center md:items-start">
              {/* Editorial book mockup */}
              <div className="relative w-56 md:w-64 mb-10">
                <div className="aspect-[3/4] bg-warm-linen text-deep-sage shadow-2xl flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <span className="eyebrow" style={{ color: cfg.accentHex }}>
                      The 21-day cycle breaker
                    </span>
                  </div>
                  <div>
                    <div className="w-10 h-10 mb-6" style={{ color: cfg.accentHex }}>
                      {cfg.mark}
                    </div>
                    <h3 className="font-serif font-medium text-2xl md:text-3xl leading-[1.0] tracking-tight text-deep-sage">
                      Stop<br />Emotional<br />Eating
                    </h3>
                    <span className="rule-accent mt-4 mb-3" style={{ color: cfg.accentHex }} />
                    <p className="font-serif italic text-sm text-soft-black/70">Break the loop. Lose the weight.</p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <p className="eyebrow text-warm-linen/60 mb-2">One-time · Instant access</p>
                <p className="font-serif text-4xl md:text-5xl mb-6">$27</p>
                <a
                  href="https://mindfullstef.gumroad.com/l/stop-emotional-eating"
                  className="group inline-flex items-center justify-between gap-4 w-full bg-terracotta text-warm-linen font-sans text-base px-6 py-4 rounded-md hover:bg-terracotta/90 transition-colors"
                >
                  <span className="font-medium">Start the 21-day plan</span>
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="font-sans text-xs text-warm-linen/50 mt-4 leading-relaxed">
                  21-day plan. Single $27 payment.<br />30-day money-back guarantee.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-soft-black text-warm-linen/60 py-10 px-4 sm:px-6 font-sans text-xs sm:text-[13px]">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p>
              Need support? <strong className="text-warm-linen/80">NEDA Helpline:</strong> 1-800-931-2237
              {' · '}
              <strong className="text-warm-linen/80">988 Crisis Lifeline:</strong> Call or text 988
            </p>
            <p>
              Educational information only. Not medical or mental health care.{' '}
              <Link to="/privacy" className="underline hover:text-warm-linen">Privacy</Link>{' · '}
              <Link to="/terms" className="underline hover:text-warm-linen">Terms</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
