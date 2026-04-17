'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FormField } from '@openadmin/shared/types';

interface FormBuilderProps {
  fields: FormField[];
  initialData?: Record<string, any>;
  onSubmit: (data: Record<string, any>) => Promise<void>;
}

export function FormBuilder({ fields, initialData, onSubmit }: FormBuilderProps) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: initialData,
  });

  const onSubmit_ = async (data: Record<string, any>) => {
    setLoading(true);
    try {
      await onSubmit(data);
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit_)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      {fields.map(field => (
        <div key={field.name} className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            {field.label || field.name}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {field.type === 'text' && (
            <input {...register(field.name)} type="text" placeholder={field.placeholder}
              className="w-full border rounded px-3 py-2" />
          )}
          {field.type === 'textarea' && (
            <textarea {...register(field.name)} placeholder={field.placeholder}
              className="w-full border rounded px-3 py-2" rows={3} />
          )}
          {field.type === 'email' && (
            <input {...register(field.name)} type="email" placeholder={field.placeholder}
              className="w-full border rounded px-3 py-2" />
          )}
          {field.type === 'password' && (
            <input {...register(field.name)} type="password" placeholder={field.placeholder}
              className="w-full border rounded px-3 py-2" />
          )}
          {field.type === 'number' && (
            <input {...register(field.name)} type="number" placeholder={field.placeholder}
              className="w-full border rounded px-3 py-2" />
          )}
          {field.type === 'select' && (
            <select {...register(field.name)} className="w-full border rounded px-3 py-2">
              <option value="">{field.placeholder || 'Select...'}</option>
              {field.options?.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          )}
          {field.type === 'checkbox' && (
            <input {...register(field.name)} type="checkbox" className="w-4 h-4" />
          )}
          {field.type === 'switch' && (
            <input {...register(field.name)} type="checkbox" className="w-10 h-6 rounded-full" />
          )}

          {errors[field.name] && (
            <p className="text-sm text-red-600">{String(errors[field.name]?.message)}</p>
          )}
          {field.help && <p className="text-sm text-gray-500">{field.help}</p>}
        </div>
      ))}

      <div className="flex gap-3 pt-4 border-t">
        <button type="submit" disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50">
          {loading ? 'Saving...' : 'Save'}
        </button>
        <button type="button" onClick={() => reset()}
          className="px-4 py-2 border rounded hover:bg-gray-50">
          Reset
        </button>
      </div>
    </form>
  );
}
