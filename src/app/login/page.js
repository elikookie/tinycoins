"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/card";
import Input from "../components/input";
import Button from "../components/button";
import { signIn, signInWithGoogle } from "../components/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const user = await signIn(email, password);
      router.push(`/${user.uid}/board`);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-fuchsia-50">
      <Card className="p-10">
        <img src="/TinyCoins.png" className="mb-10" alt="Tiny Coins Logo" />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button onClick={handleLogin}>Login</Button>
        <br></br>
        <Button onClick={signInWithGoogle}>Login with Google</Button>
      </Card>
    </main>
  );
}
