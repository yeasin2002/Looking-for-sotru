import React from "react";
import { Button } from "../ui";
import { cn } from "@/utils";
import { RedHatDisplay } from "@/fonts";
import { RoundedMesh, HalfRoundMesh } from "../effects";
interface Props extends React.ComponentProps<"div"> {}

export const CallToAction = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="relative my-10 flex flex-col items-center justify-center gap-y-5 overflow-hidden bg-[#2E2E33] px-6 py-14 lg:flex-row"
    >
      <h3
        className={cn(
          `box-border font-sans text-4xl font-black leading-10 tracking-[-0.16px] text-foreground antialiased ${RedHatDisplay.className}`,
        )}
      >{`Free until you're ready to launch`}</h3>

      <div className="flex w-full flex-col items-center justify-center gap-y-2 sm:flex-row sm:px-14 md:w-1/2 md:px-0">
        <input
          type="text"
          placeholder="Phone Number"
          className="m-0 mr-2 w-full flex-grow cursor-text overflow-hidden rounded-md border border-[#6E6E76] p-3 px-4 shadow-none dark:bg-[#2E2E33]"
        />
        <Button className="w-full py-4 sm:h-full sm:w-1/3">Request Code</Button>
      </div>
      <HalfRoundMesh className="absolute -right-64 top-0 rotate-180 opacity-90" />
    </div>
  );
};
