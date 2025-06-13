import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch filtered events from backend
  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/events", {
        params: {
          eventType: selectedType,
          search: searchTerm,
        },
        withCredentials: true,
      });
      setEvents(res.data);

      // Collect event types
      const types = new Set(res.data.map((event) => event.eventType));
      setEventTypes(["All", ...types]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [selectedType, searchTerm]);

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#129990] mb-8">
        Upcoming Events
      </h2>

      {/* Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by event name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-72"
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white shadow rounded-lg p-4 border border-gray-100"
          >
            <img
              src={event.thumbnail}
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
