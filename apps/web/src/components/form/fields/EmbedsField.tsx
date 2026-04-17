'use client';
import { forwardRef } from 'react';

interface EmbedsFieldProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const EmbedsField = forwardRef<HTMLTextAreaElement, EmbedsFieldProps>(({ value, onChange, placeholder }, ref) => (
  <textarea ref={ref} value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="w-full border rounded px-3 py-2 font-mono text-sm" rows={4} />
));
EmbedsField.displayName = 'EmbedsField';
