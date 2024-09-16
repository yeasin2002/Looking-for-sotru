import { cn } from "@/utils";
import React from "react";
interface Props extends React.ComponentProps<"svg"> {}

export const FramesetColors = ({ className, ...props }: Props) => {
  return (
    <svg
      {...props}
      className={cn(className)}
      aria-hidden="true"
      width={678}
      height={634}
      viewBox="0 0 678 634"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={240}
        cy={394}
        r={240}
        fill="url(#piphoneill_paint0_radial)"
        fillOpacity=".4"
      />
      <circle
        cx={438}
        cy={240}
        r={240}
        fill="url(#piphoneill_paint1_radial)"
        fillOpacity=".6"
      />
      <defs>
        <radialGradient
          id="piphoneill_paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -77 317) scale(189.054)"
        >
          <stop stopColor="#667EEA" />
          <stop offset={1} stopColor="#667EEA" stopOpacity=".01" />
        </radialGradient>
        <radialGradient
          id="piphoneill_paint1_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 99 339) scale(189.054)"
        >
          <stop stopColor="#9F7AEA" />
          <stop offset={1} stopColor="#9F7AEA" stopOpacity=".01" />
        </radialGradient>
      </defs>
    </svg>
  );
};
