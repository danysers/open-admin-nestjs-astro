interface DateFormatCellProps {
  value?: string;
  format?: string;
}

export function DateFormatCell({ value, format = 'YYYY-MM-DD' }: DateFormatCellProps) {
  if (!value) return <span className="text-gray-400">-</span>;
  const d = new Date(value);
  const fmt = format.replace('YYYY', String(d.getFullYear())).replace('MM', String(d.getMonth() + 1).padStart(2, '0')).replace('DD', String(d.getDate()).padStart(2, '0'));
  return <span>{fmt}</span>;
}
