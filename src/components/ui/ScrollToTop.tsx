'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="sticky bottom-6 z-50 flex justify-end px-6 pointer-events-none">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          pointer-events-auto
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          bg-background
          shadow-md
          transition-all
          duration-300
          ease-out
          ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }
          hover:-translate-y-1
        `}
      >
        
        <ArrowUp size={20} className="text-foreground" />
      </button>
    </div>
  );
}