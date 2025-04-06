import MacAnimation from "../Window";



export const Expertise = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <h1 className=" text-4xl font-black w-fit m-4">
        WHATS
        <br />
        <span className="text-7xl">BEHIND?</span>
      </h1>

      <div className="col-span-2 items-center flex m-4 relative">
        <MacAnimation />
      </div>
    </div>
  );
};
