/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

function Navbar() {
  const [height, setHeight] = useState("100px");
  const [hovering, setHovering] = useState(true);

  const [screenHeight, setScreenHeight] = useState(0);
  const [state, setstate] = useState(null);

  useEffect(() => {
    hovering
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [hovering]);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0">
      <div
        style={{
          height: "112px",
        }}
        className="flex px-[100px] bg-[#171A33] justify-between transition-all duration-500 z-10"
      >
        <div className="h-full flex items-center">
          <img
            src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1689912033/Dtory/portfolio/logo_oaltfj.png"
            className="h-9"
            alt=""
          />
        </div>
        <ul className="flex items-center space-x-16 font-light">
          <li
            onMouseEnter={() => {
              setHeight("200px");
              setHovering(true);
              setstate("services");
            }}
            onMouseLeave={() => {
              setHeight("100px");
              setHovering(false);
              setstate(null);
            }}
            className="h-full flex items-center group"
          >
            <span className="text-white">Services</span>

            <div
              style={{
                height: screenHeight - 512,
              }}
              className={`absolute translate-y-[2000px] group-hover:translate-y-[512px] top-0 inset-x-0 bg-black/40 pointer-events-none z-0 transition-all`}
            ></div>
          </li>
          <li
            onMouseEnter={() => {
              setHeight("200px");
              setHovering(true);
              setstate("dtory");
            }}
            onMouseLeave={() => {
              setHeight("100px");
              setHovering(false);
              setstate(null);
            }}
            className="h-full flex items-center group"
          >
            <span className="text-white">Dtory</span>
            <div
              style={{
                height: screenHeight - 512,
              }}
              className={`absolute translate-y-[2000px] group-hover:translate-y-[512px] top-0 inset-x-0 bg-black/40 pointer-events-none z-0 transition-all`}
            ></div>
          </li>
        </ul>
        <div
          style={{
            height: hovering ? "400px" : "0px",
          }}
          className="absolute top-[112px] inset-x-0  bg-[#171A33] transition-all text-white"
        >
          {state === "services" ? (
            <div>Services</div>
          ) : state == "dtory" ? (
            <div>Dtory</div>
          ) : (
            <div></div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
