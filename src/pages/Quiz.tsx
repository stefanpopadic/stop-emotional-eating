import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { quizFlow, calculateQuizResult } from '../lib/quizData';
import { Logo } from '../components/Logo';

const loadingMessages = [
  'Reading your answers',
  'Spotting your pattern',
  'Mapping your triggers',
  'Building your result',
  'Almost there',
];

export function Quiz() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const navigate = useNavigate();

  const resetQuiz = () => {
    setCurrentStepIndex(0);
    setAnswers({});
    setFirstName('');
    setEmail('');
    setShowLoading(false);
    setLoadingStep(0);
    setLoadingDone(false);
  };

  const currentStep = quizFlow[currentStepIndex];
  const totalSteps = quizFlow.length;

  useEffect(() => {
    if (!showLoading) return;
    if (loadingStep < loadingMessages.length - 1) {
      const timer = setTimeout(() => setLoadingStep((p) => p + 1), 1100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setLoadingDone(true), 1100);
      return () => clearTimeout(timer);
    }
  }, [showLoading, loadingStep]);

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      const nextStep = quizFlow[currentStepIndex + 1];
      if (nextStep.type === 'email') {
        setShowLoading(true);
      } else {
        setCurrentStepIndex((p) => p + 1);
      }
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setTimeout(() => handleNext(), 280);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const resultType = calculateQuizResult(answers);
    try {
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, quizType: resultType, answers }),
      });
    } catch {
      /* silent */
    }
    const params = new URLSearchParams(answers);
    if (firstName) params.append('name', firstName);
    navigate(`/results/${resultType}?${params.toString()}`);
  };

  // ══ LOADING ══
  if (showLoading && !loadingDone) {
    return (
      <Shell>
        <main className="flex-grow flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-24 h-24 mx-auto mb-12">
                <motion.div
                  className="absolute inset-0 rounded-full border border-deep-sage/30"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border border-deep-sage/40"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.1, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />
                <div className="absolute inset-6 rounded-full bg-deep-sage" />
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif italic text-2xl md:text-3xl text-deep-sage"
                >
                  {loadingMessages[loadingStep]}
                </motion.p>
              </AnimatePresence>

              <div className="flex justify-center gap-3 mt-10">
                {loadingMessages.map((_, i) => (
                  <span
                    key={i}
                    className={`h-px w-6 transition-colors duration-500 ${
                      i <= loadingStep ? 'bg-deep-sage' : 'bg-soft-black/15'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </Shell>
    );
  }

  // ══ EMAIL STEP ══
  if (showLoading && loadingDone) {
    const emailStep = quizFlow[quizFlow.length - 1];
    return (
      <Shell onLogoClick={resetQuiz}>
        <main className="flex-grow flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-10 bg-muted-teal" />
                <span className="eyebrow text-muted-teal">Your result is ready</span>
              </div>

              <h2 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl text-deep-sage leading-[1.0] tracking-tight mb-8 text-balance">
                {emailStep.headline}
              </h2>
              <p className="font-serif italic text-xl md:text-2xl text-soft-black/80 leading-relaxed mb-12 max-w-lg">
                {emailStep.subhead}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="eyebrow block mb-2">First name</label>
                  <input
                    type="text"
                    placeholder="Stefan"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-transparent border-b border-soft-black/25 py-3 text-lg font-sans text-soft-black placeholder:text-soft-black/30 focus:outline-none focus:border-deep-sage transition-colors"
                  />
                </div>
                <div>
                  <label className="eyebrow block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-soft-black/25 py-3 text-lg font-sans text-soft-black placeholder:text-soft-black/30 focus:outline-none focus:border-deep-sage transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 bg-terracotta text-warm-linen font-sans text-lg px-8 py-4 rounded-md hover:bg-terracotta/90 transition-colors"
                >
                  {emailStep.cta}
                </button>
                <p className="font-sans text-sm text-soft-black/60 leading-relaxed">
                  {emailStep.belowCta}
                </p>
              </form>
            </motion.div>
          </div>
        </main>
      </Shell>
    );
  }

  // ══ QUESTION ══
  if (currentStep.type === 'question') {
    return (
      <Shell>
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12 md:py-16">
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="numeral text-lg">{String(currentStepIndex + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-grow bg-soft-black/15" />
                  <span className="eyebrow">{currentStepIndex + 1} of {totalSteps}</span>
                </div>

                <h2 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-deep-sage leading-[1.05] tracking-tight mb-12 text-balance">
                  {currentStep.question}
                </h2>

                <div className="divide-y divide-soft-black/15 border-t border-b border-soft-black/15">
                  {currentStep.options?.map((option, i) => {
                    const isSelected = answers[currentStep.id] === option.value;
                    const letter = String.fromCharCode(65 + i);
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(currentStep.id, option.value)}
                        className={`w-full text-left py-6 flex gap-6 items-baseline transition-colors group ${
                          isSelected
                            ? 'bg-deep-sage/5'
                            : 'hover:bg-deep-sage/[0.03]'
                        }`}
                      >
                        <span
                          className={`font-serif text-2xl md:text-3xl w-8 shrink-0 pl-2 transition-colors ${
                            isSelected ? 'text-deep-sage' : 'text-sand'
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="font-sans text-base sm:text-lg text-soft-black leading-[1.55] pr-4">
                          {option.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </Shell>
    );
  }

  // ══ VALUE-DROP ══
  if (currentStep.type === 'value-drop') {
    return (
      <Shell>
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-16 md:py-24">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl"
          >
            <div className="mb-8">
              <span className="eyebrow text-terracotta">An interlude</span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-deep-sage leading-[1.25] tracking-tight mb-10 whitespace-pre-line">
              {currentStep.text}
            </blockquote>

            {currentStep.subtext && (
              <p className="eyebrow mb-12">{currentStep.subtext}</p>
            )}

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-3 text-deep-sage font-sans text-base border-b border-deep-sage pb-1 hover:gap-5 transition-all"
            >
              {currentStep.cta}
              <span aria-hidden>→</span>
            </button>
          </motion.div>
        </main>
      </Shell>
    );
  }

  return null;
}

// ── Shell & progress ─────────────────────────────────────────────────

function Shell({ children, onLogoClick }: { children: React.ReactNode; onLogoClick?: () => void }) {
  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      <header className="px-4 sm:px-8 py-5 flex justify-between items-center border-b border-soft-black/10">
        {onLogoClick ? (
          <button onClick={onLogoClick} className="text-deep-sage hover:opacity-70 transition-opacity">
            <Logo height={34} />
          </button>
        ) : (
          <Link to="/" className="text-deep-sage hover:opacity-70 transition-opacity">
            <Logo height={34} />
          </Link>
        )}
        <span className="font-serif italic text-sm sm:text-base text-soft-black/70 hidden sm:inline">
          Science. Not shame.
        </span>
      </header>
      {children}
    </div>
  );
}

