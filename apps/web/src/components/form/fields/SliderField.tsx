'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface SliderFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: number) => void;
}

export const SliderField = forwardRef<HTMLInputElement, SliderFieldProps>(({ onChange, ...props }, ref) => (
  <input ref={ref} type="range" {...props} onChange={e => onChange(+e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
));
SliderField.displayName = 'SliderField';
