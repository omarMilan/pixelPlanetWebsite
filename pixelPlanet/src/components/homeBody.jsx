import shipLogo from "../assets/shipLogo.png";
import planetLogo from "../assets/planetLogo.png";
import meteorImg from "../assets/MeteorsImg.png";
import ConveyerBelt from "./conveyerBeltEffect";

export default function HomeBody() {
  return (
    <div>
      <img
        src={shipLogo}
        alt="ship logo"
        className="absolute right-5 top-32 pResTwo:shipLogoSize-pResTwo pResOne:shipLogoSize-pResOne sm:shipLogoSize-sm md:shipLogoSize-md lg:shipLogoSize-lg xl:shipLogoSize-xl
"
      />

      <img
        src={planetLogo}
        alt="planet"
        className=" absolute left-0 planetLogoAttributes xl:planetLogoAttributes-xl lg:planetLogoAttributes-lg md:planetLogoAttributes-md sm:planetLogoAttributes-sm pResOne:planetLogoAttributes-pResOne pResTwo:planetLogoAttributes-pResTwo"
      />
      <ConveyerBelt image={meteorImg} />
    </div>
  );
}
