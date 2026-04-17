'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface CurrencyFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const CurrencyField = forwardRef<HTMLInputElement, CurrencyFieldProps>((props, ref) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
    <input ref={ref} type="number" step="0.01" {...props} className={`w-full border rounded pl-7 pr-3 py-2 ${props.className || ''}`} />
  </div>
));
CurrencyField.displayName = 'CurrencyField';
