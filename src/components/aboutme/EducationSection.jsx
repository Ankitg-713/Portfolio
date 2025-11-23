// EducationSection.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const EducationSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const education = [
        {
            degree: "Master of Computer Applications (MCA)",
            duration: "2023 – 2025",
            description: "Focused on full-stack web development, data structures, software engineering, and cloud technologies. Built multiple real-world projects using React, Node.js, Express, MongoDB, Python, and Azure services."
        },
        {
            degree: "Bachelor of Science in Information Technology (BSc IT)",
            duration: "2020 – 2023",
            description: "Developed strong fundamentals in programming, databases, networking, and system design. Worked on academic projects that improved practical coding skills, analytical thinking, and understanding of core IT concepts."
        }
    ];

    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(cardsRef.current, {
                opacity: 0,
                y: 50,
            });

            // Batch animate cards - better performance
            if (cardsRef.current.length > 0) {
                gsap.to(cardsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
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
        <div ref={sectionRef} className="min-h-screen w-full py-10 sm:py-16 md:py-20 bg-white">
            <h1 className="font-[font2] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10 sm:mt-16 md:mt-20 mb-8 sm:mb-12 md:mb-16 px-4 text-gray-900">
                Education
            </h1>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-gray-200 p-5 sm:p-6 md:p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#D3FD50]/50 hover:scale-[1.01]"
                    >
                        {/* Degree and Duration */}
                        <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-200">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 sm:p-2.5 md:p-3 bg-[#D3FD50]/20 rounded-lg sm:rounded-xl flex-shrink-0">
                                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#D3FD50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9m0-9l-6.16-3.422a12.083 12.083 0 01.665-6.479L12 14m0 0l6.16-3.422a12.083 12.083 0 00.665-6.479L12 14m0 0V5" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 font-[font2] text-gray-900 break-words">
                                        {edu.degree}
                                    </h2>
                                    <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl text-gray-600 font-[font2]">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="break-words">{edu.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-[font2] pl-0 sm:pl-10 md:pl-14">
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationSection;

