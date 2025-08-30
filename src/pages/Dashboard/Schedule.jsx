import React, { useRef } from "react";
import AddClassForm from "./scheduleItems/AddClassForm";

export default function Schedule() {

  
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between gap-5 items-center">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
            Class Schedule
          </h2>
          <p className="text-base md:text-xl">
            Manage your weekly class schedule
          </p>
        </div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="text-base md:text-xl btn hover:bg-blue-500 p-1"
          >
            Add Class
          </button>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <AddClassForm/>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
