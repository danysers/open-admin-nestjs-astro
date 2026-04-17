import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';

interface TwoFactorVerifyProps {
  onVerifySuccess: () => void;
  onBack: () => void;
  onUseBackupCode: () => void;
}

export function TwoFactorVerify({ onVerifySuccess, onBack, onUseBackupCode }: TwoFactorVerifyProps) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
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

      onVerifySuccess();
    } catch {
      setError('An error occurred while verifying the code');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="two-factor-form">
      <div className="flex flex-col gap-2">
        <Label htmlFor="totp-code">2FA Code</Label>
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
        <CardDescription>
          Enter the 6-digit code from your authenticator app
        </CardDescription>
      </div>

      {error && (
        <div className="text-sm text-red-600 p-2 bg-red-50 rounded">{error}</div>
      )}

      <button
        type="button"
        onClick={onUseBackupCode}
        className="text-sm text-muted-foreground hover:underline"
      >
        Lost access to your authenticator app?
      </button>

      <div className="flex gap-4">
        <Button variant="outline" className="w-full" type="button" onClick={onBack}>
          Back
        </Button>
        <Button className="w-full" type="submit" isLoading={isLoading} disabled={code.length !== 6}>
          Verify
        </Button>
      </div>
    </form>
  );
}
