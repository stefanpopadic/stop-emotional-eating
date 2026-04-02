import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resultsData } from '../lib/resultsData';
import { Logo } from '../components/Logo';

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

            {/* Section 3: CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-8 pt-8 border-t border-sand/30"
            >
              <div className="font-sans text-xl md:text-2xl text-soft-black leading-relaxed whitespace-pre-wrap max-w-2xl mx-auto">
                {data.section3Intro}
              </div>

              {/* Product Image */}
              <div className="max-w-md mx-auto rounded-xl overflow-hidden border border-sand/30 mb-8">
                <div className="aspect-[4/3] bg-sand/20 flex items-center justify-center">
                  <span className="font-sans text-sm text-sand uppercase tracking-wider">Product image placeholder</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="w-full sm:w-auto bg-terracotta text-white font-sans font-medium text-lg px-8 py-4 rounded-lg hover:bg-terracotta/90 transition-colors shadow-lg cursor-pointer">
                  Get the Guide — $27
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-deep-sage text-deep-sage font-sans font-medium text-lg px-8 py-4 rounded-lg hover:bg-deep-sage hover:text-white transition-colors cursor-pointer">
                  Get Guide + Audio Course — $39
                </button>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
    </div>
  );
}
