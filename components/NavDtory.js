import React from "react";

function NavDtory() {
  return (
    <div className="flex justify-center pt-16 px-[100px] h-full">
      <div className="absolute top-0 left-[24%] h-[446px] w-[1px] bg-[#978DFF]"></div>
      <div className="absolute top-0 left-[44%] h-[446px] w-[1px] bg-[#978DFF]"></div>
      <div className="absolute top-0 left-[80%] h-[446px] w-[1px] bg-[#978DFF]"></div>
      <ul className="space-y-9 text-3xl font-thin">
        <li>About us</li>
        <li>Career</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default NavDtory;
