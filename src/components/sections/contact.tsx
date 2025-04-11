import { MailIcon } from "lucide-react";
import { ContactForm } from "../Form";
import Link from "next/link";
import ScrollAnimation from "../ScrollAnimation";
import { Button } from "../ui";

export const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-4">
      <div className="flex md:flex-1/3 md:min-h-screen  items-center p-4 w-full">
        <div className="space-y-4 w-full">
          <ScrollAnimation type="slide-right" once={false} delay={0}>
            <h1 className="text-4xl md:text-2xl lg:text-4xl font-black w-fit">
              GET IN <br />
              <span className="text-7xl md:text-4xl lg:text-6xl">TOUCH!</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation type="slide-right" once={false} delay={0.1}>
            <p>Let’s connect. I’m looking forward to your message!</p>
          </ScrollAnimation>

          <ScrollAnimation type="slide-right" once={false} delay={0.3}>
            <Link href={"mailto:sebastian.patrici@gmail.com"}>
              <Button className="justify-center">
                <div className="flex gap-2 items-center v">
                  <MailIcon size={18} />
                  sebastian.patrici@gmail.com
                </div>
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </div>
      <div className="flex md:flex-2/3 md:min-h-screen items-center p-4 w-full">
        <ContactForm />
      </div>
    </div>
  );
};
