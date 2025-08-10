import {
  FaCalendarPlus,
  FaUsers,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarPlus className="text-[#129990] text-3xl mb-4" />,
    title: "Create Events",
    description:
      "Easily organize and publish your own social service events in just a few clicks.",
  },
  {
    icon: <FaUsers className="text-[#129990] text-3xl mb-4" />,
    title: "Join the Community",
    description:
      "Discover and participate in events hosted by others around your area.",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#129990] text-3xl mb-4" />,
    title: "Local Impact",
    description:
      "Track activities by location and contribute to positive changes in your neighborhood.",
  },
  {
    icon: <FaHeart className="text-[#129990] text-3xl mb-4" />,
    title: "Meaningful Contributions",
    description:
      "Support causes you care about and make a difference alongside like-minded volunteers.",
  },
];

const Features = () => {
  return (
    <section className="py-10 px-6">
      <div className="md:w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl dark:text-gray-200 font-bold text-gray-800 mb-4">
          What You Can Do with ImpactHub
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          EventMatea empowers local communities to take action by making event
          planning and participation simple, accessible, and effective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow hover:shadow-md transition text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-200 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm dark:text-gray-200 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
