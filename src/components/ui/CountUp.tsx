import { useEffect, useMemo, useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface CountUpProps {
  target: string;
  duration?: number;
}

const parseTarget = (target: string) => {
  const numeric = parseInt(target.replace(/[^0-9]/g, ''), 10);
  return Number.isNaN(numeric) ? null : numeric;
};

export const CountUp = ({ target, duration = 1400 }: CountUpProps) => {
  const { ref, isInView } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState(0);
  const numericTarget = useMemo(() => parseTarget(target), [target]);

  useEffect(() => {
    if (!isInView || numericTarget === null) {
      return;
    }

    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.floor(progress * numericTarget));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [duration, isInView, numericTarget]);

  if (numericTarget === null) {
    return <span ref={ref}>{target}</span>;
  }

  const suffix = target.replace(/[0-9]/g, '');

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};
