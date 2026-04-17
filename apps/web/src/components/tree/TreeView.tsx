'use client';

import { useState, useEffect } from 'react';

interface TreeNode {
  id: number;
  parent_id: number | null;
  title: string;
  icon?: string;
  children?: TreeNode[];
  expanded?: boolean;
}

interface TreeViewProps {
  resource: string;
  onSelect?: (node: TreeNode) => void;
}

export function TreeView({ resource, onSelect }: TreeViewProps) {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/trees/${resource}`)
      .then(r => r.json())
      .then((r: any) => setNodes(r.data || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [resource]);

  const toggle = (node: TreeNode) => {
    node.expanded = !node.expanded;
    setNodes([...nodes]);
  };

  const renderNode = (node: TreeNode, level = 0) => (
    <div key={node.id}>
      <div className="flex items-center gap-2 py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
        style={{ paddingLeft: `${level * 20 + 8}px` }}
        onClick={() => onSelect?.(node)}>
        {node.children?.length ? (
          <button onClick={e => { e.stopPropagation(); toggle(node); }} className="text-xs">
            {node.expanded ? '▼' : '▶'}
          </button>
        ) : <span className="w-4" />}
        <span>{node.icon || '📁'}</span>
        <span className="text-sm">{node.title}</span>
      </div>
      {node.expanded && node.children?.map(child => renderNode(child, level + 1))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {loading ? <p>Loading...</p> : nodes.map(node => renderNode(node))}
    </div>
  );
}
