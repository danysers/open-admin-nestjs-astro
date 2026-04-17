'use client';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';

interface IPv4FieldProps {
  value?: string;
  onChange: (value: string) => void;
}

export function IPv4Field({ value, onChange }: IPv4FieldProps) {
  return <IMaskInput mask="IP" onAccept={(v) => onChange(v)} value={value || ''} className="w-full border rounded px-3 py-2" placeholder="192.168.1.1" />;
}
