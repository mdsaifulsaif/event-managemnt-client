import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import LoaddingSpinner from "../Components/LoaddingSpinner";

function UpcomingEvents() {
  const events = useLoaderData();

  return (
    <section className="px-6 py-10 w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white shadow rounded-lg p-4 border border-gray-100"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover rounded"
            />
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
    </section>
  );
}

export default UpcomingEvents;
