import { Github, Globe } from "lucide-react";
import { VeganScanRef } from "../references/veganScan";
import ScrollAnimation from "../ScrollAnimation";
import { Button } from "../ui";
import Link from "next/link";

export const References = () => {
  return (
    <>
      <div className="snap-start flex flex-col md:flex-row space-x-4  py-40 md:py-0">
        <div className="md:sticky md:top-0 md:left-0 flex md:flex-1/3 md:h-screen items-center p-4 w-full">
          <div className="space-y-4  w-full">
            <ScrollAnimation type="slide-right" once={false} delay={0}>
              <h1 className="text-4xl md:text-2xl lg:text-4xl font-black w-fit">
                VEGAN
                <br />
                <span className="text-7xl md:text-4xl lg:text-6xl">
                  SCANNER
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.1}>
              <p>
                With Vegan Scanner, you can easily scan ingredient lists and use
                AI to instantly check if a product is vegan. The app identifies
                ingredients, analyzes them in seconds, and provides a clear
                answer—perfect for conscious shopping!
              </p>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.2}>
              <Button>Download APK</Button>{" "}
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.3}>
              <Button>App Store (soon)</Button>
            </ScrollAnimation>
          </div>
        </div>
        <div className="md:flex-2/3 md:my-[25%] p-4  w-full">
          <VeganScanRef />
        </div>
      </div>
      <div className="snap-start flex flex-col md:flex-row space-x-4  py-40 md:py-0">
        <div className="md:sticky md:top-0 md:left-0 flex md:flex-1/3 md:h-screen items-center p-4 w-full">
          <div className="space-y-4  w-full">
            <ScrollAnimation type="slide-right" once={false} delay={0}>
              <h1 className="text-4xl md:text-2xl lg:text-4xl font-black w-fit">
                <span className="text-7xl md:text-4xl lg:text-6xl">
                  LINKHUB
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.1}>
              <p>
                LinkHub is a website that lets you easily share your links and
                video content. Upload your material, organize it your way, and
                share it with friends or the world. Simple and fast!
              </p>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.2}>
              <Link href={"https://linkshub-v1.vercel.app"} target="_blank">
                <Button>
                  Visit Website <Globe size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.3}>
              <Link
                href={"https://github.com/patricijo/linkhub"}
                target="_blank"
              >
                <Button>
                  View Github <Github size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
        <div className="md:flex-2/3 md:my-[25%] p-4 w-full">
          <VeganScanRef />
        </div>
      </div>
      <div className="snap-start flex flex-col md:flex-row space-x-4  py-40 md:py-0">
        <div className="md:sticky md:top-0 md:left-0 flex md:flex-1/3 md:h-screen items-center p-4  w-full">
          <div className="space-y-4  w-full">
            <ScrollAnimation type="slide-right" once={false} delay={0}>
              <h1 className="text-4xl md:text-2xl lg:text-4xl font-black w-fit">
                KULT <br />
                <span className="text-7xl md:text-4xl lg:text-6xl">HELDEN</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.1}>
              <p>
                KultHelden is a website that provides an overview of iconic cult
                actors and cult films. Plus, explore carefully curated lists of
                the best movies in every cult genre—perfect for cinephiles and
                explorers alike!
              </p>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.2}>
              <Link href={"https://kulthelden.de"} target="_blank">
                <Button>
                  Visit Website <Globe size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
            <ScrollAnimation type="slide-right" once={false} delay={0.3}>
              <Link
                href={"https://github.com/patricijo/kulthelden.de"}
                target="_blank"
              >
                <Button>
                  View Github <Github size={18} />
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
        <div className="md:flex-2/3 md:my-[25%] p-4  w-full">
          <VeganScanRef />
        </div>
      </div>
    </>
  );
};
