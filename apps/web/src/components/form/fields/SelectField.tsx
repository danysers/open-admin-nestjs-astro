'use client';
import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: any }[];
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(({ options, ...props }, ref) => (
  <select ref={ref} {...props} className={`w-full border rounded px-3 py-2 ${props.className || ''}`}>
    <option value="">{props.placeholder || 'Select...'}</option>
    {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
  </select>
));
SelectField.displayName = 'SelectField';
