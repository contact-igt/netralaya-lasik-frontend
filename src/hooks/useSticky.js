import { useEffect, useRef, useState } from 'react';

const useSticky = (stickyOffset = 0) => {
  const [isSticky, setSticky] = useState(false);
  const elementRef = useRef(null);
  const initialTop = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      initialTop.current = elementRef.current.getBoundingClientRect().top + window.scrollY;
    }

    const handleScroll = () => {
      if (elementRef.current) {
        const scrollPosition = window.scrollY;
        if (initialTop.current !== null && scrollPosition + stickyOffset >= initialTop.current) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stickyOffset]);

  return [elementRef, isSticky];
};

export default useSticky;
