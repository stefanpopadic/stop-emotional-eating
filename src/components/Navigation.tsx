import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-warm-linen/92 backdrop-blur-md border-b border-sand/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-full bg-deep-sage/10 border border-deep-sage/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-deep-sage"></div>
          </div>
          <span className="font-serif font-semibold text-xl text-deep-sage tracking-wide">
            Stop Emotional Eating
          </span>
        </div>
        
        <Link 
          to="/quiz" 
          className="hidden md:inline-flex bg-terracotta text-white font-sans font-medium text-base px-[28px] py-[12px] rounded-lg hover:bg-terracotta/90 hover:-translate-y-[1px] transition-all duration-200 shadow-sm"
        >
          Take the Free Quiz
        </Link>
      </div>
    </header>
  );
}
