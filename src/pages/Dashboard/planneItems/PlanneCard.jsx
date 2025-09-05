import React from "react";
import { CiFlag1 } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export default function PlanneCard({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item?._id} className=" border p-2 rounded-2xl space-y-2">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">
                <span className="text-2xl font-bold">Mathematics</span> |{" "}
                <span>{item?.date}</span>
              </h2>
              <p className="flex items-center text-xl font-semibold gap-2">
                <CiFlag1 />
                high
              </p>
            </div>
            <p>
              this is class test exam. so i need extra time for this subject
            </p>
            <div className="flex items-center gap-3">
              <button className="btn ">
                <IoMdDoneAll size={20} />
              </button>
              <button className="btn ">
                <FaRegEdit size={20} />
              </button>
              <button className="btn ">
                <MdDeleteForever size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
