// import React, { useContext, useRef } from "react";
// import img2 from "../../assets/PortfolioImage2.JPG";
// import img3 from "../../assets/PortfolioImage3.JPG";
// import img4 from "../../assets/PortfolioImage4.JPG";
// import img5 from "../../assets/PortfolioImage5.JPG";
// import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { NavbarContext } from "../../context/NavContext";

// const FullscreenNav = () => {
//   const fullNavLinksRef = useRef(null);
//   const fullScreenRef = useRef(null);
//   const CrossLine1 = useRef(null);
//   const CrossLine2 = useRef(null);
//   const [navOpen, setNavOpen] = useContext(NavbarContext);

//   function slideCrossAndClose() {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         setNavOpen(false);

//         // reset position for next time
//         gsap.set(".crossbtn", { x: 120, opacity: 0 });
//       },
//     });

//     tl.to(".crossbtn", {
//       x: 120, // slide to right
//       opacity: 0,
//       duration: 0.35,
//       ease: "power2.in",
//     });
//   }

//   function gsapAnimation() {
//     const tl = gsap.timeline();
//     tl.to(".fullscreennav", {
//       display: "block",
//     });

//     tl.to(".stairing", {
//       delay: 0.1,
//       height: "100%",
//       stagger: {
//         amount: -0.1,
//       },
//     });
//     tl.to(".link", {
//       opacity: 1,
//       rotateX: 0,
//       stagger: {
//         amount: 0.2,
//       },
//     });
//     tl.to(".navlink", {
//       opacity: 1,
//     });
//     tl.fromTo(
//       ".crossbtn",
//       { x: 120, opacity: 0 }, // start off-screen right
//       { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
//       "<" // run at the same time as first animation
//     );
//   }

//   function gsapAnimationReverse() {
//     const tl = gsap.timeline();
//     tl.to(".link", {
//       opacity: 0,
//       rotateX: 90,
//       stagger: {
//         amount: 0.1,
//       },
//     });
//     tl.to(".stairing", {
//       height: 0,
//       stagger: {
//         amount: 0.2,
//       },
//     });
//     tl.to(".navlink", {
//       opacity: 0,
//     });
//     tl.to(".fullscreennav", {
//       display: "none",
//     });
//   }
//   useGSAP(
//     function () {
//       if (navOpen) {
//         document.body.style.overflow = "hidden";
//         gsapAnimation();
//       } else {
//         document.body.style.overflow = "auto";
//         gsapAnimationReverse();
//       }
//     },
//     [navOpen]
//   );

