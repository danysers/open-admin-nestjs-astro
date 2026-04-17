'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface NumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>((props, ref) => (
  <input ref={ref} type="number" {...props} className={`w-full border rounded px-3 py-2 ${props.className || ''}`} />
));
NumberField.displayName = 'NumberField';
