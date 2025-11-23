import img1 from "../assets/Project1.jpg";
import img2 from "../assets/Project2.jpg";
import img3 from "../assets/Project3.jpg";
import img4 from "../assets/Upcoming2.jpg";

export const projectsData = [
  {
    id: 1,
    title: "AttendAI",
    image1: img1,
    image2: img3,
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
    liveLink: null // Add live link if available
  },
  {
    id: 2,
    title: "Project 2",
    image1: img2,
    image2: img4,
    description: [
      "This is a placeholder for your second project. Add detailed description here."
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
  {
    id: 3,
    title: "Project 3",
    image1: img4,
    image2: img4,
    description: [
      "This is a placeholder for your third project. Add detailed description here."
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
];

