import { FaSearch, FaBars, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-fuchsia-50 z-10">
      <div className="flex justify-between items-center w-full p-4 ">
        <button className="text-gray-600 focus:outline-none">
          <FaBars size={24} />
        </button>

        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Search for a creator"
            className="w-full py-2 px-4 rounded-full bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute right-4 top-3 text-gray-500" />
        </div>

        <button className="text-gray-600">
          <FaUserCircle size={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
