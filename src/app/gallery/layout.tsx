import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Gallery",
  description: "Explore our gallery of beautiful houses and apartments",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
