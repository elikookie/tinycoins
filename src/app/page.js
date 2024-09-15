import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/button";
import { signIn, signInWithGoogle } from "./components/auth"

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-fuchsia-50">
      <Card className="p-10">
        <img src="/TinyCoins.png" className="mb-10"></img>
        <Input placeholder="Email"></Input>
        <br />
        <Input type="password" placeholder="Password"></Input>
        <br />
        <br />
        <Button onClick={signIn}>Login</Button>
      </Card>
    </main>
  );
}