//   return (
//     <div
//       ref={fullScreenRef}
//       id="fullscreennav"
//       className="fullscreennav hidden text-white h-screen w-full absolute overflow-hidden z-50"
//     >
//       <div className="h-screen w-full fixed overflow-hidden">
//         <div className="h-full w-full fixed flex">
//           <div className="stairing h-full flex-1 bg-black"></div>
//           <div className="stairing h-full flex-1 bg-black"></div>
//           <div className="stairing h-full flex-1 bg-black"></div>
//           <div className="stairing h-full flex-1 bg-black"></div>
//           <div className="stairing h-full flex-1 bg-black"></div>
//         </div>
//       </div>
//       <div ref={fullNavLinksRef} className="relative">
//         <div className="navlink flex w-full justify-between items-start p-2">
//           <div className="lg:p-3">
//             <div className="lg:w-45 w-30">
//               <svg
//                 onClick={() => {
//                   slideCrossAndClose();
//                 }}
//                 className="w-full"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 143.75 43.75"
//                 data-asc="1"
//               >
//                 <defs />
//                 <g fill="#ffffff">
//                   <g transform="translate(0, 0)">
//                     <path d="M0 43.75L0 12.50L6.25 12.50L6.25 6.25L12.50 6.25L12.50 0L31.25 0L31.25 6.25L37.50 6.25L37.50 12.50L43.75 12.50L43.75 43.75L31.25 43.75L31.25 31.25L12.50 31.25L12.50 43.75L0 43.75M12.50 25L31.25 25L31.25 12.50L25 12.50L25 6.25L18.75 6.25L18.75 12.50L12.50 12.50L12.50 25ZM50 43.75L50 0L62.50 0L62.50 18.75L68.75 18.75L68.75 12.50L75 12.50L75 6.25L81.25 6.25L81.25 0L93.75 0L93.75 6.25L87.50 6.25L87.50 12.50L81.25 12.50L81.25 18.75L75 18.75L75 25L81.25 25L81.25 31.25L87.50 31.25L87.50 37.50L93.75 37.50L93.75 43.75L75 43.75L75 37.50L68.75 37.50L68.75 31.25L62.50 31.25L62.50 43.75L50 43.75ZM112.50 43.75L112.50 37.50L106.25 37.50L106.25 31.25L100 31.25L100 12.50L106.25 12.50L106.25 6.25L112.50 6.25L112.50 0L143.75 0L143.75 6.25L118.75 6.25L118.75 12.50L112.50 12.50L112.50 31.25L118.75 31.25L118.75 37.50L131.25 37.50L131.25 25L125 25L125 18.75L143.75 18.75L143.75 43.75L112.50 43.75Z" />
//                   </g>
//                 </g>
//               </svg>
//             </div>
//           </div>
//           <div
//             onClick={() => {
//               slideCrossAndClose();
//             }}
//             onMouseEnter={() => {
//               CrossLine1.current.style.backgroundColor = "#D3FD50";
//               CrossLine2.current.style.backgroundColor = "#D3FD50";
//             }}
//             onMouseLeave={() => {
//               CrossLine1.current.style.backgroundColor = "white";
//               CrossLine2.current.style.backgroundColor = "white";
//             }}
//             className="crossbtn h-28 w-28 relative cursor-pointer"
//           >
//             <div
//               ref={CrossLine1}
//               className="h-38 w-0.5 absolute bg-white -rotate-45 origin-top"
//             ></div>
//             <div
//               ref={CrossLine2}
//               className="h-38 w-0.5 absolute bg-white rotate-45 origin-top right-0"
//             ></div>
//           </div>
//         </div>
//         <div className="lg:py-25 py-50">
//           <Link to="/projects">
//             <div
//               onClick={() => {
//                 slideCrossAndClose();
//               }}
//               className="link origin-top relative border-t-1 border-white uppercase"
//             >
//               <h1 className="font-[font2] lg:text-[8vw] text-[14vw] text-center lg:font-bold leading-[0.8] md:pt-5 pt-3">
//                 Projects
//               </h1>
//               <div className="moveLink absolute text-black hidden lg:flex top-0 bg-[#D3FD50] gap-3">
//                 <div className="moveX w-full flex items-center gap-5">
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     Projects
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img3}
//                     alt=""
//                   />
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     Projects
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img5}
//                     alt=""
//                   />
//                 </div>
//                 <div className="moveX w-full flex items-center gap-5">
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     Projects
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img3}
//                     alt=""
//                   />
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     Projects
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img5}
//                     alt=""
//                   />
//                 </div>
//                 <div className="moveX w-full flex items-center gap-5">
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     Projects
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img3}
//                     alt=""
//                   />
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     Projects
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img5}
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </Link>
//           <Link to="/aboutme">
//             <div
//               onClick={() => {
//                 slideCrossAndClose();
//               }}
//               className="link origin-top relative border-t-1 border-white uppercase"
//             >
//               <h1 className="font-[font2] lg:text-[8vw] text-[14vw] text-center lg:font-bold leading-[0.8] md:pt-5 pt-3">
//                 About Me
//               </h1>
//               <div className="moveLink absolute text-black hidden lg:flex top-0 bg-[#D3FD50] gap-3">
//                 <div className="moveX w-full flex items-center gap-5">
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     About Me
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img3}
//                     alt=""
//                   />
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     About Me
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img5}
//                     alt=""
//                   />
//                 </div>
//                 <div className="moveX w-full flex items-center gap-5">
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     About Me
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img3}
//                     alt=""
//                   />
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     About Me
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img5}
//                     alt=""
//                   />
//                 </div>
//                 <div className="moveX w-full flex items-center gap-5">
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     About Me
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img3}
//                     alt=""
//                   />
//                   <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                     About Me
//                   </h2>
//                   <img
//                     className="h-22 rounded-full shrink-0 w-70 object-cover"
//                     src={img5}
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//           </Link>
//           <div className="link origin-top relative border-y-1 border-white uppercase">
//             <h1 className="font-[font2] lg:text-[8vw] text-[14vw] text-center lg:font-bold leading-[0.8] md:pt-5 pt-3">
//               Contact
//             </h1>
//             <div className="moveLink absolute text-black hidden lg:flex top-0 bg-[#D3FD50] gap-3">
//               <div className="moveX w-full flex items-center gap-5">
//                 <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                   Contact
//                 </h2>
//                 <img
//                   className="h-22 rounded-full shrink-0 w-70 object-cover"
//                   src={img3}
//                   alt=""
//                 />
//                 <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                   Contact
//                 </h2>
//                 <img
//                   className="h-22 rounded-full shrink-0 w-70 object-cover"
//                   src={img5}
//                   alt=""
//                 />
//               </div>
//               <div className="moveX w-full flex items-center gap-5">
//                 <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                   Contact
//                 </h2>
//                 <img
//                   className="h-22 rounded-full shrink-0 w-70 object-cover"
//                   src={img3}
//                   alt=""
//                 />
//                 <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                   Contact
//                 </h2>
//                 <img
//                   className="h-22 rounded-full shrink-0 w-70 object-cover"
//                   src={img5}
//                   alt=""
//                 />
//               </div>
//               <div className="moveX w-full flex items-center gap-5">
//                 <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                   Contact
//                 </h2>
//                 <img
//                   className="h-22 rounded-full shrink-0 w-70 object-cover"
//                   src={img3}
//                   alt=""
//                 />
//                 <h2 className="whitespace-nowrap font-[font2] text-[8vw] text-center font-bold leading-[0.8] pt-5">
//                   Contact
//                 </h2>
//                 <img
//                   className="h-22 rounded-full shrink-0 w-70 object-cover"
//                   src={img5}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullscreenNav;

