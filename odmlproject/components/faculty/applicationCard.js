"use client";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
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
    <div className="bg-[#303030] w-[782px] h-[143px] rounded-[16px] my-3 justify-center items-center flex">
      <div className="flex w-full justify-around items-center">
        <div className="content w-[55%] flex flex-col space-y-3 justify-start">
          <div className="header flex justify-start space-x-3 items-center">
            <h1 className="font-semibold text-white text-[32px]">{type}</h1>
            <p className="text-[24px] text-[#B6B6B6]">({days} days)</p>
            <Dialog>
              <DialogTrigger>
                <img src={"/info.svg"} alt="info" />
              </DialogTrigger>
            </Dialog>
            {/* <h1>{typeName}</h1> */}
          </div>
          <div className="registeration-number text-[24px] font-bold text-white">
            RAXXXXXXXXXXXXX
          </div>
        </div>
        <div className="buttons flex justify-between space-x-4">
          <div className="text-white bg-[#E13636] justify-center items-center flex px-4 py-1 rounded-md">
            Reject
          </div>
          <div className="text-white bg-[#0FA958] justify-center items-center flex px-4 py-1 rounded-md">
            Approve
          </div>
        </div>
      </div>
    </div>
  );
};
