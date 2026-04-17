'use client';
import { useState } from 'react';

interface HasManyFieldProps {
  fields: React.ReactNode[];
  onAdd: () => void;
  onRemove: (index: number) => void;
}

export function HasManyField({ fields, onAdd, onRemove }: HasManyFieldProps) {
  return (
    <div className="space-y-4">
      {fields.map((f, i) => (
        <div key={i} className="p-4 border rounded-lg relative">
          <button type="button" onClick={() => onRemove(i)} className="absolute right-2 top-2 text-red-500 hover:text-red-700 text-sm">Remove</button>
          {f}
        </div>
      ))}
      <button type="button" onClick={onAdd} className="text-sm text-indigo-600 hover:text-indigo-800">+ Add item</button>
    </div>
  );
}
