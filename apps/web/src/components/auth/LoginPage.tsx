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
        <div className="mb-5 text-center">
          <h1 className="text-xl font-semibold text-[#2c3e50]">Two-factor setup</h1>
          <p className="mt-1 text-sm text-[#6c757d]">Secure your account with an authenticator app.</p>
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
      <div className="mb-5 text-center">
        <h1 className="text-xl font-semibold text-[#2c3e50]">Sign in</h1>
        <p className="mt-1 text-sm text-[#6c757d]">Use your admin credentials to continue.</p>
      </div>

      {!showTwoFactor ? (
        <LoginForm
          onLoginSuccess={() => setIsAuthenticated(true)}
          onTwoFactorRequired={() => setShowTwoFactor(true)}
        />
      ) : showBackupCode ? (
        <>
          <div className="mb-4 flex flex-col space-y-2 text-center">
            <h2 className="text-lg font-semibold text-[#2c3e50]">Backup code</h2>
            <p className="text-sm text-[#6c757d]">Enter one backup code to access your account.</p>
          </div>
          <BackupCodeVerify
            onVerifySuccess={() => setIsAuthenticated(true)}
            onCancel={() => setShowBackupCode(false)}
          />
        </>
      ) : (
        <>
          <div className="mb-4 flex flex-col space-y-2 text-center">
            <h2 className="text-lg font-semibold text-[#2c3e50]">Two-factor authentication</h2>
            <p className="text-sm text-[#6c757d]">Enter the code from your authenticator app.</p>
          </div>
          <TwoFactorVerify
            onVerifySuccess={() => setIsAuthenticated(true)}
            onBack={() => setShowTwoFactor(false)}
            onUseBackupCode={() => setShowBackupCode(true)}
          />
        </>
      )}

      <div className="mt-4 text-center text-sm">
        <a href="/setup-2fa" className="text-[#6c757d] hover:text-[#3a96ff] hover:underline">
          Set up 2FA
        </a>
      </div>
    </AuthLayout>
  );
}
