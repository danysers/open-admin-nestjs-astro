interface BadgeCellProps {
  value: string;
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'gray';
}

const colors = {
  red: 'bg-red-100 text-red-800',
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  gray: 'bg-gray-100 text-gray-800',
};

export function BadgeCell({ value, color = 'blue' }: BadgeCellProps) {
  return <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${colors[color]}`}>{value}</span>;
}
