import React, { useRef, useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
  duration?: number;
  delay?: number;
  className?: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  suffix = '',
  prefix = '',
  title,
  duration = 2000,
  delay = 0,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timeout = setTimeout(() => {
        let start = 0;
        const step = 16; // 60fps
        const steps = Math.floor(duration / step);
        const increment = value / steps;
        
        const timer = setInterval(() => {
          start += increment;
          setDisplayValue(Math.min(Math.floor(start), value));
          
          if (start >= value) {
            clearInterval(timer);
          }
        }, step);
        
        return () => clearInterval(timer);
      }, delay);
      
      setHasAnimated(true);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, duration, delay, hasAnimated]);

  return (
    <div ref={elementRef} className={`text-center ${className}`}>
      <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{title}</div>
    </div>
  );
};

export default AnimatedStat;