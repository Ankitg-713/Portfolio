// MoveRow.jsx
import React from "react";

const MoveRow = ({ label, images }) => {
  return (
    <div className="moveX w-full flex items-center gap-5">
      <h2 className="whitespace-nowrap font-[font2] text-[8vw] font-bold leading-[0.8] pt-5">
        {label}
      </h2>

      {images.map((img, i) => (
        <img
          key={i}
          className="h-22 rounded-full shrink-0 w-70 object-cover"
          src={img}
          alt=""
        />
      ))}

      <h2 className="whitespace-nowrap font-[font2] text-[8vw] font-bold leading-[0.8] pt-5">
        {label}
      </h2>
    </div>
  );
};

export default MoveRow;
