import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#f4f6f9] px-4 py-8">
      <div className="mx-auto max-w-[420px]">
        <div className="mb-4 text-center">
          <a href="/" className="text-[28px] font-semibold text-[#2c3e50] no-underline">
            <span className="text-[#3a96ff]">Open</span>Admin
          </a>
          <p className="mt-1 text-sm text-[#6c757d]">Administration panel</p>
        </div>

        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
};
