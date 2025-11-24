import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline({ defaults: { force3D: true } });

      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.set(".stair", { scaleY: 0, transformOrigin: "top" });
      tl.to(".stair", {
        scaleY: 1,
        duration: 0.3,
        stagger: {
          amount: -0.15,
        },
        ease: "power2.out",
        force3D: true,
      });
      tl.to(".stair", {
        y: "100%",
        duration: 0.4,
        stagger: {
          amount: -0.15,
        },
        ease: "power2.in",
        force3D: true,
      });
      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.set(".stair", {
        y: "0%",
        scaleY: 1,
      });
      gsap.from(pageRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.7,
        ease: "power2.out",
        force3D: true,
      });
    },
    [currentPath]
  );

  return (
    <div className="">
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0 ">
        <div className="h-full w-full fixed flex">
          <div className="stair h-full w-1/5 bg-black" style={{ willChange: 'transform' }}></div>
          <div className="stair h-full w-1/5 bg-black" style={{ willChange: 'transform' }}></div>
          <div className="stair h-full w-1/5 bg-black" style={{ willChange: 'transform' }}></div>
          <div className="stair h-full w-1/5 bg-black" style={{ willChange: 'transform' }}></div>
          <div className="stair h-full w-1/5 bg-black" style={{ willChange: 'transform' }}></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  );
};

export default Stairs;
