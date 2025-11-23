// ContactSection.jsx
import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const contactInfo = {
        email: "ankitgupta6881@gmail.com",
        linkedin: "https://www.linkedin.com/in/ankit-kr-gupta13/",
        github: "https://github.com/Ankitg-713",
        instagram: "https://www.instagram.com/ankitgupta_013/"
    };

    const [formData, setFormData] = useState({
        user_email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const formRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(contentRef.current, {
                opacity: 0,
                y: 30,
            });

            // Animate on scroll - optimized
            gsap.to(contentRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear status when user starts typing
        if (submitStatus) setSubmitStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.user_email || !formData.message) {
            setSubmitStatus({ type: "error", message: "Please fill in all fields" });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            
            const serviceId = "service_pwfh9gq";
            const templateId = "template_cpbegtj";
            const publicKey = "6v1-9LMk4ug7eLcIK";

            // Check if credentials are still placeholders (removed this check since credentials are set)

            await emailjs.send(
                serviceId,
                templateId,
                {
                    to_email: contactInfo.email,
                    from_email: formData.user_email,
                    message: formData.message,
                    reply_to: formData.user_email
                },
                publicKey
            );

            setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
            setFormData({ user_email: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            let errorMessage = "Failed to send message. Please try again or email me directly.";
            
            if (error.text) {
                if (error.text.includes("Public Key")) {
                    errorMessage = "Invalid Public Key. Please check your EmailJS Public Key in ContactSection.jsx. Get it from https://dashboard.emailjs.com/admin/account";
                } else if (error.text.includes("Service ID")) {
                    errorMessage = "Invalid Service ID. Please check your EmailJS Service ID in ContactSection.jsx.";
                } else if (error.text.includes("Template")) {
                    errorMessage = "Invalid Template ID. Please check your EmailJS Template ID in ContactSection.jsx.";
                } else {
                    errorMessage = `Error: ${error.text}`;
                }
            }
            
            setSubmitStatus({ type: "error", message: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div ref={sectionRef} className="w-full min-h-screen bg-white">
            <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-[font2] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-10 sm:mt-16 md:mt-20 mb-8 sm:mb-12 md:mb-16 text-gray-900">
                    Get In Touch
                </h1>
                
                {/* Contact Form */}
                <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
                    <form ref={formRef} onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-gray-200 p-5 sm:p-6 md:p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                        <div className="mb-6 sm:mb-8">
                            <label htmlFor="user_email" className="block text-gray-900 text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-[font2]">
                                Your Email Address
                            </label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 text-gray-900 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-[#D3FD50] focus:bg-white focus:outline-none text-base sm:text-lg font-[font2] transition-all duration-300"
                            />
                        </div>

                        <div className="mb-6 sm:mb-8">
                            <label htmlFor="message" className="block text-gray-900 text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-[font2]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 text-gray-900 rounded-lg sm:rounded-xl border-2 border-gray-200 focus:border-[#D3FD50] focus:bg-white focus:outline-none text-base sm:text-lg font-[font2] resize-none transition-all duration-300"
                            />
                        </div>

                        {submitStatus && (
                            <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl text-sm sm:text-base ${
                                submitStatus.type === "success" 
                                    ? "bg-green-50 text-green-700 border-2 border-green-200" 
                                    : "bg-red-50 text-red-700 border-2 border-red-200"
                            }`}>
                                <p className="font-[font2]">{submitStatus.message}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#D3FD50] text-gray-900 px-6 sm:px-8 py-4 sm:py-5 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl hover:bg-[#B8E044] transition-all duration-300 font-[font2] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>

                        <p className="text-center text-gray-600 text-xs sm:text-sm mt-4 sm:mt-6 font-[font2] break-words px-2">
                            Or email me directly at{" "}
                            <a 
                                href={`mailto:${contactInfo.email}`}
                                className="text-[#D3FD50] hover:text-[#B8E044] hover:underline font-semibold transition-colors break-all"
                            >
                                {contactInfo.email}
                            </a>
                        </p>
                    </form>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
                    <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-[#0077b5] hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="p-3 sm:p-4 bg-[#0077b5]/10 rounded-full group-hover:bg-[#0077b5]/20 transition-colors">
                            <svg
                                className="w-10 h-10 sm:w-12 sm:h-12 text-[#0077b5] group-hover:scale-110 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </div>
                        <span className="text-gray-900 font-semibold font-[font2] text-base sm:text-lg">LinkedIn</span>
                    </a>

                    <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-gray-900 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="p-3 sm:p-4 bg-gray-900/10 rounded-full group-hover:bg-gray-900/20 transition-colors">
                            <svg
                                className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900 group-hover:scale-110 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <span className="text-gray-900 font-semibold font-[font2] text-base sm:text-lg">GitHub</span>
                    </a>

                    <a
                        href={contactInfo.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-[#E4405F] hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="p-3 sm:p-4 bg-[#E4405F]/10 rounded-full group-hover:bg-[#E4405F]/20 transition-colors">
                            <svg
                                className="w-10 h-10 sm:w-12 sm:h-12 text-[#E4405F] group-hover:scale-110 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </div>
                        <span className="text-gray-900 font-semibold font-[font2] text-base sm:text-lg">Instagram</span>
                    </a>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-gray-200">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base font-[font2] pb-8">
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

