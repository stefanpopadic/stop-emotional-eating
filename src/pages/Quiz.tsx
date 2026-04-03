import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { quizFlow, calculateQuizResult } from '../lib/quizData';
import { Brain, LineChart, Shell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

const loadingMessages = [
  "Analyzing your responses...",
  "Mapping your brain pattern...",
  "Identifying your triggers...",
  "Building your personalized profile...",
  "Your results are almost ready..."
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

  const currentStep = quizFlow[currentStepIndex];
  const totalSteps = quizFlow.length;
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  // Loading animation sequence
  useEffect(() => {
    if (!showLoading) return;
    if (loadingStep < loadingMessages.length - 1) {
      const timer = setTimeout(() => setLoadingStep(prev => prev + 1), 1200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setLoadingDone(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [showLoading, loadingStep]);

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      const nextStep = quizFlow[currentStepIndex + 1];
      // If next step is email, show loading first
      if (nextStep.type === 'email') {
        setShowLoading(true);
      } else {
        setCurrentStepIndex(prev => prev + 1);
      }
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const resultType = calculateQuizResult(answers);

    // Send email to Emailit in the background — don't block navigation
    try {
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, quizType: resultType, answers }),
      });
    } catch {
      // Silently fail — don't block the user
    }

    const params = new URLSearchParams(answers);
    if (firstName) params.append('name', firstName);
    navigate(`/results/${resultType}?${params.toString()}`);
  };

  // Loading screen
  if (showLoading && !loadingDone) {
    return (
      <div className="min-h-screen bg-warm-linen flex flex-col">
        <header className="py-6 px-6 flex justify-center items-center">
          <Link to="/" className="text-deep-sage">
            <Logo height={28} />
          </Link>
        </header>

        <main className="flex-grow flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated brain icon */}
              <div className="relative w-24 h-24 mx-auto mb-12">
                <motion.div
                  className="absolute inset-0 rounded-full bg-muted-teal/20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full bg-muted-teal/30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                <div className="absolute inset-4 rounded-full bg-deep-sage flex items-center justify-center">
                  <Brain className="text-warm-linen" size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* Loading messages */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-sans text-xl text-deep-sage font-medium mb-8"
                >
                  {loadingMessages[loadingStep]}
                </motion.p>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex justify-center gap-2">
                {loadingMessages.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i <= loadingStep ? 'bg-muted-teal' : 'bg-sand/40'}`}
                    animate={i === loadingStep ? { scale: [1, 1.4, 1] } : {}}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  // After loading, show email step
  if (showLoading && loadingDone) {
    const emailStep = quizFlow[quizFlow.length - 1];
    return (
      <div className="min-h-screen bg-warm-linen flex flex-col">
        <header className="py-6 px-6 flex justify-center items-center">
          <Link to="/" className="text-deep-sage">
            <Logo height={28} />
          </Link>
        </header>

        <div className="w-full h-1.5 bg-oat">
          <div className="h-full bg-muted-teal w-full" />
        </div>

        <main className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              {/* Success checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-16 h-16 bg-muted-teal rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>

              <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-4 leading-tight">
                {emailStep.headline}
              </h2>
              <p className="font-sans text-xl text-soft-black mb-10 leading-relaxed max-w-lg mx-auto">
                {emailStep.subhead}
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white border-2 border-sand rounded-xl px-6 py-4 text-lg font-sans text-soft-black placeholder:text-soft-black/40 focus:outline-none focus:border-deep-sage focus:ring-1 focus:ring-deep-sage mb-4 transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-2 border-sand rounded-xl px-6 py-4 text-lg font-sans text-soft-black placeholder:text-soft-black/40 focus:outline-none focus:border-deep-sage focus:ring-1 focus:ring-deep-sage mb-6 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-terracotta text-white font-sans font-medium text-xl px-8 py-5 rounded-xl hover:bg-terracotta/90 transition-colors shadow-lg mb-6 cursor-pointer"
                >
                  {emailStep.cta}
                </button>
                <p className="font-sans text-sm text-soft-black/60 mb-4">
                  {emailStep.belowCta}
                </p>
                <p className="font-sans text-xs text-soft-black/40 uppercase tracking-wider">
                  {emailStep.privacy}
                </p>
              </form>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  const renderStep = () => {
    if (currentStep.type === 'intro') {
      return (
        <motion.div
          key="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-6 leading-tight">
            {currentStep.headline}
          </h1>
          <p className="font-sans text-xl text-soft-black mb-10 leading-relaxed">
            {currentStep.subhead}
          </p>
          <button
            onClick={handleNext}
            className="w-full md:w-auto bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 transition-colors shadow-lg mb-6 cursor-pointer"
          >
            {currentStep.cta}
          </button>
          <p className="font-sans text-sm text-soft-black/70 mb-8">
            {currentStep.belowCta}
          </p>
          <div className="inline-flex items-center gap-2 bg-oat px-4 py-2 rounded-full">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-sand border-2 border-warm-linen"></div>
              ))}
            </div>
            <span className="font-sans text-sm font-medium text-deep-sage">
              {currentStep.socialProof}
            </span>
          </div>
        </motion.div>
      );
    }

    if (currentStep.type === 'question') {
      return (
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-serif font-semibold text-3xl md:text-4xl text-deep-sage mb-8 text-center leading-snug">
            {currentStep.question}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentStep.options?.map((option) => {
              const isSelected = answers[currentStep.id] === option.value;
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(currentStep.id, option.value)}
                  className={`text-left p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-deep-sage/10 border-deep-sage border-2'
                      : 'bg-oat border-sand hover:border-deep-sage hover:shadow-sm'
                  }`}
                >
                  <span className="font-sans text-lg text-soft-black leading-relaxed">
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      );
    }

    if (currentStep.type === 'value-drop') {
      const Icon = currentStep.icon === 'brain' ? Brain : currentStep.icon === 'chart' ? LineChart : Shell;
      return (
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          {/* Full-width card with centered content */}
          <div className="bg-deep-sage rounded-2xl p-8 md:p-12 text-warm-linen text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-16 h-16 bg-warm-linen/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Icon size={32} strokeWidth={1.5} />
            </motion.div>

            <div className="font-sans text-lg md:text-xl leading-relaxed whitespace-pre-wrap mb-8 max-w-lg mx-auto opacity-90">
              {currentStep.text}
            </div>

            {currentStep.subtext && (
              <p className="font-sans text-xs text-warm-linen/50 uppercase tracking-wider mb-10">
                {currentStep.subtext}
              </p>
            )}

            <button
              onClick={handleNext}
              className="bg-terracotta text-white font-sans font-medium text-lg px-10 py-4 rounded-lg hover:bg-terracotta/90 transition-colors shadow-md cursor-pointer"
            >
              {currentStep.cta}
            </button>
          </div>
        </motion.div>
      );
    }

    // Email step is now handled by the loading flow above
    return null;
  };

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 flex justify-center items-center">
        <Link to="/" className="text-deep-sage">
          <Logo height={28} />
        </Link>
      </header>

      {/* Progress Bar */}
      {currentStepIndex > 0 && (
        <div className="w-full h-1.5 bg-oat">
          <motion.div
            className="h-full bg-muted-teal"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Quiz Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
