import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://cdn.pixabay.com/photo/2025/05/31/20/23/trees-9634157_1280.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/05/31/20/23/trees-9634157_1280.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/05/31/20/23/trees-9634157_1280.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/06/01/22/28/rose-9635995_1280.jpg",
    width: 5,
    height: 1,
  },
  // add more images
];

const EventGallery = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Event Gallery
        </h2>
        <Gallery photos={photos} />
      </div>
    </section>
  );
};

export default EventGallery;
