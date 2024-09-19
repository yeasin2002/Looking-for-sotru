import React from "react";
import { Logo } from "./Logo";

import { Button, ToggleInput } from "@/components/ui";
import { cn } from "@/utils";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { interFont } from "@/fonts";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HireMeCTA } from "./HireMeCTA";
import { div } from "framer-motion/client";
import Link from "next/link";

interface Props extends React.ComponentProps<"div"> {}

export const Nav = ({ className, ...props }: Props) => {
  const navbarItem = [
    { name: "গ্যালারি ", url: "#gallery" },
    { name: "৭-সিস্টার'স ", url: "#seven-sisters" },
    { name: "বিতর্কিত বিষয়সমূহ", url: "#controversial-topics" },
    { name: "বর্তমান অবস্থা", url: "#current-situation" },
  ];

  return (
    <nav {...props} className={cn("flex items-center justify-between pt-6", className)} id="top">
      <div className="flex items-center gap-x-4">
        <Logo />
        <div className="hidden items-center gap-x-3 md:flex">
          {navbarItem.map((item) => (
            <Link key={item.name} href={item.url}>
              <p
                className={`${interFont.className} font-inter px-5] flex cursor-pointer items-center p-2 font-medium leading-6 tracking-[-0.16px] text-[#1D1D20] dark:text-[#F4F4F5]`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeSwitcher />

        <HireMeCTA className="hidden md:block" />

        <Sheet>
          <SheetTrigger className="md:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side={"left"} className="dark:bg-[#212024] lg:hidden">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-4 items-center gap-x-3 md:flex">
              {navbarItem.map((item) => (
                <Link
                  className={`${interFont.className} font-inter px-5] flex cursor-pointer items-center p-2 font-medium leading-6 tracking-[-0.16px] text-[#1D1D20] dark:text-[#F4F4F5]`}
                  key={item.name}
                  href={item.url}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <HireMeCTA className="mt-4 w-full" />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
