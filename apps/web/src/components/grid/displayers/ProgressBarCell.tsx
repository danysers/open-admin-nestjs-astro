interface ProgressBarCellProps {
  value: number;
  max?: number;
  color?: string;
}

export function ProgressBarCell({ value, max = 100, color = 'indigo-600' }: ProgressBarCellProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className={`h-2 rounded-full bg-${color}`} style={{ width: `${pct}%`, backgroundColor: color === 'indigo-600' ? '#4f46e5' : color }} />
    </div>
  );
}
