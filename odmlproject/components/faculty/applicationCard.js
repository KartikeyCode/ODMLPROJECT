"use client";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const ApplicationCard = ({ type, registerationNumber, days, uuid }) => {
  // * the uuid is to do actions and to send requests through the card to the necessary endpoints
  // * the type could be a number or the word itself, is its a number handle it here:

  //   this is a helper function for the case of numbered types, if names haven't been stored in the collection
  /* const [typeName, setTypeName] = useState("");
  const resolveType = (type) => {
    // one number for eaach type of application
    switch (type) {
      case 0:
        setTypeName("Medical Leave");
        break;
      case 1:
        setTypeName("On Duty with Permission");

        break;
      case 2:
        setTypeName("On Duty For Personal Project etc..");

        break;

      default:
        break;
    }
  }; */

  const callApproveEndpoint = async (uuid) => {
    // Call your approve endpoint logic here
    console.log("approved");
  };

  const callRejectEndpoint = async (uuid) => {
    // Call your reject endpoint logic here
    console.log("rejected");
  };
  return (
    <div className="bg-[#303030] sm:px-0 px-20 w-8 h-[30rem] lg:w-[45rem] xl:w-[49rem] xl:h-36 rounded-2xl my-3 justify-center items-center flex">
      <div className="flex w-full justify-around items-center">
        <div className="content w-[55%] flex flex-col space-y-3 justify-start">
          <div className="header flex justify-start space-x-3 items-center">
            <h1 className="font-semibold text-white text-xl xl:text-3xl">
              {type}
            </h1>
            <p className="  text-xs xl:text-2xl text-[#B6B6B6]">
              ({days} days)
            </p>
            <Link href={`/faculty/applications/${uuid}`}>
              <img src={"/info.svg"} alt="info" />
            </Link>

            {/* <h1>{typeName}</h1> */}
          </div>
          <div className="registeration-number text-lg xl:text-2xl font-bold text-white">
            RAXXXXXXXXXXXXX
          </div>
        </div>
        <div className="buttons flex justify-between space-x-4">
          <button
            onClick={() => {
              callRejectEndpoint(uuid);
            }}
            className="text-white bg-[#E13636] justify-center items-center flex px-4 py-1 rounded-md hover:scale-110 transition-all"
          >
            Reject
          </button>
          <button
            onClick={() => {
              callApproveEndpoint(uuid);
            }}
            className="text-white bg-[#0FA958] justify-center items-center flex px-4 py-1 rounded-md hover:scale-110 transition-all"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};
