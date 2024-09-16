import { testimonialData } from "@/data";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

import leaf from "@/assets/icons/purpleLeaf.svg";
interface Props extends React.ComponentProps<"div"> {}

export const Testimonial = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className="grid grid-cols-1 gap-x-12 gap-y-16 border-t border-[#a2a2a8]/30 py-16 sm:container sm:grid-cols-2"
    >
      {testimonialData.map((user) => {
        return (
          <div key={user.name} className="flex flex-col items-center justify-center gap-y-2">
            <div className="relative">
              <Avatar className="size-12">
                <AvatarImage src={user.avatar.src} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <Image src={leaf} alt="leaf" className="absolute -right-2/3 top-0" />
            </div>
            <p className="text-center font-sans text-[20px] leading-[30px] tracking-[-0.16px] text-[#A2A2A8] antialiased">
              “ This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly
              recommend it. “
            </p>

            <p className="font-bold">
              -{user.name}, <span className="text-mainGreen">{user.companyName}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
