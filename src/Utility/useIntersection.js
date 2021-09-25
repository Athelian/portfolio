import { useState, useEffect } from "react";

export default function useIntersection(element, rootMargin) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAbove, setIsAbove] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isAbove = entry.boundingClientRect.y < entry.rootBounds.y;
        setIsVisible(entry.isIntersecting);
        setIsAbove(isAbove)
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return [isVisible, isAbove];
}
