import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';
import { Check, ShieldCheck, BookOpen, CalendarDays, FileText, Headphones } from 'lucide-react';

const GUMROAD_CORE_URL = 'https://stopemotionaleating.gumroad.com/l/guide';
const GUMROAD_PREMIUM_URL = 'https://stopemotionaleating.gumroad.com/l/guide-premium';

export function Results() {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();

  const validTypes = ['stress-soother', 'comfort-seeker', 'autopilot-eater', 'perfectionist-restrictor'];
  const resultType = type && validTypes.includes(type) ? type : 'stress-soother';

  const data = resultsData[resultType as keyof typeof resultsData];

  const renderDynamicBlock1 = () => {
    const anyData = data as any;
    if (resultType === 'stress-soother') {
      const food = searchParams.get('food') as keyof typeof anyData.dynamicFood;
      return anyData.dynamicFood?.[food] || anyData.dynamicFood?.['sweet'];
    }
    if (resultType === 'comfort-seeker') {
      const duration = searchParams.get('duration') as keyof typeof anyData.dynamicDuration;
      return anyData.dynamicDuration?.[duration] || anyData.dynamicDuration?.['recurring'];
    }
    if (resultType === 'autopilot-eater') {
      const trigger = searchParams.get('trigger') as keyof typeof anyData.dynamicTrigger;
      return anyData.dynamicTrigger?.[trigger] || anyData.dynamicTrigger?.['nighttime'];
    }
    if (resultType === 'perfectionist-restrictor') {
      const desire = searchParams.get('desire') as keyof typeof anyData.dynamicDesire;
      return anyData.dynamicDesire?.[desire] || anyData.dynamicDesire?.['control'];
    }
    return null;
  };

  const renderDynamicBlock2 = () => {
    const anyData = data as any;
    if (resultType === 'stress-soother') {
      const awareness = searchParams.get('awareness') as keyof typeof anyData.dynamicAwareness;
      return anyData.dynamicAwareness?.[awareness] || anyData.dynamicAwareness?.['moderate'];
    }
    if (resultType === 'comfort-seeker') {
      const past = searchParams.get('past') as keyof typeof anyData.dynamicPast;
      return anyData.dynamicPast?.[past] || anyData.dynamicPast?.['diets'];
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 flex justify-center items-center bg-warm-linen border-b border-sand/20">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={28} />
        </Link>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-deep-sage text-warm-linen py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-warm-linen/10 text-warm-linen font-sans font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                {data.badge}
              </span>
              <h1 className="font-serif font-semibold text-5xl md:text-6xl mb-6">
                {data.headline}
              </h1>
              <p className="font-sans text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl mx-auto">
                {data.subhead}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-oat border-b border-sand/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="aspect-[16/7] bg-sand/20 flex items-center justify-center">
                <span className="font-sans text-sm text-sand uppercase tracking-wider">Result image placeholder</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Section 1: Pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8">
                Your Pattern Explained
              </h2>
              <div className="font-sans text-lg md:text-xl text-soft-black leading-relaxed space-y-6">
                <p className="whitespace-pre-wrap">{data.section1Intro}</p>
                <div className="bg-oat p-6 md:p-8 rounded-xl border-l-4 border-muted-teal">
                  <p className="font-medium text-deep-sage mb-4">{renderDynamicBlock1()}</p>
                  {renderDynamicBlock2() && (
                    <p className="font-medium text-deep-sage">{renderDynamicBlock2()}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Inline Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-sand/30"
            >
              <div className="aspect-[16/9] bg-sand/20 flex items-center justify-center">
                <span className="font-sans text-sm text-sand uppercase tracking-wider">Illustration placeholder</span>
              </div>
            </motion.div>

            {/* Section 2: Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-deep-sage text-warm-linen rounded-2xl p-8 md:p-12"
            >
              <h3 className="font-sans font-semibold text-2xl md:text-3xl mb-6">
                {data.section2Title}
              </h3>
              <p className="font-sans text-lg md:text-xl leading-relaxed opacity-90">
                {data.section2Body}
              </p>
            </motion.div>

            {/* Section 3: Value Stack + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 pt-8 border-t border-sand/30"
            >
              <div className="font-sans text-xl md:text-2xl text-soft-black leading-relaxed whitespace-pre-wrap max-w-2xl mx-auto text-center">
                {data.section3Intro}
              </div>

              {/* Product Image */}
              <div className="max-w-md mx-auto rounded-xl overflow-hidden border border-sand/30">
                <div className="aspect-[4/3] bg-sand/20 flex items-center justify-center">
                  <span className="font-sans text-sm text-sand uppercase tracking-wider">Product image placeholder</span>
                </div>
              </div>

              {/* Value Stack */}
              <div className="bg-oat rounded-2xl p-8 md:p-10 border border-sand/20">
                <h3 className="font-sans font-semibold text-2xl text-deep-sage mb-8 text-center">
                  Everything You Get
                </h3>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <BookOpen className="text-terracotta flex-shrink-0 mt-1" size={22} />
                    <div>
                      <p className="font-sans font-medium text-lg text-soft-black">The Emotional Eating Guide</p>
                      <p className="font-sans text-sm text-soft-black/70">Science-backed framework: Craving → Emotion → Hormone → Alternative Action</p>
                      <p className="font-sans text-sm font-medium text-sand mt-1">Value: $19</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CalendarDays className="text-terracotta flex-shrink-0 mt-1" size={22} />
                    <div>
                      <p className="font-sans font-medium text-lg text-soft-black">21-Day Craving Tracker</p>
                      <p className="font-sans text-sm text-soft-black/70">Daily prompts to map your triggers, emotions, and patterns over 3 weeks</p>
                      <p className="font-sans text-sm font-medium text-sand mt-1">Value: $14</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FileText className="text-terracotta flex-shrink-0 mt-1" size={22} />
                    <div>
                      <p className="font-sans font-medium text-lg text-soft-black">Craving Decoder Cheat Sheet</p>
                      <p className="font-sans text-sm text-soft-black/70">One-page reference: what each craving means and what to do instead</p>
                      <p className="font-sans text-sm font-medium text-sand mt-1">Value: $9</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-sand/30 pt-6 text-center">
                  <p className="font-sans text-sm text-soft-black/60 line-through mb-1">Total value: $42</p>
                  <p className="font-serif font-semibold text-4xl text-deep-sage mb-2">$27</p>
                  <p className="font-sans text-sm text-sand">One-time payment. Instant download. Yours forever.</p>
                </div>
              </div>

              {/* Premium Option */}
              <div className="bg-deep-sage rounded-2xl p-8 md:p-10 text-warm-linen relative overflow-hidden">
                <span className="absolute top-4 right-4 bg-terracotta text-white font-sans font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
                <h3 className="font-sans font-semibold text-2xl mb-6">
                  Want the Audio Deep Dive?
                </h3>
                <div className="flex items-start gap-4 mb-6">
                  <Headphones className="text-sand flex-shrink-0 mt-1" size={22} />
                  <div>
                    <p className="font-sans font-medium text-lg">10-Track Audio Course (120 min)</p>
                    <p className="font-sans text-sm opacity-70">Listen while you walk, commute, or wind down. Covers all 4 types, the neuroscience, and guided exercises.</p>
                    <p className="font-sans text-sm font-medium text-sand mt-1">Value: $19</p>
                  </div>
                </div>
                <div className="border-t border-white/15 pt-6 text-center">
                  <p className="font-sans text-sm opacity-50 line-through mb-1">Total value: $61</p>
                  <p className="font-serif font-semibold text-4xl mb-2">$39</p>
                  <p className="font-sans text-sm text-sand">Guide + Tracker + Cheat Sheet + Audio Course</p>
                </div>
              </div>

              {/* Buy Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={GUMROAD_CORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-terracotta text-white font-sans font-medium text-lg px-8 py-4 rounded-lg hover:bg-terracotta/90 transition-colors shadow-lg cursor-pointer"
                >
                  Get the Guide — $27
                </a>
                <a
                  href={GUMROAD_PREMIUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center bg-deep-sage text-white font-sans font-medium text-lg px-8 py-4 rounded-lg hover:bg-deep-sage/90 transition-colors shadow-lg border-2 border-deep-sage cursor-pointer"
                >
                  Get Guide + Audio — $39
                </a>
              </div>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-3 bg-warm-linen border border-sand/30 rounded-xl p-6 text-center">
                <ShieldCheck className="text-muted-teal flex-shrink-0" size={28} />
                <div>
                  <p className="font-sans font-medium text-soft-black">30-Day Money-Back Guarantee</p>
                  <p className="font-sans text-sm text-soft-black/60">Not for you? Full refund, no questions asked. We'd rather you try it risk-free.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Footer Crisis Resources */}
        <section className="bg-soft-black text-white/60 py-10 px-6 font-sans text-[13px]">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <p className="text-white/50">Need support? <strong className="text-white/70">NEDA Helpline:</strong> 1-800-931-2237 | <strong className="text-white/70">988 Crisis Lifeline:</strong> Call or text 988</p>
            <p>This content is educational only. Not a substitute for professional help. <Link to="/privacy" className="underline hover:text-white">Privacy</Link> · <Link to="/terms" className="underline hover:text-white">Terms</Link></p>
          </div>
        </section>
      </main>
    </div>
  );
}
