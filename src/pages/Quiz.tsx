import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { quizFlow, calculateQuizResult } from '../lib/quizData';
import { Brain, LineChart, Shell } from 'lucide-react';

export function Quiz() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const currentStep = quizFlow[currentStepIndex];
  const totalSteps = quizFlow.length;
  // Calculate progress based on actual questions answered, ignoring value drops for the bar
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    // Small delay to show selection state before moving on
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Calculate result
    const resultType = calculateQuizResult(answers);
    
    // Build query params
    const params = new URLSearchParams(answers);
    params.append('email', email);

    // Redirect
    navigate(`/results/${resultType}?${params.toString()}`);
  };

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
            className="w-full md:w-auto bg-terracotta text-white font-sans font-medium text-xl px-12 py-5 rounded-lg hover:bg-terracotta/90 transition-colors shadow-lg mb-6"
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
                  className={`text-left p-6 rounded-xl border transition-all duration-200 ${
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
          className="bg-oat rounded-2xl p-8 md:p-12 border-l-4 border-muted-teal shadow-sm"
        >
          <div className="w-16 h-16 bg-warm-linen rounded-full flex items-center justify-center mb-8 text-deep-sage">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <div className="font-sans text-xl md:text-2xl text-deep-sage leading-relaxed whitespace-pre-wrap mb-10">
            {currentStep.text}
          </div>
          {currentStep.subtext && (
            <p className="font-sans text-sm text-soft-black/60 mb-10">
              {currentStep.subtext}
            </p>
          )}
          <button 
            onClick={handleNext}
            className="w-full md:w-auto bg-terracotta text-white font-sans font-medium text-lg px-10 py-4 rounded-lg hover:bg-terracotta/90 transition-colors shadow-md"
          >
            {currentStep.cta}
          </button>
        </motion.div>
      );
    }

    if (currentStep.type === 'email') {
      return (
        <motion.div 
          key="email"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-6 leading-tight">
            {currentStep.headline}
          </h2>
          <p className="font-sans text-xl text-soft-black mb-10 leading-relaxed max-w-lg mx-auto">
            {currentStep.subhead}
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input 
              type="email" 
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border-2 border-sand rounded-xl px-6 py-4 text-lg font-sans text-soft-black placeholder:text-soft-black/40 focus:outline-none focus:border-deep-sage focus:ring-1 focus:ring-deep-sage mb-6 transition-colors"
            />
            <button 
              type="submit"
              className="w-full bg-terracotta text-white font-sans font-medium text-xl px-8 py-5 rounded-xl hover:bg-terracotta/90 transition-colors shadow-lg mb-6"
            >
              {currentStep.cta}
            </button>
            <p className="font-sans text-sm text-soft-black/60 mb-4">
              {currentStep.belowCta}
            </p>
            <p className="font-sans text-xs text-soft-black/40 uppercase tracking-wider">
              {currentStep.privacy}
            </p>
          </form>
        </motion.div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 flex justify-center items-center">
        <div className="flex items-center gap-3">
          <Shell className="text-deep-sage" size={28} strokeWidth={1.5} />
          <span className="font-sans font-bold text-sm tracking-widest uppercase text-deep-sage">
            Stop Emotional Eating
          </span>
        </div>
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
