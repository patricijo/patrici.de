import { Contact } from "@/components/sections/contact";
import { Intro } from "@/components/sections/intro";
import { References } from "@/components/sections/references";
import { Expertise } from "@/components/sections/expertise";

export default function Home() {
  return (
    <div className="relative">
      <section id="me" className="snap-start min-h-screen items-center flex">
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
  );
}
