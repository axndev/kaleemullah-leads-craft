import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5"
      >
        <div className="relative">
          {/* Animated circles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-20 rounded-full border border-primary/20"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-16 rounded-full border border-primary/30"
          />

          {/* Counter */}
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary via-primary-glow to-accent bg-clip-text text-transparent"
            >
              {count}%
            </motion.div>
            
            {/* Loading bar */}
            <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-gradient-to-r from-primary via-primary-glow to-accent"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-muted-foreground tracking-widest uppercase"
            >
              Loading Experience
            </motion.p>
          </div>
        </div>

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * -100],
              scale: [0, Math.random() * 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
