"use client";
import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export const LenisSmoothScrolling = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis options={{ duration: 1.5 }} root>
      {children}
    </ReactLenis>
  );
};
