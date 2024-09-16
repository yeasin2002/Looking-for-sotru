import Image from "next/image";
import React from "react";

export const TravelCard = () => {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
      <Image
        className="h-48 w-full object-cover"
        src={`https://images.unsplash.com/photo-1726441344398-1c8b0953df71?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        alt="Rome, Italy"
        width={1286}
        height={720}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Rome, Italy</h3>
        <p className="mt-2 text-lg text-gray-600">$5,42k</p>
        <div className="mt-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mr-2 h-5 w-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-4.992 1.664L9 21l6-5.25L21 21l-1.24-7.168-4.992-1.664z"
            />
          </svg>
          <p className="text-gray-600">10 Days Trip</p>
        </div>
      </div>
    </div>
  );
};
