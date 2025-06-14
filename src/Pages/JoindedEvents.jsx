import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

function JoindedEvents() {
  const joinedEvents = useLoaderData();

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#129990] mb-8">
        Your Joined Events
      </h2>
      <Helmet>
        <title>Impacthub | Joined Events</title>
      </Helmet>

      {joinedEvents.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't joined any events yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {joinedEvents.map((event) => (
            <div
              key={event._id}
              className="bg-white shadow rounded-lg p-4 border border-gray-100"
            >
              {/* <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-48 object-cover rounded"
              /> */}
              <h3 className="text-xl font-semibold mt-3">{event.title}</h3>
              <p className="text-gray-600 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#129990]" /> {event.location}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <FaCalendarAlt className="text-[#129990]" />{" "}
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Type: {event.eventType}
              </p>
              <Link to={`/event-details/${event._id}`}>
                <button className="mt-3 w-full bg-[#129990] text-white py-2 rounded hover:bg-[#0f877f]">
                  View Event
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default JoindedEvents;
