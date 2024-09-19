"use client";

import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

import Card from "../components/card";
import Button from "../components/button";
import Input from "../components/input";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const res = await signInWithGoogle(email, password);
      console.log({ res });
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
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
        <Button onClick={handleSignIn}>Sign In</Button>
        <br></br>
        <Button onClick={handleSignInWithGoogle}>Sign In with Google</Button>
      </Card>
    </main>
  );
}
