import { FaSearch, FaStar } from "react-icons/fa";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Banner = () => {
  const badgeRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Up-down animation for badge
    gsap.to(badgeRef.current, {
      y: -15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Left to right infinite loop for stats box
    gsap.to(statsRef.current, {
      x: 25,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className=" py-15 mt-15 px-6">
      <div className="md:w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center  gap-10">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl dark:text-white md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Volunteer events made easier for everyone
          </h1>
          <p className="text-gray-600 dark:text-gray-200 text-lg mb-6">
            Impacthub helps you discover and join local community-driven
            initiatives like clean-ups, plantations, and awareness drives.
          </p>
          <div className="flex items-center bg-white dark:bg-gray-600 rounded-full shadow-md max-w-md mx-auto md:mx-0 px-4 py-2 gap-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search social events..."
              className="flex-1 outline-none bg-transparent  text-gray-700"
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
          <div
            ref={badgeRef}
            className="absolute top-[-20px] left-[-20px] bg-[#ff7043] text-white px-4 py-2 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-2 text-sm">
              <FaStar className="text-yellow-300" />5 Star
              <span className="text-xs text-white/80">
                Based on 420 reviews
              </span>
            </div>
          </div>

          {/* Stats Box */}
          <div
            ref={statsRef}
            className="absolute bottom-[-20px] right-[20px] bg-white p-4 rounded-xl shadow-md text-sm text-gray-700 space-y-2"
          >
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
