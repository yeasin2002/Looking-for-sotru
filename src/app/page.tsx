import React from "react";

import { Nav } from "@/components/global";
import { Hero, Statistics, Testimonial, Features, CallToAction, Footer } from "@/components/Home";

import { ServiceSlider2 } from "@/components/Home/ServiceSlider2";
import { ImageGallery } from "@/components/ui-layout/ImageGallery";

const RootPage = () => {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Statistics />
      <ImageGallery className="w-full" />
      <ServiceSlider2 />
      <Testimonial />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default RootPage;
