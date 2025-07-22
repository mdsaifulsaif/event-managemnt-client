const CommunityVoices = () => {
  const voices = [
    {
      name: "Rafiq, Organizer",
      quote:
        "Using ImpactHub, I gathered 80+ volunteers for a river clean-up in under 2 days!",
    },
    {
      name: "Maya, Volunteer",
      quote:
        "This platform helped me find real causes in my area. It's easy and fulfilling.",
    },
    {
      name: "Kamal, Youth Leader",
      quote:
        "As a community organizer, this made outreach so much easier than Facebook posts.",
    },
  ];

  return (
    <section className="px-5 md:px-20 py-10 mt-15 bg-gray-50  dark:bg-gray-800">
      <h2 className="text-2xl font-bold dark:text-gray-200 text-[#129990] mb-8">
        Community Voices
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {voices.map((v, i) => (
          <div
            key={i}
            className="border border-[#129990] rounded-lg p-6 shadow-sm bg-white dark:bg-gray-800"
          >
            <p className="italic dark:text-gray-200 text-gray-600">
              “{v.quote}”
            </p>
            <p className="mt-4 font-semibold text-[#129990]">— {v.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityVoices;
