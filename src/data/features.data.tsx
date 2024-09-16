import { Satellite, ClickClick, MusicPlaylist, Signal } from "@/components/icons";
interface SvgProps extends React.ComponentPropsWithoutRef<"svg"> {}

// import f1 from "@/assets/icons/satellite.svg";
// import f2 from "@/assets/icons/click-click.svg";
// import f3 from "@/assets/icons/music.svg";
// import f4 from "@/assets/icons/signal.svg";

export const featureData = [
  {
    // icon: f1,
    Icon: Satellite,
    title: "Simpler Sharing",
    desc: "Lorem ipsum dolor amet sit consect adipiscing.",
    bgColor: "linear-gradient(to right top, #3ABAB4, #3ABAB4)",
  },
  {
    // icon: f2,
    Icon: ClickClick,
    title: "Simpler Sharing",
    desc: "Lorem ipsum dolor amet sit consect adipiscing.",
    bgColor: "linear-gradient(to right top, #9F7AEA, #9F7AEA)",
  },
  {
    // icon: f3,
    Icon: MusicPlaylist,
    title: "Simpler Sharing",
    desc: "Lorem ipsum dolor amet sit consect adipiscing.",
    bgColor: "linear-gradient(to right top, #667EEA, #667EEA)",
  },
  {
    // icon: f4,
    Icon: Signal,
    title: "Simpler Sharing",
    desc: "Lorem ipsum dolor amet sit consect adipiscing.",
    bgColor: "linear-gradient(to right top, #ED64A6, #ED64A6)",
  },
];
