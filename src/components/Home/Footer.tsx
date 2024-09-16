import React from "react";
import { Twitter, Github, Facebook, Instagram, Linkedin } from "lucide-react";

import { interFont } from "@/fonts";
import { Logo } from "../global";
import { footerData } from "@/data";
import { RoundedMesh, HalfRoundMesh } from "../effects";

export const Footer = () => {
  return (
    <footer className="relative py-8 text-[#A2A2A8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex">
            <Logo />
          </div>

          {footerData.map((footerItem, index) => (
            <div key={index}>
              <h3 className={`mb-4 text-lg font-semibold ${interFont.className} font-medium`}>{footerItem.title}</h3>
              <ul className="space-y-2">
                {footerItem.item.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className={`transition-colors hover:text-white ${interFont.className} font-normal`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 sm:flex-row">
          <p className="mb-4 text-sm sm:mb-0">&copy; Cruip.com. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <HalfRoundMesh className="absolute -bottom-0 -left-64 hidden opacity-50" />
    </footer>
  );
};
