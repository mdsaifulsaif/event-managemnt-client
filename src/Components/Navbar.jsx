import { use, useContext, useState } from "react";
import { Link } from "react-router";
import { FaSignOutAlt, FaCalendarAlt, FaBars } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  const userInfo = useContext(AuthContext);
  console.log(userInfo);

  // const userEmail = "john.doe@example.com";
  const userEmail = "john.doe@example.com";

  return (
    <nav className="bg-white     shadow-md px-5 md:px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-xl font-bold text-[#129990]"
      >
        <FaCalendarAlt className="text-2xl" />
        ImpactHub
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/upcoming-events"
          className="text-gray-700 hover:text-[#129990] font-medium"
        >
          Upcoming Events
        </Link>

        {/* Profile Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowName(true)}
          onMouseLeave={() => setShowName(false)}
        >
          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#129990]"
          />

          {/* Hover Username */}
          {showName && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm bg-white border rounded px-2 py-1 shadow">
              John Doe
            </div>
          )}

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
              <Link
                to="/create-event"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Create Event
              </Link>
              <Link
                to={`/manage-events/${userEmail}`}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Manage Events
              </Link>
              <Link
                to="/joined-events"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Joined Events
              </Link>
              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                <FaSignOutAlt className="inline mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t md:hidden z-50">
          <Link
            to="/upcoming-events"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            Upcoming Events
          </Link>
          <Link
            to="/create-event"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            Create Event
          </Link>
          <Link
            to="/manage-events"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            Manage Events
          </Link>
          <Link
            to="/joined-events"
            className="block px-6 py-3 border-b hover:bg-gray-100"
          >
            Joined Events
          </Link>
          <button className="w-full text-left px-6 py-3 text-red-500 hover:bg-gray-100">
            <FaSignOutAlt className="inline mr-2" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
