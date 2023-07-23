import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="pt-[100px]">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
