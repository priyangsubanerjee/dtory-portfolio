import React from "react";
import TestimonialCard from "../TestimonialCard";

function Testimonials() {
  return (
    <div className="py-[150px] px-[100px] bg-black bg-[url('https://res.cloudinary.com/db9kd4qbi/image/upload/v1690166006/Dtory/portfolio/Stylized_Grid_Mask_vkcizl.png')]">
      <h1 className="text-white text-5xl font-bold text-center">
        What people say
      </h1>
      <p className="text-center mt-4 leading-6 text-[#ccc] text-sm w-[423px] mx-auto">
        Really fast responses. They finished a project with a 2 day window in
        about an hour
      </p>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="col-span-2">
          <TestimonialCard />
        </div>
        <div>
          <TestimonialCard />
        </div>
        <div>
          <TestimonialCard />
        </div>
        <div>
          <TestimonialCard />
        </div>
        <div>
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
