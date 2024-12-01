'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function SignInButton() {
  const handleSignIn = async () => {
    const { signIn } = await import('next-auth/react');
    await signIn('github', { callbackUrl: '/' });
  };

  return (
    <Button
      variant="outline"
      onClick={handleSignIn}
      className="w-full"
    >
      <Github className="mr-2 h-4 w-4" />
      Continue with GitHub
    </Button>
  );
}