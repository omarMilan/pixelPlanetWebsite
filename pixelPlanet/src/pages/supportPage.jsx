import Header from "../components/pageHeader";
import "../index.css";
import SupportSign from "../components/supportPageComponents/supportSign";
import SupportInformation from "../components/supportPageComponents/supportInformation";

export default function SupportPage() {
  return (
    <div className="SupportPageBg">
      <div className="z-30">
        <Header />
      </div>
      <div className="z-10">
        <SupportSign />
      </div>
      <div className="space-y-4 z-0">
        <SupportInformation
          title={"Windows installation"}
          information={"Provide information"}
        />
        <SupportInformation
          title={"How to play"}
          information={"Provide information"}
        />
        <SupportInformation
          title={"Keyboard controls"}
          information={"Keys: W-jump D-right A-left"}
        />
        <SupportInformation
          title={"Game rules"}
          information={"Provide information"}
        />
        <SupportInformation
          title={"Game commands"}
          information={"Provide information"}
        />
      </div>
    </div>
  );
}
