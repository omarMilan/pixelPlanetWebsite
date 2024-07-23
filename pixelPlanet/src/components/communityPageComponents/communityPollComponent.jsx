import { useState } from "react";
import Button from "../button";

export default function CommunityPoll({ pollOptions }) {
  const [votes, setVotes] = useState(Array(pollOptions.length).fill(0));
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (index) => {
    if (!hasVoted) {
      const newVotes = [...votes];
      newVotes[index] += 1;
      setVotes(newVotes);
      setHasVoted(true);
    }
  };

  return (
    <div className="pResTwo:w-[810px] pResOne:w-[610px] sm:w-[210px] md:w-[350px] lg:w-[510px] xl:w-[710px] pResTwo:h-[270px] pResOne:h-[310px] sm:h-[294px] md:h-[310px] lg:h-[310px] xl:h-[310px] bg-customBlack shadow-md ring-2 border-2 border-slate-500 ring-neutral-950 pResTwo:top-[480px] pResOne:top-[530px] sm:top-24 md:top-52 lg:top-52 xl:top-52 pResTwo:right-28 pResOne:right-24 sm:right-24 md:right-24 lg:right-24 xl:right-24 relative rounded-sm flex flex-col justify-center items-center">
      <div className="text-slate-50 font-headerFont pResTwo:text-lg pResOne:text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl mb-1 select-none">
        Community Poll
      </div>
      <div className="text-slate-50 font-headerFont mb-5 pResTwo:text-xs pResOne:text-xl sm:text-sm md:text-xl lg:text-xl xl:text-xl select-none">
        Vote on the next update
      </div>
      {pollOptions.map((option, index) => (
        <div key={index} className="w-full flex flex-col items-center mb-5">
          <Button onPress={() => handleVote(index)} disabled={hasVoted}>
            <div className="pResTwo:w-[202px] pResOne:w-[200px] sm:w-[110px] md:w-[160px] lg:w-[270px] xl:w-[430px] h-7 bg-slate-50 shadow-sm border-2 border-customPurple rounded-md font-headerFont select-none flex items-center justify-center">
              {option} -- {votes[index]} votes
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
}
