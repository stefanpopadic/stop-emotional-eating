import { useScroll } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

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
        <Link to="/" className="cursor-pointer text-deep-sage">
          <Logo height={32} />
        </Link>
        <Link
          to="/quiz"
          className={`hidden md:inline-flex font-sans font-medium text-sm px-6 py-2.5 rounded-lg transition-all duration-300 ${
            isScrolled
              ? 'bg-terracotta text-white hover:bg-terracotta/90'
              : 'bg-terracotta/90 text-white hover:bg-terracotta'
          }`}
        >
          Take the Free Quiz
        </Link>
      </div>
    </header>
  );
}
