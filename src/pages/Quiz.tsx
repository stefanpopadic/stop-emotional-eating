import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Check, ArrowRight } from 'lucide-react';
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
  const progress = showLoading
    ? 100
    : Math.round(((currentStepIndex + 1) / totalSteps) * 100);

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

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((p) => p - 1);
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setTimeout(() => handleNext(), 420);
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
      <Shell progress={100}>
        <main className="flex-grow flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center gap-2 mb-10">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="block w-3 h-3 rounded-full bg-deep-sage"
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.18,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-sans font-medium text-xl md:text-2xl text-deep-sage"
                >
                  {loadingMessages[loadingStep]}…
                </motion.p>
              </AnimatePresence>
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
      <Shell progress={100} onLogoClick={resetQuiz}>
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(58,58,58,0.12)] p-7 sm:p-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-mist/20 text-deep-sage text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-sage" />
              Result ready
            </div>

            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-soft-black leading-[1.15] tracking-tight mb-3">
              {emailStep.headline}
            </h2>
            <p className="font-sans text-base text-soft-black/70 leading-relaxed mb-8">
              {emailStep.subhead}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-soft-black/70 mb-1.5">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-warm-linen/60 border border-soft-black/10 rounded-xl px-4 py-3 text-base text-soft-black placeholder:text-soft-black/35 focus:outline-none focus:border-deep-sage focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-soft-black/70 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-warm-linen/60 border border-soft-black/10 rounded-xl px-4 py-3 text-base text-soft-black placeholder:text-soft-black/35 focus:outline-none focus:border-deep-sage focus:bg-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="group w-full mt-2 inline-flex items-center justify-center gap-2 bg-terracotta text-warm-linen font-sans font-medium text-base px-6 py-4 rounded-full hover:bg-terracotta/90 active:scale-[0.98] transition-all"
              >
                {emailStep.cta}
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <p className="text-xs text-soft-black/55 leading-relaxed text-center">
                {emailStep.belowCta}
              </p>
            </form>
          </motion.div>
        </main>
      </Shell>
    );
  }

  // ══ QUESTION ══
  if (currentStep.type === 'question') {
    return (
      <Shell
        progress={progress}
        onBack={currentStepIndex > 0 ? handleBack : undefined}
        stepLabel={`${currentStepIndex + 1} / ${totalSteps}`}
      >
        <main className="flex-grow flex items-start sm:items-center justify-center px-4 sm:px-6 pt-6 sm:pt-10 pb-10">
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-sans font-semibold text-2xl sm:text-3xl md:text-4xl text-soft-black leading-[1.2] tracking-tight mb-8 sm:mb-10 text-balance">
                  {currentStep.question}
                </h2>

                <div className="flex flex-col gap-3">
                  {currentStep.options?.map((option) => {
                    const isSelected = answers[currentStep.id] === option.value;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(currentStep.id, option.value)}
                        className={`group relative w-full text-left rounded-2xl border-2 px-5 py-4 sm:px-6 sm:py-5 transition-all active:scale-[0.99] flex items-center gap-4 ${
                          isSelected
                            ? 'border-deep-sage bg-deep-sage/5 shadow-[0_4px_20px_-8px_rgba(114,140,123,0.4)]'
                            : 'border-soft-black/10 bg-white hover:border-deep-sage/40 hover:shadow-[0_4px_20px_-12px_rgba(58,58,58,0.15)]'
                        }`}
                      >
                        <span className="font-sans text-base sm:text-[17px] text-soft-black leading-[1.45] flex-grow">
                          {option.text}
                        </span>
                        <span
                          className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? 'border-deep-sage bg-deep-sage text-warm-linen'
                              : 'border-soft-black/20 bg-transparent text-transparent group-hover:border-deep-sage/40'
                          }`}
                        >
                          <Check size={14} strokeWidth={3} />
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
      <Shell
        progress={progress}
        onBack={currentStepIndex > 0 ? handleBack : undefined}
        stepLabel={`${currentStepIndex + 1} / ${totalSteps}`}
      >
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-xl bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(58,58,58,0.12)] p-7 sm:p-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-medium mb-6">
              Did you know
            </div>

            <p className="font-sans text-lg sm:text-xl text-soft-black leading-[1.55] mb-8 whitespace-pre-line">
              {currentStep.text}
            </p>

            {currentStep.subtext && (
              <p className="text-xs font-medium uppercase tracking-wider text-soft-black/55 mb-8">
                {currentStep.subtext}
              </p>
            )}

            <button
              onClick={handleNext}
              className="group w-full inline-flex items-center justify-center gap-2 bg-deep-sage text-warm-linen font-sans font-medium text-base px-6 py-4 rounded-full hover:bg-deep-sage/90 active:scale-[0.98] transition-all"
            >
              {currentStep.cta}
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </main>
      </Shell>
    );
  }

  return null;
}

// ── Shell & progress ─────────────────────────────────────────────────

function Shell({
  children,
  onLogoClick,
  onBack,
  progress = 0,
  stepLabel,
}: {
  children: React.ReactNode;
  onLogoClick?: () => void;
  onBack?: () => void;
  progress?: number;
  stepLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-warm-linen flex flex-col pb-24">
      <header className="px-5 sm:px-8 pt-5 pb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          <button
            onClick={onBack}
            disabled={!onBack}
            aria-label="Back"
            className={`w-9 h-9 -ml-2 rounded-full flex items-center justify-center transition-all ${
              onBack
                ? 'text-soft-black/70 hover:bg-soft-black/5 hover:text-soft-black'
                : 'text-transparent pointer-events-none'
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {onLogoClick ? (
            <button
              onClick={onLogoClick}
              className="text-deep-sage hover:opacity-70 transition-opacity"
              aria-label="Restart quiz"
            >
              <Logo height={28} />
            </button>
          ) : (
            <Link
              to="/"
              className="text-deep-sage hover:opacity-70 transition-opacity"
              aria-label="Home"
            >
              <Logo height={28} />
            </Link>
          )}
        </div>

        <span
          className={`text-sm font-medium tabular-nums ${
            stepLabel ? 'text-soft-black/70' : 'text-transparent'
          }`}
        >
          {stepLabel ?? '0'}
        </span>
      </header>

      {children}

      <div className="fixed bottom-0 left-0 right-0 bg-warm-linen/95 backdrop-blur-sm border-t border-soft-black/10 px-4 sm:px-6 py-4 z-10">
        <div className="max-w-xl mx-auto flex items-center gap-3">
          <div className="flex-grow h-2.5 rounded-full bg-soft-black/10 overflow-hidden">
            <motion.div
              className="h-full bg-deep-sage rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs font-semibold tabular-nums text-deep-sage w-10 text-right">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
