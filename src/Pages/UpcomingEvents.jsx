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
    <section className=" py-10 mt-15 px-5 md:w-6xl mx-auto">
      <Helmet>
        <title>Upcoming Events</title>
      </Helmet>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row  justify-between gap-4 mb-6">
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
                    <FaMapMarkerAlt className="text-[#129990]" />{" "}
                    {event.location}
                  </p>

                  <p className="dark:text-gray-100 text-gray-800 flex items-center gap-2 mb-1">
                    <FaCalendarAlt className="text-[#129990]" />{" "}
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
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default UpcomingEvents;
