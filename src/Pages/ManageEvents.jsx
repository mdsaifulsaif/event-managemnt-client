import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrash } from "react-icons/fa"; // React Icons
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ManageEvents = () => {
  const data = useLoaderData();

  const [events, setEvents] = useState(data);

  const handleUpdate = () => {
    // console.log("Update clicked:", event?._id);
    // Add update logic
  };

  const handledelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#129990",
      confirmButtonColor: "#129990",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-site-ruby-eight.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const deletedPlant = events.filter((p) => p._id !== id);
              setEvents(deletedPlant);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Impacthub | Manage Events</title>
      </Helmet>
      <h2 className="text-3xl mt-7  font-bold text-[#129990]  mb-6  text-center">
        Manage Event
      </h2>

      <div
        className={`md:w-6xl bg-white dark:bg-gray-800 mx-auto grid gap-5  ${
          events?.length === 0 ? "grid-cols-1" : "grid-cols-3"
        } `}
      >
        {events?.length === 0 ? (
          <div className=" h-[70vh] text-center bg-white dark:bg-gray-700 mb-4 flex items-center justify-center text-gray-700 px-6 py-4 rounded-xl shadow">
            <div>
              <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold mb-1">
                No Events Yet
              </h3>
              <p className="text-gray-800 dark:text-gray-100">
                Please create an event to manage it here.
              </p>
            </div>
          </div>
        ) : (
          events?.map((event) => (
            <div
              key={event?._id}
              className=" mt-10 p-6 dark:bg-gray-800 bg-white shadow-lg rounded-2xl"
            >
              <img
                src={event?.imageUrl || "https://via.placeholder.com/400x200"}
                alt={event?.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <div>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Title:</strong> {event?.title}
                  </p>
                  <p>
                    <strong>Description:</strong> {event?.description}
                  </p>
                  <p>
                    <strong>Type:</strong> {event?.eventType}
                  </p>
                  <p>
                    <strong>Location:</strong> {event?.location}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(event?.date).toLocaleString()}
                  </p>
                  <p>
                    <strong>Created By:</strong> {event?.createdBy}
                  </p>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <Link to={`/update/${event?._id}`}>
                    <button
                      onClick={handleUpdate}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                    >
                      <FaEdit />
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => handledelete(event?._id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ManageEvents;
