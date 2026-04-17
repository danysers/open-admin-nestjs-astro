'use client';

import { useState, useEffect } from 'react';
import { useReactTable, getCoreRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';

export function UsersGrid() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);

  const columns: ColumnDef<any>[] = [
    { id: 'select', header: () => null, cell: ({ row }) => <input type="checkbox" checked={row.getIsSelected()} /> },
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'username', header: 'Username' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'name', header: 'Name', cell: info => info.getValue() || '-' },
    { accessorKey: 'created_at', header: 'Created', cell: info => new Date(info.getValue()).toLocaleDateString() },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button className="text-indigo-600 hover:underline text-sm">Edit</button>
          <button className="text-red-600 hover:underline text-sm">Delete</button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {},
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) { window.location.href = '/login'; return; }
    setLoading(true);
    fetch(`/api/grids/users?page=${page}&perPage=${pageSize}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(r => r.json())
      .then(r => {
        if (r.code === 200) {
          setUsers(r.data?.data || []);
          setTotal(r.data?.total || 0);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page, pageSize]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input type="text" placeholder="Search users..." className="border rounded px-3 py-2 w-64" />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700">
          + Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(header => (
                  <th key={header.id} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr><td colSpan={6} className="text-center py-8 text-gray-500">Loading...</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={6} className="text-center py-8 text-gray-500">No users found</td></tr>
            ) : (
              table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-4 py-3 text-sm text-gray-900">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Total: {total}</span>
        <div className="flex gap-2">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-50">
            Previous
          </button>
          <span className="px-3 py-1">Page {page} / {Math.max(1, Math.ceil(total / pageSize))}</span>
          <button onClick={() => setPage(p => p + 1)} disabled={page * pageSize >= total}
            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
