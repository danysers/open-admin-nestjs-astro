'use client';

import { useState } from 'react';

interface ActionsCellProps {
  row: any;
  onEdit?: () => void;
  onDelete?: () => void;
  onView?: () => void;
}

export function ActionsCell({ row, onEdit, onDelete, onView }: ActionsCellProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(o => !o)} className="text-gray-500 hover:text-gray-700">⋮</button>
      {open && (
        <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded border z-10">
          {onView && <button onClick={() => { onView(); setOpen(false); }} className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-50">View</button>}
          {onEdit && <button onClick={() => { onEdit(); setOpen(false); }} className="block w-full text-left px-3 py-1 text-sm hover:bg-gray-50">Edit</button>}
          {onDelete && <button onClick={() => { onDelete(); setOpen(false); }} className="block w-full text-left px-3 py-1 text-sm text-red-600 hover:bg-gray-50">Delete</button>}
        </div>
      )}
    </div>
  );
}
