import React, { useState, useEffect } from "react";
import Header from "../components/pageHeader";
import Contact from "../components/contactPageComponents/emailContact";

export default function ContactPage() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const strTime = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      } ${ampm}`;
      setCurrentTime(strTime);
    };

    updateTime(); // Update the time initially
    const timer = setInterval(updateTime, 60000); // Update the time every minute

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="SupportPageBg">
      <div className="absolute top-[-31px] left-[490px]">
        <Contact />
      </div>
      <Header />
      <div className="absolute bg-slate-600 text-customPurple font-headerFont text-lg font-bold top-[180px] right-[490px] flex flex-col items-center space-y-2 ring-2 ring-black border-2 border-slate-500 shadow-sm rounded-sm p-5">
        <div className="select-none">EMAIL</div>
        <div className="text-slate-50">Sundaepixelplanet@gmail.com</div>
        <div className="text-slate-50">AnotherEmail@gmail.com</div>
        <div className="select-none">DISCORD ADMINS</div>
        <div className="text-slate-50">Sundae</div>
        <div className="text-slate-50">AnotherAdmin</div>
        <div className="select-none">ADMIN TIMEZONE</div>
        <div className="text-slate-50">{currentTime} (CST)</div>
      </div>
    </div>
  );
}
