import { useState } from 'react';
import { AuthLayout } from '@/components/auth/auth-layout';
import { BackupCodeVerify } from '@/components/auth/backup-code-verify';
import { Enable2FA } from '@/components/auth/enable-2fa';
import { LoginForm } from '@/components/auth/login-form';
import { TwoFactorVerify } from '@/components/auth/two-factor-verify';

export function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [showBackupCode, setShowBackupCode] = useState(false);
  const [showEnable2FA, setShowEnable2FA] = useState(false);

  if (showEnable2FA) {
    return (
      <AuthLayout>
        <div className="mb-6 flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Setup 2FA</h1>
          <p className="text-sm text-muted-foreground">
            Secure your account with two-factor authentication
          </p>
        </div>
        <Enable2FA
          onEnabled={() => {
            setShowEnable2FA(false);
            window.location.href = '/admin/dashboard';
          }}
        />
      </AuthLayout>
    );
  }

  if (isAuthenticated) {
    window.location.href = '/admin/dashboard';
    return null;
  }

  return (
    <AuthLayout>
      <div className="mb-6 flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          <span className="flex flex-row items-center justify-center gap-2">
            <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
              OA
            </span>
            Sign in
          </span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to sign in
        </p>
      </div>

      {!showTwoFactor ? (
        <LoginForm
          onLoginSuccess={() => setIsAuthenticated(true)}
          onTwoFactorRequired={() => setShowTwoFactor(true)}
        />
      ) : showBackupCode ? (
        <>
          <div className="mb-4 flex flex-col space-y-2 text-center">
            <h2 className="text-xl font-semibold">Enter Backup Code</h2>
            <p className="text-sm text-muted-foreground">
              Enter one of your backup codes to access your account
            </p>
          </div>
          <BackupCodeVerify
            onVerifySuccess={() => setIsAuthenticated(true)}
            onCancel={() => setShowBackupCode(false)}
          />
        </>
      ) : (
        <>
          <div className="mb-4 flex flex-col space-y-2 text-center">
            <h2 className="text-xl font-semibold">Two-Factor Authentication</h2>
            <p className="text-sm text-muted-foreground">
              Enter the code from your authenticator app
            </p>
          </div>
          <TwoFactorVerify
            onVerifySuccess={() => setIsAuthenticated(true)}
            onBack={() => setShowTwoFactor(false)}
            onUseBackupCode={() => setShowBackupCode(true)}
          />
        </>
      )}

      <div className="mt-4 text-center text-sm">
        <a href="/setup-2fa" className="text-muted-foreground hover:underline">
          Setup 2FA
        </a>
      </div>
    </AuthLayout>
  );
}
