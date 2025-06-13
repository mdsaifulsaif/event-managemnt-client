import React from "react";

const images = [
  { id: 1, src: "/images/event1.jpg", alt: "Event 1" },
  { id: 2, src: "/images/event2.jpg", alt: "Event 2" },
  { id: 3, src: "/images/event3.jpg", alt: "Event 3" },
  { id: 4, src: "/images/event4.jpg", alt: "Event 4" },
  { id: 5, src: "/images/event5.jpg", alt: "Event 5" },
  {
    id: 6,
    src: "https://images.pexels.com/photos/32355112/pexels-photo-32355112/free-photo-of-decorated-cow-at-a-festival-in-bangladesh.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Event 6",
  },
];

const Gallery = () => {
  return (
    <section className="px-4 py-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#129990] mb-10">
        Event Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {/* First row: 2 images (each takes 3 cols on md+) */}
        <div className="md:col-span-3 col-span-1">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <div className="md:col-span-3 col-span-1">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>

        {/* Second row: 3 images (each takes 2 cols on md+) */}
        <div className="md:col-span-2 col-span-1">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img
            src={images[3].src}
            alt={images[3].alt}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img
            src={images[4].src}
            alt={images[4].alt}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
