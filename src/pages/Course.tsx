import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, CalendarDays, FileText, Download } from 'lucide-react';
import { Logo } from '../components/Logo';

export function Course() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('course_access') !== 'granted') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('course_access');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-warm-linen flex flex-col">
      <header className="py-5 px-6 flex items-center justify-between bg-warm-linen border-b border-sand/20 sticky top-0 z-50 backdrop-blur-md bg-warm-linen/92">
        <Link to="/" className="text-deep-sage hover:opacity-80 transition-opacity">
          <Logo height={28} />
        </Link>
        <button
          onClick={handleLogout}
          className="font-sans text-sm text-soft-black/60 hover:text-deep-sage transition-colors"
        >
          Sign out
        </button>
      </header>

      <main className="flex-grow py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-oat font-sans font-medium text-xs uppercase tracking-widest text-deep-sage px-4 py-2 rounded-full mb-6">
              Welcome to the Guide
            </span>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl text-deep-sage mb-6 leading-[1.1]">
              You're in.
            </h1>
            <p className="font-sans text-xl text-soft-black leading-relaxed max-w-xl mx-auto">
              Everything you need to break the emotional eating loop — in one place. Bookmark this page.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.a
              href="/downloads/stop-emotional-eating-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block bg-white rounded-2xl p-8 md:p-10 border border-sand/30 hover:border-deep-sage hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-deep-sage rounded-xl flex items-center justify-center">
                  <BookOpen className="text-warm-linen" size={26} strokeWidth={1.5} />
                </div>
                <div className="flex-grow">
                  <h2 className="font-serif font-semibold text-2xl md:text-3xl text-deep-sage mb-2">
                    The Stop Emotional Eating Guide
                  </h2>
                  <p className="font-sans text-soft-black/70 leading-relaxed mb-4">
                    The complete framework — every trigger type, every craving pattern, mapped to specific actions that work with your biology instead of against it.
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans font-medium text-terracotta group-hover:gap-3 transition-all">
                    <Download size={18} /> Download PDF
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="/downloads/stop-emotional-eating-21-day-tracker.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block bg-white rounded-2xl p-8 md:p-10 border border-sand/30 hover:border-deep-sage hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-muted-teal rounded-xl flex items-center justify-center">
                  <CalendarDays className="text-warm-linen" size={26} strokeWidth={1.5} />
                </div>
                <div className="flex-grow">
                  <h2 className="font-serif font-semibold text-2xl md:text-3xl text-deep-sage mb-2">
                    The 21-Day Craving Tracker
                  </h2>
                  <p className="font-sans text-soft-black/70 leading-relaxed mb-4">
                    Daily prompts that make your pattern visible in real time. Most people say by week 2, they see the craving coming before it arrives.
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans font-medium text-terracotta group-hover:gap-3 transition-all">
                    <Download size={18} /> Download PDF
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="/downloads/craving-decoder-cheat-sheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="block bg-white rounded-2xl p-8 md:p-10 border border-sand/30 hover:border-deep-sage hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-terracotta rounded-xl flex items-center justify-center">
                  <FileText className="text-warm-linen" size={26} strokeWidth={1.5} />
                </div>
                <div className="flex-grow">
                  <h2 className="font-serif font-semibold text-2xl md:text-3xl text-deep-sage mb-2">
                    The Craving Decoder Cheat Sheet
                  </h2>
                  <p className="font-sans text-soft-black/70 leading-relaxed mb-4">
                    One page, goes on your fridge. Craving hits → check the sheet → know what to do. No thinking required in the moment.
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans font-medium text-terracotta group-hover:gap-3 transition-all">
                    <Download size={18} /> Download PDF
                  </span>
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-deep-sage text-warm-linen rounded-2xl p-8 md:p-10 text-center"
          >
            <p className="font-serif text-2xl md:text-3xl leading-snug mb-3">
              Need help?
            </p>
            <p className="font-sans text-warm-linen/80 leading-relaxed">
              Email{' '}
              <a href="mailto:hello@stopemotionaleating.guide" className="underline hover:text-warm-linen">
                hello@stopemotionaleating.guide
              </a>{' '}
              and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </main>

      <footer className="bg-soft-black text-white/60 py-10 px-6 font-sans text-[13px]">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p>
            <Link to="/privacy" className="underline hover:text-white">Privacy</Link>{' · '}
            <Link to="/terms" className="underline hover:text-white">Terms</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
