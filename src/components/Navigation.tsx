import { useScroll } from 'motion/react';
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <span className="font-serif font-semibold text-xl text-deep-sage tracking-wide">
            Stop Emotional Eating
          </span>
        </Link>
      </div>
    </header>
  );
}
