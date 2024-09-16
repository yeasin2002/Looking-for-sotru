import { cn } from "@/utils";
import * as React from "react";

interface Props extends React.ComponentPropsWithoutRef<"svg"> {}

export function HalfRoundMesh({ className, ...props }: Props) {
  return (
    <svg className={cn(className)} width={800} height={264} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={400} cy={400} r={400} fill='url("#footerglow_paint0_radial")' fillOpacity={0.4} />
      <defs>
        <radialGradient
          id="footerglow_paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 400) scale(315.089)"
        >
          <stop stopColor="#3ABAB4" />
          <stop offset={1} stopColor="#3ABAB4" stopOpacity={0.01} />
        </radialGradient>
        <radialGradient
          id="footerglow_paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 0 400) scale(315.089)"
        >
          <stop stopColor="#3ABAB4" />
          <stop offset={1} stopColor="#3ABAB4" stopOpacity={0.01} />
        </radialGradient>
      </defs>
    </svg>
  );
}
