import { FaExclamationTriangle, FaHome, FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Error Icon */}
      <div className="mb-6 text-[#129990]">
        <FaExclamationTriangle size={80} />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="flex items-center gap-2 bg-[#129990] hover:bg-[#0e7a7a] text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          <FaHome /> Go Home
        </Link>
        <Link
          to="/events"
          className="flex items-center gap-2 border border-[#129990] text-[#129990] hover:bg-[#129990]/10 font-medium py-2 px-6 rounded-lg transition-colors"
        >
          <FaSearch /> Browse Events
        </Link>
      </div>
    </div>
  );
};

export default Error404;
