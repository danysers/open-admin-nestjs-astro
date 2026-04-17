'use client';
import { forwardRef } from 'react';

interface UrlFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const UrlField = forwardRef<HTMLInputElement, UrlFieldProps>((props, ref) => (
  <input ref={ref} type="url" {...props} className={`w-full border rounded px-3 py-2 ${props.className || ''}`} placeholder="https://" />
));
UrlField.displayName = 'UrlField';
