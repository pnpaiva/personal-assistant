import { ChatContainer } from '@/components/Chat/ChatContainer';
import { auth, signOut } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">Personal Assistant</h1>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button variant="ghost">Sign Out</Button>
          </form>
        </div>
      </header>

      <div className="container flex-1 py-4">
        <div className="mx-auto h-[calc(100vh-10rem)] max-w-2xl rounded-lg border">
          <ChatContainer />
        </div>
      </div>
    </main>
  );
}