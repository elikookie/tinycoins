"use client";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import ArtistCard from "@/app/components/artistCard";
import Card from "@/app/components/card";
import NavBar from "@/app/components/navbar";

export default function ArtistProfile({ params }) {
  const [userData, setUserData] = useState(null);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userid } = params;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", userid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());

          const tipsCollectionRef = collection(
            doc(db, "users", userid),
            "tips"
          );
          const tipsSnapshot = await getDocs(tipsCollectionRef);

          const tipsList = tipsSnapshot.docs.map((doc) => doc.data());
          setTips(tipsList);
          if (!tipsSnapshot.empty) {
            const tipsList = tipsSnapshot.docs.map((doc) => doc.data());
            setTips(tipsList);
          } else {
            console.log("No tips found");
          }
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userid]);

  if (loading) return <p>Loading...</p>;
  if (!userData) return <p>User not found</p>;

  return (
    <>
      <NavBar />
      <div className="pt-20 p-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Artist */}
          <div className="md:col-span-1">
            <ArtistCard usernameId={userData.username} />
          </div>

          {/* Recent Tips */}
          <div className="md:col-span-3">
            <br></br>
            <Card>
              <h2 className="text-2xl font-semibold text-center">
                Recent Tips
              </h2>
              <ul className="mt-6 space-y-4 max-h-64 overflow-auto">
                {userData.tips && userData.tips.length > 0 ? (
                  userData.tips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <img src="/coin.png" className="w-12" alt="coin" />
                      <span>{tip.msg}</span>
                      <span>{tip.amount}</span>
                      <span>{tip.date}</span>
                    </li>
                  ))
                ) : (
                  <p>No tips yet</p>
                )}
              </ul>
            </Card>
          </div>
        </div>

        {/* Subscribers */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="md:col-span-4">
            <Card>
              <h2 className="text-2xl font-semibold text-center">Tips</h2>
              <div className="flex justify-center items-center mt-6">
                <img src="/heart-bg.png" className="w-16" alt="heart icon" />
                <span className="text-4xl font-bold mx-2">
                  {userData.tipCount}
                </span>
                <img src="/heart-bg.png" className="w-16" alt="heart icon" />
              </div>
            </Card>
          </div>
        </div>

        {/* Featured Creations */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="md:col-span-4">
            <Card>
              <h2 className="text-2xl font-semibold text-center">
                Featured Creations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <img
                  src="/art1.jpg"
                  alt="Artwork 1"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/art2.jpg"
                  alt="Artwork 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
