import React from "react";

const images = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2022/08/07/05/41/city-7369870_1280.jpg",
    alt: "Event 1",
  },
  {
    id: 2,
    src: "data:image/jpeg;base64,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",
    alt: "Event 2",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2019/06/15/16/02/city-4275952_1280.jpg",
    alt: "Event 3",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2017/06/17/02/37/street-2411013_1280.jpg",
    alt: "Event 4",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2021/01/30/14/22/women-5963960_1280.jpg",
    alt: "Event 5",
  },
];

const Gallery = () => {
  return (
    <section className="px-4 py-12 md:w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 dark:text-gray-100 mb-8">
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
