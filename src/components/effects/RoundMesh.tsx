import React from "react";
import { cn } from "@/utils";
interface Props extends React.ComponentProps<"svg"> {}

export function RoundedMesh({ className, ...props }: Props) {
  return (
    <svg
      className={cn(className)}
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="400" cy="400" r="400" fill="url(#roundmesh_gradient)" fillOpacity="0.4" />
      <defs>
        <radialGradient
          id="roundmesh_gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(400 400) rotate(90) scale(400)"
        >
          <stop stopColor="#3ABAB4" />
          <stop offset="1" stopColor="#3ABAB4" stopOpacity="0.01" />
        </radialGradient>
      </defs>
    </svg>
  );
}
