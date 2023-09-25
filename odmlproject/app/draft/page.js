"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const page = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(null);
  const calculateMinEndDate = () => {
    if (startDate) {
      // Calculate the minimum allowed end date (one day after the start date)
      const minEnd = new Date(startDate);
      minEnd.setDate(minEnd.getDate() + 1);
      return minEnd;
    }
    return null; // If start date is not selected, there is no minimum end date
  };

  const calculateNumberOfDays = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDifference = end - start;
      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      setNumberOfDays(daysDifference);
    } else {
      setNumberOfDays(null); // Reset the number of days if either date is missing
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col md:p-5 items-center space-y-4 overflow-y-scroll">
        <div className="w-3/6 ">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="title"
            required
          />
        </div>
        <div className="w-3/6">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Registration Number
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Registration Number"
            required
          />
        </div>
        <div className="">
          <h1 className="my-1">Programme</h1>
          <div class="flex gap-2 items-center">
            <div className="">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500  focus:ring-2 dark:bg-gray-700"
              />
              <label
                for="default-radio-1"
                class="ml-3 text-sm font-medium text-black "
              >
                UG
              </label>
            </div>
            <div className="">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500  focus:ring-2 dark:bg-gray-700"
              />
              <label
                for="default-radio-1"
                class="ml-3 text-sm font-medium text-black"
              >
                PG
              </label>
            </div>
          </div>
        </div>
        <div className="w-24">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Semester
          </label>
          <input
            type="number"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Semester"
            required
          />
        </div>
        <div className="w-3/6">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Department
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="Department"
            required
          />
        </div>
        <div className="">
          <h1 className="my-1">Type of leave</h1>
          <div class="flex gap-2 items-center">
            <div className="">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500  focus:ring-2 dark:bg-gray-700"
              />
              <label
                for="default-radio-1"
                class="ml-3 text-sm font-medium text-black "
              >
                OD (Permissive Assignment)
              </label>
            </div>
            <div className="">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500  focus:ring-2 dark:bg-gray-700"
              />
              <label
                for="default-radio-1"
                class="ml-3 text-sm font-medium text-black "
              >
                OD (Personal Assignment)
              </label>
            </div>
            <div className="">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500  focus:ring-2 dark:bg-gray-700"
              />
              <label
                for="default-radio-1"
                class="ml-3 text-sm font-medium text-black"
              >
                ML
              </label>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center my-4">Duration</h1>
          <div className="flex items-center">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                calculateNumberOfDays();
              }}
              placeholderText="Select date start"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            />
            <span className="mx-4 text-gray-500">to</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                calculateNumberOfDays();
              }}
              minDate={calculateMinEndDate()}
              placeholderText="Select date end"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            />
          </div>
        </div>
        {/* {numberOfDays !== null && <p>Number of days: {numberOfDays} days</p>} */}
        <div className="w-3/6">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Reason
          </label>
          <textarea
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            placeholder="State your Reason"
            rows={7}
            required
          />
        </div>{" "}
        <div className="my-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 "
            for="file_input"
          >
            Upload Proof
          </label>
          <input
            class="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer"
            id="file_input"
            type="file"
          />
        </div>
        <div className="">
          <div className="my-5 bg-black text-white hover:bg-[#FAE969] hover:text-black transition duration-150 cursor-pointer rounded-full p-4">
            Submit Application
          </div>
        </div>
      </div>
    </div>
  );
};

// * title (custom field)
// * Reg no.
// * program (ug/pg)
// * Semester
// * Department
// * type of leave
// * duration
// * no of days (validation to maintain integrity (no of days can't exceed calender days or auto fill from calendar))
// * reason
// * Proof (file)

export default page;
