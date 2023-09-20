import React from "react";

export const OrderSearch = () => {
  return ( 
    <div className="flex items-center">
      <div className="sm:w-80 w-full shadow-lg">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-3 rounded focus:ring-1 focus:ring-primary"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-600 ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M13.293 13.293a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M14 8a6 6 0 11-12 0 6 6 0 0112 0zM6 8a2 2 0 114 0 2 2 0 01-4 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}