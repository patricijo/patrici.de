import { HTMLAttributes, ReactNode } from "react";
import Shadow from "./Shadow";

type DivElementProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Button = ({ children, className, ...props }: DivElementProps) => {
  return (
    <div
      className={` cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
        className || ""
      }`}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
};

export const Card = ({ children, className, ...props }: DivElementProps) => {
  return (
    <Shadow>
      <div
        className={`rounded-2xl bg-white p-4 w-full ${className || ""}`}
        tabIndex={0}
        {...props}
      >
        <div className=" rounded-xl overflow-hidden">{children}</div>
      </div>
    </Shadow>
  );
};
