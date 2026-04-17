'use client';
import { SelectHTMLAttributes, forwardRef } from 'react';

interface MultipleSelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: any }[];
}

export const MultipleSelectField = forwardRef<HTMLSelectElement, MultipleSelectFieldProps>(({ options, ...props }, ref) => (
  <select ref={ref} multiple {...props} className={`w-full border rounded px-3 py-2 ${props.className || ''}`}>
    {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
  </select>
));
MultipleSelectField.displayName = 'MultipleSelectField';
