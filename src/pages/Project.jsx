import React, { useMemo } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import img1 from "../assets/Project1.jpg";
import img2 from "../assets/Project2.jpg";
import img3 from "../assets/Project3.jpg";
import img4 from "../assets/Upcoming2.jpg";
import img5 from "../assets/Project4.jpg";

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Project = () => {

  const projects = useMemo(() => [
    {
      image1: img1,
      project1: {
        id: 1,
        title: "AttendAI",
        description: [
          "AttendAI is an intelligent attendance management system that leverages facial recognition and GPS verification to enable secure, automated attendance tracking for educational institutions.",
          "The system uses AI-powered biometric verification to eliminate proxy attendance fraud, ensuring that only registered students can mark their attendance. With GPS verification, students must be within 50 meters of the class location to mark attendance, ensuring physical presence.",
          "The platform features role-based dashboards for Admin, Teacher, and Student, each with specific functionalities tailored to their needs. Students can register with face capture, mark attendance with real-time verification, and view subject-wise attendance analytics with beautiful visualizations."
        ],
        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "face-api.js",
          "TensorFlow.js",
          "JWT",
          "Tailwind CSS",
          "Chart.js"
        ],
        features: [
          "AI-powered facial recognition using face-api.js",
          "GPS verification with 50-meter geofencing",
          "Time validation for scheduled class hours",
          "Role-based access control (Admin, Teacher, Student)",
          "Real-time attendance analytics with doughnut charts",
          "Subject-wise attendance tracking",
          "Secure JWT authentication"
        ],
        githubLink: "https://github.com/Ankitg-713/AttendAI---Smart-Attendance-System-Using-Face-Recognition-and-Geolocation",
        liveLink: null
      },
      image2: img3,
      project2: {
        id: 2,
        title: "AI Resume Builder",
        description: [
          "AI Resume Builder is an innovative web application that empowers users to create professional resumes effortlessly using AI-powered assistance. The platform offers multiple resume templates to choose from, allowing users to customize their resumes according to their preferences and industry standards.",
          "The application integrates Google Gemini AI to help users write and build their resumes intelligently. Users can leverage AI assistance to generate compelling content, optimize their resume sections, and ensure their resumes stand out to potential employers.",
          "Built with the MERN stack, the application provides a seamless user experience with secure authentication and authorization. Users can save their resumes, edit them anytime, and download them in various formats."
        ],
        technologies: [
          "MongoDB",
          "Express",
          "React",
          "Node.js",
          "Google Gemini AI",
          "JWT",
          "Authentication",
          "Authorization"
        ],
        features: [
          "Multiple resume templates to choose from",
          "AI-powered resume writing with Google Gemini",
          "Secure user authentication and authorization",
          "Save and edit resumes anytime",
          "Download resumes in multiple formats",
          "User-friendly interface for easy resume building"
        ],
        githubLink: null,
        liveLink: null
      }
    },
    {
      image1: img5,
      project1: {
        id: 4,
        title: "Golang Rate Limiter API",
        description: [
          "A production-ready Rate Limiter API built using Go (Golang) to control and manage the number of requests per user.",
          "Implements IP-based tracking, concurrency-safe request handling, and time-based reset logic."
        ],
        technologies: [
          "Go (Golang)",
          "net/http",
          "Goroutines",
          "Mutex",
          "Middleware Architecture",
          "Docker"
        ],
        features: [
          "Allows 5 requests per minute per user",
          "Tracks users using IP address",
          "Uses goroutines + mutex for concurrency safety",
          "Automatic reset of request count every minute",
          "Clean reusable rate-limiter middleware"
        ],
        githubLink: "https://github.com/Ankitg-713/Go-Rate-Limiter",
        liveLink: null
      },
      image2: img2,
      project2: {
        id: 3,
        title: "BrainVita - Quiz Software",
        description: [
          "BrainVita is an interactive quiz software application designed to test and enhance knowledge in General Knowledge and English. The application provides an engaging quiz game experience where users can create their own custom quizzes and challenge themselves or others.",
          "Each quiz comes with a time limit, adding an element of urgency and excitement to the gameplay. To assist players when they're unsure of an answer, the application includes lifelines - helpful features that can be used strategically during gameplay.",
          "The software features a progressive level system where difficulty increases after completing each level, providing a challenging and rewarding experience. Users can create quizzes for anyone, making it perfect for educational purposes, competitions, or personal knowledge testing."
        ],
        technologies: [
          "C#",
          "Visual Studio",
          ".NET Framework",
          "MS Access"
        ],
        features: [
          "Quiz creation system for General Knowledge and English",
          "Time limit functionality for each quiz",
          "Lifelines feature to help when stuck",
          "Progressive level system with increasing difficulty",
          "Custom quiz creation for any user",
          "Database management with MS Access",
          "Interactive quiz game interface"
        ],
        githubLink: null,
        liveLink: null
      }
    },
    {
      image1: img4,
      project1: {
        id: 5,
        title: "Project 5",
        description: [
          "This is a placeholder for your fifth project. Add detailed description here."
        ],
        technologies: [
          "Technology 1",
          "Technology 2"
        ],
        features: [
          "Feature 1",
          "Feature 2"
        ],
        githubLink: null,
        liveLink: null
      },
      image2: img4,
      project2: {
        id: 6,
        title: "Project 6",
        description: [
          "This is a placeholder for your sixth project. Add detailed description here."
        ],
        technologies: [
          "Technology 1",
          "Technology 2"
        ],
        features: [
          "Feature 1",
          "Feature 2"
        ],
        githubLink: null,
        liveLink: null
      }
    }
  ], []);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero', {
        height: '100px',
        stagger: {
          amount: 0.15
        },
        force3D: true,
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 100%',
          end: 'top -150%',
          scrub: 1,
          anticipatePin: 1,
        }
      });
    });
    return () => ctx.revert();
  }, [])

  return (
    <div className='lg:p-4 p-2'>
      <div className='pt-[40vh]'>
        <h2 className='font-[font1] lg:text-[13vw] text-[15vw] uppercase font-semibold'>Projects</h2>
      </div>
      <div className='lg:-mt-15 -md:mt-10 -mt-6 lol'>
        {projects.map(function(projectPair, idx){
          return <div key={idx} className='hero w-full lg:h-[500px] mb-2 flex lg:flex-row flex-col lg:gap-3 gap-2'>
           <ProjectCard 
             image1={projectPair.image1} 
             image2={projectPair.image2} 
             project1={projectPair.project1}
             project2={projectPair.project2}
           />
           </div>
        })}
      </div>
    </div>
  )
}

export default Project
