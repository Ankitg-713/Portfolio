import React, { memo } from "react";
import { Link } from "react-router-dom";

const NavLinkItem = memo(({ to, label, onClick, images, border }) => {
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`link origin-top relative uppercase ${border} group`}
        style={{ willChange: 'transform, opacity' }}
      >
        <h1 className="font-[font2] lg:text-[8vw] text-[14vw] text-center font-bold leading-[0.8] pt-5 text-white group-hover:text-[#D3FD50] transition-colors duration-300">
          {label}
        </h1>

        <div className="moveLink absolute text-black hidden lg:flex top-0 bg-[#D3FD50] items-center justify-center gap-6 px-8">
          {images.map((img, i) => (
            <img
              key={i}
              className="h-20 rounded-full w-20 object-cover"
              src={img}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </Link>
  );
});

NavLinkItem.displayName = 'NavLinkItem';

export default NavLinkItem;
