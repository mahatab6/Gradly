import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function WeeklyClass({ data }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(data);

  return (
    <div className="grid grid-cols-1  lg:grid-cols-4 xl:grid-cols-7 gap-5">
      {days.map((day) => {
        const classesForDays = data?.filter((item) => item.day === day);
        return (
          <div key={day} className=" border  shadow-2xl rounded-2xl">
            <h2 className="text-xl font-bold p-4 text-center">{day}</h2>
            <div>
              {classesForDays?.length > 0 ? (
                classesForDays.map((cls, index) => (
                  <div key={index} className="m-3 p-2 bg-base-300 rounded-2xl">
                    <p className="text-xl font-semibold">{cls.subject}</p>
                    <p className="flex items-center text-base gap-1"><IoTimeOutline />{cls.time}</p>
                    <p className="flex items-center text-base gap-1"><FaUser />{cls.instructor}</p>
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
    </div>
  );
}
