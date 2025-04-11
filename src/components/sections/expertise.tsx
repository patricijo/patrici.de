import ScrollAnimation from "../ScrollAnimation";
import MacAnimation from "../Window";

export const Expertise = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-4">
      <div className="flex md:flex-1/3 md:min-h-screen items-center p-4 w-full">
        <ScrollAnimation type="slide-right" once={false} delay={0}>
          <h1 className="text-4xl md:text-2xl lg:text-4xl font-black w-fit">
            WHATS
            <br />
            <span className="text-7xl md:text-4xl lg:text-6xl">BEHIND?</span>
          </h1>
        </ScrollAnimation>
      </div>
      <div className="flex md:flex-2/3 md:min-h-screen items-center p-4 w-full">
        <ScrollAnimation
          type="slide-up"
          once={false}
          delay={0.3}
          className="w-full relative"
        >
          <MacAnimation />
        </ScrollAnimation>
      </div>
    </div>
  );
};
