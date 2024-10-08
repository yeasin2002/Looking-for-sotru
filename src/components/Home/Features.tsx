import React from "react";
import { HomeMain } from "./HomeMain";
import { featureData } from "@/data";
import { ArrowBend } from "../icons";
interface Props extends React.ComponentProps<"div"> {}

export const Features = ({ ...props }: Props) => {
  return (
    <div {...props} className="my-10" id="current-situation">
      <HomeMain heading="বাবরের বর্তমান অবস্থা" desc="" className="border-0" />

      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2">
        {featureData.map((feature, i) => {
          return (
            <div key={i} style={{ backgroundImage: feature.bgColor }} className="rounded-sm px-8 py-6">
              <feature.Icon className="size-8 fill-slate-100" />
              <h3 className="m-0 mt-4 text-2xl font-bold leading-[27px] tracking-[-0.16px] text-[#F4F4F5] antialiased">
                {feature.title}
              </h3>
              <p className="m-0 mb-4 box-border flex-grow cursor-pointer font-sans leading-[24px] tracking-[-0.16px] text-white antialiased opacity-80">
                {feature.desc}
              </p>

              <div className="flex justify-end">
                <ArrowBend className="size-8 fill-slate-100" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
