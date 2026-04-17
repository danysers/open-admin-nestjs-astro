'use client';

import { useState } from 'react';

interface EditableCellProps {
  value: string;
  onSave: (value: string) => Promise<void>;
}

export function EditableCell({ value, onSave }: EditableCellProps) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value);

  if (!editing) {
    return <span onDblClick={() => setEditing(true)} className="cursor-pointer hover:bg-indigo-50 px-2 py-0.5 rounded">{value}</span>;
  }
  return (
    <form onSubmit={async e => { e.preventDefault(); await onSave(val); setEditing(false); }} className="flex gap-1">
      <input value={val} onChange={e => setVal(e.target.value)} className="border rounded px-1 py-0.5 text-sm w-24" autoFocus />
      <button type="submit" className="text-xs px-1 bg-indigo-600 text-white rounded">OK</button>
      <button type="button" onClick={() => setEditing(false)} className="text-xs px-1 border rounded">X</button>
    </form>
  );
}
