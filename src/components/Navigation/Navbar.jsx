import React, { useContext, useRef, useCallback, memo } from "react";
import { NavbarContext } from "../../context/NavContext";
import { useLocation, Link } from "react-router-dom";

const Navbar = memo(() => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navGreenRef = useRef(null);
    const navLine1 = useRef(null);
    const navLine2 = useRef(null);
    const logoSvgRef = useRef(null);

    const handleMenuClick = useCallback(() => {
        setNavOpen(true);
    }, [setNavOpen]);

    const handleMouseEnter = useCallback(() => {
        if (navGreenRef.current) navGreenRef.current.style.height = "100%";
        if (navLine1.current) navLine1.current.style.backgroundColor = "black";
        if (navLine2.current) navLine2.current.style.backgroundColor = "black";
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (navGreenRef.current) navGreenRef.current.style.height = "0%";
        if (navLine1.current) navLine1.current.style.backgroundColor = "white";
        if (navLine2.current) navLine2.current.style.backgroundColor = "white";
    }, []);

    const handleLogoEnter = useCallback(() => {
        if (logoSvgRef.current) {
            logoSvgRef.current.setAttribute('fill', '#D3FD50');
        }
    }, []);

    const handleLogoLeave = useCallback(() => {
        if (logoSvgRef.current) {
            logoSvgRef.current.setAttribute('fill', '#ffffff');
        }
    }, []);

    return (
        <div className="z-4 flex fixed top-0 w-full items-start justify-between">
            <div className="p-3">
                {isHome ? (
                    <div 
                        className="lg:w-45 w-28 cursor-pointer"
                        onMouseEnter={handleLogoEnter}
                        onMouseLeave={handleLogoLeave}
                    >
                        {/* <Link to='/'>
                            <svg
                                className="w-full transition-all duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 143.75 43.75"
                                data-asc="1"
                            >
                                <defs />
                                <g ref={logoSvgRef} fill="#ffffff">
                                    <g transform="translate(0, 0)">
                                        <path d="M0 43.75L0 12.50L6.25 12.50L6.25 6.25L12.50 6.25L12.50 0L31.25 0L31.25 6.25L37.50 6.25L37.50 12.50L43.75 12.50L43.75 43.75L31.25 43.75L31.25 31.25L12.50 31.25L12.50 43.75L0 43.75M12.50 25L31.25 25L31.25 12.50L25 12.50L25 6.25L18.75 6.25L18.75 12.50L12.50 12.50L12.50 25ZM50 43.75L50 0L62.50 0L62.50 18.75L68.75 18.75L68.75 12.50L75 12.50L75 6.25L81.25 6.25L81.25 0L93.75 0L93.75 6.25L87.50 6.25L87.50 12.50L81.25 12.50L81.25 18.75L75 18.75L75 25L81.25 25L81.25 31.25L87.50 31.25L87.50 37.50L93.75 37.50L93.75 43.75L75 43.75L75 37.50L68.75 37.50L68.75 31.25L62.50 31.25L62.50 43.75L50 43.75ZM112.50 43.75L112.50 37.50L106.25 37.50L106.25 31.25L100 31.25L100 12.50L106.25 12.50L106.25 6.25L112.50 6.25L112.50 0L143.75 0L143.75 6.25L118.75 6.25L118.75 12.50L112.50 12.50L112.50 31.25L118.75 31.25L118.75 37.50L131.25 37.50L131.25 25L125 25L125 18.75L143.75 18.75L143.75 43.75L112.50 43.75Z" />
                                    </g>
                                </g>
                            </svg>
                        </Link> */}
                    </div>
                ) : (
                    <Link to='/'>
                        <div 
                            className="lg:w-12 w-10 lg:h-12 h-10 border-2 border-black hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer group"
                        >
                            <svg 
                                className="w-6 h-6 text-black group-hover:text-[#D3FD50] transition-colors duration-300" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                    </Link>
                )}
            </div>
            <div 
                onClick={handleMenuClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative lg:h-12.5 h-11 lg:w-[15.5vw] md:w-[35vw] w-[50vw] bg-black"
            >
                <div
                    ref={navGreenRef}
                    className="absolute top-0 bg-[#D3FD50] transition-all duration-75 h-0 w-full"
                ></div>
                <div className="relative h-full px-8 flex flex-col justify-center items-end gap-1">
                    <div
                        ref={navLine1}
                        className="bg-white h-0.5 w-13"
                    ></div>
                    <div
                        ref={navLine2}
                        className="bg-white h-0.5 w-7 "
                    ></div>
                </div>

            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
