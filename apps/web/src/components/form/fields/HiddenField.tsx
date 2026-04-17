'use client';
import { InputHTMLAttributes, forwardRef } from 'react';

interface HiddenFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const HiddenField = forwardRef<HTMLInputElement, HiddenFieldProps>((props, ref) => (
  <input ref={ref} type="hidden" {...props} />
));
HiddenField.displayName = 'HiddenField';
