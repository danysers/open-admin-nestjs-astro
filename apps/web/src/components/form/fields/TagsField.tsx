'use client';
import { forwardRef } from 'react';

interface TagsFieldProps {
  value?: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

export const TagsField = forwardRef<HTMLInputElement, TagsFieldProps>(({ value = [], onChange, placeholder }, ref) => {
  const [input, setInput] = useState('');
  const add = (tag: string) => { if (tag && !value.includes(tag)) onChange([...value, tag]); setInput(''); };
  const remove = (tag: string) => onChange(value.filter(t => t !== tag));
  return (
    <div className="border rounded p-2 min-h-[42px] flex flex-wrap gap-1">
      {value.map(tag => (
        <span key={tag} className="inline-flex items-center gap-1 bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-sm">
          {tag} <button onClick={() => remove(tag)} type="button" className="hover:text-indigo-600">×</button>
        </span>
      ))}
      <input ref={ref} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(input); } }}
        placeholder={placeholder || 'Add tag...'} className="flex-1 min-w-[120px] outline-none text-sm" />
    </div>
  );
});
TagsField.displayName = 'TagsField';
