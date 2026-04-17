'use client';
import { useState } from 'react';

interface TimeRangeFieldProps {
  value?: [string, string];
  onChange: (value: [string, string]) => void;
}

export function TimeRangeField({ value, onChange }: TimeRangeFieldProps) {
  const [start, setStart] = useState(value?.[0] || '');
  const [end, setEnd] = useState(value?.[1] || '');
  return (
    <div className="flex gap-2">
      <input type="time" value={start} onChange={e => { setStart(e.target.value); onChange([e.target.value, end]); }} className="flex-1 border rounded px-3 py-2" />
      <span className="self-center text-gray-400">~</span>
      <input type="time" value={end} onChange={e => { setEnd(e.target.value); onChange([start, e.target.value]); }} className="flex-1 border rounded px-3 py-2" />
    </div>
  );
}
