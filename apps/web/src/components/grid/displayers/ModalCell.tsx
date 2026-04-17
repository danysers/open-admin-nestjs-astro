'use client';

import { useState } from 'react';

interface ModalCellProps {
  trigger: React.ReactNode;
  title?: string;
  children: React.ReactNode;
}

export function ModalCell({ trigger, title, children }: ModalCellProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer text-indigo-600 underline">{trigger}</span>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 max-h-[80vh] overflow-auto" onClick={e => e.stopPropagation()}>
            {title && <div className="px-4 py-3 border-b font-semibold">{title}</div>}
            <div className="p-4">{children}</div>
            <div className="px-4 py-3 border-t flex justify-end">
              <button onClick={() => setOpen(false)} className="px-3 py-1 border rounded text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
