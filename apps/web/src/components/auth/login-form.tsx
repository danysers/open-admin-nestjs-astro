import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { authClient } from '@/lib/auth-client';

const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginForm = z.infer<typeof LoginSchema>;

interface LoginProps {
  onLoginSuccess: () => void;
  onTwoFactorRequired: () => void;
}

export function LoginForm({ onLoginSuccess, onTwoFactorRequired }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);

  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginForm) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });

      if (authError) {
        setError(authError.message || 'Invalid credentials');
        return;
      }

      // @ts-ignore
      if (data?.twoFactorRedirect) {
        onTwoFactorRequired();
        return;
      }

      onLoginSuccess();
    } catch {
      setError('An error occurred while logging in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" id="login-form">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#495057]">Email</FormLabel>
                <FormControl>
                  <div className="flex h-10 items-center rounded-md border border-[#ced4da] bg-white px-3">
                    <span className="mr-2 text-[#6c757d]">@</span>
                    <input
                      className="h-full w-full border-0 bg-transparent text-sm outline-none"
                      placeholder="admin@example.com"
                      autoComplete="email"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#495057]">Password</FormLabel>
                <FormControl>
                  <div className="flex h-10 items-center rounded-md border border-[#ced4da] bg-white px-3">
                    <span className="mr-2 text-[#6c757d]">*</span>
                    <input
                      type="password"
                      className="h-full w-full border-0 bg-transparent text-sm outline-none"
                      placeholder="Password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <label className="flex items-center gap-2 text-sm text-[#6c757d]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 rounded border-[#ced4da]"
            />
            Remember me
          </label>

          {error && (
            <div className="rounded-md border border-[#f5c2c7] bg-[#f8d7da] px-3 py-2 text-sm text-[#842029]">{error}</div>
          )}

          <button
            className="h-10 w-full rounded-md bg-[#6c757d] px-3 text-sm font-medium text-white transition hover:bg-[#5c636a] disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </Form>
    </>
  );
}
