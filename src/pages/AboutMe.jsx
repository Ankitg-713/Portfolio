import React from "react";
import img2 from "../assets/PortfolioImage2.jpg";
import SkillsSection from "../components/aboutme/SkillsSection";
import ExperienceSection from "../components/aboutme/ExperienceSection";
import EducationSection from "../components/aboutme/EducationSection";
import ContactSection from "../components/aboutme/ContactSection";

const AboutMe = () => {

  return (
    <div>
      <div className="Section1 py-1 relative">
        {/* Static Image Container */}
        <div className="absolute overflow-hidden lg:h-[20vw] h-[200px] lg:w-[15.5vw] w-[150px] rounded-4xl lg:top-58 top-20 left-[50%] -translate-x-1/2 lg:left-[30vw] lg:translate-x-0 bg-red-500 z-0">
          <img
            className="h-full w-full object-cover"
            src={img2}
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
          <div className="lg:pl-[40%] p-3 mt-4">
            <p className="lg:text-4xl text-xl lg-font-semibold font-[font2] leading-tight">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              I'm a full-stack developer with hands-on experience in
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