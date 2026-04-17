'use client';
import { forwardRef, useState } from 'react';

interface ImageFieldProps {
  onChange: (file: File) => void;
  preview?: string;
}

export const ImageField = forwardRef<HTMLInputElement, ImageFieldProps>(({ onChange, preview }, ref) => (
  <div>
    <input ref={ref} type="file" accept="image/*" onChange={e => e.target.files?.[0] && onChange(e.target.files[0])} className="w-full border rounded px-3 py-2 text-sm" />
    {preview && <img src={preview} alt="" className="mt-2 h-24 rounded border" />}
  </div>
));
ImageField.displayName = 'ImageField';
