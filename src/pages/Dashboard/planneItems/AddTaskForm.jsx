import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

export default function AddTaskForm({ closeModal, refetch }) {
  const axiosSecure = useAxiosSecure();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const timeValue = watch("time");
  const onSubmit = async (data) => {
    const fullData = {
      ...data,
      date: new Date(data.date),
    };

    const res = await axiosSecure.post("/add-class", fullData);
    if (res?.data?.insertedId) {
      toast.success("Add your new class");
      reset();
      refetch();
      closeModal?.();
    }
  };

  return (
    <div className=" flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md shadow-lg rounded-2xl p-6 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">Add New Task</h1>

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

        {/* priority */}
        <div>
          <label className="block mb-1 font-medium">Priority</label>
          <select
            {...register("priority", { required: "priority is required" })}
            className="w-full border p-2 rounded-md"
          >
            <option className=" dark:text-black" value="">
              Select a priority
            </option>
            <option className=" dark:text-black" value="Sunday">
              low
            </option>
            <option className=" dark:text-black" value="Monday">
              medium
            </option>
            <option className=" dark:text-black" value="Tuesday">
              high
            </option>
          </select>
          {errors.day && (
            <p className="text-red-500 text-sm">{errors.priority.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Task Description</label>
          <textarea
            {...register("description", {
              required: "Task description is required",
            })}
            className="w-full border p-2 rounded-md"
            placeholder="Enter task description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium">Deadline</label>
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
          Add Task
        </button>
      </form>
      
    </div>
    
  );
}
