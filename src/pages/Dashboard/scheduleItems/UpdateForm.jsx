import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function UpdateForm({ formData, closeModal, refetch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Convert time to 12-hour format
  function convertTo12Hour(time24) {
    if (!time24) return "";
    let [hours, minutes] = time24.split(":");
    hours = parseInt(hours, 10);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  }

  // Pre-fill the form when formData changes
  useEffect(() => {
    if (formData) {
      const formattedDate = formData.date
        ? new Date(formData.date).toISOString().split("T")[0]
        : "";

      reset({
        subject: formData.subject || "",
        day: formData.day || "",
        time: formData.time || "",
        instructor: formData.instructor || "",
        date: formattedDate,
      });
    }
  }, [formData, reset]);

  // Submit handler for updating data
  const onSubmit = async (data) => {
    const fullData = {
      ...data,
      date: new Date(data.date),
      time: convertTo12Hour(data.time),
    };

    try {
      const res = await axios.patch(`/api/classes/${formData._id}`, fullData); // PATCH request
      if (res?.data?.modifiedCount > 0) {
        toast.success("Class updated successfully!");
        refetch?.();
        closeModal?.();
      } else {
        toast.error("No changes made or failed to update.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update class");
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md shadow-lg rounded-2xl p-6 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">Update Class</h1>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            {...register("subject", { required: "Subject is required" })}
            className="w-full border p-2 rounded-md"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Day */}
        <div>
          <label className="block mb-1 font-medium">Day</label>
          <select
            {...register("day", { required: "Day is required" })}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Select a day</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
          {errors.day && <p className="text-red-500 text-sm">{errors.day.message}</p>}
        </div>

        {/* Time */}
        <div>
          <label className="block mb-1 font-medium">Time</label>
          <input
            type="time"
            {...register("time", { required: "Time is required" })}
            className="w-full border p-2 rounded-md"
          />
          {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
        </div>

        {/* Instructor */}
        <div>
          <label className="block mb-1 font-medium">Instructor</label>
          <input
            type="text"
            {...register("instructor", { required: "Instructor is required" })}
            className="w-full border p-2 rounded-md"
          />
          {errors.instructor && <p className="text-red-500 text-sm">{errors.instructor.message}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full border p-2 rounded-md"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:cursor-pointer font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Update Class
        </button>
      </form>
    </div>
  );
}
