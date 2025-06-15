import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import LoaddingSpinner from "../Components/LoaddingSpinner";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [eventType, setEventType] = useState("all");

  const eventTypes = ["all", "Workshop", "Donation", "Plantation", "Cleanup"];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://server-site-ruby-eight.vercel.app/events",
          {
            params: {
              search: searchText,
              type: eventType,
            },
          }
        );
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [searchText, eventType]);

  return (
    <section className="px-6 py-10 w-11/12 mx-auto">
      <Helmet>
        <title>Upcoming Events</title>
      </Helmet>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by event name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className=" focus:border-2 focus:border-[#129990] border-1 border-[#129990] px-4 py-2 rounded w-full md:w-1/2"
        />

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="border-1 border-[#129990]  px-4 py-2 rounded w-full md:w-1/3"
        >
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type === "all" ? "All Types" : type}
            </option>
          ))}
        </select>
      </div>

      {/* Events Display */}
      {loading ? (
        <LoaddingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            events.map((event) => (
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
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default UpcomingEvents;
