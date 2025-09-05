import React, { useRef } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import AddTaskForm from "./planneItems/AddTaskForm";
import PlanneCard from "./planneItems/PlanneCard";

export default function Planner() {

  const axiosSecure = useAxiosSecure();
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const {data,refetch } = useQuery({
    queryKey: ['task-data'],
    queryFn: async() =>{
      const result = await axiosSecure.get("/all-task");
      return result.data;
    }
  })

   const {mutate} = useMutation({
    mutationFn: async (id) =>{
      const res = await axiosSecure.delete(`/classes-delete/${id}`);
      if(res.data.deletedCount === 1){
        toast.success("class removed successful");
        refetch();
      }
    }
   })
 

  return (
    <div className="w-11/12 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between gap-5 items-center">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
            Study Planner
          </h2>
          <p className="text-base md:text-xl">
            Organize your tasks and stay on track
          </p>
        </div>
        <div>
          <button
            onClick={openModal}
            className="text-base md:text-xl btn hover:bg-blue-500 p-1"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Data Section */}
      <PlanneCard data={data} mutate={mutate} refetch={refetch}/>

      {/* Modal Section */}
      <dialog
        id="my_modal_5"
        ref={modalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          {/* Pass closeModal so the form can close modal after success */}
          <AddTaskForm closeModal={closeModal} refetch={refetch}/>

          <div className="modal-action">
            {/* Close button with method="dialog" for quick closing */}
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
