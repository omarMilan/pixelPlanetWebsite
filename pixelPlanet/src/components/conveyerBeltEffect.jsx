export default function ConveyerBelt({ image }) {
  return (
    <div className="z-10 w-full h-64">
      <div className="absolute inset-0 flex  animate-slide-left">
        <img
          src={image}
          alt="Animated Image"
          className="w-1/2 h-full object-cover"
        />
        <img
          src={image}
          alt="Animated Image"
          className="w-1/2 h-full object-cover"
        />
      </div>
    </div>
  );
}
