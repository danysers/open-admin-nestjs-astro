'use client';

import type { MenuItem } from '@openadmin/shared/types';
import { useState, useEffect } from 'react';

interface SidebarProps {
  menu: MenuItem[];
}

export function Sidebar({ menu }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const renderMenu = (items: MenuItem[], level = 0) => (
    <ul className={level > 0 ? 'pl-4' : ''}>
      {items.map(item => (
        <li key={item.id}>
          <a href={item.uri || '#'} className="flex items-center gap-2 py-1 px-3 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded">
            {item.icon && <span>{item.icon}</span>}
            {!collapsed && <span>{item.title}</span>}
          </a>
          {item.children?.length ? renderMenu(item.children, level + 1) : null}
        </li>
      ))}
    </ul>
  );

  return (
    <aside className={`bg-white shadow-lg h-screen transition-all ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b flex justify-between items-center">
        {!collapsed && <span className="font-bold text-indigo-600">OpenAdmin</span>}
        <button onClick={() => setCollapsed(c => !c)} className="text-gray-500 hover:text-gray-700">
          {collapsed ? '→' : '←'}
        </button>
      </div>
      <nav className="p-2">{renderMenu(menu)}</nav>
    </aside>
  );
}
