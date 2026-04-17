interface CopyableCellProps {
  value: string;
}

export function CopyableCell({ value }: CopyableCellProps) {
  const copy = () => navigator.clipboard.writeText(value);
  return (
    <div className="flex items-center gap-1">
      <span>{value}</span>
      <button onClick={copy} title="Copy" className="text-gray-400 hover:text-gray-700 text-xs">📋</button>
    </div>
  );
}
