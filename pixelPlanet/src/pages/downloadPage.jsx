import Header from "../components/pageHeader";
import Button from "../components/button";
import YouTubeVideo from "../components/video";

export default function DownloadPage() {
  const videoId = "TJxNldkuW_I";

  return (
    <div className="SupportPageBg">
      <Header />
      <div className="absolute bg-slate-600 text-customPurple font-headerFont text-lg font-bold top-[200px] left-[300px] flex flex-col items-center space-y-2 ring-2 ring-black border-2 border-slate-500 shadow-sm rounded-sm p-5 pr-20 pl-20">
        <div className="select-none">Windows</div>
        <Button>
          <div className="text-slate-50">Download Version ??</div>
        </Button>
        <div className="select-none">Mac devices</div>
        <div className="text-slate-50">Coming soon</div>
        <div className="select-none">Android devices</div>
        <div className="text-slate-50">Coming soon</div>
        <div className="select-none">Apple devices</div>
        <div className="text-slate-50">Coming soon</div>
      </div>
      <YouTubeVideo videoId={videoId} />
    </div>
  );
}
