'use client';
import { useState } from 'react';
import flatpickr from 'flatpickr';

interface DateRangeFieldProps {
  value?: [string, string];
  onChange: (value: [string, string]) => void;
}

export function DateRangeField({ value, onChange }: DateRangeFieldProps) {
  const [el, setEl] = useState<HTMLInputElement | null>(null);
  useState(() => {
    if (el) {
      flatpickr(el, {
        mode: 'range',
        onChange: (dates) => {
          const s = dates[0]?.toISOString().split('T')[0] || '';
          const e = dates[1]?.toISOString().split('T')[0] || '';
          onChange([s, e]);
        },
        dateFormat: 'Y-m-d',
      });
    }
  });
  return <input ref={setEl} type="text" value={value ? value.join(' ~ ') : ''} className="w-full border rounded px-3 py-2" />;
}
