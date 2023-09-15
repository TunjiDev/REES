import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "REES has helped put over 40 milllion renters into new homes.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
