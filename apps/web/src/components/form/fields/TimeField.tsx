'use client';
import { useState } from 'react';
import flatpickr from 'flatpickr';

interface TimeFieldProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function TimeField({ value, onChange, placeholder = 'HH:MM' }: TimeFieldProps) {
  const [el, setEl] = useState<HTMLInputElement | null>(null);
  useState(() => {
    if (el) {
      flatpickr(el, {
        onChange: (dates) => onChange(dates[0]?.toTimeString().slice(0, 5) || ''),
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
      });
    }
  });
  return <input ref={setEl} type="text" value={value || ''} placeholder={placeholder} className="w-full border rounded px-3 py-2" />;
}
