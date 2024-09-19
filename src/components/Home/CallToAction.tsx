import React from "react";
import { Button } from "../ui";
import { cn } from "@/utils";
import { redHatDisplay } from "@/fonts";
import { RoundedMesh, HalfRoundMesh } from "../effects";
import { HireMeCTA } from "../global/HireMeCTA";
interface Props extends React.ComponentProps<"div"> {}

export const CallToAction = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="relative my-10 flex items-center justify-between gap-y-5 overflow-hidden rounded-md bg-[#2E2E33] px-6 py-11 lg:flex-row"
    >
      <h3
        className={cn(
          `box-border font-sans text-xl font-black leading-10 tracking-[-0.16px] text-gray-100 antialiased dark:text-foreground mini:text-2xl sm:text-3xl md:text-4xl ${redHatDisplay.className}`,
        )}
      >
        Need Web Developer?
      </h3>

      <HireMeCTA />

      {/* <div className="flex w-full flex-col items-center justify-center gap-y-2 sm:flex-row sm:px-14 md:w-1/2 md:px-0">
        <input
          type="text"
          placeholder="Phone Number"
          className="m-0 mr-2 w-full flex-grow cursor-text overflow-hidden rounded-md border border-[#6E6E76] p-3 px-4 shadow-none dark:bg-[#2E2E33]"
        />
        <Button className="w-full py-4 sm:h-full sm:w-1/3">Request Code</Button>
      </div> */}
      <HalfRoundMesh className="pointer-events-none absolute -right-64 top-0 rotate-180 opacity-90" />
    </div>
  );
};
