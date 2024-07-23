import Button from "../button";
import { useState } from "react";
import discordLogo from "../../assets/discordLogo.png";
import DiscordUserCount from "./discordUserCount";

export default function DiscordInv() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 800); // Duration of the flash animation
    window.open("https://discord.com/invite/bKmMbeMcMb", "_blank");
  };

  return (
    <Button onPress={handleClick}>
      <div className="pResTwo:w-[180px] pResOne:w-[180px] sm:w-[210px] md:w-[250px] lg:w-[370px] xl:w-[550px] h-[160px] bg-customBlack shadow-md ring-2 border-2 border-slate-500 ring-neutral-950 pResTwo:top-36 pResOne:top-52 sm:top-24 md:top-52 lg:top-52 xl:top-52 pResTwo:left-20 pResOne:left-28 sm:left-24 md:left-24 lg:left-24 xl:left-24 relative rounded-sm flex flex-col justify-center items-center">
        <img
          src={discordLogo}
          alt="discord"
          className="w-1/8 h-2/3 top-10 select-none"
        />
        <div className="w-40 h-7 bg-slate-50 shadow-sm border-2 border-customPurple rounded-md mb-5 font-headerFont select-none">
          {" "}
          <DiscordUserCount />
        </div>
      </div>
      {click && <div className="flash-effect"></div>}
    </Button>
  );
}
