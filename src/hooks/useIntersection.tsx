import { useState, useEffect, RefObject } from "react";

export const useIntersection = (ref: RefObject<Element>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const elem = ref.current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
        if (entries[0].isIntersecting) {
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, [ref, elem]);

  return isVisible;
};
