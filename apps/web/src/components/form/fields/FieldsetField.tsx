'use client';
import { forwardRef } from 'react';

interface FieldsetFieldProps {
  legend: string;
  children: React.ReactNode;
  collapsible?: boolean;
}

export function FieldsetField({ legend, children, collapsible }: FieldsetFieldProps) {
  return (
    <fieldset className="border rounded p-4">
      <legend className="text-sm font-medium text-gray-700 px-1">{legend}</legend>
      <div className="space-y-4">{children}</div>
    </fieldset>
  );
}
