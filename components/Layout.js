import React from "react";
import Navbar from "./Navbar";
import localFont from "@next/font/local";

const monaSans = localFont({
  src: [
    {
      path: "../public/mona/Mona-Sans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/mona/Mona-Sans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/mona/Mona-Sans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/mona/Mona-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mona",
});

function Layout({ children }) {
  return (
    <div className={`pt-[100px] ${monaSans.variable}`}>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
