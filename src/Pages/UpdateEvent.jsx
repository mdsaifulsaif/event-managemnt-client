import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { Helmet } from "react-helmet-async";

const UpdateEvent = () => {
  const { user } = useContext(AuthContext);
  const usermail = user.email;

  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    title,
    description,
    eventType,
    imageUrl,
    location,
    date,
    createdBy,
  } = data;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "",
    imageUrl: "",
    location: "",
    date: null,
  });

  useEffect(() => {
    if (data) {
      setFormData({
        title,
        description,
        eventType,
        imageUrl,
        location,
        date: new Date(date),
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      ...formData,
      createdBy,
    };

    axios
      .put(
        `https://server-site-ruby-eight.vercel.app/update-event/${_id}`,
        eventData
      )
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Event Updated Successfully!",
            icon: "success",
            iconColor: "#129990",
            confirmButtonColor: "#129990",
          });
          navigate(`/manage-events/${usermail}`);
        }
      })
      .catch((error) => {
        console.log("Error updating event:", error);
      });
  };

  return (
    <section className="max-w-3xl mt-18 mx-auto px-4 py-10">
      <Helmet>
        <title>Impacthub | Update Event</title>
      </Helmet>

      <h2 className="text-3xl font-bold mb-6 text-gray-700 dark:text-gray-100">
        Update Event
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-5"
      >
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 px-4 py-2 rounded-md"
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 px-4 py-2 rounded-md"
          required
        />

        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 px-4 py-2 rounded-md"
          required
        >
          <option value="">Select Event Type</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
          <option value="Workshop">Workshop</option>
        </select>

        <input
          type="text"
          name="imageUrl"
          placeholder="Thumbnail Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 px-4 py-2 rounded-md"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 px-4 py-2 rounded-md"
          required
        />

        <div className="w-full">
          <label className="block text-gray-700 dark:text-gray-100 mb-1">
            Event Date
          </label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select future date"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 px-4 py-2 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#129990] text-white px-6 py-2 rounded-md hover:bg-[#0f857e] transition"
        >
          Update Event
        </button>
      </form>
    </section>
  );
};

export default UpdateEvent;
