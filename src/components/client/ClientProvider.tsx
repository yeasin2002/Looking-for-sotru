"use client";

import React, { Fragment } from "react";
import { ThemeProvider } from "../theme-provider";
import { LenisSmoothScrolling } from "../global/ButterySmoothScrolling";
import { Noice } from "../shared";

interface Props {
  children: React.ReactNode;
}

export const ClientProvider = ({ children }: Props) => {
  return (
    <Fragment>
      <LenisSmoothScrolling>
        <Noice>
          <ThemeProvider>{children}</ThemeProvider>
        </Noice>
      </LenisSmoothScrolling>
    </Fragment>
  );
};
