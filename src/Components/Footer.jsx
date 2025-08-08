import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-700 ">
      <div className=" w-11/12 mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold " style={{ color: "#129990" }}>
            ImpactHub
          </h2>
          <p className="text-sm mt-2 leading-6">
            EventMatea is a community-driven platform empowering individuals to
            create, join, and track social development events. From tree
            plantations to community cleanups, we help you make a local impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-[#129990] ">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#129990] ">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/upcoming-events" className="hover:text-[#129990] ">
                Upcoming Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/howitwork" className="hover:text-[#129990] ">
                How It Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/communityvoices" className="hover:text-[#129990] ">
                CommunityVoices
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contact & Info</h3>
          <p className="text-sm mb-2">
            Have questions or want to suggest an event?
          </p>
          <p className="text-sm">
            Email us at:{" "}
            <a
              href="mailto:info@eventmatea.com"
              className="hover:underline"
              style={{ color: "#129990" }}
            >
              info@impactHub.com
            </a>
          </p>
          <p className="text-sm mt-2">Based in Dhaka, Bangladesh 🇧🇩</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} ImpactHub — Empowering Local Impact
      </div>
    </footer>
  );
};

export default Footer;
