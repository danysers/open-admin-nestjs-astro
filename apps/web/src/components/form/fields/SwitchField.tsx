'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface SwitchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const SwitchField = forwardRef<HTMLInputElement, SwitchFieldProps>(({ label, ...props }, ref) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <div className="relative">
      <input ref={ref} type="checkbox" role="switch" {...props} className="sr-only peer" />
      <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-indigo-600 transition" />
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-4 transition" />
    </div>
    {label && <span className="text-sm text-gray-700">{label}</span>}
  </label>
));
SwitchField.displayName = 'SwitchField';
