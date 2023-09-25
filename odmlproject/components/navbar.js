"use client";
import Link from "next/link";
import Image from "next/image";
import menu from "../public/menu.png";
import logo from "../public/SRMLogo.png";
import { useState } from "react";

export default function Navbar() {
  const [hide, setHide] = useState(true);
  return (
    <div className="absolute py-2 md:py-0 px-4 min-w-full justify-between flex flex-col  md:flex-row items-center md:sticky max-h-32 lg:h-20 bg-[#FAE969] ">
      <div className="flex items-center">
        <div className="flex   items-center  gap-2 ">
          <Image className=" w-12 " src={logo} />
          <h1 className=" lg:text-4xl text-2xl font-Lato font-bold text-black ">
            {" "}
            ODML Project{" "}
          </h1>
        </div>
        <div className="flex">
          <Image
            onClick={() => setHide((current) => !current)}
            className="ml-14 self-center md:hidden  cursor-pointer"
            src={menu}
          ></Image>
        </div>
      </div>

      <div
        className={` md:my-0 z-15 md:z-auto  md:px-0 md:py-0 px-4 py-2 md:block ${
          hide ? "hidden" : ""
        }`}
      >
        <div className=" flex justify-center md:flex-row">
          <Link
            href="/"
            className="hover:scale-110 text-black text-xl font-bold font-Cinz mr-6 xl:text-2xl"
          >
            {" "}
            Home{" "}
          </Link>

          <>
            <Link
              href="/login"
              className="hover:scale-110 text-black text-xl font-bold font-Cinz mr-6 xl:text-2xl"
            >
              {" "}
              Log In{" "}
            </Link>
            <Link
              href="/about"
              className="hover:scale-110 text-black text-xl font-bold font-Cinz mr-6 xl:text-2xl"
            >
              {" "}
              About Us{" "}
            </Link>
          </>
        </div>
      </div>
    </div>
  );
}
