/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import NavPortfolio from "./NavPortfolio";
import NavDtory from "./NavDtory";

function Navbar() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [state, setstate] = useState(null);
  return (
    <nav
      onMouseLeave={() => {
        setstate(null);
      }}
      style={{
        height: overlayOpen ? "100vh" : "fit-content",
      }}
      className="fixed top-0 inset-x-0 bg-black/50 transition-all duration-500 z-10"
    >
      <div className="h-[100px] bg-[#171A33] flex items-center justify-between px-[100px]">
        <div>
          <img
            src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1689912033/Dtory/portfolio/logo_oaltfj.png"
            alt=""
            className="h-10"
          />
        </div>
        <ul className="flex items-center h-full text-white font-light cursor-pointer">
          <li
            onMouseEnter={() => {
              setOverlayOpen(false);
              setstate(null);
            }}
            onMouseLeave={() => {
              setOverlayOpen(false);
              setstate(null);
            }}
            className="h-full flex flex-col justify-center px-8 space-y-1"
          >
            <span>Services</span>
            <div
              className="bg-white transition-all"
              style={{
                height: "1px",
                width: state == null ? "50%" : "0%",
              }}
            ></div>
          </li>
          <li
            className="h-full flex flex-col justify-center px-8 space-y-1"
            onMouseEnter={() => {
              setOverlayOpen(true);
              setstate("dtory");
            }}
            onMouseLeave={() => {
              setOverlayOpen(false);
            }}
          >
            <span>Dtory</span>
            <div
              className="bg-white transition-all"
              style={{
                height: "1px",
                width: state == "dtory" ? "50%" : "0%",
              }}
            ></div>
          </li>
          <li
            className="h-full flex flex-col justify-center px-8 space-y-1"
            onMouseEnter={() => {
              setOverlayOpen(true);
              setstate("portfolio");
            }}
            onMouseLeave={() => {
              setOverlayOpen(false);
            }}
          >
            <span>Portfolio</span>
            <div
              className="bg-white transition-all"
              style={{
                height: "1px",
                width: state == "portfolio" ? "50%" : "0%",
              }}
            ></div>
          </li>
        </ul>
        <div>
          <button className="bg-white h-12 px-6 text-black">Contact us</button>
        </div>
      </div>
      <div
        onMouseEnter={() => {
          setOverlayOpen(true);
        }}
        onMouseLeave={() => {
          setOverlayOpen(false);
          setstate(null);
        }}
        style={{
          height: overlayOpen ? "350px" : "0vh",
        }}
        className="bg-[#171A33] transition-all -mt-1 overflow-hidden text-white"
      >
        {state == "portfolio" ? (
          <NavPortfolio />
        ) : state == "dtory" ? (
          <NavDtory />
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
