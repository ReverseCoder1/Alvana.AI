"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const {data: session} = authClient.useSession();

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      password,
      name,
    }, {
      onError: (error) => {
        window.alert("Something went wrong");
      },
      onSuccess: (data) => {
        window.alert("User created successfully");
      },
    });
  }
  const onSignIn = () => {
    authClient.signIn.email({
      email,
      password
    }, {
      onError: (error) => {
        window.alert("Something went wrong");
      },
      onSuccess: (data) => {
        window.alert("Login successfully");
      },
    });
  }

  if(session) {
    return (
      <div className="p-4">
        <h1 className="text-2xl">Welcome, {session.user?.name || "User"}!</h1>
        <p className="mt-2">You are logged in with email: {session.user?.email}</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button onClick={onSubmit}>Create User</Button>
    </div>
    <div className="p-4 flex flex-col gap-y-4">
    <Input
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button onClick={onSignIn}>
        Sign In
      </Button>

    </div>
    </div>
  );
}
