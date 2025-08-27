import React from "react";
import research from "../assets/Digital tools.gif";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen w-11/12 mx-auto py-10">
        
        {/* Left Text Section */}
        <div className="flex flex-col space-y-6 text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            🎓 Stay Organized, <br /> Study Smarter with <br /> 
            <span className="text-blue-600">Gradly</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Gradly is your all-in-one student toolkit — track classes, 
            plan studies, manage budget, and prepare for exams, 
            all in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 text-lg font-medium rounded-2xl shadow hover:bg-blue-700 transition"
            >
              Get Started Free
            </Link>
            
            <Link to={'/dashboard'} className="bg-gray-100 text-black px-6 py-3 text-lg font-medium rounded-2xl shadow hover:cursor-pointer hover:bg-gray-200 transition">
              🚀 Explore Dashboard
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end mb-10 md:mb-0">
          <img
            src={research}
            alt="Student using digital tools"
            className="max-w-md md:max-w-lg lg:max-w-xl w-full"
          />
        </div>
      </div>
    </div>
  );
}
