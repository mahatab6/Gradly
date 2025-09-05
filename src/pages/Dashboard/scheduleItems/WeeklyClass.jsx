import React, { useRef, useState } from "react";
import { MdDeleteForever, MdOutlineDateRange } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegEdit, FaUser } from "react-icons/fa";
import UpdateForm from "./UpdateForm";

export default function WeeklyClass({ data, mutate, refetch }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

   const modalRef = useRef(null);
   const [formData, setFormData] = useState([]);

    const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
    refetch()
  };
 

  const handleDelete =  (id) =>{
    mutate(id)
  }

  const handleEdit = (id) =>{
    const signleData = data.find(item => item._id === id);
    setFormData(signleData);
    openModal();
  }
  

  return (
    <div className="grid grid-cols-1  lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {days.map((day) => {
        const classesForDays = data?.filter((item) => item.day === day);
        return (
          <div key={day} className=" border  shadow-2xl rounded-2xl">
            <h2 className="text-xl font-bold p-4 text-center">{day}</h2>
            <div>
              {classesForDays?.length > 0 ? (
                classesForDays.map((cls, index) => (
                  <div key={index} className="m-3 p-2 bg-base-300 rounded-2xl">
                    <div className="flex justify-between items-center gap-1">
                      <p className="text-xl font-semibold">{cls?.subject} </p>
                      <div className="flex gap-1">
                      <button onClick={() => handleEdit(cls?._id)} className="btn"><FaRegEdit size={20}/></button>
                      <button onClick={() => handleDelete(cls?._id)} className="btn"><MdDeleteForever size={20}/></button>
                      </div>
                    </div>
                    
                    <p className="flex items-center text-base gap-1"><IoTimeOutline />{cls?.time}</p>
                    <p className="flex items-center text-base gap-1"><FaUser />{cls?.instructor}</p>
                    
                  </div>
                ))
              ) : (
                <div className=" justify-items-center p-5">
                  <MdOutlineDateRange size={30} />
                  <p className="text-base">No classes</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {/* Modal Section */}
            <dialog
              id="my_modal_5"
              ref={modalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                {/* Pass closeModal so the form can close modal after success */}
                <UpdateForm formData={formData} closeModal={closeModal}/>

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
