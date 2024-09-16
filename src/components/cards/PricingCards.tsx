import { cn } from "@/utils";
import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  isActive?: boolean;
  discount?: string;
}

export const PricingCard = ({ isActive, discount, className }: Props) => {
  return (
    <div
      className={cn("w-full rounded-sm bg-[#2E2E33] p-6 text-white shadow-lg", className, {
        "border border-mainGreen": isActive,
      })}
    >
      <div className={cn({ "flex items-center justify-between": discount })}>
        <h2 className="mb-4 text-xl font-semibold">Monthly</h2>
        {discount && (
          <p className="rounded-full bg-[#858585] px-2 py-1 text-xs text-[#4FD1C5] dark:bg-[#2E484B]"> {discount}</p>
        )}
      </div>
      <div className="mb-4 flex items-baseline">
        <span className="text-4xl font-bold">$47</span>
        <span className="ml-1 text-gray-400">/billed yearly</span>
      </div>
      <p className="mb-10 text-gray-400">Lorem ipsum dolor amet sit consect adipiscing.</p>

      <button
        className={cn(
          "mt-16 w-full rounded bg-[#3F3F45] px-4 py-2 font-semibold text-mainGreen transition duration-300 hover:bg-[#3F3F45]/90",
          {
            "bg-mainGreen text-white": isActive,
          },
        )}
      >
        Go Premium
      </button>
    </div>
  );
};
