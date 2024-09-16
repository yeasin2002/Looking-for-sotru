"use client";

import React, { Fragment } from "react";
import { ThemeProvider } from "../theme-provider";

interface Props {
  children: React.ReactNode;
}

export const ClientProvider = ({ children }: Props) => {
  return (
    <Fragment>
      <ThemeProvider>{children}</ThemeProvider>
    </Fragment>
  );
};
