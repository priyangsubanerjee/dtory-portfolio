/* eslint-disable @next/next/no-img-element */
import React from "react";
import ThinkCreateGrow from "../ThinkCreateGrow";
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <div className="max-h-[780px] h-screen relative overflow-hidden bg-[#050026]">
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690109285/Dtory/portfolio/4L1_zfwbpm.png"
        className="V4L1 absolute -top-[10%] right-[26%] object-cover scale-110 blur-3xl"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690109409/Dtory/portfolio/5L3_g4jrio.png"
        className="V5L3 absolute -top-[10%] right-[0%] object-cover z-30 scale-110 blur-3xl"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690109285/Dtory/portfolio/7L1_f8fcdr.png"
        className="V7L1 absolute -bottom-[10%] right-[0%] object-cover scale-125 blur-3xl"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690109285/Dtory/portfolio/3L2_pnvjae.png"
        className="V3L2 absolute bottom-[50%] right-[40%] object-cover translate-y-1/2 z-20 blur-3xl"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690109285/Dtory/portfolio/2L2_vbxohs.png"
        className="V2L2 absolute -bottom-[10%] left-[0%] object-cover z-20 blur-3xl"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690109285/Dtory/portfolio/1L3_ala1nn.png"
        className="V1L3 absolute -top-[10%] left-[0%] object-cover z-30 blur-3xl"
        alt=""
      />
      <div className="absolute h-full w-full backdrop-blur-3xl bg-black/30 z-40 flex">
        <div className="w-full mt-32">
          <Marquee>
            {[...Array(20)].map((_, i) => {
              return <ThinkCreateGrow key={i} />;
            })}
          </Marquee>
          <div className="text-white text-center my-16 mx-auto">
            <h1 className="text-[72px] leading-[1.4] font-[1000] font-mona-sans">
              Every Design Woven <br /> Into A Story
            </h1>
            <p className="mt-[20px] font-[1100] leading-7">
              We play with colors and elements to create <br /> visually amazing
              shit for your brand.
            </p>
            <button className="mt-6 flex items-center w-fit mx-auto space-x-3">
              <span>See plans</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
              >
                <path
                  d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1H4.5ZM3.64645 14.3536C3.84171 14.5488 4.15829 14.5488 4.35355 14.3536L7.53553 11.1716C7.7308 10.9763 7.7308 10.6597 7.53553 10.4645C7.34027 10.2692 7.02369 10.2692 6.82843 10.4645L4 13.2929L1.17157 10.4645C0.976311 10.2692 0.659728 10.2692 0.464466 10.4645C0.269204 10.6597 0.269204 10.9763 0.464466 11.1716L3.64645 14.3536ZM3.5 1L3.5 14H4.5L4.5 1H3.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <Marquee direction="right">
            {[...Array(20)].map((_, i) => {
              return <ThinkCreateGrow key={i} />;
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Hero;
