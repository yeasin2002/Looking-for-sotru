import React from "react";
import { interFont, RedHatDisplay } from "@/fonts";
interface Props extends React.ComponentProps<"div"> {}

export const Statistics = ({ ...props }: Props) => {
  const list = [
    { label: "Days turn around", value: "2.4M" },
    { label: "Days turn around", value: "7M" },
    { label: "Days turn around", value: "7.5%" },
    { label: "Days turn around", value: "49K" },
  ];
  return (
    <div
      {...props}
      className="mb-3 grid grid-cols-2 gap-4 border-b border-[#a2a2a8]/30 pb-20 md:grid-cols-4"
    >
      {list.map((item) => {
        return (
          <div
            key={item.value}
            className={`flex size-full flex-col items-center justify-center bg-[#ffffff] py-11 shadow-lg dark:bg-[#2f2e33]`}
          >
            <p
              className={`m-0 mb-1 text-center text-5xl font-black leading-10 tracking-[-0.8416px] ${RedHatDisplay.className} `}
            >
              {item.value}
            </p>
            <p
              className={`text-center leading-6 tracking-[-0.16px] ${interFont.className} font-normal`}
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};
