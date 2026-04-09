import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';
import { Logo } from '../components/Logo';

const COURSE_PASSWORD =
  (import.meta as { env?: Record<string, string> }).env?.VITE_COURSE_PASSWORD ||
  'stopemotionaleating';

export function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === COURSE_PASSWORD) {
      localStorage.setItem('course_access', 'granted');
      navigate('/course');
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      <header className="py-6 px-6 flex justify-center items-center">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={28} />
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.15 }}
              className="w-16 h-16 bg-deep-sage rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Lock className="text-warm-linen" size={28} strokeWidth={1.5} />
            </motion.div>

            <h1 className="font-serif font-semibold text-4xl md:text-5xl text-deep-sage mb-4 leading-tight">
              Enter your access password
            </h1>
            <p className="font-sans text-lg text-soft-black mb-10 leading-relaxed">
              Enter the password you received after purchase to unlock the 21-Day Guide.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                required
                placeholder="Your access password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                className={`w-full bg-white border-2 rounded-xl px-6 py-4 text-lg font-sans text-soft-black placeholder:text-soft-black/40 focus:outline-none focus:ring-1 mb-2 transition-colors ${
                  error
                    ? 'border-terracotta focus:border-terracotta focus:ring-terracotta'
                    : 'border-sand focus:border-deep-sage focus:ring-deep-sage'
                }`}
              />
              {error && (
                <p className="font-sans text-sm text-terracotta mb-4 text-left">
                  That password doesn't match. Please check your purchase email.
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-terracotta text-white font-sans font-medium text-xl px-8 py-5 rounded-xl hover:bg-terracotta/90 transition-colors shadow-lg mt-4 mb-6 cursor-pointer"
              >
                Unlock the Guide
              </button>
              <p className="font-sans text-sm text-soft-black/60">
                Don't have a password yet?{' '}
                <a
                  href="https://stopemotionaleating.gumroad.com/l/guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-deep-sage underline hover:opacity-80"
                >
                  Buy the guide — $27
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
