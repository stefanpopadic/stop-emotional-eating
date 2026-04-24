import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
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
        {/* Calm botanical background */}
        <div aria-hidden className="fixed inset-0 -z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-mist/30 via-warm-linen to-sage-mist/20" />
          <svg
            className="absolute -top-16 -left-20 w-[420px] h-[420px] text-deep-sage/15"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          >
            <path d="M120 320 C 120 220, 60 180, 30 80" />
            <path d="M120 320 C 80 280, 50 260, 20 250" />
            <path d="M120 320 C 80 280, 60 240, 25 220" />
            <path d="M120 320 C 90 260, 70 220, 35 180" />
            <path d="M120 320 C 100 240, 80 180, 55 130" />
            <path d="M120 320 C 110 220, 100 160, 90 100" />
          </svg>
          <svg
            className="absolute -bottom-24 -right-24 w-[480px] h-[480px] text-deep-sage/10"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          >
            <path d="M280 80 C 280 180, 340 220, 370 320" />
            <path d="M280 80 C 320 120, 350 140, 380 150" />
            <path d="M280 80 C 320 120, 340 160, 375 180" />
            <path d="M280 80 C 310 140, 330 180, 365 220" />
            <path d="M280 80 C 300 160, 320 220, 345 270" />
          </svg>
        </div>

        <main className="relative flex-grow flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            {/* LEFT — form card */}
            <div className="order-2 md:order-1 bg-white rounded-3xl shadow-[0_12px_48px_-16px_rgba(58,58,58,0.18)] p-7 sm:p-10 flex flex-col">
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-sage-mist/25 text-deep-sage text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-deep-sage animate-pulse" />
                Result ready
              </div>

              <h2 className="font-sans font-bold text-2xl sm:text-[28px] text-soft-black leading-[1.15] tracking-tight mb-3">
                {emailStep.headline}
              </h2>
              <p className="font-sans text-[15px] text-soft-black/70 leading-relaxed mb-7">
                {emailStep.subhead}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 mt-auto">
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
                <p className="text-xs text-soft-black/55 leading-relaxed text-center pt-1">
                  {emailStep.belowCta}
                </p>
              </form>
            </div>

            {/* RIGHT — preview of the result they'll get */}
            <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-deep-sage/15 via-sage-mist/30 to-warm-linen min-h-[320px] md:min-h-0 flex items-center justify-center p-6 sm:p-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="w-full max-w-sm bg-white rounded-2xl shadow-[0_20px_60px_-20px_rgba(58,58,58,0.25)] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2 text-deep-sage">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 12 m -8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0" />
                      <path d="M12 12 m -4 0 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0" opacity="0.6" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                    <span className="font-sans font-semibold text-xs tracking-wide uppercase">Your Blocker</span>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full border border-deep-sage/40 text-deep-sage">
                    2026
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-[22px] text-soft-black leading-[1.2] mb-2">
                  Your weight-loss<br />blocker
                </h3>
                <p className="font-sans text-[13px] text-soft-black/60 leading-relaxed mb-5">
                  Which loop is keeping the weight on — and the first step to break it this week.
                </p>

                <div className="space-y-2.5 mb-6">
                  {[
                    'Your specific blocker & loop',
                    'Why the weight keeps coming back',
                    'The first step to break the cycle',
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-2.5">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      <span className="font-sans text-[13px] text-soft-black/80 leading-snug">{line}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-1 flex-1 rounded-full bg-deep-sage" />
                  <span className="h-1 flex-1 rounded-full bg-deep-sage/70" />
                  <span className="h-1 flex-1 rounded-full bg-deep-sage/40" />
                  <span className="h-1 flex-1 rounded-full bg-deep-sage/20" />
                  <span className="h-1 flex-1 rounded-full bg-deep-sage/20" />
                </div>
              </motion.div>
            </div>
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
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      >
        <main className="flex-grow flex items-center justify-center px-5 sm:px-6 py-10">
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-sans font-bold text-[26px] sm:text-3xl md:text-[34px] text-soft-black leading-[1.2] tracking-tight mb-8 sm:mb-10 text-balance">
                  {currentStep.question}
                </h2>

                <div className="flex flex-col gap-3">
                  {currentStep.options?.map((option) => {
                    const isSelected = answers[currentStep.id] === option.value;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(currentStep.id, option.value)}
                        className={`w-full text-left rounded-2xl border px-5 py-4 sm:px-6 sm:py-[18px] transition-colors active:scale-[0.99] ${
                          isSelected
                            ? 'border-deep-sage bg-deep-sage/5'
                            : 'border-soft-black/15 bg-transparent hover:border-deep-sage/50 hover:bg-soft-black/[0.02]'
                        }`}
                      >
                        <span className="font-sans text-base sm:text-[17px] text-soft-black leading-[1.45]">
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
    const illustration = valueDropIllustrations[currentStep.icon as keyof typeof valueDropIllustrations];
    const paragraphs = currentStep.text.split('\n\n').filter(Boolean);
    const lead = paragraphs[0] ?? currentStep.text;
    const trailing = paragraphs.slice(1).join('\n\n');

    return (
      <Shell
        progress={progress}
        onBack={currentStepIndex > 0 ? handleBack : undefined}
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
        bottomAction={
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="group inline-flex items-center justify-center gap-2 bg-deep-sage text-warm-linen font-sans font-semibold text-sm sm:text-base px-6 py-2.5 rounded-full hover:bg-deep-sage/90 active:scale-[0.99] transition-all"
            >
              {currentStep.cta}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        }
      >
        <main className="flex-grow px-5 sm:px-6 pt-6 pb-12">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-md mx-auto"
          >
            <p className="font-sans text-lg sm:text-xl text-soft-black leading-[1.5] mb-8 whitespace-pre-line">
              {lead}
            </p>

            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-sage-mist/25 to-deep-sage/10 aspect-[4/5] sm:aspect-square flex items-center justify-center text-deep-sage p-10 mb-8">
              <div className="w-full h-full max-w-[280px]">
                {illustration}
              </div>
            </div>

            {trailing && (
              <p className="font-sans text-lg sm:text-xl text-soft-black leading-[1.5] mb-6 whitespace-pre-line">
                {trailing}
              </p>
            )}

            {currentStep.subtext && (
              <p className="text-xs font-medium uppercase tracking-wider text-soft-black/55">
                {currentStep.subtext}
              </p>
            )}
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
  currentStep,
  totalSteps,
  bottomAction,
}: {
  children: React.ReactNode;
  onLogoClick?: () => void;
  onBack?: () => void;
  progress?: number;
  currentStep?: number;
  totalSteps?: number;
  bottomAction?: React.ReactNode;
}) {
  const showCounter = currentStep != null && totalSteps != null;
  const showProgress = progress > 0;

  return (
    <div className={`min-h-screen bg-warm-linen flex flex-col pt-20 ${bottomAction ? 'pb-28' : ''}`}>
      <div className="fixed top-0 left-0 right-0 z-20 bg-warm-linen/95 backdrop-blur-sm">
      <header className="px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          {onBack && (
            <button
              onClick={onBack}
              aria-label="Back"
              className="-ml-2 w-9 h-9 inline-flex items-center justify-center rounded-full text-soft-black/70 hover:bg-soft-black/5 hover:text-soft-black transition-all"
            >
              <ChevronLeft size={22} />
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

        {showCounter ? (
          <span className="tabular-nums">
            <span className="font-sans font-bold text-base text-soft-black">{currentStep}</span>
            <span className="font-sans text-sm text-soft-black/50"> / {totalSteps}</span>
          </span>
        ) : (
          <span aria-hidden className="block w-px h-px" />
        )}
      </header>

      {/* Progress bar — top, full width, thin */}
      {showProgress && (
        <div className="px-4 sm:px-6 pb-2">
          <div className="h-1.5 rounded-full bg-soft-black/10 overflow-hidden">
            <motion.div
              className="h-full bg-deep-sage rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}
      </div>

      {children}

      {/* Sticky bottom CTA — only when bottomAction provided */}
      {bottomAction && (
        <div className="fixed bottom-0 left-0 right-0 bg-warm-linen/95 backdrop-blur-sm border-t border-soft-black/10 px-4 sm:px-6 py-4 z-10">
          <div className="max-w-md mx-auto">
            {bottomAction}
          </div>
        </div>
      )}
    </div>
  );
}
