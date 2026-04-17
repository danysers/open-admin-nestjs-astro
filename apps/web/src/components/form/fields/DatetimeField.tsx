'use client';
import { useState } from 'react';
import flatpickr from 'flatpickr';

interface DatetimeFieldProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function DatetimeField({ value, onChange, placeholder = 'YYYY-MM-DD HH:MM' }: DatetimeFieldProps) {
  const [el, setEl] = useState<HTMLInputElement | null>(null);
  useState(() => {
    if (el) {
      flatpickr(el, {
        onChange: (dates) => onChange(dates[0]?.toISOString().slice(0, 16) || ''),
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
      });
    }
  });
  return <input ref={setEl} type="text" value={value || ''} placeholder={placeholder} className="w-full border rounded px-3 py-2" />;
}
