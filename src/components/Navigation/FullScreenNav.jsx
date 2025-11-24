import React, { useContext, useRef, useCallback, useMemo, memo } from "react";
import img3 from "../../assets/PortfolioImage3.jpg";
import img5 from "../../assets/PortfolioImage5.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";
import NavLinkItem from "./NavLinkItem";

const FullscreenNav = memo(() => {
  const fullScreenRef = useRef(null);
  const CrossLine1 = useRef(null);
  const CrossLine2 = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  const images = useMemo(() => [img3, img5], []);

  const slideCrossAndClose = useCallback(() => {
    gsap.timeline({
      onComplete: () => {
        setNavOpen(false);
        gsap.set(".crossbtn", { x: 120, opacity: 0 });
      },
    }).to(".crossbtn", {
      x: 120,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      force3D: true,
    });
  }, [setNavOpen]);

  const gsapAnimation = useCallback(() => {
    const tl = gsap.timeline({ defaults: { force3D: true } });

    tl.set(".fullscreennav", { display: "block" })
      .set(".stairing", { scaleY: 0, transformOrigin: "top" })
      .to(".stairing", {
        scaleY: 1,
        duration: 0.4,
        stagger: -0.08,
        ease: "power2.out",
        force3D: true,
      })
      .to(".link", {
        opacity: 1,
        rotateX: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
        force3D: true,
      }, "-=0.2")
      .to(".navlink", { 
        opacity: 1,
        duration: 0.2,
        ease: "power1.out"
      }, "-=0.1")
      .fromTo(
        ".crossbtn",
        { x: 120, opacity: 0, force3D: true },
        { x: 0, opacity: 1, duration: 0.25, ease: "power2.out", force3D: true },
        "-=0.1"
      );
  }, []);

  const gsapAnimationReverse = useCallback(() => {
    const tl = gsap.timeline({ defaults: { force3D: true } });

    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in",
      force3D: true,
    })
      .to(".stairing", {
        scaleY: 0,
        duration: 0.3,
        stagger: -0.08,
        ease: "power2.in",
        force3D: true,
      }, "-=0.1")
      .to(".navlink", { 
        opacity: 0,
        duration: 0.15,
        ease: "power1.in"
      }, "-=0.1")
      .set(".fullscreennav", { display: "none" });
  }, []);

  const handleCrossEnter = useCallback(() => {
    if (CrossLine1.current) CrossLine1.current.style.background = "#D3FD50";
    if (CrossLine2.current) CrossLine2.current.style.background = "#D3FD50";
  }, []);

  const handleCrossLeave = useCallback(() => {
    if (CrossLine1.current) CrossLine1.current.style.background = "white";
    if (CrossLine2.current) CrossLine2.current.style.background = "white";
  }, []);

  useGSAP(
    () => {
      if (navOpen) {
        document.body.style.overflow = "hidden";
        gsapAnimation();
      } else {
        document.body.style.overflow = "auto";
        gsapAnimationReverse();
      }
    },
    [navOpen, gsapAnimation, gsapAnimationReverse]
  );

  return (
    <div
      ref={fullScreenRef}
      className="fullscreennav hidden text-white h-screen w-full absolute overflow-hidden z-50"
    >
      <div className="h-screen w-full fixed overflow-hidden">
        <div className="h-full w-full fixed flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stairing h-full flex-1 bg-black" style={{ willChange: 'transform' }}></div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="navlink flex w-full justify-between items-start p-2">
          <div className="lg:p-3 lg:w-45 w-30"></div>

          <div
            onClick={slideCrossAndClose}
            className="crossbtn h-28 w-28 relative cursor-pointer"
            onMouseEnter={handleCrossEnter}
            onMouseLeave={handleCrossLeave}
          >
            <div
              ref={CrossLine1}
              className="h-38 w-0.5 absolute bg-white -rotate-45 origin-top"
            />
            <div
              ref={CrossLine2}
              className="h-38 w-0.5 absolute bg-white rotate-45 origin-top right-0"
            />
          </div>
        </div>

        <div className="lg:py-25 py-50">
          <NavLinkItem
            to="/projects"
            label="Projects"
            images={images}
            onClick={slideCrossAndClose}
            border="border-t-1 border-white"
          />

          <NavLinkItem
            to="/aboutme"
            label="About Me"
            images={images}
            onClick={slideCrossAndClose}
            border="border-t-1 border-white"
          />

          <NavLinkItem
            to="/contact"
            label="Contact"
            images={images}
            onClick={slideCrossAndClose}
            border="border-y-1 border-white"
          />
        </div>
      </div>
    </div>
  );
});

FullscreenNav.displayName = 'FullscreenNav';

export default FullscreenNav;
