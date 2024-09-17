import { HalfRoundMesh } from "../effects";
import { footerData } from "@/data";

export const Footer = () => {
  return (
    <footer className="container relative mx-auto px-4 py-8 text-[#A2A2A8]">
      <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 sm:flex-row">
        <p className="mb-4 text-sm sm:mb-0">&copy; yeasin2002. All rights reserved.</p>

        <div className="flex space-x-4">
          {footerData.map((info) => (
            <a
              href={info.url}
              target="_blank"
              className="text-gray-400 hover:text-white"
              key={info.url}
              title={info.title}
            >
              <info.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <HalfRoundMesh className="absolute -bottom-0 -left-64 hidden opacity-50" />
    </footer>
  );
};
