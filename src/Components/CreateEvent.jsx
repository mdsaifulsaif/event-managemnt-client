import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { Helmet } from "react-helmet-async";

// Mocked user email — in real case, you'd get this from auth context

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  // const token = user.accessToken;
  // console.log(token);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "",
    imageUrl: "",
    location: "",
    date: null,
  });

  const userEmail = user?.email;

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
      createdBy: userEmail,
    };

    axios
      .post("http://localhost:3000/event", eventData, { withCredentials: true })
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            title: "Event Added Successfully!",
            icon: "success",
            iconColor: "#129990",
            confirmButtonColor: "#129990",
            draggable: true,
          });

          //  Clear the form
          setFormData({
            title: "",
            description: "",
            eventType: "",
            imageUrl: "",
            location: "",
            date: null,
          });
        }
      })
      .catch((error) => {});
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <Helmet>
        <title>Impacthub | Create Event</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-[#129990]">
        Create a New Event
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-5"
      >
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          required
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        />

        <textarea
          name="description"
          placeholder="Event Description"
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        />

        <select
          name="eventType"
          required
          value={formData.eventType}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
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
          required
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          required
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        />

        <div className="w-full">
          <label className="block text-gray-700 mb-1">Event Date</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select future date"
            className="w-full border px-4 py-2 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#129990] text-white px-6 py-2 rounded-md hover:bg-[#0f857e] transition"
        >
          Create Event
        </button>
      </form>
    </section>
  );
};

export default CreateEvent;
