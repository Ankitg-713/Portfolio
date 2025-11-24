// SkillsSection.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const SkillsSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const skills = [
        { label: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { label: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { label: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { label: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { label: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { label: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { label: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { label: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { label: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { label: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { label: "Data Structures & Algorithms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { label: "RESTful APIs", logo: "https://cdn.simpleicons.org/insomnia/4000BF" },
        { label: "Responsive Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { label: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { label: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ];

    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(cardsRef.current, {
                opacity: 0,
                y: 30,
            });

            // Batch animation - use single ScrollTrigger for better performance
            if (cardsRef.current.length > 0) {
                gsap.to(cardsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    stagger: 0.02,
                    ease: "power2.out",
                    force3D: true,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen w-full py-10 sm:py-16 md:py-20">
            <h1 className="font-[font2] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10 sm:mt-16 md:mt-20 mb-8 sm:mb-12 md:mb-16 px-4">
                Technologies I Work With
            </h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.label}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <img
                                src={skill.logo}
                                alt={skill.label}
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2 sm:mb-3 md:mb-4 object-contain"
                            />
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center leading-tight break-words px-1">
                                {skill.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
