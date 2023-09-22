"use client";
import React, { useState } from "react";

const OdCard = ({ title, status, createdOn }) => {
  let statusObj = {
    text: "placeholder",
    color: "#cccccc",
  };

  if (status === 0) {
    statusObj = {
      text: "Applied",
      color: "success",
    };
  }
  if (status === 1) {
    statusObj = {
      text: "Rejected",
      color: "reject",
    };
  }
  if (status === 2) {
    statusObj = {
      text: "Under Review",
      color: "underReview",
    };
  }
  console.log(statusObj);

  return (
    <div className="md:w-[700px] md:h-[120px] rounded-[10px] border border-[#DFCE4B] md:p-5 flex flex-col justify-center">
      <h1 className="md:text-[40px] font-bold text-[#484848]">{title}</h1>
      <h2 className="text-[20px]">
        Status:{" "}
        <span className={`text-${statusObj.color}`}>{statusObj.text}</span>
      </h2>
    </div>
  );
};

export default OdCard;
