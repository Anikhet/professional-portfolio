import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const portfolioData = {
  profile: {
    name: "Anikhet Mulky",
    role: "Software & AI Engineer",
    bio: "Highly driven Software and AI Engineer with a Master's in Computer Science from RIT. Proficient in TypeScript, React, Next.js, Python, Docker, and AWS, with a track record of optimizing performance and reliability to build scalable web applications.",
    avatar: "/avatar1.jpg",
  },
  social: [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:am9559@rit.edu",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/anikhet-mulky",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Anikhet",
    },
    {
      name: "Resume",
      icon: FileText,
      url: "https://drive.google.com/file/d/1duRBvBZS3XMfqZCmkUbD-ZDUGmMAhIjk/view?usp=sharing",
    },
  ],
  experience: [
    {
      role: "Software & AI Engineer",
      company: "Peeker.AI",
      location: "New York",
      date: "Aug 2024 - Present",
    },
    {
      role: "Software Intern",
      company: "Bhabha Atomic Research Centre",
      location: "Mumbai",
      date: "May 2020 - July 2020",
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Rochester Institute of Technology",
      location: "Rochester, NY",
      date: "Expected Graduation: May 2025",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "SIES Grad School of Technology",
      location: "Mumbai University",
      date: "Graduated in 2022",
    },
  ],
  projects: [
    {
      title: "Apify Web Scraper",
      description: "A powerful web scraper built with Apify.",
      image: "/apify.png",
      link: "https://peeker-apify.vercel.app/",
    },
    {
      title: "Distance Visualizer",
      description: "Visualizing distances using MapGL.",
      image: "/Map.png",
      link: "https://map-wanderer-visualizer.vercel.app/",
    },
    {
      title: "ROI Calculator",
      description: "Calculate Return on Investment easily.",
      image: "/roi.png",
      link: "https://roi-calculator-kohl.vercel.app/",
    },
    {
      title: "AirBnb Clone",
      description: "A full-stack clone of AirBnb.",
      image: "/airbnb.png",
      link: "https://roomie-three.vercel.app/",
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Docker",
    "AWS",
    "TailwindCSS",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
  ],
};
