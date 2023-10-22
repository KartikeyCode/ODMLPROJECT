import React from "react";
import PurpleThreeDot from "../../public/purpleThreeDot.svg";
import Image from "next/image";

export const DashboardCard = ({ title, status }) => {
  return (
    <div className="w-[439px] h-[80px] bg-[#494848B8] rounded-[10px] flex justify-between px-5 items-center">
      <div className="">
        <h2 className="text-[16px] text-dashboard font-semibold">{title}</h2>
        <p className="text-[#A0A0A0] text-[14px]">{status}</p>
      </div>
      <Image src={PurpleThreeDot} />
    </div>
  );
};
