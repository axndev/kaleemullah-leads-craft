import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Fade in from bottom animations
    gsap.utils.toArray<HTMLElement>(".animate-scroll-fade").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Stagger animations for cards/items
    gsap.utils.toArray<HTMLElement>(".animate-scroll-stagger").forEach((container) => {
      const children = container.children;
      gsap.fromTo(
        children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Scale up animations
    gsap.utils.toArray<HTMLElement>(".animate-scroll-scale").forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Slide from left
    gsap.utils.toArray<HTMLElement>(".animate-scroll-left").forEach((element) => {
      gsap.fromTo(
        element,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Slide from right
    gsap.utils.toArray<HTMLElement>(".animate-scroll-right").forEach((element) => {
      gsap.fromTo(
        element,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect
    gsap.utils.toArray<HTMLElement>(".animate-parallax").forEach((element) => {
      gsap.to(element, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
