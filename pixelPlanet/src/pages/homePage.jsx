import Header from "../components/pageHeader";
import HomeBody from "../components/homeBody";
import Footer from "../components/pageFooter";
import "../index.css";

export default function HomePage() {
  return (
    <div className="homePageBg">
      <div className="z-10">
        <Header />
      </div>
      <div className="z-0">
        <HomeBody />
      </div>
      <Footer />
    </div>
  );
}
