interface BelongsToCellProps {
  value: any;
  displayColumn?: string;
}

export function BelongsToCell({ value, displayColumn = 'name' }: BelongsToCellProps) {
  if (!value) return <span className="text-gray-400">-</span>;
  return <span>{typeof value === 'object' ? value[displayColumn] : value}</span>;
}
