"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { filterItems, filterMenu, itemList } from "@/data/filtersItems";
import { interFont, RedHatDisplay } from "@/fonts";
import videoThumbnail from "@/assets/images/video-thumb.jpg";
import play from "@/assets/icons/play.svg";

import { cn } from "@/utils";
interface Props extends React.ComponentProps<"div"> {}

export const ListFilters = ({ ...props }: Props) => {
  const [active, setActive] = useState(filterMenu[0].groupName);
  const [filterList, setFilterList] = useState<itemList[]>([]);

  useEffect(() => {
    const newList = filterItems.filter((item) => item.groupName === active);
    setFilterList(newList);
  }, [active]);

  return (
    <div {...props} className="md:py-14">
      <div className="mx-auto max-w-3xl">
        <h2
          className={`m-0 text-center text-4xl font-black leading-[52.1792px] tracking-wide md:text-6xl md:leading-[66.08px] md:tracking-[-1.12px] ${RedHatDisplay.className} font-black`}
        >
          Turn your ideas into reality in seconds
        </h2>
        <p
          className={`my-6 text-center text-[20px] leading-[30px] tracking-[-0.16px] text-[#52525A] dark:text-[#A2A2A8]`}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          excepteur sint occaecat cupidatat.
        </p>
      </div>

      <div className="container flex flex-col gap-x-16 lg:flex-row">
        <aside className="my-3 grid grid-cols-2 flex-wrap items-center justify-center gap-2 text-nowrap sm:my-5 sm:flex lg:w-[60%] lg:flex-col lg:items-start lg:justify-normal 2xl:pl-44">
          {filterMenu?.map((menu) => {
            return (
              <button
                onClick={() => setActive(menu.groupName)}
                key={menu.name}
                className={cn(
                  `flex items-center gap-x-2 bg-white p-2 text-gray-800 shadow-sm dark:bg-[#2f2e33] dark:text-gray-200 lg:w-full ${interFont.className} rounded-sm font-medium`,
                  {
                    "bg-mainGreen text-white dark:bg-[#223c3d]": menu.groupName === active,
                  },
                )}
              >
                {/* {menu.icon} */}
                <menu.Icon
                  className={cn(`size-4 font-bold text-mainGreen dark:text-gray-200`, {
                    "text-white": menu.groupName === active,
                  })}
                />
                <span>{menu.name}</span>
              </button>
            );
          })}
        </aside>
        <main className="grid flex-grow grid-cols-1 gap-3 sm:px-20 md:grid-cols-2 md:gap-6 md:px-2">
          {filterList.map((item) => {
            return (
              <div key={item.name} className="relative">
                <Image src={videoThumbnail} alt="Video Thumbnail" />
                <div className="absolute bottom-0 left-0 flex w-full justify-between bg-gray-200 px-4 py-2 dark:bg-[#1f1f21]/80">
                  <p className={`${interFont.className} font-medium`}>{item.name}</p>
                  <p className="rounded-full bg-[#858585] px-2 py-1 text-xs text-white dark:bg-[#4FD1C5]/20">
                    {item.time}
                  </p>
                </div>
                <Image
                  src={play}
                  alt="Play "
                  className="absolute left-1/2 top-1/2 size-1/3 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};
