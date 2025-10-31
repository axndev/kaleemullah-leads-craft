import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ImageShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"
      />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Creative Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the intersection of design and functionality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Image Section */}
          <motion.div
            style={{ y: springY, scale }}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-elegant backdrop-blur"
            >
              {/* Replace this src with your image */}
              <img
                src="/placeholder.svg"
                alt="Showcase"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary-glow/20 to-accent/20 backdrop-blur-[2px]"
              />

              {/* Interactive corners */}
              {[
                { top: 0, left: 0, rotate: 0 },
                { top: 0, right: 0, rotate: 90 },
                { bottom: 0, right: 0, rotate: 180 },
                { bottom: 0, left: 0, rotate: 270 },
              ].map((position, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: position.rotate }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="absolute w-12 h-12 border-t-2 border-l-2 border-primary"
                  style={position}
                />
              ))}
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-primary-glow/20 blur-2xl"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur hover:shadow-elegant transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pixel Perfect Design</h3>
                  <p className="text-muted-foreground">
                    Every detail matters in creating exceptional user experiences
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur hover:shadow-elegant transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-white font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smooth Interactions</h3>
                  <p className="text-muted-foreground">
                    Fluid animations that enhance user engagement
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur hover:shadow-elegant transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance First</h3>
                  <p className="text-muted-foreground">
                    Optimized for speed without compromising quality
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
