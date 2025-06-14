import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { user, signOutUser } = useContext(AuthContext);
  const userEmail = user?.email;

  // Apply/remove dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logged out successfully!",
          icon: "success",
          iconColor: "#129990",
          confirmButtonColor: "#129990",
        });
      })
      .catch(console.log);
  };

  return (
    <nav className="bg-white  shadow-md px-5 md:px-20 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-xl font-bold text-[#129990]"
      >
        <FaCalendarAlt className="text-2xl" />
        ImpactHub
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-gray-800 ">
        <Link
          to="/upcoming-events"
          className="hover:text-[#129990] font-medium"
        >
          Upcoming Events
        </Link>

        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {user ? (
          <div className="relative">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
            >
              <img
                src={user?.photoURL}
                alt="Profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#129990]"
              />
            </a>
            <Tooltip id="my-tooltip" place="left" />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white  border rounded shadow-lg z-50">
                <Link
                  to="/create-event"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 "
                >
                  Create Event
                </Link>
                <Link
                  to={`/manage-events/${userEmail}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 "
                >
                  Manage Events
                </Link>
                <Link
                  to="/joined-events"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 "
                >
                  Joined Events
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 "
                >
                  <FaSignOutAlt className="inline mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-[#129990] text-white px-3 py-1 rounded">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl mr-5">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl text-gray-700 " />
          ) : (
            <FaBars className="text-2xl text-gray-700 " />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-5 w-64 mt-2 bg-white dark:bg-gray-900 border rounded-md shadow-lg md:hidden z-50 p-4 space-y-3 text-gray-800 dark:text-white">
          <Link
            to="/upcoming-events"
            className="block hover:text-[#129990]"
            onClick={() => setMenuOpen(false)}
          >
            Upcoming Events
          </Link>

          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 text-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          {user ? (
            <>
              <Link
                to="/create-event"
                className="block hover:text-[#129990]"
                onClick={() => setMenuOpen(false)}
              >
                Create Event
              </Link>
              <Link
                to={`/manage-events/${userEmail}`}
                className="block hover:text-[#129990]"
                onClick={() => setMenuOpen(false)}
              >
                Manage Events
              </Link>
              <Link
                to="/joined-events"
                className="block hover:text-[#129990]"
                onClick={() => setMenuOpen(false)}
              >
                Joined Events
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-red-500 hover:text-red-600"
              >
                <FaSignOutAlt className="inline mr-2" />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button
                className="bg-[#129990] text-white px-3 py-1 rounded w-full"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
