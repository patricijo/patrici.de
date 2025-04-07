import Picture from "../Picture";
import Shadow from "../Shadow";
import { Button } from "../ui";

export const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-4">
      <div className="flex md:flex-1/3 md:min-h-screen items-center p-4">
        <div className="max-w-[450px] w-full mx-auto">
          <Picture />
        </div>
      </div>
      <div className="flex md:flex-2/3 md:min-h-screen items-center p-4">
        <div className="flex flex-col ">
          <h2 id="headline" className=" text-4xl w-fit">
            Hi, my name is
          </h2>
          <Shadow>
            <h1 className=" text-5xl font-black w-fit">
              Sebastian Patrici Gil
            </h1>
          </Shadow>
          <h2 className=" text-4xl  w-fit">
            I am a self-taught Full Stack Developer based in Hamburg/Germany
          </h2>
          <div className="flex gap-1">
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
