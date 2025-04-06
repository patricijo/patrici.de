import Picture from "../Picture";
import { Button } from "../ui";

export const Intro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="max-w-[450px] w-full mx-auto">
        <Picture />
      </div>
      <div className="col-span-2 items-center flex p-4">
        <div className="gap-4 flex flex-col ">
          <h2 id="headline" className=" text-4xl w-fit">
            Hi, my name is
          </h2>
          <h1 className=" text-5xl font-black w-fit">Sebastian Patrici Gil</h1>
          <h2 className=" text-4xl  w-fit">
            I am a self-taught Full Stack Developer based in Hamburg/Germany
          </h2>
          <div className="flex gap-2">
            <Button>Hire</Button>
            <Button>References</Button>
            <Button>View GitHub</Button>
            <Button>Skills</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
