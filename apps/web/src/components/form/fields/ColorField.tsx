'use client';
import { forwardRef } from 'react';

interface ColorFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

export const ColorField = forwardRef<HTMLInputElement, ColorFieldProps>(({ value, onChange }, ref) => (
  <div className="flex gap-2">
    <input ref={ref} type="color" value={value || '#000000'} onChange={e => onChange(e.target.value)} className="w-10 h-10 rounded border cursor-pointer" />
    <input type="text" value={value || ''} onChange={e => onChange(e.target.value)} placeholder="#000000" className="flex-1 border rounded px-3 py-2 text-sm" />
  </div>
));
ColorField.displayName = 'ColorField';
