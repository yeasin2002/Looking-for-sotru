import Link from "next/link";
import * as React from "react";

interface Props {
  className?: string;
}

export const Logo = (props: Props) => (
  <Link href="#top">
    <span className="p-2 text-3xl font-bold">B</span>
  </Link>
);
