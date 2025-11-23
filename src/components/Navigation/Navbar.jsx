import React, { useContext, useReducer, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();
    const isHome = location.pathname === "/";


    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const navGreenRef = useRef(null);
    const navLine1 = useRef(null);
    const navLine2 = useRef(null);

    return (
        <div className="z-4 flex fixed top-0 w-full items-start justify-between">
            <div className="p-3">
                <div className="lg:w-45 w-28 cursor-pointer">
                    <Link to='/'>
                    <svg
                        className="w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 143.75 43.75"
                        data-asc="1"
                    >
                        <defs />
                        <g fill={isHome ? "#ffffff" : "#000000"}>
                            <g transform="translate(0, 0)">
                                <path d="M0 43.75L0 12.50L6.25 12.50L6.25 6.25L12.50 6.25L12.50 0L31.25 0L31.25 6.25L37.50 6.25L37.50 12.50L43.75 12.50L43.75 43.75L31.25 43.75L31.25 31.25L12.50 31.25L12.50 43.75L0 43.75M12.50 25L31.25 25L31.25 12.50L25 12.50L25 6.25L18.75 6.25L18.75 12.50L12.50 12.50L12.50 25ZM50 43.75L50 0L62.50 0L62.50 18.75L68.75 18.75L68.75 12.50L75 12.50L75 6.25L81.25 6.25L81.25 0L93.75 0L93.75 6.25L87.50 6.25L87.50 12.50L81.25 12.50L81.25 18.75L75 18.75L75 25L81.25 25L81.25 31.25L87.50 31.25L87.50 37.50L93.75 37.50L93.75 43.75L75 43.75L75 37.50L68.75 37.50L68.75 31.25L62.50 31.25L62.50 43.75L50 43.75ZM112.50 43.75L112.50 37.50L106.25 37.50L106.25 31.25L100 31.25L100 12.50L106.25 12.50L106.25 6.25L112.50 6.25L112.50 0L143.75 0L143.75 6.25L118.75 6.25L118.75 12.50L112.50 12.50L112.50 31.25L118.75 31.25L118.75 37.50L131.25 37.50L131.25 25L125 25L125 18.75L143.75 18.75L143.75 43.75L112.50 43.75Z" />
                            </g>
                        </g>
                    </svg></Link>
                    
                </div>
            </div>
            <div onClick={() => {
                setNavOpen(true)
            }}
                onMouseEnter={() => {
                    navGreenRef.current.style.height = "100%";
                    navLine1.current.style.backgroundColor = "black";
                    navLine2.current.style.backgroundColor = "black";
                }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = "0%";
                    navLine1.current.style.backgroundColor = "white";
                    navLine2.current.style.backgroundColor = "white";
                }}
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
};

export default Navbar;
