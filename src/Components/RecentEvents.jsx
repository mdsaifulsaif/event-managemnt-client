import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";
import LoaddingSpinner from "./LoaddingSpinner";

export default function RecentEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://server-site-ruby-eight.vercel.app/events?search=&type=all")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
        setEvents(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <LoaddingSpinner />
      </div>
    );
  }

  return (
    <section className="py-10 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Most Recent Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No recent events found.
        </p>
      ) : (
        <div className="grid md:w-6xl mx-auto gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-100 flex flex-col"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t"
              />

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl dark:text-gray-100 text-gray-800 font-semibold mb-2">
                  {event.title}
                </h3>

                <p className="dark:text-gray-100 text-gray-800 flex items-center gap-2 mb-1">
                  <FaMapMarkerAlt className="text-[#129990]" />
                  {event.location}
                </p>

                <p className="dark:text-gray-100 text-gray-800 flex items-center gap-2 mb-1">
                  <FaCalendarAlt className="text-[#129990]" />
                  {new Date(event.date).toLocaleDateString()}
                </p>

                <p className="dark:text-gray-100 text-gray-800 text-sm mb-4">
                  Type: {event.eventType}
                </p>

                <div className="mt-auto">
                  <Link to={`/event-details/${event._id}`}>
                    <button className="w-full bg-[#129990] text-white py-2 rounded hover:bg-[#0f877f]">
                      View Event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
