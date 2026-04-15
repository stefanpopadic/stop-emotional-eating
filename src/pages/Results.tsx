import type { ReactNode } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';
import { ArrowRight } from 'lucide-react';

type ArchetypeKey = 'stress-soother' | 'comfort-seeker' | 'autopilot-eater' | 'perfectionist-restrictor';

const archetypeConfig: Record<ArchetypeKey, { label: string; display: string; accent: string; accentHex: string; mark: ReactNode }> = {
  'stress-soother': {
    label: 'Archetype I',
    display: 'The Stress Soother',
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
  'comfort-seeker': {
    label: 'Archetype II',
    display: 'The Comfort Seeker',
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
  'autopilot-eater': {
    label: 'Archetype III',
    display: 'The Autopilot Eater',
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
  'perfectionist-restrictor': {
    label: 'Archetype IV',
    display: 'The Perfectionist',
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

const triggerLabels: Record<string, string> = {
  stress: 'Stress',
  boredom: 'Boredom',
  emotional: 'Emotional low',
  nighttime: 'Nighttime release',
};
const foodLabels: Record<string, string> = {
  salty: 'Salty / crunchy',
  sweet: 'Sweet',
  carbs: 'Carbs',
  impulsive: 'Whatever is closest',
};
const aftermathLabels: Record<string, string> = {
  guilt: 'Guilt',
  numb: 'Numbness',
  cycle: 'More wanting',
  autopilot: 'Barely noticed',
};
const feelingLabels: Record<string, string> = {
  stress: 'Overdrive',
  boredom: 'Understimulation',
  emotional: 'Depletion',
  nighttime: 'Release',
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
    <section className={`px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28 ${className}`}>
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  );
}

export function Results() {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();

  const validTypes: ArchetypeKey[] = ['stress-soother', 'comfort-seeker', 'autopilot-eater', 'perfectionist-restrictor'];
  const resultType: ArchetypeKey = type && validTypes.includes(type as ArchetypeKey) ? (type as ArchetypeKey) : 'stress-soother';
  const data = resultsData[resultType];
  const cfg = archetypeConfig[resultType];

  const userName = searchParams.get('name') || '';
  const trigger = searchParams.get('trigger') || 'stress';
  const food = searchParams.get('food') || 'sweet';
  const aftermath = searchParams.get('aftermath') || 'guilt';

  const safeTrigger = trigger in data.pattern ? (trigger as keyof typeof data.pattern) : 'stress';
  const safeAftermath =
    aftermath in data.pattern[safeTrigger] ? (aftermath as keyof typeof data.pattern.stress) : 'guilt';
  const safeFood = food in data.cravings ? (food as keyof typeof data.cravings) : 'sweet';

  const cravingData = data.cravings[safeFood];
  const patternData = data.pattern[safeTrigger][safeAftermath];

  const headline = userName
    ? data.headline.replace('{name}', userName)
    : data.headline.replace('{name}, ', '');

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
        <section className="px-4 sm:px-6 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className={`eyebrow ${cfg.accent}`}>{cfg.label} · Your Result</span>
              </div>
              <h1 className="font-serif font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-deep-sage leading-[0.95] tracking-tight mb-8">
                {cfg.display}
              </h1>
              <span className="rule-accent mb-8" style={{ color: cfg.accentHex }} />
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-soft-black/80 leading-relaxed max-w-2xl">
                {userName ? `${userName} — ${data.subhead}` : data.subhead}
              </p>
              <p className="eyebrow mt-10">Your analysis continues below</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block w-48 h-48 lg:w-56 lg:h-56"
              style={{ color: cfg.accentHex }}
            >
              {cfg.mark}
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
          <span className="rule" />
        </div>

        {/* NEUROSCIENCE — glossary */}
        <Section>
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">01</span>
              <span className="eyebrow">The Neuroscience</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-10 text-balance">
              {data.science.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="drop-cap font-sans text-lg md:text-xl text-soft-black/85 leading-[1.7] mb-16">
              {data.science.body}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="eyebrow mb-6">Glossary — the chemicals at play</p>
            <div className="border-t border-soft-black/15">
              {data.science.chemicals.map((chem) => (
                <div
                  key={chem.name}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-10 py-6 border-b border-soft-black/15"
                >
                  <p className="font-serif italic text-xl md:text-2xl text-deep-sage">{chem.name}</p>
                  <p className="font-sans text-base md:text-[17px] text-soft-black/80 leading-[1.65]">{chem.role}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>

        {/* YOUR PATTERN — numbered loop */}
        <Section className="bg-oat/40">
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">02</span>
              <span className="eyebrow">Your Specific Loop</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-12 text-balance">
              Four moments, repeating.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-4 mb-12">
              {[
                { step: 'Trigger', value: triggerLabels[safeTrigger] || safeTrigger },
                { step: 'Inner State', value: feelingLabels[safeTrigger] || '—' },
                { step: 'Craving', value: foodLabels[safeFood] || safeFood },
                { step: 'Aftermath', value: aftermathLabels[safeAftermath] || safeAftermath },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="grid grid-cols-[48px_120px_1fr] sm:grid-cols-[60px_180px_1fr] gap-4 items-baseline py-5 border-b border-soft-black/15"
                >
                  <span className="numeral text-xl sm:text-2xl">0{i + 1}</span>
                  <span className="eyebrow">{item.step}</span>
                  <span className="font-serif italic text-xl sm:text-2xl md:text-3xl text-deep-sage">{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans text-lg md:text-xl text-soft-black/85 leading-[1.7]">
              {patternData}
            </p>
          </FadeIn>
        </Section>

        {/* CRAVING — pull-quote */}
        <Section>
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">03</span>
              <span className="eyebrow">Why you crave what you crave</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-10 text-balance">
              {cravingData.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="font-sans text-lg md:text-xl text-soft-black/85 leading-[1.7] mb-12">
              {cravingData.neuroscience}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="pl-6 md:pl-10" style={{ borderLeft: `1px solid ${cfg.accentHex}` }}>
              <p className="eyebrow mb-4" style={{ color: cfg.accentHex }}>
                What your body is signaling
              </p>
              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-deep-sage leading-[1.2] tracking-tight">
                "{cravingData.signal}"
              </blockquote>
            </div>
          </FadeIn>
        </Section>

        {/* TRY THIS */}
        <Section className="bg-oat/40">
          <FadeIn>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="numeral text-3xl md:text-4xl">04</span>
              <span className="eyebrow">Your best move this week</span>
            </div>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-10 text-balance">
              {data.tryThis.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="font-sans text-lg md:text-xl text-soft-black/85 leading-[1.7]">
              {data.tryThis.body}
            </p>
          </FadeIn>
        </Section>

        {/* CTA */}
        <section className="bg-deep-sage text-warm-linen px-4 sm:px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-center">
            <FadeIn>
              <span className="eyebrow text-warm-linen/70 block mb-6">Go deeper</span>
              <h2 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight mb-8">
                This was the surface.<br />The guide goes all the way down.
              </h2>
              <p className="font-serif italic text-xl md:text-2xl text-warm-linen/80 leading-relaxed mb-10 max-w-xl">
                Your result mapped the pattern. The full guide gives you the complete framework.
              </p>

              <div className="border-t border-warm-linen/20">
                {[
                  { n: '01', title: 'The emotional eating loop', sub: 'Why willpower fails by design' },
                  { n: '02', title: 'Your six internal drivers', sub: 'The hormones behind every craving' },
                  { n: '03', title: 'The choice-point toolkit', sub: 'Catch the loop before it closes' },
                  { n: '04', title: 'A seven-day practice', sub: 'Rewire the default response' },
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
                      The complete guide
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
                    <p className="font-serif italic text-sm text-soft-black/70">A 21-day plan</p>
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
                  <span className="font-medium">Get the 21-Day Plan</span>
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="font-sans text-xs text-warm-linen/50 mt-4 leading-relaxed">
                  21 days. 10 chapters. Science-backed.<br />30-day money-back guarantee.
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
