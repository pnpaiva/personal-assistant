import { SignInButton } from '@/components/auth/sign-in-button';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to access your personal assistant
          </p>
        </div>

        <div className="space-y-4">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}