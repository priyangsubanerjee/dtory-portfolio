/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import React from "react";

function Portfolio() {
  const images = [
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548472/portfolio/Musemind_logo-1_w2wkud.png",
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548472/portfolio/Grillz_logo_xrllmm.png",
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548471/portfolio/Musemind_logo-0_ghy9li.png",
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548472/portfolio/Musemind_logo-2_vllp05.png",
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548471/portfolio/Musemind_logo-4_h1v3lb.png",
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548471/portfolio/Musemind_logo-5_diieog.png",
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548471/portfolio/Musemind_logo-3_ptaau3.png",
    "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1694548471/portfolio/Musemind_logo_wt5vn3.png",
  ];

  return (
    <div className="bg-[#101010] min-h-screen font-mona-sans">
      <img
        src="/images/portfolioBlur.png"
        className="fixed top-0 -translate-y-[950px]"
        alt=""
      />

      <div className="pt-32 flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold">Our Portfolio</h1>
        <p className="text-[#CCCCCC] text-base mt-5 font-light">
          Get to Know the Faces Behind Our Success!
        </p>
        <div className="mt-16 flex items-center space-x-5 font-medium">
          <button className="bg-[#574AE2] text-white h-12 px-10 rounded-md">
            Branding
          </button>
          <button className="border-[1.5px] border-[#777777] text-[#777777] h-12 px-10 rounded-md">
            UI/UX Design
          </button>
          <button className="border-[1.5px] border-[#777777] text-[#777777] h-12 px-10 rounded-md">
            Graphic Design
          </button>
          <button className="border-[1.5px] border-[#777777] text-[#777777] h-12 px-10 rounded-md">
            App Design
          </button>
          <button className="border-[1.5px] border-[#777777] text-[#777777] h-12 px-10 rounded-md">
            Video Editing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-20 px-28">
        {images.map((image, index) => (
          <img
            className="grayscale hover:grayscale-0 transition-all hover:scale-105 duration-700 brightness-50 hover:brightness-100"
            key={index}
            src={image}
            alt=""
          />
        ))}
      </div>
      <div className="h-36"></div>
      <Footer />
    </div>
  );
}

export default Portfolio;
