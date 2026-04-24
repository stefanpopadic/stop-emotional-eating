import type { ReactNode } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';
import { ArrowRight, Check } from 'lucide-react';

type ArchetypeKey = 'stress-regainer' | 'emotional-refueler' | 'unconscious-saboteur' | 'diet-rebounder';

const archetypeConfig: Record<ArchetypeKey, { label: string; display: string; accentHex: string; mark: ReactNode }> = {
  'stress-regainer': {
    label: 'Pattern I',
    display: 'The Stress Regainer',
    accentHex: '#8AABA7',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
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
    accentHex: '#D4856A',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
        <path d="M30 70 Q 60 30, 90 70 Q 60 110, 30 70 Z" />
        <path d="M40 70 Q 60 50, 80 70" />
        <circle cx="60" cy="70" r="3" fill="currentColor" />
      </svg>
    ),
  },
  'unconscious-saboteur': {
    label: 'Pattern III',
    display: 'The Unconscious Saboteur',
    accentHex: '#C4A882',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
        <path d="M20 60 Q 35 40, 50 60 T 80 60 T 110 60" />
        <path d="M20 80 Q 35 60, 50 80 T 80 80 T 110 80" opacity="0.5" />
        <path d="M20 40 Q 35 20, 50 40 T 80 40 T 110 40" opacity="0.3" />
      </svg>
    ),
  },
  'diet-rebounder': {
    label: 'Pattern IV',
    display: 'The Diet Rebounder',
    accentHex: '#A88B70',
    mark: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
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

function Paragraphs({ text, className = '' }: { text: string; className?: string }) {
  const paragraphs = text.split('\n\n').filter(Boolean);
  return (
    <div className={`space-y-4 font-sans text-[17px] sm:text-lg text-soft-black/80 leading-[1.65] ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function SectionBlock({
  eyebrow,
  title,
  children,
  accentHex,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  accentHex: string;
}) {
  return (
    <FadeIn>
      <div className="py-2">
        <div className="mb-4">
          <span className="font-sans font-medium text-[11px] uppercase tracking-[0.18em] text-soft-black/55">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-soft-black leading-[1.1] tracking-tight mb-6 text-balance">
          {title}
        </h2>
        {children}
      </div>
    </FadeIn>
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

  const personalizedHeadline = userName
    ? `${userName}, ${data.headline.charAt(0).toLowerCase()}${data.headline.slice(1)}`
    : data.headline;

  const checkoutUrl = 'https://mindfullstef.gumroad.com/l/stop-emotional-eating';

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col font-sans">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between border-b border-soft-black/10 bg-warm-linen/95 backdrop-blur-sm sticky top-0 z-30">
        <Link to="/" className="text-deep-sage hover:opacity-70 transition-opacity">
          <Logo height={34} />
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-soft-black/10">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.accentHex }} />
            <span className="font-sans font-medium text-[11px] uppercase tracking-[0.16em] text-soft-black/70">
              {cfg.label}
            </span>
          </span>
          <a
            href={checkoutUrl}
            className="hidden md:inline-flex items-center gap-2 bg-terracotta text-warm-linen font-sans font-medium text-sm px-4 py-2 rounded-full hover:bg-terracotta/90 transition-colors"
          >
            Get the plan · $27
            <ArrowRight size={14} />
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO */}
        <section className="px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center"
            >
              <div>
                <h1 className="font-sans font-bold text-[34px] sm:text-5xl lg:text-[58px] text-soft-black leading-[1.05] tracking-tight mb-6 text-balance max-w-3xl">
                  {personalizedHeadline}
                </h1>
                <p className="font-sans text-lg sm:text-xl text-soft-black/75 leading-[1.6] max-w-2xl">
                  {data.subhead}
                </p>
              </div>
              <div
                className="hidden lg:flex w-44 h-44 rounded-full items-center justify-center shrink-0"
                style={{ backgroundColor: `${cfg.accentHex}18`, color: cfg.accentHex }}
              >
                <div className="w-24 h-24">{cfg.mark}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BODY — left content, right sticky CTA */}
        <section className="px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start">
            {/* LEFT — content */}
            <div className="divide-y divide-soft-black/10">
              {/* Pattern */}
              <div className="pb-12">
                <SectionBlock eyebrow="Your pattern" title="How the loop runs." accentHex={cfg.accentHex}>
                  <ol className="space-y-0">
                    {data.pattern.steps.map((step, i) => (
                      <li
                        key={i}
                        className="grid grid-cols-[36px_1fr] gap-4 items-baseline py-3.5 border-b border-soft-black/10 last:border-0"
                      >
                        <span
                          className="font-sans font-bold text-sm tabular-nums"
                          style={{ color: cfg.accentHex }}
                        >
                          0{i + 1}
                        </span>
                        <span className="font-sans text-[17px] sm:text-lg text-soft-black leading-snug">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div
                    className="mt-6 p-5 rounded-2xl"
                    style={{ backgroundColor: `${cfg.accentHex}14`, borderLeft: `3px solid ${cfg.accentHex}` }}
                  >
                    <p className="font-sans font-medium text-[15px] sm:text-base text-soft-black/85 leading-relaxed">
                      {data.pattern.summary}
                    </p>
                  </div>
                </SectionBlock>
              </div>

              {/* Why */}
              <div className="py-12">
                <SectionBlock eyebrow="Why this keeps happening" title="The reason underneath." accentHex={cfg.accentHex}>
                  <Paragraphs text={data.why} />
                </SectionBlock>
              </div>

              {/* How */}
              <div className="py-12">
                <SectionBlock eyebrow="How you break the diet" title="The exact behavior." accentHex={cfg.accentHex}>
                  <Paragraphs text={data.howYouBreak} />
                </SectionBlock>
              </div>

              {/* Watch For */}
              <div className="py-12">
                <SectionBlock eyebrow="What to watch for this week" title="Spot the pattern, before it runs." accentHex={cfg.accentHex}>
                  <Paragraphs text={data.watchFor.intro} className="mb-5" />
                  <ul className="space-y-2.5 mb-5">
                    {data.watchFor.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full shrink-0"
                          style={{ backgroundColor: `${cfg.accentHex}22` }}
                        >
                          <Check size={10} style={{ color: cfg.accentHex }} strokeWidth={3} />
                        </span>
                        <span className="font-sans text-[17px] sm:text-lg text-soft-black leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {data.watchFor.close && <Paragraphs text={data.watchFor.close} />}
                </SectionBlock>
              </div>

              {/* First step */}
              <div className="pt-12">
                <SectionBlock eyebrow="Your first step" title="One move. Start here." accentHex={cfg.accentHex}>
                  <Paragraphs text={data.firstStep} />
                </SectionBlock>
              </div>
            </div>

            {/* RIGHT — sticky purchase card */}
            <aside className="lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl shadow-[0_12px_48px_-16px_rgba(58,58,58,0.18)] overflow-hidden">
                {/* Book mockup */}
                <div
                  className="aspect-[4/3] flex items-center justify-center p-8"
                  style={{ backgroundColor: `${cfg.accentHex}18` }}
                >
                  <div className="w-32 sm:w-36 aspect-[3/4] bg-warm-linen shadow-[0_16px_40px_-12px_rgba(58,58,58,0.35)] flex flex-col justify-between p-4 sm:p-5 rounded-sm">
                    <span className="font-sans font-medium text-[9px] uppercase tracking-[0.18em]" style={{ color: cfg.accentHex }}>
                      21-day plan
                    </span>
                    <div>
                      <div className="w-7 h-7 mb-3" style={{ color: cfg.accentHex }}>{cfg.mark}</div>
                      <h3 className="font-sans font-bold text-base sm:text-lg leading-[1.05] text-soft-black tracking-tight">
                        Stop<br />Emotional<br />Eating
                      </h3>
                      <span className="block w-6 h-px mt-3 mb-2" style={{ backgroundColor: cfg.accentHex }} />
                      <p className="font-sans text-[10px] text-soft-black/60 leading-snug">Break the loop.<br />Lose the weight.</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7">
                  <span className="font-sans font-medium text-[11px] uppercase tracking-[0.18em] text-soft-black/55">
                    Your next step
                  </span>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-soft-black leading-[1.15] tracking-tight mt-2 mb-4">
                    Get the 21-day plan to break this loop.
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {[
                      'Your full pattern, mapped',
                      'Day-by-day cycle-breaker schedule',
                      '90-second pattern interrupt',
                      'Post-overeating recovery protocol',
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <Check size={14} className="mt-1 text-deep-sage shrink-0" strokeWidth={2.5} />
                        <span className="font-sans text-sm text-soft-black/85 leading-snug">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-sans font-bold text-3xl text-soft-black">$27</span>
                    <span className="font-sans text-sm text-soft-black/55">one-time · instant access</span>
                  </div>

                  <a
                    href={checkoutUrl}
                    className="group w-full inline-flex items-center justify-center gap-2 bg-terracotta text-warm-linen font-sans font-medium text-base px-6 py-4 rounded-full hover:bg-terracotta/90 active:scale-[0.99] transition-all"
                  >
                    Start the 21-day plan
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <p className="font-sans text-xs text-soft-black/55 leading-relaxed text-center mt-4">
                    30-day money-back guarantee.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Mobile sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-warm-linen/95 backdrop-blur-sm border-t border-soft-black/10 px-4 py-3">
          <a
            href={checkoutUrl}
            className="group w-full inline-flex items-center justify-between gap-2 bg-terracotta text-warm-linen font-sans font-medium text-base px-5 py-3.5 rounded-full hover:bg-terracotta/90 active:scale-[0.99] transition-all"
          >
            <span>Start the 21-day plan · $27</span>
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Footer */}
        <footer className="bg-soft-black text-warm-linen/60 py-10 px-4 sm:px-6 font-sans text-xs sm:text-[13px] pb-24 lg:pb-10">
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
        </footer>
      </main>
    </div>
  );
}
