'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(({ label, ...props }, ref) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input ref={ref} type="checkbox" {...props} className="w-4 h-4 rounded border-gray-300" />
    {label && <span className="text-sm text-gray-700">{label}</span>}
  </label>
));
CheckboxField.displayName = 'CheckboxField';
