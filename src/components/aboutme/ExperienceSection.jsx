// ExperienceSection.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ExperienceSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const experience = {
        company: "ExclCloud",
        position: "Full-Stack Developer Intern",
        duration: "December 2024 – January 2025",
        achievements: [
            "Developed a complete frontend for a 1:1 Meeting page using React, enabling managers and employees to schedule and manage individual meetings efficiently",
            "Integrated the meeting module with Node.js & Express backend APIs, ensuring seamless creation, retrieval, and tracking of meetings",
            "Built a Microsoft Teams Taco Reward Bot using Azure Bot Services",
            "Integrated the bot with MS Teams to detect and process 🌮 emoji mentions used to appreciate or recognize team members",
            "Implemented a points-based reward system that converts taco reactions into employee score points",
            "Designed yearly reward logic allowing employees to accumulate points and redeem rewards at the end of the year",
            "Collaborated with the engineering team on debugging, testing, Git workflows, and improving overall full-stack development practices"
        ]
    };

    const sectionRef = useRef(null);
    const cardRef = useRef(null);
    const itemsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(cardRef.current, {
                opacity: 0,
                y: 50,
            });

            gsap.set(itemsRef.current, {
                opacity: 0,
                x: -30,
            });

            // Animate card on scroll - optimized
            gsap.to(cardRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true,
                },
            });

            // Batch animate items with stagger - better performance
            if (itemsRef.current.length > 0) {
                gsap.to(itemsRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen w-full bg-white">
            <h1 className="font-[font2] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10 sm:mt-16 md:mt-20 mb-8 sm:mb-12 md:mb-16 px-4 text-gray-900">
                Experience
            </h1>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={cardRef}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-gray-200 p-5 sm:p-6 md:p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#D3FD50]/50"
                >
                    {/* Company and Position Header */}
                    <div className="mb-6 sm:mb-8 md:mb-10 pb-6 sm:pb-8 border-b-2 border-gray-200">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="p-2 sm:p-2.5 md:p-3 bg-[#D3FD50]/20 rounded-lg sm:rounded-xl flex-shrink-0">
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#D3FD50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 font-[font2] text-gray-900 break-words">
                                    {experience.position}
                                </h2>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2 font-[font2] break-words">
                                    {experience.company}
                                </h3>
                                <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl text-gray-600 font-[font2]">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="break-words">{experience.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements List */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 font-[font2] text-gray-900 flex items-center gap-2 sm:gap-3">
                            <span className="w-0.5 sm:w-1 h-6 sm:h-8 bg-[#D3FD50] rounded-full"></span>
                            Key Achievements
                        </h4>
                        <ul className="space-y-4 sm:space-y-5">
                            {experience.achievements.map((achievement, index) => (
                                <li
                                    key={index}
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    className="flex items-start gap-3 sm:gap-4 group"
                                >
                                    <div className="mt-1 p-1 sm:p-1.5 bg-[#D3FD50]/20 rounded-full group-hover:bg-[#D3FD50]/30 transition-colors flex-shrink-0">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D3FD50] rounded-full"></div>
                                    </div>
                                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-[font2] flex-1 group-hover:text-gray-900 transition-colors">
                                        {achievement}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;

