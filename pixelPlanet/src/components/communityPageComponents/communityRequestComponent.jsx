import { useState } from "react";

export default function CommunityRequest({ onInsertChange }) {
  const [insert, setInsert] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const MAX_Letters = 46;

  const handleInputChange = (e) => {
    if (e.target.value.length <= MAX_Letters) {
      setInputValue(e.target.value);
    }
  };

  const handleInputSubmission = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "" && insert.length < 4) {
      const newInsert = [...insert, inputValue.trim()];
      setInsert(newInsert);
      setInputValue("");
      onInsertChange(newInsert);
    }
  };

  return (
    <div className="pResTwo:w-[180px] pResOne:w-[180px] sm:w-[210px] md:w-[250px] lg:w-[370px] xl:w-[550px] h-[110px] bg-customBlack shadow-md ring-2 border-2 border-slate-500 ring-neutral-950 pResTwo:top-36 pResOne:top-52 sm:top-20 md:top-52 lg:top-52 xl:top-52 pResTwo:left-20 pResOne:left-28 sm:left-24 md:left-24 lg:left-24 xl:left-24 relative rounded-sm flex flex-col justify-center items-center">
      <div className="font-headerFont text-slate-50 pRestwo:text-xl pResOne:text-sm sm:text-sm md:text-lg lg:text-2xl xl:text-2xl mt-3 select-none">
        Community submissions
      </div>
      <div className="pResTwo:w-[140px] pResOne:w-[140px] sm:w-[140px] md:w-[170px] lg:w-[300px] xl:w-[300px] mt-4 mb-5">
        <input
          type="text"
          className="w-full h-7 bg-slate-50 shadow-sm border-2 border-customPurple rounded-md font-headerFont select-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmission}
          disabled={insert.length >= 4}
        />
      </div>
    </div>
  );
}
