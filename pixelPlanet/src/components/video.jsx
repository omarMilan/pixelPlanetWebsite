import React from "react";

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="absolute top-[200px] right-[350px]  ring-2 ring-black border-2 border-slate-500 shadow-sm rounded-xs">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
