import React from "react";

function Footer() {
  return (
    <div className="bg-[#171A33] h-[475px] px-[100px] py-[100px]">
      <div className="flex w-full">
        <div className="w-1/2 text-white">
          <h1 className="text-5xl font-bold">Lets Talk.</h1>
          <p className="mt-5">hello@dtory.in</p>
          <p className="mt-2">
            <span className="font-semibold">Contact</span>: +91
            9002666920/8642014038
          </p>
        </div>
        <div className="w-1/2 flex justify-end space-x-20 text-white">
          <ul className="space-y-4">
            <li>Dribble</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Discord</li>
            <li>Facebook</li>
          </ul>
          <ul className="space-y-4">
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
