import React from "react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        {/* Brand */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600">
          Gradly
        </h1>

        {/* Spinner */}
        <span
          className="loading loading-ring loading-xl text-blue-600"
          role="status"
          aria-label="Loading"
        ></span>

        {/* Helper text */}
        <p className="text-sm text-gray-600">Preparing your dashboard…</p>
      </div>
    </div>
  );
}
