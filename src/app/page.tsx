import { Contact } from "@/components/sections/contact";
import { Intro } from "@/components/sections/intro";
import { References } from "@/components/sections/references";
import { Expertise } from "@/components/sections/expertise";

export default function Home() {
  return (
    <div
      id="scroll-container"
      className="h-screen snap-y snap-mandatory overflow-y-scroll bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <div className="backdrop-hue-rotate-[calc(var(--scroll-y)*3.6deg)]  glow">
        <section className="snap-start min-h-screen items-center flex">
          <div className="m-auto container max-w-7xl ">
            <Intro />
          </div>
        </section>
        <section className="snap-start min-h-screen items-center flex">
          <div className="m-auto container max-w-7xl ">
            <Expertise />
          </div>
        </section>
        <section className="min-h-screen">
          <div className="m-auto container max-w-7xl ">
            <References />
          </div>
        </section>
        <section className="snap-start min-h-screen items-center flex">
          <div className="m-auto container max-w-7xl ">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
}
