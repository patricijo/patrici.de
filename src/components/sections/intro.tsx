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
      <div className="flex md:flex-2/3 md:min-h-screen items-center p-4 w-full">
        <div className="flex flex-col m-4 md:m-0  w-full">
          <h2 id="headline" className="text-xl sm:text-3xl md:text-3xl w-fit">
            Hi, my name is
          </h2>
          <Shadow>
            <h1 className="text-3xl  sm:text-4xl md:text-5xl font-black w-fit opacity-80">
              Sebastian Patrici Gil
            </h1>
          </Shadow>
          <h2 className="text-xl sm:text-3xl md:text-4xl  w-fit my-4">
            I am a self-taught Full Stack Developer based in Germany
          </h2>
          <div className="grid gap-1 grid-cols-2 md:grid-cols-4 w-full">
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
