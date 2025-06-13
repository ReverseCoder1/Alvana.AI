"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const HomeView = () => {
    const router = useRouter();
  const { data : session} = authClient.useSession();
  if(!session) {
    return(
      <p>Loading...</p>
    )}
  return (
    <div className="p-4">
        <h1 className="text-2xl">Welcome, {session.user?.name || "User"}!</h1>
        <Button onClick={() => authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push('/sign-in');
                }
            }
        })} className="w-full">Sign Out</Button>
    </div>
  );
}

export default HomeView;