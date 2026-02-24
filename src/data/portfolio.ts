import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const portfolioData = {
  profile: {
    name: "Anikhet Mulky",
    role: "Software Engineer",
    tagline: "Startup Hustle Mindset. AI Core.",
    /** Landing page hero display name (uppercase) */
    heroName: "ANIKHET",
    /** One-line description for landing hero */
    heroDescription:
      "ANIKHET MULKY IS A SOFTWARE ENGINEER WHO BRIDGES STARTUP HUSTLE WITH AI-DRIVEN PRODUCT DEVELOPMENT",
    /** Footer CTA for landing page */
    ctaLabel: "View Resume",
    ctaUrl: "https://drive.google.com/file/d/1duRBvBZS3XMfqZCmkUbD-ZDUGmMAhIjk/view?usp=sharing",
    bio: `I'm a Software Engineer with a startup hustle mindset, currently building full-stack products with AI at the core. From migrating frontends to Next.js and integrating LLM APIs, to scaling backend architectures — I enjoy solving tough problems and shipping fast, reliable code.

My experience spans scrappy startups to structured engineering teams, with a focus on modern web tech (Next.js, TypeScript, Go), automation, and cloud-native development (AWS). I’ve led projects involving lead scraping, AI-driven personalization, and data workflows that power real-world impact.

Currently pursuing my Master’s in Computer Science at RIT, I’m looking to join a team where I can push technical boundaries and learn from strong builders. Let’s connect if you're working on something cool — or want to jam about product, AI, video games, music (I've worked a ton with FL Studio) or engineering systems that scale or perhaps my current hobby - visual astronomy!`,
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
      url: "https://www.linkedin.com/in/anikhetmulkyyy",
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
      role: "Software Engineer",
      company: "Clover Labs",
      location: "Remote, US",
      date: "Oct 2025 - Present",
      url: "https://cloverlabs.ai/",
    },
    {
      role: "Software & AI Engineering Co-op",
      company: "Peeker AI",
      location: "New York",
      date: "Aug 2024 - May 2025",
      url: "https://www.peeker.ai/",
    },
    {
      role: "Software Engineer",
      company: "Bhabha Atomic Research Centre",
      location: "Mumbai",
      date: "June 2020 - Dec 2020",
    },
  ],
  education: [
    {
      degree: "MS in Computer Science",
      school: "Rochester Institute of Technology",
      location: "Rochester, NY, USA",
      date: "Aug 2022 - Dec 2025",
    },
    {
      degree: "BS in Electronics and Computer Engineering",
      school: "University of Mumbai",
      location: "Mumbai, India",
      date: "Jun 2018 - Aug 2022",
    },
  ],
  projects: [
    {
      title: "Racing Car Reinforcement Learning",
      description: "Autonomous cars learning to navigate a race track using neuroevolution (Neural Networks + Genetic Algorithms). Features real-time physics simulation and 5-sensor raycasting.",
      image: "/racing-rl.png", 
      link: "https://github.com/Anikhet/pytorch-tutorial/tree/main/racing_car_rl",
      tags: ["Python", "PyTorch", "Pygame", "Genetic Algorithms", "Reinforcement Learning"],
    },
    {
      title: "Red Rover",
      description: "AI-driven 'Reddit Operating System' for automated engagement and SEO. Scaled brand presence using AI agents to drive organic traffic and manage reputation.",
      image: "/redrover.png", 
      link: "https://app.tryredrover.com/metrics",
      tags: ["AI Agents", "SEO", "Automation", "Reddit API", "Next.js"],
    },
    {
      title: "Discord Knowledge Bot",
      description: "Production-grade Q&A Discord bot using RAG with GPT-4o and OpenAI embeddings.",
      image: "/discord-bot.png",
      link: "https://github.com/Anikhet",
      tags: ["Node.js", "GPT-4o", "Supabase", "RAG", "EC2"],
    },
    {
      title: "MicroCart",
      description: "Microservices-based e-commerce platform with server-side rendering and scalable GraphQL APIs.",
      image: "/microcart.png",
      link: "https://github.com/Anikhet",
      tags: ["Next.js", "Node.js", "GraphQL", "Docker", "Kubernetes"],
    },
    {
      title: "Apify Web Scraper",
      description: "A powerful web scraper built with Apify.",
      image: "/apify.png",
      link: "https://peeker-apify.vercel.app/",
      tags: ["Apify", "Web Scraping", "Node.js"],
    },
    {
      title: "Distance Visualizer",
      description: "Visualizing distances using MapGL.",
      image: "/Map.png",
      link: "https://map-wanderer-visualizer.vercel.app/",
      tags: ["MapGL", "React", "Geolocation"],
    },
    {
      title: "ROI Calculator",
      description: "Calculate Return on Investment easily.",
      image: "/roi.png",
      link: "https://roi-calculator-kohl.vercel.app/",
      tags: ["React", "TypeScript", "Finance"],
    },
    {
      title: "AirBnb Clone",
      description: "A full-stack clone of AirBnb.",
      image: "/airbnb.png",
      link: "https://roomie-three.vercel.app/",
      tags: ["Next.js", "MongoDB", "Tailwind"],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "SQL",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Flask",
    "GraphQL",
    "Zustand",
    "Redux",
    "TailwindCSS",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "Supabase",
    "Docker",
    "Kubernetes",
    "AWS",
    "Redis",
    "Terraform",
    "CI/CD",
    "Jest",
    "Playwright",
  ],
  hobbies: [
    { name: "Visual Astronomy", icon: "Telescope" },
    { name: "Music Production", icon: "Music" },
    { name: "Video Games", icon: "Gamepad2" },
    { name: "Competitive Programming", icon: "Trophy" },
  ],
};
