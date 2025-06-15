import React from "react";
import { useLoaderData } from "react-router";

function Allevents() {
  const events = useLoaderData();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">All Events</h2>
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  📍 {event.location}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  📅 {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-700">
                  {event.description.slice(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Allevents;
