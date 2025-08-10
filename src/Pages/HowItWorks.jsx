const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Sign Up",
      desc: "Create your free account to get started with volunteering or hosting.",
    },
    {
      step: "2",
      title: "Explore Events",
      desc: "Browse local initiatives based on category or location.",
    },
    {
      step: "3",
      title: "Join or Create",
      desc: "Register for an existing event or create your own in a few clicks.",
    },
    {
      step: "4",
      title: "Make Impact",
      desc: "Track your contribution, share updates, and inspire others.",
    },
  ];

  return (
    <section className="md:w-6xl min-h-[60vh] mx-auto px-5 md:px-20 py-10 mt-15 bg-white dark:bg-gray-800 ">
      <h2 className="text-2xl font-bold text-[#129990] dark:text-gray-200 mb-8">
        How It Works
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map(({ step, title, desc }) => (
          <div
            key={step}
            className="border dark:bg-gray-800 shadow-xl  border-[#129990] rounded-lg p-4  text-center"
          >
            <div className="text-2xl font-bold text-[#129990] mb-2">{step}</div>
            <h3 className="text-lg font-semibold dark:text-gray-200 text-gray-800">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm mt-2">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
