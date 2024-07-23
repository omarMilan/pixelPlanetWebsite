import { useState } from "react";
import Button from "../button";

export default function SupportInformation({ title, information }) {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" flex items-center justify-center w-screen">
      <Button onPress={changeToggle} hoverTextColor="text-customBlack">
        <div
          className={`pResTwo:w-[250px] pResOne:w-[350px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1100px] z-10 rounded-sm shadow-sm border-2 border-gray-700 ring-2 ring-black top-80 bg-slate-400 relative flex items-center justify-center font-headerFont space-x-4 xs:text-lg md:text-lg lg:text-lg xl:text-lg pResOne:text-xs pResTwo:text-xs ${
            toggle ? "h-40 " : "h-12"
          }`}
        >
          {toggle ? null : title}
          {toggle ? information : null}
        </div>
      </Button>
    </div>
  );
}
