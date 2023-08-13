import React from "react";
import TestimonialCard from "../TestimonialCard";

function Testimonials() {
  const testimonials = [
    {
      text: "The team at Dtory does a great job at a great price. I have already had two logos, a front-end design and a promotional video created by Dtory. At the moment, we are in the process of implementing another project together. The team always keeps me as a customer up to date with the latest developments of the commissioned service and also asks the right questions at the right time. Congratulations on your new website and on your growth. You are doing a great job. I really enjoy working with you. Keep it up!",
      name: "Dennis Kö",
      post: "Founder - Hoot",
    },
    {
      text: "Very impressive work guys! Working with @Bracie for the past week has been amazing and we were so impressed with her patience and quality of work. We'll happily come back anytime soon.",
      name: "Emizon",
      post: "Rocketbird Team",
    },
    {
      text: "Subhankar from Dtory really did an amazing job! I had a very short deadline and he immediately commited to it and came up with a real good design solution. beautifully executed! Thanks a lot!",
      name: "Joan Boixadós",
      post: "",
    },
    {
      text: `Amazing working with the team "Dtory",They edited the logo until I was satisfied and are very helpful and patient.Glad I chose them for my brand.Looking forward working with the team in future.`,
      name: "JackPeter",
      post: "",
    },
    {
      text: `Fast, affordable work. I'm a difficult client who demanded several reworks and this wasn't an issue. Professional service with excellent quality`,
      name: "Bobinstein",
      post: "",
    },
  ];

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
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className={`${index == 0 && "col-span-2"}`}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
