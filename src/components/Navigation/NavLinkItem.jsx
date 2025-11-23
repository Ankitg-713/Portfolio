// NavLinkItem.jsx
import React from "react";
import { Link } from "react-router-dom";
import MoveRow from "./MoveRow";

const NavLinkItem = ({ to, label, onClick, images, border }) => {
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`link origin-top relative uppercase ${border}`}
      >
        <h1 className="font-[font2] lg:text-[8vw] text-[14vw] text-center font-bold leading-[0.8] pt-5">
          {label}
        </h1>

        <div className="moveLink absolute text-black hidden lg:flex top-0 bg-[#D3FD50] gap-3">
          <MoveRow label={label} images={images} />
          <MoveRow label={label} images={images} />
          <MoveRow label={label} images={images} />
        </div>
      </div>
    </Link>
  );
};

export default NavLinkItem;
