'use client';
import { useState } from 'react';

interface DualListboxFieldProps {
  options: { label: string; value: any }[];
  value?: any[];
  onChange: (value: any[]) => void;
}

export function DualListboxField({ options, value = [], onChange }: DualListboxFieldProps) {
  const [left, setLeft] = useState(options.filter(o => !value.includes(o.value)));
  const [right, setRight] = useState(options.filter(o => value.includes(o.value)));

  const moveToRight = (items: any[]) => {
    const newRight = [...right, ...items];
    setRight(newRight);
    setLeft(left.filter(o => !items.includes(o.value)));
    onChange(newRight.map(o => o.value));
  };

  const moveToLeft = (items: any[]) => {
    const newLeft = [...left, ...items];
    setLeft(newLeft);
    setRight(right.filter(o => !items.includes(o.value)));
    onChange(right.filter(o => !items.includes(o.value)).map(o => o.value));
  };

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="text-sm font-medium mb-1">Available</div>
        <div className="border rounded h-40 overflow-auto">
          {left.map(opt => (
            <label key={opt.value} className="flex gap-2 px-3 py-1 hover:bg-gray-50 cursor-pointer text-sm">
              <input type="checkbox" onChange={e => { if (e.target.checked) moveToRight([opt]); }} className="mt-0.5" />{opt.label}
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <button type="button" onClick={() => moveToRight(left)} className="px-2 py-1 text-sm border rounded hover:bg-gray-50">→</button>
        <button type="button" onClick={() => moveToLeft(right)} className="px-2 py-1 text-sm border rounded hover:bg-gray-50">←</button>
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium mb-1">Selected</div>
        <div className="border rounded h-40 overflow-auto">
          {right.map(opt => (
            <label key={opt.value} className="flex gap-2 px-3 py-1 hover:bg-gray-50 cursor-pointer text-sm">
              <input type="checkbox" onChange={e => { if (e.target.checked) moveToLeft([opt]); }} className="mt-0.5" />{opt.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
