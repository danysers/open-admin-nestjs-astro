import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';

interface BackupCodeVerifyProps {
  onVerifySuccess: () => void;
  onCancel: () => void;
}

export function BackupCodeVerify({ onVerifySuccess, onCancel }: BackupCodeVerifyProps) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 8) {
      setError('Please enter a valid backup code');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { error: authError } = await authClient.twoFactor.verifyBackupCode({
        code: code.trim(),
      });

      if (authError) {
        setError(authError.message || 'Invalid backup code');
        return;
      }

      onVerifySuccess();
    } catch {
      setError('An error occurred while verifying the backup code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label>Backup Code</Label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your backup code"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <CardDescription>
          Enter one of the backup codes you received when setting up 2FA
        </CardDescription>
      </div>

      {error && (
        <div className="text-sm text-red-600 p-2 bg-red-50 rounded">{error}</div>
      )}

      <div className="flex gap-4">
        <Button variant="outline" className="w-full" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button className="w-full" type="submit" isLoading={isLoading}>
          Verify
        </Button>
      </div>
    </form>
  );
}
