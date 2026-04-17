interface LinkCellProps {
  value: string;
  href?: string;
  external?: boolean;
}

export function LinkCell({ value, href, external }: LinkCellProps) {
  if (!href) return <span>{value}</span>;
  return <a href={href} target={external ? '_blank' : '_self'} rel={external ? 'noopener noreferrer' : undefined} className="text-indigo-600 hover:underline">{value}</a>;
}
