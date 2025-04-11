"use client";

import Link from "next/link";
import Picture from "../Picture";
import ScrollAnimation from "../ScrollAnimation";
import { Button } from "../ui";
import { ArrowDown, ExternalLink } from "lucide-react";

export const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-4">
      <div className="flex md:flex-1/3 md:min-h-screen items-center p-4 w-full">
        <div className="max-w-[450px] w-full mx-auto">
          <ScrollAnimation type="slide-up" once={false} delay={0.7}>
            <Picture />
          </ScrollAnimation>
        </div>
      </div>
      <div className="flex md:flex-2/3 md:min-h-screen items-center p-4 w-full">
        <div className="flex flex-col m-4 md:m-0  w-full">
          <ScrollAnimation type="slide-up" once={false} delay={0}>
            <h2
              id="headline"
              className="text-4xl md:text-2xl lg:text-4xl w-fit"
            >
              Hi, my name is
            </h2>
          </ScrollAnimation>
          <ScrollAnimation type="slide-up" once={false} delay={0.1}>
            <h1 className="text-7xl md:text-4xl lg:text-6xl font-black w-fit">
              Sebastian Patrici Gil
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="slide-up" once={false} delay={0.2}>
            <h2 className="text-xl sm:text-3xl md:text-4xl  w-fit my-4">
              I am a Full Stack Developer based in Germany
            </h2>
          </ScrollAnimation>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4 w-full">
            <ScrollAnimation type="slide-up" once={false} delay={0.5}>
              <Link href={"https://github.com/patricijo"} target="_blank">
                <Button>
                  GitHub
                  <ExternalLink size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
            <ScrollAnimation type="slide-up" once={false} delay={0.6}>
              <Link href={"#expertise"}>
                <Button>
                  Expertise
                  <ArrowDown size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
            <ScrollAnimation type="slide-up" once={false} delay={0.4}>
              <Link href={"#references"}>
                <Button>
                  References
                  <ArrowDown size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
            <ScrollAnimation type="slide-up" once={false} delay={0.3}>
              <Link href={"#contact"}>
                <Button>
                  Contact
                  <ArrowDown size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
