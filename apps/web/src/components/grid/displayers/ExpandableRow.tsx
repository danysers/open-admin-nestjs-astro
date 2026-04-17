import { useState } from 'react';

interface ExpandableRowProps {
  row: any;
  columns: any[];
  expandedContent: React.ReactNode;
}

export function ExpandableRow({ row, columns, expandedContent }: ExpandableRowProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <tr onClick={() => setExpanded(e => !e)} className="cursor-pointer hover:bg-gray-50">
        <td className="w-8">{expanded ? '▼' : '▶'}</td>
        {columns.map(col => <td key={col}>{row[col]}</td>)}
      </tr>
      {expanded && <tr><td colSpan={columns.length + 1} className="p-4 bg-gray-50">{expandedContent}</td></tr>}
    </>
  );
}
