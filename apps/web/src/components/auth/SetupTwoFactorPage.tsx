import { AuthLayout } from '@/components/auth/auth-layout';
import { Enable2FA } from '@/components/auth/enable-2fa';

export function SetupTwoFactorPage() {
  return (
    <AuthLayout>
      <div className="mb-6 flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="flex flex-row items-center justify-center gap-2">
            <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
              OA
            </span>
            Setup 2FA
          </span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Secure your account with two-factor authentication
        </p>
      </div>
      <Enable2FA
        onEnabled={() => {
          window.location.href = '/admin/dashboard';
        }}
      />
    </AuthLayout>
  );
}
