import React from "react";

import { Nav } from "@/components/global";
import {
  Hero,
  Statistics,
  ShowOffService,
  Pricing,
  Testimonial,
  Features,
  CallToAction,
  Footer,
} from "@/components/Home";

import { ServiceSlider2 } from "@/components/Home/ServiceSlider2";
import { ListFilters } from "@/components/Home/ListFilters";
import { ImageGallery } from "@/components/ui-layout/ImageGallery";
import { Noice } from "@/components/shared";

const RootPage = () => {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Statistics />
      <ImageGallery className="w-full" />

      <ServiceSlider2 />
      {/* <ListFilters /> */}
      {/* <ShowOffService /> */}
      <Testimonial />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default RootPage;
