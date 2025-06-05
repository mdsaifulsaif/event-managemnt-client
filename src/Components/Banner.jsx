import { FaSearch, FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[#f9fdfc] py-16 px-6">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center  gap-10">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Volunteer events made easier for everyone
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            EventMatea helps you discover and join local community-driven
            initiatives like clean-ups, plantations, and awareness drives.
          </p>
          <div className="flex items-center bg-white rounded-full shadow-md max-w-md mx-auto md:mx-0 px-4 py-2 gap-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search social events..."
              className="flex-1 outline-none bg-transparent text-gray-700"
            />
            <button className="bg-[#129990] text-white px-4 py-1.5 rounded-full hover:bg-[#0e807c] transition">
              Search
            </button>
          </div>
        </div>

        {/* Right: Image & Stats */}
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/30/20/47/train-3714601_1280.jpg"
            alt="Volunteer"
            className="rounded-xl w-[500px] object-cover"
          />

          {/* Rating Badge */}
          <div className="absolute top-[-20px] left-[-20px] bg-[#ff7043] text-white px-4 py-2 rounded-xl shadow-md">
            <div className="flex items-center gap-2 text-sm">
              <FaStar className="text-yellow-300" />5 Star
              <span className="text-xs text-white/80">
                Based on 420 reviews
              </span>
            </div>
          </div>

          {/* Stats Box */}
          <div className="absolute bottom-[-20px] right-[20px] bg-white p-4 rounded-xl shadow-md text-sm text-gray-700 space-y-2">
            <p>
              <strong className="text-[#129990]">72%</strong> Community Goal
            </p>
            <p>
              <strong className="text-[#129990]">96%</strong> Event Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
