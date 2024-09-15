export default function SubArtist({ usernameId, className = "" }) {
  return (
    <>
      <div className="p-2 flex items-center">
        <div className="flex-shrink-0">
          <img
            src="van.jpg"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2>Artist Name</h2>
          <h5>12.99/monthly</h5>
          <h5>Next bill: 29/09/24</h5>
        </div>
      </div>
      <hr />
    </>
  );
}
