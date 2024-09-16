import React from "react";
import "react-device-frameset/styles/marvel-devices.min.css";

import Image from "next/image";
import { Button } from "../ui";
import { Check } from "lucide-react";
import { interFont } from "@/fonts";

import heroMockup from "@/assets/mockup/bowling-portrait.png";
import leftBallMesh from "@/assets/mesh-gradient/ball-right.svg";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
  const list = [
    "Lorem ipsum dolor sit amet consectetur",
    "adipisicing elit. Natus nobis ",
    "tempore tenetur quibusdam suscipit",
    "praesentium hic beatae omnis?",
  ];

  return (
    <div {...props} className="relative overflow-x-hidden">
      <div className="flex flex-col items-center gap-x-10 gap-y-10 py-16 md:flex-row">
        <div className="space-y-6 text-center md:text-start">
          <h1 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl md:text-8xl md:leading-[97.68px]">
            Your website, <br /> reimagined
          </h1>
          <p
            className={`${interFont.className} text-lg leading-7 tracking-normal text-[#a2a2a8] sm:text-xl md:tracking-wide`}
          >
            Our landing page template works on all devices, so you only have to set it up once, and get beautiful
            results forever.
          </p>

          <div className="flex flex-col items-center justify-center gap-y-2 sm:w-full sm:flex-row sm:px-14 md:px-0 lg:w-2/3">
            <input
              type="text"
              placeholder="Phone Number"
              className="m-0 mr-2 w-full flex-grow cursor-text overflow-hidden rounded-md border border-[#6E6E76] p-3 px-4 shadow-none dark:bg-[#2E2E33]"
            />
            <Button className="w-full py-4 sm:h-full sm:w-1/3">Request Code</Button>
          </div>

          <div className="space-y-1 sm:px-14 md:px-0">
            {list.map((item) => (
              <p key={item} className="flex items-center gap-x-1">
                <Check className="size-6 text-mainGreen" />
                <span className="font-inter leading-6 tracking-[-0.16px] text-[#52525A]">{item}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="z-30 w-full overflow-y-hidden sm:w-2/3 md:h-2/4 xl:w-1/3">
          <Image src={heroMockup} alt="Hero Mockup" />
        </div>
      </div>

      <Image src={leftBallMesh} alt="Hero Mockup" className="absolute -right-20 bottom-4 z-10 opacity-45" />
    </div>
  );
};
