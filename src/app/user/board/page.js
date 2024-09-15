import ArtistCard from "@/app/components/artistCard";
import Card from "@/app/components/card";
import NavBar from "@/app/components/navbar";

export default function ArtistProfile() {
  return (
    <>
      <NavBar />
      <div className="pt-20 p-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Artist */}
          <div className="md:col-span-1">
            <ArtistCard />
          </div>

          {/* Recent Tips */}
          <div className="md:col-span-3">
            <br></br>
            <Card>
              <h2 className="text-2xl font-semibold text-center">Recent Tips</h2>
              <ul className="mt-6 space-y-4 max-h-64 overflow-auto">
                {[
                  { message: "- No message -", amount: "£9.99", date: "12/12/23" },
                  { message: "Hiii I love you", amount: "£9.99", date: "12/12/23" },
                  { message: "Love from Emi", amount: "£9.99", date: "12/12/23" },
                  { message: "Love from Emi", amount: "£9.99", date: "12/12/23" },
                  { message: "Love from Emi", amount: "£9.99", date: "12/12/23" },
                  { message: "Love from Emi", amount: "£9.99", date: "12/12/23" },
                  { message: "Love from Emi", amount: "£9.99", date: "12/12/23" },

                ].map((tip, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <img src="/coin.png" className="w-12" alt="coin" />
                    <span>{tip.message}</span>
                    <span>{tip.amount}</span>
                    <span>{tip.date}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

        </div>

        {/* Subscribers */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="md:col-span-4">
            <Card>
              <h2 className="text-2xl font-semibold text-center">Subscribers</h2>
              <div className="flex justify-center items-center mt-6">
                <img src="/heart-bg.png" className="w-16" alt="heart icon" />
                <span className="text-4xl font-bold mx-2">100k</span>
                <img src="/heart-bg.png" className="w-16" alt="heart icon" />
              </div>
            </Card>
          </div>
        </div>

        {/* Featured Creations */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="md:col-span-4">
            <Card>
              <h2 className="text-2xl font-semibold text-center">Featured Creations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <img src="/art1.jpg" alt="Artwork 1" className="w-full h-auto object-cover" />
                <img src="/art2.jpg" alt="Artwork 2" className="w-full h-auto object-cover" />
              </div>
            </Card>
          </div>
        </div>

      </div>
    </>
  );
}
