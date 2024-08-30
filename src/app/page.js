import Card from "./components/card";
import Input
 from "./components/input";
export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-fuchsia-50">
      <Card>
        <Input placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
      </Card>
    </main>
  );
}
