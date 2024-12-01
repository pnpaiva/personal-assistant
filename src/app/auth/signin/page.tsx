import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import SignInButtons from './sign-in-buttons';

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>

        <SignInButtons />
      </div>
    </div>
  );
}