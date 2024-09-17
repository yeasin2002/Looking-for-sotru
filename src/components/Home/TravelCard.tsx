import { ServiceSliderData } from "@/data";
import armyIcon from "@/assets/icons/army.png";
import { cn } from "@/utils";
import { Castle, Languages } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Props extends React.ComponentPropsWithoutRef<"div"> {
  data: ServiceSliderData;
}

export const TravelCard = ({ className, data, ...props }: Props) => {
  return (
    <div className={cn("max-w-full overflow-hidden rounded-lg bg-white shadow-lg", className)} {...props}>
      <Image className="h-48 w-full object-cover" src={data.img} alt="Rome, Italy" width={1286} height={720} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800"> {data.title} </h3>

        <p className="mt-2 flex items-center gap-x-1 text-lg text-gray-600">
          <Languages /> {data.language}
        </p>

        <p className="mt-2 flex items-center gap-x-1 text-lg text-gray-600">
          <Castle /> {data.capital}
        </p>

        <div className="mt-2 flex items-center gap-x-1 text-lg text-gray-600">
          <Image src={armyIcon} alt="rebel" className="size-6" />
          <p className="text-sm">
            {data.rebels.map((item) => (
              <span key={item}> {item} </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
