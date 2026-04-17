'use client';
import { forwardRef } from 'react';

interface RichTextFieldProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const RichTextField = forwardRef<HTMLDivElement, RichTextFieldProps>(({ value, onChange, placeholder }, ref) => (
  <div
    ref={ref}
    contentEditable
    onInput={e => onChange((e.target as HTMLDivElement).innerHTML)}
    placeholder={placeholder || 'Start typing...'}
    className="w-full border rounded px-3 py-2 min-h-[150px] prose prose-sm max-w-none"
    dangerouslySetInnerHTML={{ __html: value || '' }}
  />
));
RichTextField.displayName = 'RichTextField';
