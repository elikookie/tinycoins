import Button from "./button";
import Card from "./card";

export default function ArtistCard({ usernameId, className = "" }) {
    return (
        <div className="p-4">
          <Card className="text-center w-full p-4">
            <div className="flex justify-center items-center">
              <img src="van.jpg" className="w-16 h-16 rounded-full" />
            </div>
            <h1>Artist Name</h1>
            <p>Links</p>
            <p>Links</p>
            <p>Links</p>
    
            <div className="flex justify-center items-center space-x-2 my-4">
              <img src="coin.png" className="w-12 sm:w-16" />
              <Button className="w-48 sm:w-72">Tip</Button>
              <img src="coin.png" className="w-12 sm:w-16" />
            </div>
    
            <div className="flex justify-center items-center space-x-2">
              <img src="coin.png" className="w-12 sm:w-16" />
              <Button className="w-48 sm:w-72">Subscribe</Button>
              <img src="coin.png" className="w-12 sm:w-16" />
            </div>
          </Card>
        </div>
      );
    }