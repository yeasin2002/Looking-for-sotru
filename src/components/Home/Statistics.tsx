import React from "react";
import { interFont, redHatDisplay } from "@/fonts";
interface Props extends React.ComponentProps<"div"> {}

export const Statistics = ({ ...props }: Props) => {
  const list = [
    { label: "সংসদ সদদ্য ", value: "২ বার" },
    { label: "অস্ত্র মামলা ", value: "১০ ট্রাক" },
    { label: "স্বরাষ্ট্র প্রতিমন্ত্রী", value: "৪৩ বছরে" },
    { label: " আসনে নির্বাচন", value: "নেত্রকোনা-৪" },
  ];
  return (
    <div {...props} className="mb-3 grid grid-cols-2 gap-4 border-b border-[#a2a2a8]/30 pb-20 md:grid-cols-4">
      {list.map((item) => {
        return (
          <div
            key={item.value}
            className={`flex size-full flex-col items-center justify-center rounded-sm bg-[#ffffff] py-11 shadow-lg dark:bg-[#2f2e33]`}
          >
            <p
              className={`m-0 mb-1 text-center text-5xl font-black leading-10 tracking-[-0.8416px] ${redHatDisplay.className} `}
            >
              {item.value}
            </p>
            <p className={`text-center leading-6 tracking-[-0.16px] ${interFont.className} font-normal`}>
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};