// FullscreenNav.jsx
import React, { useContext, useRef } from "react";
import img3 from "../../assets/PortfolioImage3.jpg";
import img5 from "../../assets/PortfolioImage5.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";
import NavLinkItem from "./NavLinkItem";

const FullscreenNav = () => {
  const fullScreenRef = useRef(null);
  const CrossLine1 = useRef(null);
  const CrossLine2 = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  const images = [img3, img5];

  // -----------------------------
  // CLEAN GSAP FUNCTIONS
  // -----------------------------

  const slideCrossAndClose = () => {
    gsap.timeline({
      onComplete: () => {
        setNavOpen(false);
        gsap.set(".crossbtn", { x: 120, opacity: 0 });
      },
    }).to(".crossbtn", {
      x: 120,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
    });
  };

  const gsapAnimation = () => {
    const tl = gsap.timeline();

    tl.set(".fullscreennav", { display: "block" })
      .to(".stairing", {
        delay: 0.1,
        height: "100%",
        stagger: -0.1,
      })
      .to(".link", {
        opacity: 1,
        rotateX: 0,
        stagger: 0.2,
      })
      .to(".navlink", { opacity: 1 })
      .fromTo(
        ".crossbtn",
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
        "<"
      );
  };

  const gsapAnimationReverse = () => {
    const tl = gsap.timeline();

    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: 0.1,
    })
      .to(".stairing", {
        height: 0,
        stagger: 0.2,
      })
      .to(".navlink", { opacity: 0 })
      .set(".fullscreennav", { display: "none" });
  };

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
    [navOpen]
  );

  // -----------------------------
  // RETURN
  // -----------------------------
  return (
    <div
      ref={fullScreenRef}
      className="fullscreennav hidden text-white h-screen w-full absolute overflow-hidden z-50"
    >
      {/* background stairs */}
      <div className="h-screen w-full fixed overflow-hidden">
        <div className="h-full w-full fixed flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stairing h-full flex-1 bg-black"></div>
          ))}
        </div>
      </div>

      {/* nav content */}
      <div className="relative">
        <div className="navlink flex w-full justify-between items-start p-2">
          {/* logo */}
          <div className="lg:p-3 lg:w-45 w-30">
            <svg
              onClick={slideCrossAndClose}
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 143.75 43.75"
            >
              <path d="M0 43.75L0 12.50L6.25 12.50L6.25 6.25L12.50 6.25L12.50 0L31.25 0L31.25 6.25L37.50 6.25L37.50 12.50L43.75 12.50L43.75 43.75L31.25 43.75L31.25 31.25L12.50 31.25L12.50 43.75L0 43.75M12.50 25L31.25 25L31.25 12.50L25 12.50L25 6.25L18.75 6.25L18.75 12.50L12.50 12.50L12.50 25ZM50 43.75L50 0L62.50 0L62.50 18.75L68.75 18.75L68.75 12.50L75 12.50L75 6.25L81.25 6.25L81.25 0L93.75 0L93.75 6.25L87.50 6.25L87.50 12.50L81.25 12.50L81.25 18.75L75 18.75L75 25L81.25 25L81.25 31.25L87.50 31.25L87.50 37.50L93.75 37.50L93.75 43.75L75 43.75L75 37.50L68.75 37.50L68.75 31.25L62.50 31.25L62.50 43.75L50 43.75ZM112.50 43.75L112.50 37.50L106.25 37.50L106.25 31.25L100 31.25L100 12.50L106.25 12.50L106.25 6.25L112.50 6.25L112.50 0L143.75 0L143.75 6.25L118.75 6.25L118.75 12.50L112.50 12.50L112.50 31.25L118.75 31.25L118.75 37.50L131.25 37.50L131.25 25L125 25L125 18.75L143.75 18.75L143.75 43.75L112.50 43.75Z" />

            </svg>
          </div>

          {/* cross button */}
          <div
            onClick={slideCrossAndClose}
            className="crossbtn h-28 w-28 relative cursor-pointer"
            onMouseEnter={() => {
              CrossLine1.current.style.background = "#D3FD50";
              CrossLine2.current.style.background = "#D3FD50";
            }}
            onMouseLeave={() => {
              CrossLine1.current.style.background = "white";
              CrossLine2.current.style.background = "white";
            }}
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

        {/* main links */}
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

          {/* Contact */}
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
};

export default FullscreenNav;
