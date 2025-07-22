const Newsletter = () => {
  return (
    <section className="bg-[#129990] dark:bg-gray-700 py-16 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl dark:text-gray-200 font-bold mb-4">
          Stay Updated with Social Events
        </h2>
        <p className="mb-8 text-white/90 dark:text-gray-200 ">
          Subscribe to our newsletter to receive updates about upcoming
          community events, volunteer opportunities, and inspiring stories.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-full dark:bg-gray-800 dark:text-gray-100  bg-white text-gray-700 outline-none"
          />
          <button
            type="submit"
            className="bg-white dark:bg-gray-800 text-[#129990] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
