interface RowSelectorProps {
  selected: boolean;
  onChange: (selected: boolean) => void;
}

export function RowSelector({ selected, onChange }: RowSelectorProps) {
  return <input type="checkbox" checked={selected} onChange={e => onChange(e.target.checked)} className="w-4 h-4 rounded border-gray-300" />;
}
