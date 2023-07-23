import React from "react";
import WorkCard from "../WorkCard";

function Portfolio() {
  return (
    <div className="h-[900px] py-[110px] bg-black">
      <h1 className="text-white text-4xl font-bold  px-[100px]">
        Portfolio : Our Works
      </h1>
      <div className="flex items-center space-x-9 mt-16 pl-[100px]">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}

export default Portfolio;
