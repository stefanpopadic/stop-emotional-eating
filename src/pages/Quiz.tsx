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
    const illustration = valueDropIllustrations[currentStep.icon as keyof typeof valueDropIllustrations];
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
            className="w-full max-w-3xl bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(58,58,58,0.12)] p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] gap-6 sm:gap-8 md:gap-10 items-start">
              {/* Image / illustration */}
              <div className="flex sm:block justify-center">
                <div className="w-32 h-32 sm:w-full sm:h-auto sm:aspect-square rounded-2xl bg-gradient-to-br from-sage-mist/25 to-deep-sage/10 flex items-center justify-center text-deep-sage p-4 sm:p-6">
                  {illustration}
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-medium mb-5">
                  Did you know
                </div>

                <p className="font-sans text-base sm:text-lg text-soft-black leading-[1.55] mb-6 whitespace-pre-line">
                  {currentStep.text}
                </p>

                {currentStep.subtext && (
                  <p className="text-xs font-medium uppercase tracking-wider text-soft-black/55 mb-6">
                    {currentStep.subtext}
                  </p>
                )}

                <button
                  onClick={handleNext}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-deep-sage text-warm-linen font-sans font-medium text-base px-7 py-3.5 rounded-full hover:bg-deep-sage/90 active:scale-[0.98] transition-all"
                >
                  {currentStep.cta}
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </Shell>
    );
  }

  return null;
}

// ── Value-drop illustrations ─────────────────────────────────────────

const valueDropIllustrations = {
  brain: (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
      {/* brain outline */}
      <path d="M40 50 C 30 50, 28 38, 38 32 C 40 22, 56 20, 60 30 C 64 20, 80 22, 82 32 C 92 38, 90 50, 80 50 C 90 56, 88 70, 78 72 C 78 84, 64 86, 60 78 C 56 86, 42 84, 42 72 C 32 70, 30 56, 40 50 Z" />
      <path d="M60 30 L 60 78" strokeDasharray="2 3" />
      <path d="M48 44 Q 54 48, 48 56" />
      <path d="M72 44 Q 66 48, 72 56" />
      <path d="M44 64 Q 50 66, 50 72" />
      <path d="M76 64 Q 70 66, 70 72" />
      {/* cortisol arrows */}
      <path d="M22 30 L 32 36" strokeWidth="1.2" />
      <path d="M30 34 L 32 36 L 30 38" strokeWidth="1.2" />
      <path d="M98 30 L 88 36" strokeWidth="1.2" />
      <path d="M90 34 L 88 36 L 90 38" strokeWidth="1.2" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
      {/* axes */}
      <path d="M22 22 L 22 96 L 100 96" />
      {/* bars */}
      <rect x="32" y="74" width="10" height="22" fill="currentColor" opacity="0.15" />
      <rect x="32" y="74" width="10" height="22" />
      <rect x="50" y="60" width="10" height="36" fill="currentColor" opacity="0.25" />
      <rect x="50" y="60" width="10" height="36" />
      <rect x="68" y="42" width="10" height="54" fill="currentColor" opacity="0.4" />
      <rect x="68" y="42" width="10" height="54" />
      <rect x="86" y="30" width="10" height="66" fill="currentColor" opacity="0.55" />
      <rect x="86" y="30" width="10" height="66" />
      {/* trend line */}
      <path d="M37 70 L 55 56 L 73 38 L 91 26" strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="91" cy="26" r="2.5" fill="currentColor" />
    </svg>
  ),
  spiral: (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
      {/* spiral / loop */}
      <path d="M60 60 m -32 0 a 32 32 0 1 0 64 0 a 32 32 0 1 0 -64 0" />
      <path d="M60 60 m -22 0 a 22 22 0 1 0 44 0 a 22 22 0 1 0 -44 0" opacity="0.6" />
      <path d="M60 60 m -12 0 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0" opacity="0.4" />
      <circle cx="60" cy="60" r="3" fill="currentColor" />
      {/* arrow on outer ring */}
      <path d="M88 52 L 92 60 L 84 60" strokeWidth="1.4" />
    </svg>
  ),
};

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
      <header className="px-4 sm:px-6 pt-5 pb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              aria-label="Back"
              className="w-9 h-9 -ml-2 rounded-full flex items-center justify-center text-soft-black/70 hover:bg-soft-black/5 hover:text-soft-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {onLogoClick ? (
            <button
              onClick={onLogoClick}
              className="text-deep-sage hover:opacity-70 transition-opacity"
              aria-label="Restart quiz"
            >
              <Logo height={36} />
            </button>
          ) : (
            <Link
              to="/"
              className="text-deep-sage hover:opacity-70 transition-opacity"
              aria-label="Home"
            >
              <Logo height={36} />
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
