'use client';
import { forwardRef } from 'react';

interface FileFieldProps {
  onChange: (file: File) => void;
  accept?: string;
}

export const FileField = forwardRef<HTMLInputElement, FileFieldProps>(({ onChange, accept }, ref) => (
  <input ref={ref} type="file" accept={accept} onChange={e => e.target.files?[0] && onChange(e.target.files[0])} className="w-full border rounded px-3 py-2 text-sm" />
));
FileField.displayName = 'FileField';
