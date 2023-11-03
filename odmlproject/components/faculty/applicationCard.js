"use client";
import Image from "next/image";
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

  const callApproveEndpoint = async (uuid) => {};

  const callRejectEndpoint = async (uuid) => {};
  return (
    <div className="bg-[#303030] w-[782px] h-[143px] rounded-[16px] justify-center items-center flex">
      <div className="content flex flex-col space-y-4 justify-start md:w-[80%]">
        <div className="header flex justify-between items-center w-[60%]">
          <h1 className="font-semibold text-white text-[32px]">{type}</h1>
          <p className="text-[24px] text-[#B6B6B6]">({days} days)</p>
          <img src={"/info.svg"} alt="info" />

          {/* <h1>{typeName}</h1> */}
        </div>
        <div className="registeration-number font-bold text-white">
          RAXXXXXXXXXXXXX
        </div>
      </div>
    </div>
  );
};
