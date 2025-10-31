import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useSpring(0, { stiffness: 200, damping: 20, mass: 0.1 });
  const cursorY = useSpring(0, { stiffness: 200, damping: 20, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
        const cursorData = target.getAttribute("data-cursor-text") || 
                          target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");
        setCursorText(cursorData || "");
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-8 h-8 rounded-full border border-foreground/30"
        />
      </motion.div>

      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full bg-foreground"
        />
      </motion.div>
    </>
  );
};

export default MouseFollower;
