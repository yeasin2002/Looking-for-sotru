import user1 from "@/assets/users/user1.jpeg";
import user2 from "@/assets/users/user2.jpeg";
import user3 from "@/assets/users/user3.jpeg";
import user4 from "@/assets/users/user4.jpeg";
import { StaticImageData } from "next/image";

interface ControversialInfo {
  content: string;
  source: string;
  sourceURL: string;
}

export const controversialInfoData: ControversialInfo[] = [
  {
    content: "লুৎফুজ্জামান বাবর ছিলেন ২০০৪ সালের ২১ আগস্ট গ্রেনেড হামলার মামলার আসামি।",
    source: "Prothom Alo",
    sourceURL: "https://www.prothomalo.com",
  },
  {
    content: "২০০৪ সালের গ্রেনেড হামলায় দায়িত্বে অবহেলার অভিযোগে যাবজ্জীবন কারাদণ্ড পান।",
    source: "Daily Star",
    sourceURL: "https://www.thedailystar.net",
  },
  {
    content: "বাবর জামায়াতে ইসলামী ও বিএনপির প্রভাবশালী নেতা হিসেবে পরিচিত।",
    source: "Bangla Tribune",
    sourceURL: "https://www.banglatribune.com",
  },
  {
    content: "বাবরকে খালেদা জিয়ার ঘনিষ্ঠ সহযোগী হিসেবে বিবেচনা করা হয়।",
    source: "Dhaka Tribune",
    sourceURL: "https://www.dhakatribune.com",
  },
  {
    content: "তাকে গ্রেফতার করে ২০০৭ সালে দুর্নীতি দমন কমিশন (দুদক)।",
    source: "Bdnews24",
    sourceURL: "https://www.bdnews24.com",
  },
];

export const testimonialData = [
  {
    avatar: user1,
    name: "Andy Croll",
    companyName: "Appy.com",
    companyLink: "",
  },
  {
    avatar: user2,
    name: "Patricia Lepisov",
    companyName: "Nobi Bank",
    companyLink: "",
  },
  {
    avatar: user3,
    name: "Zhenya Ritz",
    companyName: "Sync",
    companyLink: "",
  },
  {
    avatar: user4,
    name: "Lisa Champ",
    companyName: " Appicu",
    companyLink: "",
  },
];
