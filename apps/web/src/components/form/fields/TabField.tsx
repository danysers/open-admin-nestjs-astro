'use client';
import { useState } from 'react';

interface TabFieldProps {
  tabs: { label: string; fields: React.ReactNode }[];
}

export function TabField({ tabs }: TabFieldProps) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button key={i} type="button" onClick={() => setActive(i)} className={`px-4 py-2 text-sm border-b-2 -mb-px ${i === active ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500'}`}>{tab.label}</button>
        ))}
      </div>
      <div className="pt-4">{tabs[active]?.fields}</div>
    </div>
  );
}
