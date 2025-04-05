import React from "react";
import { FaMap } from "react-icons/fa";
import { FaCalendarWeek, FaUserGroup } from "react-icons/fa6";

export default function SearchBox() {
  return (
    <div className="bg-white w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-5 mt-4 p-8 rounded-lg sm:mt-12 sm:w-[80%]">
      {/* 1st Search Input */}
      <div className="flex items-center gap-5">
        <FaMap className="w-5 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Location</p>
          <input
            type="text"
            placeholder="Where are you going?"
            className="outline-none placeholder:text-gray-700"
          />
        </div>
      </div>

      {/* 2nd secon input */}

      <div className="flex items-center gap-5">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
          <input
            type="date"
            
            className="outline-none border-none"
          />
        </div>
      </div>

      {/* 3rd secon input */}

      <div className="flex items-center gap-5">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
          <input
            type="date"
            
            className="outline-none border-none"
          />
        </div>
      </div>

      {/* 4th secon input */}

      <div className="flex items-center gap-5">
        <FaUserGroup className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Guest</p>
          <p className="text-base font-normal">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  );
}
