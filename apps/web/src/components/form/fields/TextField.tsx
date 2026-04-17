'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
  <input ref={ref} type="text" {...props} className={`w-full border rounded px-3 py-2 ${props.className || ''}`} />
));
TextField.displayName = 'TextField';
