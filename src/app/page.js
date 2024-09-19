"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/config";
import { useRouter } from "next/navigation";

import ArtistCard from "./components/artistCard";
import SubArtist from "./components/subArtist";
import Card from "./components/card";
import NavBar from "./components/navbar";

export default function Home() {
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");
  const router = useRouter();

  if (!user && !userSession) {
    router.push("/signin");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-2 sm:p-24 bg-fuchsia-50">
      <NavBar />
      <button
        onClick={() => {
          signOut(auth);
          sessionStorage.removeItem("user");
        }}
      >
        OUT
      </button>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>

        <div className="md:col-span-1">
          <Card className="w-full p-4">
            <h1 className="text-center">Subscriptions</h1>
            <hr className="my-2" />
            <SubArtist />
            <SubArtist />
            <SubArtist />
          </Card>
        </div>
      </div>
    </main>
  );
}
