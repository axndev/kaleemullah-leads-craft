import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
}

const Marquee = ({ items, speed = 50, direction = "left" }: MarqueeProps) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-12 bg-muted/30">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-4xl md:text-6xl font-bold"
          >
            <span className="text-foreground">
              {item}
            </span>
            <span className="text-muted-foreground">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
