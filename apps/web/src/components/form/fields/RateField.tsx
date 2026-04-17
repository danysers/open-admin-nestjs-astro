'use client';
import { forwardRef } from 'react';

interface RateFieldProps {
  value?: number;
  onChange: (value: number) => void;
  max?: number;
}

export const RateField = forwardRef<HTMLDivElement, RateFieldProps>(({ value = 0, onChange, max = 5 }, ref) => (
  <div ref={ref} className="flex gap-0.5">
    {Array.from({ length: max }, (_, i) => (
      <button key={i} type="button" onClick={() => onChange(i + 1)} className={`text-xl ${i < value ? 'text-yellow-400' : 'text-gray-300'}`}>★</button>
    ))}
  </div>
));
RateField.displayName = 'RateField';
