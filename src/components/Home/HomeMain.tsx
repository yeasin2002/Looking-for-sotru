import { RedHatDisplay } from "@/fonts";
import { cn } from "@/utils";
import React from "react";

interface Props extends React.ComponentProps<"div"> {
  heading: string;
  desc: string;
}

export const HomeMain = ({ heading, desc, className, ...props }: Props) => {
  return (
    <div className="border-t border-[#a2a2a8]/30" {...props}>
      <div className="mx-auto max-w-3xl pt-20">
        <h2
          className={cn(
            `m-0 text-center text-4xl font-black leading-[52.1792px] tracking-wide md:text-6xl md:leading-[66.08px] md:tracking-[-1.12px] ${RedHatDisplay.className} font-black`,
            className,
          )}
        >
          {heading}
        </h2>
        <p
          className={`my-6 text-center text-[20px] leading-[30px] tracking-[-0.16px] text-[#52525A] dark:text-[#A2A2A8]`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
