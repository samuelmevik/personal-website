import { useEffect, RefObject } from 'react';

function useRevealOnScroll(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    function animate() {
      if (ref.current) {
        const reveals = ref.current.querySelectorAll('.reveal');
        reveals.forEach((element) => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 100;

          if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', animate, { passive: true });

    return () => {
      window.removeEventListener('scroll', animate);
    };
  }, [ref]);
}

export default useRevealOnScroll;