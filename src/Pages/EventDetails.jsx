import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { Helmet } from "react-helmet-async";

function EventDetails() {
  const { user } = useContext(AuthContext);
  const event = useLoaderData();
  // const currentUser = "user@gmail.com";
  const currentUser = user?.email;

  const handleJoindEvent = (event) => {
    const joinedData = {
      _id: event._id,
      title: event.title,
      description: event.description,
      location: event.location,
      imageUrl: event.imageUrl,
      eventType: event.eventType,
      createdBy: event.createdBy,
      userEmail: currentUser,
      date: event.date,
      joinedAt: new Date(),
    };
    console.log("joined data ", joinedData);

    axios
      .post("https://server-site-ruby-eight.vercel.app/joinevent", joinedData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Joined Successfully!",
            icon: "success",
            iconColor: "#129990",
            confirmButtonColor: "#129990",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "You have alrady added this event",
            text: "Something went wrong!",
            confirmButtonColor: "#129990",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mt-18 md:mt-23 md:mb-5  py-10  mx-auto p-6 dark:bg-gray-800 bg-white rounded-lg shadow-lg">
      <Helmet>
        <title>Impacthub | Event Details</title>
      </Helmet>
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-2 text-[#129990]">{event.title}</h2>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#129990]" />
          <strong>Location:</strong> {event.location}
        </p>
        <p className="flex items-center gap-2">
          <FaCalendarAlt className="text-[#129990]" />
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="flex items-center gap-2">
          <FaTag className="text-[#129990]" />
          <strong>Type:</strong> {event.eventType}
        </p>
        <p className="flex items-center gap-2">
          <FaUser className="text-[#129990]" />
          <strong>Created By:</strong> {event.createdBy}
        </p>
      </div>
      <button
        onClick={() => handleJoindEvent(event)}
        className="w-full py-1 cursor-pointer hover:text-gray-200 transition-all  bg-[#129990] font-semibold text-lg text-white mt-10  rounded-sm "
      >
        Join Event
      </button>
    </div>
  );
}

export default EventDetails;
