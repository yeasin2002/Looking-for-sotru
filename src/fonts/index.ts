import { Inter, Red_Hat_Display, Alkatra, Josefin_Sans } from "next/font/google";
// Bengali Fonts
import { Noto_Serif_Bengali, Hind_Siliguri, Tiro_Bangla } from "next/font/google";

export const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });
export const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

// Experimental
export const alkatraFont = Alkatra({ subsets: ["latin"], weight: ["400", "700"] });
export const josefinFont = Josefin_Sans({ subsets: ["latin"], weight: ["400", "700"] });

// Bengali Fonts

export const notoSerifBengaliFont = Noto_Serif_Bengali({ subsets: ["latin"], weight: ["400", "700"] });
export const hindSiliguriFont = Hind_Siliguri({ subsets: ["latin"], weight: ["400", "700"] });
export const tiroBanglaFonts = Tiro_Bangla({ subsets: ["latin"], weight: ["400"] });
