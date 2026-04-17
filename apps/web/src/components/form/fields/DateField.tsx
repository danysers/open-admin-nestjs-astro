'use client';
import { useState } from 'react';
import flatpickr from 'flatpickr';

interface DateFieldProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  config?: any;
}

export function DateField({ value, onChange, placeholder = 'YYYY-MM-DD', config }: DateFieldProps) {
  const [el, setEl] = useState<HTMLInputElement | null>(null);
  useState(() => {
    if (el) {
      flatpickr(el, {
        onChange: (dates) => onChange(dates[0]?.toISOString().split('T')[0] || ''),
        dateFormat: 'Y-m-d',
        ...config,
      });
    }
  });
  return <input ref={setEl} type="text" value={value || ''} placeholder={placeholder} className="w-full border rounded px-3 py-2" />;
}
