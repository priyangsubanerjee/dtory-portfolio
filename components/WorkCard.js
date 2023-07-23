import React from "react";

function WorkCard() {
  return (
    <div className="text-white max-w-[500px]">
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1690134783/Dtory/portfolio/muse_thrfjd.png"
        className="h-[250px] w-full object-cover rounded-md"
        alt=""
      />
      <h2 className="font-semibold mt-5 text-xl">Muse Mind</h2>
      <p className="text-xs leading-5 mt-2 text-[#ccc]">
        This is a branding for a blog website - Musemind. The logo has two ‘M’
        and and bookmark in the middle which makes it so unique.
      </p>
    </div>
  );
}

export default WorkCard;
