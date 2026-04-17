interface LabelCellProps {
  value: string;
  color?: string;
}

export function LabelCell({ value, color }: LabelCellProps) {
  return <span style={color ? { color, backgroundColor: `${color}20` } : undefined} className="px-2 py-0.5 rounded text-sm">{value}</span>;
}
