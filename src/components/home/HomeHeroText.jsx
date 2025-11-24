import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font4] text-center pt-5 px-3 lg:mt-0 md:mt-[35vh] mt-[20vh] uppercase font-extrabold">
      <div className="lg:text-[7vw] text-[9vw] lg:leading-[6vw] leading-[9vw] justify-center flex items-center">
        Full-Stack
      </div>
      <div className="lg:text-[7vw] text-[9vw] lg:leading-[6vw] leading-[9vw] justify-center flex items-center">
        Devel
        <div className="h-[7vw] lg:w-[12vw] w-[13vw] rounded-full overflow-hidden lg:mb-6 mb-3">
          <Video />
        </div>
        per
      </div>

      <div className="lg:text-[7vw] text-[9vw] lg:leading-[6vw] leading-[9vw] justify-center flex items-center">
        crafting clean, scalable solutions
      </div>
    </div>
  );
};

export default HomeHeroText;
