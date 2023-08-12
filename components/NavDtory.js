import React, { useEffect, useState } from "react";

function NavDtory() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    // increase height to 446px, 1px per 10ms

    let interval = setInterval(() => {
      setHeight((prev) => {
        if (prev < 446) {
          return prev + 4;
        }
        clearInterval(interval);
        return prev;
      });
    }, 0.1);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex justify-center pt-16 px-[100px] h-full">
      <div
        style={{
          height: `${height}px`,
        }}
        className="absolute top-0 left-[24%] w-[1px] bg-[#978DFF]"
      ></div>
      <div className="absolute top-0 left-[44%] w-[1px] bg-[#978DFF]"></div>
      <div className="absolute top-0 left-[80%] w-[1px] bg-[#978DFF]"></div>
      <ul className="space-y-9 text-3xl font-thin">
        <li>About us</li>
        <li>Career</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default NavDtory;
