import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { Copy, Download, Fingerprint, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';

interface Enable2FAProps {
  onEnabled: () => void;
}

export function Enable2FA({ onEnabled }: Enable2FAProps) {
  const [password, setPassword] = useState('');
  const [step, setStep] = useState<'password' | 'verify'>('password');
  const [isLoading, setIsLoading] = useState(false);
  const [totpUri, setTotpUri] = useState('');
  const [secret, setSecret] = useState('');
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await authClient.twoFactor.enable({
        password,
        issuer: 'OpenAdmin',
      });

      if (authError) {
        setError(authError.message || 'Error enabling 2FA');
        return;
      }

      if (data?.totpURI) {
        setTotpUri(data.totpURI);
        const extractedSecret = data.totpURI.split('secret=')[1]?.split('&')[0] || '';
        setSecret(extractedSecret);

        if (data.backupCodes) {
          setBackupCodes(data.backupCodes);
        }

        setStep('verify');
      }
    } catch {
      setError('An error occurred while setting up 2FA');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { error: authError } = await authClient.twoFactor.verifyTotp({
        code: code.replace(/\s/g, ''),
      });

      if (authError) {
        setError(authError.message || 'Invalid code');
        return;
      }

      onEnabled();
    } catch {
      setError('An error occurred while verifying the code');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyBackupCodes = () => {
    navigator.clipboard.writeText(backupCodes.join('\n'));
  };

  const handleDownloadBackupCodes = () => {
    const text = `OpenAdmin - Backup Codes\n\n${backupCodes.join('\n')}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'openadmin-2fa-backup-codes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (step === 'password') {
    return (
      <form onSubmit={handlePasswordSubmit} className="space-y-4">
        <div className="flex flex-col items-center gap-2 mb-4">
          <Fingerprint className="h-8 w-8 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Enable Two-Factor Authentication</h3>
          <p className="text-sm text-muted-foreground text-center">
            Enter your password to begin 2FA setup
          </p>
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div className="text-sm text-red-600 p-2 bg-red-50 rounded">{error}</div>
        )}

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Continue
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleVerifySubmit} className="space-y-6">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold">Scan QR Code</h3>

        <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
          <QrCode className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium">Scan with your authenticator app</span>

          {totpUri && (
            <div className="bg-white p-4 rounded-lg">
              <QRCodeSVG value={totpUri} size={192} />
            </div>
          )}

          <div className="flex flex-col gap-2 text-center">
            <span className="text-sm text-muted-foreground">Can't scan?</span>
            <span className="text-xs font-mono bg-muted p-2 rounded">{secret}</span>
          </div>
        </div>

        {backupCodes.length > 0 && (
          <div className="w-full space-y-3 border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Backup Codes</h4>
              <div className="flex items-center gap-2">
                <Button type="button" variant="outline" size="icon" onClick={handleCopyBackupCodes}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" size="icon" onClick={handleDownloadBackupCodes}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {backupCodes.map((code, index) => (
                <code key={index} className="bg-muted p-2 rounded text-sm font-mono text-center">
                  {code}
                </code>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Save these codes in a secure place. Each can only be used once.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Verification Code</label>
        <div className="flex gap-2 justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code[i] || ''}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (value) {
                  const newCode = code.split('');
                  newCode[i] = value;
                  setCode(newCode.join('').slice(0, 6));
                  const next = e.target.nextElementSibling as HTMLInputElement;
                  if (next) next.focus();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' && !code[i] && i > 0) {
                  const prev = e.target.previousElementSibling as HTMLInputElement;
                  if (prev) {
                    prev.focus();
                    const newCode = code.split('');
                    newCode[i - 1] = '';
                    setCode(newCode.join(''));
                  }
                }
              }}
              className="w-11 h-11 text-center text-lg font-semibold border-2 border-input rounded-lg bg-background focus:border-ring focus:ring-2 focus:ring-ring/20 transition-all"
              autoFocus={i === 0}
            />
          ))}
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-600 p-2 bg-red-50 rounded">{error}</div>
      )}

      <Button type="submit" className="w-full" isLoading={isLoading} disabled={code.length !== 6}>
        Enable 2FA
      </Button>
    </form>
  );
}
