import React from "react";

import Image from "next/image";
import { Check } from "lucide-react";
import { notoSerifBengaliFont, interFont, alkatraFont } from "@/fonts";

import baborImage from "@/assets/images/babor/babor.jpeg";
import leftBallMesh from "@/assets/mesh-gradient/ball-right.svg";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
  const timeLine = [
    "১৯৫৮: বাবর নেত্রকোনায় জন্মগ্রহণ করেন।",
    "২০০১: বিএনপির সরকারে স্বরাষ্ট্র প্রতিমন্ত্রী হিসেবে নিয়োগ পান।",
    "২০০৪: আওয়ামী লীগের সমাবেশে গ্রেনেড হামলার ঘটনার সাথে জড়িত হন।",
    "২০০৭: সামরিক সমর্থিত তত্ত্বাবধায়ক সরকারের সময় দুর্নীতির অভিযোগে গ্রেফতার হন।",
    "২০১৪: ১০ ট্রাক অস্ত্র মামলায় মৃত্যুদণ্ডে দণ্ডিত হন।",
    "২০১৮: ২১ আগস্ট গ্রেনেড হামলার মামলায়ও মৃত্যুদণ্ডে দণ্ডিত হন।",
  ];

  return (
    <div {...props} className="relative overflow-x-hidden">
      <div className="flex flex-col items-center gap-x-10 gap-y-10 py-16 lg:flex-row">
        <div className="space-y-6 text-center lg:text-start">
          <h1
            className={`text-5xl font-black tracking-tighter text-foreground sm:text-6xl md:text-6xl md:leading-tight lg:text-7xl ${alkatraFont.className}`}
          >
            <span>
              We are open, <br /> Looking for
            </span>
            <span className={`px-3 ${notoSerifBengaliFont.className}`}>{`শত্রু'স`}</span>
          </h1>
          <p className={`${interFont.className} text-start text-lg leading-7 tracking-normal text-[#a2a2a8]`}>
            লুৎফুজ্জামান বাবর (জন্ম: ১০ অক্টোবর ১৯৫৮) একজন বাংলাদেশি রাজনীতিবিদ। তিনি খালেদা জিয়ার মন্ত্রীসভায়
            নেত্রকোণা-৪ আসনের সংসদ সদস্য ও স্বরাষ্ট্র প্রতিমন্ত্রী ছিলেন ১০ অক্টোবর ২০০১ থেকে ২৯ অক্টোবর ২০০৬ পর্যন্ত।
          </p>

          {/* <div className="flex flex-col items-center justify-center gap-y-2 sm:w-full sm:flex-row sm:px-14 md:px-0 lg:w-2/3">
            <input
              type="text"
              placeholder="Phone Number"
              className="m-0 mr-2 w-full flex-grow cursor-text overflow-hidden rounded-md border border-[#6E6E76] p-3 px-4 shadow-none dark:bg-[#2E2E33]"
            />
            <Button className="w-full py-4 sm:h-full sm:w-1/3">Request Code</Button>
          </div> */}

          <div className="space-y-1 sm:px-14 md:px-0">
            <p
              className={`${interFont.className} text-start text-lg leading-7 tracking-normal text-[#a2a2a8] sm:text-xl md:tracking-wide`}
            >
              টাইমলাইন
            </p>
            {timeLine.map((item) => (
              <p key={item} className="flex items-center gap-x-1 text-start">
                <Check className="size-6 text-mainGreen" />
                <span className="font-inter leading-6 tracking-[-0.16px] text-gray-300">{item}</span>
              </p>
            ))}
          </div>
        </div>

        <Image
          src={baborImage}
          alt="Hero Mockup"
          className="z-30 min-w-96 rounded-md object-cover ring ring-mainGreen"
        />
      </div>

      <Image
        src={leftBallMesh}
        alt="Hero Mockup"
        className="pointer-events-none absolute -right-20 bottom-4 z-10 opacity-45"
      />
    </div>
  );
};
