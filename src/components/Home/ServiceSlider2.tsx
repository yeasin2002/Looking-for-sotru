"use client";

import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { redHatDisplay } from "@/fonts";
import { serviceSliderData } from "@/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TravelCard } from "./TravelCard";

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
    <div {...props} className="space-y-6 pt-4">
      <div className="mx-auto max-w-3xl">
        <h2
          className={`m-0 mb-4 text-center text-4xl font-black leading-[52.1792px] tracking-wide md:text-6xl md:leading-[66.08px] md:tracking-[-1.12px] ${redHatDisplay.className} font-black`}
        >
          সেভেন সিস্টার্স <br className="sm:hidden" /> অফ ইন্ডিয়া
        </h2>
        <p className={`le ading-[30px] text-center text-[20px] tracking-[-0.16px] text-gray-400`}>
          লুৎফুজ্জামান বাবরের ভারতীয় সেভেন সিস্টার্স অঞ্চলের (উত্তর-পূর্ব ভারত) সাথে কিছু সম্পর্ক ছিলো, বিশেষ করে অস্ত্র
          চোরাচালানের ক্ষেত্রে। ২০০৪ সালের ১০ ট্রাক অস্ত্র চালান মামলায় বাবরের সংশ্লিষ্টতা দেখা যায়, যেখানে এসব
          অস্ত্রগুলো উত্তর-পূর্ব ভারতের বিদ্রোহী গোষ্ঠীগুলোর কাছে পাঠানোর পরিকল্পনা ছিল বলে ধারণা করা হয়। এই ঘটনার সাথে
          ভারতের সেভেন সিস্টার্স অঞ্চলের বিভিন্ন বিচ্ছিন্নতাবাদী গোষ্ঠীর সংশ্লিষ্টতা উল্লেখযোগ্য।
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={0}
        grabCursor={true}
        loop={false}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="mySwiper"
        ref={swiperRef}
        breakpoints={{ 640: { slidesPerView: 3, spaceBetween: 0 } }}
      >
        {serviceSliderData?.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <TravelCard className="mx-6" data={item} />
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
