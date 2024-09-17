import { redHatDisplay } from "@/fonts";
import Image from "next/image";
import React from "react";

import el1 from "@/assets/images/babor/babor-2110120433.jpg";
import el2 from "@/assets/images/babor/babor......1.jpg";
import el3 from "@/assets/images/babor/babor20211012154704.jpg";
import el4 from "@/assets/images/babor/images (1).jpeg";
import el5 from "@/assets/images/babor/images (2).jpeg";
import el6 from "@/assets/images/babor/images.jpeg";
import el7 from "@/assets/images/babor/prothomalo_import_media_2015_11_21_d6d3c7559fbd0769053cbaa5f0e9eb4d-babor.webp";
import el8 from "@/assets/images/babor/লুৎফুজ্জামান_বাবর_(৬_আগস্ট_২০০৫).jpeg";
import { cn } from "@/utils";
import { LampWrapper } from "../aceternity/LampSectionHeader";

const items = [
  {
    url: el1,
    title: "Adrian Paul",
    description: "COO & Co-Founder",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },

  {
    url: el2,
    title: "Flualy Cual",
    description: "Founder & CEO",
    tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
  },
  {
    url: el3,
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
  {
    url: el4,
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
  {
    url: el5,
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
  {
    url: el6,
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
  {
    url: el7,
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
  {
    url: el8,
    title: "Naymur Rahman",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
];

interface Props extends React.ComponentPropsWithoutRef<"div"> {}
export function ImageGalleryItem({ className }: Props) {
  return (
    <>
      <div className={cn("group mx-auto mb-10 mt-3 flex w-full justify-center gap-2 max-md:flex-col", className)}>
        {items.map((item, i: number) => {
          return (
            <article
              className="group/article ease-[cubic-bezier(.5,.85,.25,1.15)] relative w-full overflow-hidden rounded-xl transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity after:absolute after:inset-0 after:rounded-lg after:bg-white/30 after:opacity-0 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300 focus-within:before:opacity-100 md:before:opacity-0 md:hover:before:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 md:group-hover:[&:not(:hover)]:w-[20%] md:group-hover:[&:not(:hover)]:after:opacity-100"
              key={i}
            >
              <a className="absolute inset-0 z-10 flex flex-col justify-end p-3 text-white" href="#0">
                <h1 className="ease-[cubic-bezier(.5,.85,.25,1.8)] text-xl font-medium transition duration-200 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-300 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-300 md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0">
                  {item?.title}
                </h1>
                <span className="ease-[cubic-bezier(.5,.85,.25,1.8)] text-3xl font-medium transition duration-200 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100 group-focus-within/article:delay-500 group-hover/article:translate-y-0 group-hover/article:opacity-100 group-hover/article:delay-500 md:translate-y-2 md:truncate md:whitespace-nowrap md:opacity-0">
                  {item?.description}
                </span>
              </a>
              <Image
                className="h-72 w-full object-cover md:h-[420px]"
                src={item?.url}
                width="960"
                height="480"
                alt="Image 01"
              />
            </article>
          );
        })}
      </div>
    </>
  );
}

interface Props extends React.ComponentProps<"div"> {}

export const ImageGallery = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <ImageGalleryItem />
    </div>
  );
};
