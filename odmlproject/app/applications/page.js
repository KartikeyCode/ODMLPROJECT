"use client"
import Sidebar from "@/components/sidebar"
import { useState } from "react";
import ApplicationCard from "@/components/applicationcard"
import dummyData from "./applicationsdata"

export default function Applications(){
    const [sortingOrder, setSortingOrder] = useState("default"); // "default" means unsorted

    const handleSort = () => {
        if (sortingOrder === "default") {
          // Sort the data by the "status" property, so "Approved" comes first
          dummyData.sort((a, b) => a.status.localeCompare(b.status));
          setSortingOrder("sorted");
        } else {
          // Reverse the order to reset the sorting
          dummyData.reverse();
          setSortingOrder("default");
        }
      };

    return(
        <div className=" flex bg-[#1B1919]">

        <Sidebar />
        
        <div className="flex-col px-28 py-16">

            <div className="flex items-center justify-between  ">
        <h1 className="text-[#D7D7D7] font-semibold text-4xl mr-8"> Your Applications </h1>
        <button
            onClick={handleSort}
            className="bg-[#4C6FFF] text-white  py-2 px-4 rounded-md cursor-pointer"
          >
            {sortingOrder === "default" ? "Sort by Approved" : "Default Sorting"}
          </button>
        <a href="/" className="text-[#4C6FFF] ml-80"> See all </a>
            </div>
            <div className="cards mt-7 flex flex-col gap-8">
          {dummyData.map((data, index) => (
            <ApplicationCard
              key={index}
              heading={data.heading}
              status={data.status}
              isFA={data.isFA}
              isHOD={data.isHOD}
              isDean={data.isDean}
            />
          ))}
        </div>



        </div>

        </div>
    )
}