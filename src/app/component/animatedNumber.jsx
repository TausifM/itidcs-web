import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ target = 100, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCount();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const increment = Math.max(1, Math.floor(target / (duration / 10)));
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 10);
  };

  return (
    <span ref={ref} className="inline-block relative">
      {count.toLocaleString()}+
    </span>
  );
}
