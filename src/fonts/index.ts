import { Inter, Red_Hat_Display, Alkatra, Noto_Serif_Bengali } from "next/font/google";

export const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });
export const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const notoSerifBengaliFont = Noto_Serif_Bengali({
  subsets: ["latin"],
  weight: ["400", "700"],
});
