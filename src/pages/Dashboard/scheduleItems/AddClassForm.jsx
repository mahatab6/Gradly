import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export default function AddClassForm({ closeModal }) {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axiosSecure.post("/add-class", data);
    if (res?.data?.insertedId) {
      toast.success("Add your new class");
      reset();
      closeModal?.();
    }
  };

  return (
    <div className=" flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md shadow-lg rounded-2xl p-6 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">Add New Class</h1>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            {...register("subject", { required: "Subject is required" })}
            className="w-full border p-2 rounded-md"
            placeholder="Enter subject name"
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
            <option className=" dark:text-black" value="">
              Select a day
            </option>
            <option className=" dark:text-black" value="Sunday">
              Sunday
            </option>
            <option className=" dark:text-black" value="Monday">
              Monday
            </option>
            <option className=" dark:text-black" value="Tuesday">
              Tuesday
            </option>
            <option className=" dark:text-black" value="Wednesday">
              Wednesday
            </option>
            <option className=" dark:text-black" value="Thursday">
              Thursday
            </option>
            <option className=" dark:text-black" value="Friday">
              Friday
            </option>
            <option className=" dark:text-black" value="Saturday">
              Saturday
            </option>
          </select>
          {errors.day && (
            <p className="text-red-500 text-sm">{errors.day.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label className="block mb-1 font-medium">Time</label>
          <input
            type="time"
            {...register("time", { required: "Time is required" })}
            className="w-full border p-2 rounded-md"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>

        {/* Instructor */}
        <div>
          <label className="block mb-1 font-medium">Instructor</label>
          <input
            type="text"
            {...register("instructor", {
              required: "Instructor name is required",
            })}
            className="w-full border p-2 rounded-md"
            placeholder="Enter instructor name"
          />
          {errors.instructor && (
            <p className="text-red-500 text-sm">{errors.instructor.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full border p-2 rounded-md"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:cursor-pointer font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Class
        </button>
      </form>
    </div>
  );
}
