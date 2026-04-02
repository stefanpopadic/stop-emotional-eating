import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function StickyMobileBar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-warm-linen/90 backdrop-blur-md border-t border-sand/20 p-4 pb-safe"
    >
      <Link
        to="/quiz"
        className="flex justify-center w-full bg-terracotta text-white font-sans font-medium text-[16px] px-[28px] py-[14px] rounded-lg shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
      >
        Take the Free Quiz
      </Link>
    </motion.div>
  );
}
