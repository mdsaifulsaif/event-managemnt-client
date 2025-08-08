import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://images.pexels.com/photos/3360701/pexels-photo-3360701.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 3,
    height: 2,
  },
  {
    src: "https://images.pexels.com/photos/3028127/pexels-photo-3028127.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 2,
    height: 1,
  },
  {
    src: "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 2,
    height: 1,
  },
  {
    src: "https://images.pexels.com/photos/32355112/pexels-photo-32355112/free-photo-of-decorated-cow-at-a-festival-in-bangladesh.jpeg?auto=compress&cs=tinysrgb&w=600",
    width: 5,
    height: 1,
  },
  // add more images
];

const EventGallery = () => {
  return (
    <section className="py-16  px-6 ">
      <div className="max-md:w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Event Gallery
        </h2>
        <Gallery photos={photos} />
      </div>
    </section>
  );
};

export default EventGallery;
