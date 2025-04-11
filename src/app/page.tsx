import { Contact } from "@/components/sections/contact";
import { Intro } from "@/components/sections/intro";
import { References } from "@/components/sections/references";
import { Expertise } from "@/components/sections/expertise";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 ">
      <div className="glow">
        <div
          id="scroll-container"
          className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth z-30"
        >
          <div className="relative">
            <section
              id="me"
              className="snap-start min-h-screen items-center flex"
            >
              <div className="m-auto container max-w-7xl ">
                <Intro />
              </div>
            </section>
            <section
              id="expertise"
              className="snap-start min-h-screen items-center flex"
            >
              <div className="m-auto container max-w-7xl ">
                <Expertise />
              </div>
            </section>
            <section id="references" className="min-h-screen">
              <div className="m-auto container max-w-7xl ">
                <References />
              </div>
            </section>
            <section
              id="contact"
              className="snap-start min-h-screen items-center flex"
            >
              <div className="m-auto container max-w-7xl ">
                <Contact />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
