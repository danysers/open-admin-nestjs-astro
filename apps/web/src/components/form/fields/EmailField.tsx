'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface EmailFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>((props, ref) => (
  <input ref={ref} type="email" {...props} className={`w-full border rounded px-3 py-2 ${props.className || ''}`} />
));
EmailField.displayName = 'EmailField';
