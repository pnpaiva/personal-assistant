"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function SignInButton() {
  return (
    <Button
      asChild
      variant="outline"
      className="w-full"
    >
      <a href="/api/auth/signin/github?callbackUrl=/">
        <Github className="mr-2 h-4 w-4" />
        Continue with GitHub
      </a>
    </Button>
  );
}
