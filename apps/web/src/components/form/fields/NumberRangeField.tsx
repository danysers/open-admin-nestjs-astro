'use client';
import { useState } from 'react';

interface NumberRangeFieldProps {
  value?: [number, number];
  onChange: (value: [number, number]) => void;
}

export function NumberRangeField({ value, onChange }: NumberRangeFieldProps) {
  const [min, setMin] = useState(value?.[0]?.toString() || '');
  const [max, setMax] = useState(value?.[1]?.toString() || '');
  return (
    <div className="flex gap-2">
      <input type="number" value={min} onChange={e => { setMin(e.target.value); onChange([+e.target.value, +max]); }} placeholder="Min" className="flex-1 border rounded px-3 py-2" />
      <span className="self-center text-gray-400">~</span>
      <input type="number" value={max} onChange={e => { setMax(e.target.value); onChange([+min, +e.target.value]); }} placeholder="Max" className="flex-1 border rounded px-3 py-2" />
    </div>
  );
}
