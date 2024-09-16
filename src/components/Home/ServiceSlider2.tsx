"use client";

import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { RedHatDisplay } from "@/fonts";
import { serviceSliderData } from "@/data";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props extends React.ComponentProps<"div"> {}

export const ServiceSlider2 = ({ ...props }: Props) => {
  const swiperRef = useRef<null | SwiperRef>(null);

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div {...props} className="space-y-6">
      <div className="mx-auto max-w-3xl">
        <h2
          className={`m-0 mb-4 text-center text-4xl font-black leading-[52.1792px] tracking-wide md:text-6xl md:leading-[66.08px] md:tracking-[-1.12px] ${RedHatDisplay.className} font-black`}
        >
          From rough <br className="sm:hidden" /> design files, to powerful products
        </h2>
        <p className={`text-center text-[20px] leading-[30px] tracking-[-0.16px]`}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          excepteur sint occaecat cupidatat
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        loop
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="mySwiper"
        ref={swiperRef}
        breakpoints={{ 640: { slidesPerView: 2.1, spaceBetween: 0 } }}
      >
        {serviceSliderData?.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <div className="relative flex cursor-pointer items-center justify-center rounded-md">
                <Image src={item.img} alt={item.title} width={500} height={500} className="min-h-[23rem]" />
                <Button className="absolute left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 transform">
                  {item.cta}
                </Button>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="mx-4 my-8 flex items-center justify-between">
          <button className="bg-mainGreen p-4 text-white dark:bg-[#2f2e33] dark:text-gray-400" onClick={goToPrevSlide}>
            <ArrowLeft />
          </button>
          <button className="bg-mainGreen p-4 text-white dark:bg-[#2f2e33] dark:text-gray-400" onClick={goToNextSlide}>
            <ArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
