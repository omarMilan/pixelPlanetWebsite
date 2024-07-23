import Header from "../components/pageHeader";
import Footer from "../components/pageFooter";
import DiscordInv from "../components/communityPageComponents/discordInvComponent";
import CommunityRequest from "../components/communityPageComponents/communityRequestComponent";
import CommunityPoll from "../components/communityPageComponents/communityPollComponent";
import "../index.css";
import { useState } from "react";

export default function CommunityPage() {
  const [pollOptions, setPollOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ]);

  const handleInsertChange = (newInsert) => {
    setPollOptions(newInsert);
  };

  return (
    <div className="communityPageBg">
      <div className="z-30">
        <Header />
        <Footer />
      </div>
      <div className="w-11/12 pResTwo:space-y-10 pResOne:space-y-6 sm:space-y-10 md:space-y-10 lg:space-y-10 xl:space-y-10">
        <DiscordInv />
        <CommunityRequest onInsertChange={handleInsertChange} />
      </div>
      <CommunityPoll pollOptions={pollOptions} />
    </div>
  );
}
