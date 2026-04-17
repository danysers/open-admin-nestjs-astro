'use client';
import { InputHTMLAttributes, forwardRef, useState } from 'react';

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>((props, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input ref={ref} type={show ? 'text' : 'password'} {...props} className={`w-full border rounded px-3 py-2 pr-10 ${props.className || ''}`} />
      <button type="button" onClick={() => setShow(s => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
        {show ? '🙈' : '👁'}
      </button>
    </div>
  );
});
PasswordField.displayName = 'PasswordField';
