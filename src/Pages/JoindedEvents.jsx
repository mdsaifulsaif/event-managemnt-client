import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData, useNavigation } from "react-router";
import LoaddingSpinner from "../Components/LoaddingSpinner";

function JoindedEvents() {
  const joinedEvents = useLoaderData();
  const navigation = useNavigation();

  // If loader is still running, show spinner
  if (navigation.state === "loading") {
    return <LoaddingSpinner />;
  }

  return (
    <section className="px-6 mt-15 py-10 md:w-6xl mx-auto">
      <Helmet>
        <title>Impacthub | Joined Events</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-[#129990] mb-8">
        Your Joined Events
      </h2>

      {joinedEvents.length === 0 ? (
        <div className="h-70 flex items-center justify-center">
          <p className="text-center text-gray-500">
            You haven't joined any events yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {joinedEvents.map((event) => (
            <div
              key={event._id}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 flex flex-col md:flex-row items-center gap-4"
            >
              {/* Left: Info */}
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-[#129990]">
                  {event.title}
                </h3>
                <p className="text-gray-600 flex dark:text-gray-200 items-center gap-2 mt-2">
                  <FaMapMarkerAlt className="text-[#129990]" /> {event.location}
                </p>
                <p className="text-gray-600 dark:text-gray-200 flex items-center gap-2 mt-1">
                  <FaCalendarAlt className="text-[#129990]" />
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-500 dark:text-gray-200 mt-2">
                  <span className="font-medium">Type:</span> {event.eventType}
                </p>
                <p className="text-gray-500 mt-1 dark:text-gray-200 text-sm">
                  <span className="font-medium">Joined At:</span>{" "}
                  {new Date(event.joinedAt).toLocaleString()}
                </p>
                <p className="text-gray-700 dark:text-gray-200 mt-2">
                  {event.description}
                </p>
              </div>

              {/* Right: Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default JoindedEvents;
