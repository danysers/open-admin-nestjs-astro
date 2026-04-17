'use client';

import { useState } from 'react';

interface SwitchCellProps {
  value: boolean;
  onChange: (value: boolean) => Promise<void>;
}

export function SwitchCell({ value, onChange }: SwitchCellProps) {
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);
    try { await onChange(!value); } finally { setLoading(false); }
  };

  return (
    <button onClick={toggle} disabled={loading}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? 'bg-indigo-600' : 'bg-gray-300'} ${loading ? 'opacity-50' : ''}`}>
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  );
}
