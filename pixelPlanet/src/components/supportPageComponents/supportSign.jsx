export default function SupportSign() {
  return (
    <div className=" w-full absolute bg-customBlack h-[270px]">
      <div className="w-4/6 h-24 bg-slate-600 shadow-md ring-2 border-2  border-slate-500 ring-neutral-950 top-40 absolute left-1/2  -translate-x-1/2  rounded-sm">
        <div className="font-bold text-slate-50 text-center font-headerFont space-x-4 p-2">
          <div className="font-bold  text-2xl">HELLO!</div>
          <div
            className="flex justify-center  p-1  xs:text-lg md:text-lg lg:text-lg xl:text-lg pResOne:text-xs pResTwo:text-xs "
            style={{ wordSpacing: "0.1em" }}
          >
            Welcome to the pixel planet support center
          </div>
        </div>
      </div>
    </div>
  );
}
