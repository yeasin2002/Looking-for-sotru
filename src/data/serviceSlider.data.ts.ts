import ArunachalPradesh from "@/assets/images/7 sisters/Arunachal Pradesh.gif";
import Assam from "@/assets/images/7 sisters/Assam.jpg";
import Manipur from "@/assets/images/7 sisters/Manipur.png";
import Meghalaya from "@/assets/images/7 sisters/Meghalaya.webp";
import Mizoram from "@/assets/images/7 sisters/Mizoram.png";
import Nagaland from "@/assets/images/7 sisters/Nagaland.png";
import Tripura from "@/assets/images/7 sisters/Tripura.png";
import { StaticImageData } from "next/image";

export interface ServiceSliderData {
  img: StaticImageData;
  title: string;
  language: string;
  capital: string;
  rebels: string[];
}

export const serviceSliderData: ServiceSliderData[] = [
  {
    img: ArunachalPradesh,
    title: "অরুণাচল প্রদেশ",
    language: "আদি, নিগরো, মিশমি, ইংরেজি",
    capital: "ইটানগর",
    rebels: ["NSCN (IM)", "NDFB"],
  },
  {
    img: Assam,
    title: "আসাম",
    language: "অসমীয়া, বাংলা, ইংরেজি",
    capital: "গুয়াহাটি",
    rebels: ["ULFA", "NDFB"],
  },
  {
    img: Manipur,
    title: "মেঘালয়",
    language: "খাসি, গারো, ইংরেজি",
    capital: "শিলং",
    rebels: ["Hynniewtrep National Liberation Council (HNLC)"],
  },
  {
    img: Meghalaya,
    title: "মণিপুর",
    language: "মৈতৈ, ইংরেজি",
    capital: "ইম্ফল",
    rebels: ["Kangleipak Communist Party (KCP)", "United National Liberation Front (UNLF)"],
  },
  {
    img: Nagaland,
    title: "নাগাল্যান্ড",
    language: "নাগা ভাষা, ইংরেজি",
    capital: "কোহিমা",
    rebels: ["National Socialist Council of Nagaland (NSCN)"],
  },
  {
    img: Mizoram,
    title: "মিজোরাম",
    language: "মিজো, ইংরেজি",
    capital: "আইজওয়াল",
    rebels: ["Mizo National Front (MNF)"],
  },
  {
    img: Tripura,
    title: "ত্রিপুরা",
    language: "বাঙালি, তিপরা, ইংরেজি",
    capital: "আগরতলা",
    rebels: ["Tripura Tribal Areas Autonomous District Council (TTAADC)"],
  },
];
