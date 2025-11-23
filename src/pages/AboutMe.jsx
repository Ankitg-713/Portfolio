import React, { useRef } from "react";
import img from "../assets/PortfolioImage.JPG";
import img2 from "../assets/PortfolioImage2.jpg";
import img3 from "../assets/PortfolioImage3.jpg";
import img4 from "../assets/PortfolioImage4.jpg";
import img5 from "../assets/PortfolioImage5.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SkillsSection from "../components/aboutme/SkillsSection";
import ExperienceSection from "../components/aboutme/ExperienceSection";
import EducationSection from "../components/aboutme/EducationSection";
import ContactSection from "../components/aboutme/ContactSection";

const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  // Refs for DOM elements
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);

  // Portfolio images array for scroll animation
  const imageArray = [img, img2, img3, img4, img5, img2];

  // Function to update image based on scroll progress
  const updateImageOnScroll = (progress) => {
    if (!imageRef.current) return;

    let imageIndex;
    if (progress < 1) {
      imageIndex = Math.floor(progress * imageArray.length);
    } else {
      imageIndex = imageArray.length - 1;
    }
    
    imageRef.current.src = imageArray[imageIndex];
  };

  useGSAP(() => {
    if (!imageDivRef.current || !paragraphRef.current) return;

    // Pin image and animate image changes on scroll
    // Image pins at 28% viewport height and releases at -70%
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: false,
        anticipatePin: 1,
        refreshPriority: -1,
        onUpdate: (self) => {
          updateImageOnScroll(self.progress);
        },
      },
    });
  });

  return (
    <div>
      <div className="Section1 py-1">
        {/* Pinned Image Container - Changes images on scroll */}
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:w-[15.5vw] w-[25vw] rounded-4xl lg:top-58 -top-110 left-[30vw] bg-red-500"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src={img}
            alt="Portfolio"
          />
        </div>

        {/* Content Section */}
        <div className="relative font-[font2]">
          {/* Main Heading */}
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[16vw] font-extrabold text-center leading-[17vw] uppercase">
              Full-Stack <br />
              Developer
            </h1>
          </div>

          {/* Description Paragraph */}
          <div ref={paragraphRef} className="lg:pl-[40%] p-3 mt-4">
            <p className="lg:text-4xl text-xl font-semibold font-[font2] leading-tight">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;I'm a full-stack developer with hands-on experience in
              React, Node.js, Express, and MongoDB. As a fresher, I've built
              multiple projects to understand real-world development patterns
              and best practices. I'm eager to join a team where I can apply my
              skills, learn from experienced developers, and grow into a strong
              professional.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Footer Section */}
      <ContactSection />
    </div>
  );
};

export default AboutMe;
