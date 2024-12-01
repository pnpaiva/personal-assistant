"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function SignInButton() {
  return (
    <InteractiveButton />
  );
}

function InteractiveButton() {
  const handleSignIn = async () => {
    try {
      const { signIn } = await import("next-auth/react");
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
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

