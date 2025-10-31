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
      {/* Outer cursor */}
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
            scale: isHovering ? 2 : 1,
            width: cursorText ? "auto" : "40px",
            height: cursorText ? "auto" : "40px",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-full border-2 border-primary backdrop-blur-sm flex items-center justify-center px-4 py-2"
        >
          {cursorText && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-bold text-primary whitespace-nowrap"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full bg-primary"
        />
      </motion.div>
    </>
  );
};

export default MouseFollower;
