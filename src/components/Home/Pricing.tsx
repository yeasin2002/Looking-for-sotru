import React from "react";
import { HomeMain } from "./HomeMain";

import curbArrow from "@/assets/icons/arrow.svg";
import check from "@/assets/icons/greenCheck.svg";
import Image from "next/image";
import { PricingCard } from "../cards/PricingCards";
import { RedHatDisplay } from "@/fonts";

interface Props extends React.ComponentProps<"div"> {}

export const Pricing = ({ ...props }: Props) => {
  const planInclude = [
    "Unlimited domains ",
    "Unlimited web pages",
    "Conversion analytics",
    "A/B testing",
    "Exclusive channels",
    "Free resources",
    "Landing page builder",
    "Smart forms and reports",
  ];

  return (
    <div {...props} className="px-4 sm:container sm:px-0">
      <HomeMain
        heading="Start building for free, then add a plan to go live"
        desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla."
      />

      <div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-5 py-10 sm:grid-cols-2 sm:px-4 lg:grid-cols-4">
          <div className="relative left-0 top-0 order-last sm:order-first md:w-[40%]">
            <p
              className={
                "m-0 mb-4 mt-8 box-border text-nowrap font-sans text-lg font-bold leading-[27px] tracking-[-0.16px] text-[#F4F4F5] antialiased " +
                RedHatDisplay.className
              }
            >
              All plans include :
            </p>
            <Image src={curbArrow} alt="Arrow" className="absolute -top-8 left-36 z-20" />

            {planInclude.map((item) => {
              return (
                <div key={item} className="mt-2 flex items-center gap-2 text-nowrap">
                  <Image src={check} alt="check" />
                  <p className="font-sans text-lg tracking-[-0.16px] text-[#A2A2A8] antialiased">{item}</p>
                </div>
              );
            })}
          </div>

          <PricingCard isActive />
          <PricingCard />
          <PricingCard discount="-40%" />
        </div>
      </div>
    </div>
  );
};
