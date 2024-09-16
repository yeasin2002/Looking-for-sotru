import Image from "next/image";
import React from "react";

import leftBallMesh from "@/assets/mesh-gradient/ball-right.svg";

import el1 from "@/assets/mockup/showOff-element1.png";
import el2 from "@/assets/mockup/showOff-element2.png";
import el3 from "@/assets/mockup/showOff-element3.png";
import { HomeMain } from "./HomeMain";

interface Props extends React.ComponentProps<"div"> {}

export const ShowOffService = ({ ...props }: Props) => {
  return (
    <div className="md:py-14" {...props}>
      <HomeMain
        heading="Build and style every element to perfection"
        desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          excepteur sint occaecat cupidatat."
      />

      <div className="overflow-x-hidden">
        <div className="z-20 mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-4 sm:container *:z-20 sm:w-3/5 md:w-full md:grid-cols-3 xl:px-8">
          <div className="relative">
            <div className="showOff-icon">1</div>
            <Image src={el1} alt="Frame" className="mt-5" />

            <div className="absolute -right-44 top-5 z-10 min-h-2 w-full min-w-10">
              <div className="border-dotted border-red-700"></div>
              01325888939
            </div>
          </div>
          <div>
            <div className="showOff-icon">2</div>
            <Image src={el1} alt="Frame" className="mt-5" />
          </div>
          <div>
            <div className="showOff-icon">3</div>
            <Image src={el1} alt="Frame" className="mt-5" />
          </div>
        </div>

        <Image src={leftBallMesh} alt="Hero Mockup" className="absolute bottom-4 left-10 z-10 opacity-45" />
      </div>
    </div>
  );
};
