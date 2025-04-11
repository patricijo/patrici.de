import React, { HTMLAttributes, ReactNode } from "react";
import Shadow from "./Shadow";
import ScrollAnimation from "./ScrollAnimation";

type DivElementProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Button = ({
  children,
  className,

  ...props
}: DivElementProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className={`group relative inline-flex h-12 items-center overflow-hidden transition-all duration-200  rounded-md bg-black/30 hover:bg-black/40 hover:scale-105  px-6 font-medium text-neutral-200 w-full  ${
        className || ""
      }`}
      {...props}
    >
      <div className="w-full">{childrenArray[0]}</div>
      {childrenArray[1] && (
        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
          {childrenArray[1]}
        </div>
      )}
    </div>
  );
};

export const Card = ({ children, className, ...props }: DivElementProps) => {
  return (
    <ScrollAnimation type="slide-up" once={false} delay={0.1}>
      <Shadow>
        <div
          className={`rounded-2xl bg-white p-4 w-full hover:-translate-y-1 transition-all  ${
            className || ""
          }`}
          tabIndex={0}
          {...props}
        >
          <div className=" rounded-xl overflow-hidden">{children}</div>
        </div>
      </Shadow>
    </ScrollAnimation>
  );
};
