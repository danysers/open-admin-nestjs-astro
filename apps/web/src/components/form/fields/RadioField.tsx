'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  options: { label: string; value: any }[];
  label?: string;
}

export const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(({ options, label, ...props }, ref) => (
  <div className="space-y-1">
    {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    <div className="space-y-1">
      {options.map(opt => (
        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
          <input ref={ref} type="radio" value={opt.value} {...props} className="w-4 h-4 border-gray-300" />
          <span className="text-sm text-gray-700">{opt.label}</span>
        </label>
      ))}
    </div>
  </div>
));
RadioField.displayName = 'RadioField';
