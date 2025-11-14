import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, [delay]);

  const baseClasses =
    "transition-all duration-700 ease-out transform will-change-transform";
  const visibleClasses =
    "opacity-100 translate-y-0 motion-safe:opacity-100 motion-safe:translate-y-0";
  const hiddenClasses =
    "opacity-0 translate-y-8 motion-safe:opacity-0 motion-safe:translate-y-8";

  return (
    <div
      ref={containerRef}
      className={`${baseClasses} ${
        isVisible ? visibleClasses : hiddenClasses
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
