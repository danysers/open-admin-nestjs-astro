'use client';
import { forwardRef } from 'react';

interface IconFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

const ICONS = ['★', '♥', '♦', '♣', '♠', '☀', '☾', '✿', '♪', '🔔', '📧', '⚙'];

export const IconField = forwardRef<HTMLDivElement, IconFieldProps>(({ value, onChange }, ref) => (
  <div ref={ref} className="flex flex-wrap gap-1">
    {ICONS.map(icon => (
      <button key={icon} type="button" onClick={() => onChange(icon)} className={`w-8 h-8 text-lg rounded border ${value === icon ? 'bg-indigo-100 border-indigo-600' : 'hover:bg-gray-50'}`}>{icon}</button>
    ))}
  </div>
));
IconField.displayName = 'IconField';
