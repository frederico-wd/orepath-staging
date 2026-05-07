import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-20 pointer-events-none"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} className="text-primary" />
      </motion.div>
    </motion.div>
  );
}
