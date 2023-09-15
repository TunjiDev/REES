import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Properties",
  description: "Explore Homes for Sale and Rent, Each One a Unique Gem Waiting to Be Discovered.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
