import { Satellite, ClickClick, MusicPlaylist, Signal } from "@/components/icons";
interface SvgProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const featureData = [
  {
    Icon: Satellite,
    title: "মৃত্যুদণ্ডপ্রাপ্ত",
    desc: "২০০৪ সালের ২১ আগস্ট গ্রেনেড হামলা এবং ২০০৪ সালের ১০ ট্রাক অস্ত্র চোরাচালান মামলায় বাবর মৃত্যুদণ্ডে দণ্ডিত হয়েছেন",
    bgColor: "linear-gradient(to right top, #3ABAB4, #3ABAB4)",
  },
  {
    Icon: ClickClick,
    title: "কারাবন্দী",
    desc: "তিনি বর্তমানে জেলে আছেন এবং মৃত্যুদণ্ডের বিরুদ্ধে আপিল করছেন। তার আইনজীবীরা উচ্চ আদালতে আপিল দায়ের করেছেন.",
    bgColor: "linear-gradient(to right top, #9F7AEA, #9F7AEA)",
  },
  {
    Icon: MusicPlaylist,
    title: "জনমত",
    desc: "আগস্ট ২০২৪  লুৎফুজ্জামান বাবরের নিঃশর্ত মুক্তির দাবিতে মানববন্ধন করা হয়েছে",
    bgColor: "linear-gradient(to right top, #667EEA, #667EEA)",
  },
  {
    Icon: Signal,
    title: "জামিন ",
    desc: "১১ সেপ্টেম্বর ৪ মামলায় জামিন পেলেন লুৎফুজ্জামান বাবর",
    bgColor: "linear-gradient(to right top, #ED64A6, #ED64A6)",
  },
];
