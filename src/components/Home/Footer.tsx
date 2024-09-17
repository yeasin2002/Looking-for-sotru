import { Twitter, Github, Facebook, Instagram, Linkedin } from "lucide-react";
import { HalfRoundMesh } from "../effects";

export const Footer = () => {
  return (
    <footer className="container relative mx-auto px-4 py-8 text-[#A2A2A8]">
      <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 sm:flex-row">
        <p className="mb-4 text-sm sm:mb-0">&copy; yeasin2002. All rights reserved.</p>
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

      <HalfRoundMesh className="absolute -bottom-0 -left-64 hidden opacity-50" />
    </footer>
  );
};
