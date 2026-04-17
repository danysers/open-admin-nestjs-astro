interface LimitCellProps {
  value: string;
  limit?: number;
  suffix?: string;
}

export function LimitCell({ value, limit = 100, suffix = '...' }: LimitCellProps) {
  if (!value || value.length <= limit) return <span>{value}</span>;
  return <span title={value}>{value.slice(0, limit) + suffix}</span>;
}
