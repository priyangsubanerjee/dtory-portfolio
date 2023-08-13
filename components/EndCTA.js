/* eslint-disable @next/next/no-img-element */
import React from "react";

function EndCTA() {
  return (
    <div className="h-[450px] px-[100px] py-[100px] bg-gradient-to-b from-[#1F31C2] to-[#171A33] relative">
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690166751/Dtory/portfolio/Dtory_Studios-illus_yg1kok.webp"
        className="absolute -left-[5%] top-1/2 -translate-y-1/2 h-[300px]"
        alt=""
      />
      <h1 className="text-center text-white font-[1000] text-4xl w-[800px] mx-auto leading-[1.4]">
        NO ONE CARES ? We do and the ones who didn&apos;t will from now {";)"}
      </h1>
      <div className="flex items-center mt-10 justify-center">
        <button className="bg-white text-black px-6 py-3">Contact now</button>
      </div>

      <div>
        <svg
          className="absolute bottom-0 left-[37%] transform -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="227"
          height="105"
          viewBox="0 0 227 105"
          fill="none"
        >
          <path
            d="M226.407 2.63917C226.484 2.09226 226.103 1.5866 225.556 1.50973L216.644 0.257174C216.097 0.180311 215.591 0.561359 215.514 1.10827C215.437 1.65518 215.818 2.16085 216.365 2.23771L224.288 3.35109L223.174 11.2732C223.097 11.8201 223.478 12.3258 224.025 12.4027C224.572 12.4795 225.078 12.0985 225.155 11.5516L226.407 2.63917ZM224.815 1.70136L0.39859 170.811L1.60222 172.409L226.019 3.29864L224.815 1.70136Z"
            fill="#978DFF"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-[37%] transform translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="227"
          height="105"
          viewBox="0 0 227 105"
          fill="none"
        >
          <path
            d="M0.0101483 2.63853C-0.0667223 2.09161 0.314326 1.58595 0.861243 1.50909L9.77365 0.256525C10.3206 0.179667 10.8262 0.560705 10.9031 1.10762C10.9799 1.65452 10.5989 2.16019 10.052 2.23706L2.12985 3.35044L3.24324 11.2726C3.32008 11.8195 2.93903 12.3252 2.39214 12.402C1.84522 12.4789 1.33957 12.0979 1.2627 11.5509L0.0101483 2.63853ZM224.815 172.408L0.39859 3.29798L1.60222 1.70071L226.019 170.811L224.815 172.408Z"
            fill="#978DFF"
          />
        </svg>
      </div>
    </div>
  );
}

export default EndCTA;
