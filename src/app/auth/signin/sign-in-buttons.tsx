'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function SignInButtons() {
  return (
    <div className="grid gap-4">
      <Button
        variant="outline"
        onClick={() => signIn('github', { callbackUrl: '/' })}
      >
        <Github className="mr-2 h-4 w-4" />
        Continue with Github
      </Button>
    </div>
  );
}