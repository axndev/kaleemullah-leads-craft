import { useEffect } from "react";

export const useLocomotiveScroll = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) return;

    let locomotiveScroll: any;

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
        multiplier: 1,
        class: "is-inview",
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update on window resize
      const handleResize = () => {
        locomotiveScroll?.update();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        locomotiveScroll?.destroy();
      };
    };

    initLocomotiveScroll();

    return () => {
      locomotiveScroll?.destroy();
    };
  }, [enabled]);
};
