import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className=" absolute top-0 left-0 w-full bg-customBlack ring-1 ring-neutral-900 shadow-md select-none pResTwo:h-16 pResOne:h-16 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32">
      <div className=" absolute left-1/2 transform -translate-x-1/2 top-0 w-full flex justify-center text-white space-x-4 align-middle h-full font-headerFont font-bold pResTwo:text-[8px] pResOne:text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl z-20">
        <Button onPress={() => navigate("/support")}>SUPPORT</Button>
        <Button onPress={() => navigate("/community")}>COMMUNITY</Button>
        <Button onPress={() => navigate("/contact")}>CONTACT</Button>
      </div>
      <div className="z-20 absolute right-7 top-0 flex space-x-4 text-white h-full font-headerFont font-bold pResTwo:text-[8px] pResOne:text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <Button onPress={() => navigate("/download")}>DOWNLOAD</Button>
      </div>
      <Button onPress={() => navigate("/")}>
        <img
          src={logo}
          alt="logo"
          className="logoSize pResTwo:logoSize-pResTwo pResOne:logoSize-pResOne sm:logoSize-sm md:logoSize-md lg:logoSize-lg xl:logoSize-xl absolute left-0 sm:-top-10 md:-top-10 lg:-top-10 xl:-top-10 pResOne:-top-4 pResTwo:-top-1 z-20"
        />{" "}
      </Button>
    </div>
  );
}
