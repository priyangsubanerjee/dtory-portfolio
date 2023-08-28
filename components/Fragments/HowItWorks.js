/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";

function HowItWorks() {
  return (
    <>
      <div className="flex flex-col gap-16 items-center text-white justify-between  px-[100px]  min-h-[700px] bg-[#101010] py-20">
        <main className="flex flex-col items-center   gap-4">
            <div className="text-4xl lg:text-6xl font-semibold text-white">How it works</div>
            <div className="max-w-[450px] font-normal text-sm lg:text-lg   text-light text-center mx-auto">We will add a subheader here which will pull users like a fucking magnet</div>
        </main>
        <main className="max-w-[1500px] w-[90vw] grid grid-cols-1 lg:grid-cols-3 items-center lg:items-start justify-items-center gap-12 lg:gap-8 xl:gap-12">
            <div className="flex flex-col max-w-[300px] xl:max-w-[280px] min-h-[200px] lg:max-w-[280px] items-center gap-2">
                <span className="block text-lg xl:text-xl font-semibold h-8">Unlimited Creativity</span>
                <span className="block text-sm xl:text-[14px] 2xl:text-base text-light text-center">Contact us with your requirements and begin your journey with us. </span>
            </div>
            <div className="flex flex-col max-w-[300px] xl:max-w-[320px] min-h-[200px] lg:max-w-[320px] items-center gap-2">
                <span className="block text-lg xl:text-xl font-semibold h-8">Fast...omg...so fast?!?</span>
                <span className="block text-sm xl:text-[14px] 2xl:text-base text-light text-center">Experience the speed of light with our swift deliveries, often as quick as 24-48 hours, tailored to your project's needs </span>
            </div>
            <div className="flex flex-col items-center max-w-[300px] min-h-[200px] lg:max-w-[310px] xl:max-w-[330px] gap-2">
                <span className="block text-lg xl:text-xl font-semibold h-8">100% Satisfaction Rate</span>
                <span className="block text-sm xl:text-[14px] 2xl:text-base text-light text-center">We are consistent with a 100% satisfaction rate. Your happiness is our priority. </span>
            </div>
        </main>
      </div>
    </>
  );
}

export default HowItWorks;
