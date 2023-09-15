import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Let's Begin the Conversation About Your Real Estate Goals.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
