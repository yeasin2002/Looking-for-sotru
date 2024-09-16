import React from "react";
interface Props extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const Noice = ({ children, ...props }: Props) => {
  return (
    <main
      className="relative z-0 before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')] before:opacity-[0.03] before:content-['']"
      {...props}
    >
      {children}
    </main>
  );
};
