import { controversialInfoData, testimonialData } from "@/data";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import leaf from "@/assets/icons/purpleLeaf.svg";
import meshBg from "@/assets/mesh-gradient/ball-right.svg";
import { HomeMain } from "./HomeMain";

interface Props extends React.ComponentProps<"div"> {}

export const Testimonial = ({ ...props }: Props) => {
  return (
    <div className="relative overflow-x-hidden py-16 sm:container">
      <HomeMain heading="লুৎফুজ্জামান বাবর বিতর্কিত বিষয়সমূহ" desc="" />

      <div {...props} className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
        {controversialInfoData.map((user) => {
          return (
            <div key={user.content} className="flex flex-col items-center justify-center gap-y-2">
              <div className="relative">
                <Avatar className="opacity-0">
                  <AvatarImage src={"https://github.com/yeasin2002.png"} />
                </Avatar>
                <Image src={leaf} alt="leaf" className="absolute -right-2/3 top-0" />
              </div>
              <p className="text-center font-sans text-[20px] leading-[30px] tracking-[-0.16px] text-[#A2A2A8] antialiased">
                {user.content}
              </p>
              <p className="font-bold text-mainGreen"> - {user.source}</p>
            </div>
          );
        })}
      </div>
      <Image
        src={meshBg}
        alt="Hero Mockup"
        className="pointer-events-none absolute bottom-0 left-16 size-full opacity-25"
      />
    </div>
  );
};
