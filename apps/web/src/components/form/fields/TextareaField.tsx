'use client';
import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>((props, ref) => (
  <textarea ref={ref} {...props} className={`w-full border rounded px-3 py-2 ${props.className || ''}`} rows={props.rows || 3} />
));
TextareaField.displayName = 'TextareaField';
