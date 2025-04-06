import MacAnimation from "../Window";

export const Expertise = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-4">
      <div className="flex md:flex-1/3 md:min-h-screen items-center p-4">
        <h1 className=" text-4xl font-black w-fit m-4">
          WHATS
          <br />
          <span className="text-7xl">BEHIND?</span>
        </h1>
      </div>
      <div className="flex md:flex-2/3 md:min-h-screen items-center p-4">
        <MacAnimation />
      </div>
    </div>
  );
};
