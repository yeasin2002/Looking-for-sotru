import * as React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { cn } from "@/utils";

interface Props {
  className?: string;
}

export const Logo = (props: Props) => (
  <div>
    <Image src={logo} alt="Logo" className={cn(props.className)} />
  </div>
);
