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
      "SOFTWARE ENGINEER BUILDING AI-POWERED PRODUCTS AT SCALE — FROM AUTONOMOUS AGENTS TO FULL-STACK PLATFORMS",
    /** Footer CTA for landing page */
    ctaLabel: "View Resume",
    ctaUrl: "https://drive.google.com/file/d/1duRBvBZS3XMfqZCmkUbD-ZDUGmMAhIjk/view?usp=sharing",
    bio: `Software Engineer based in Fremont, CA with a Master’s in Computer Science from RIT. Currently building AI agent products at Clover Labs — autonomous systems that drive distribution, pricing, and growth for businesses at scale.

My work spans the full stack: from architecting Next.js frontends and integrating LLM APIs, to scaling cloud-native backends on AWS. At Peeker AI I built deliverability infrastructure for cold email at scale. At BARC I worked on embedded systems at India’s premier atomic research facility.

When I’m not shipping code, I’m producing music in FL Studio, stargazing through a telescope, or gaming. Always down to talk AI, product, or systems that scale.`,
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
      url: "https://www.linkedin.com/in/anikhet-mulky",
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
      description: "Production-grade Q&A bot for Discord using retrieval-augmented generation. Indexes channel history into vector embeddings via OpenAI, stores them in Supabase, and answers questions with GPT-4o grounded in real context.",
      image: "/discord-bot.png",
      link: "https://github.com/Anikhet",
      tags: ["Node.js", "GPT-4o", "Supabase", "RAG", "EC2"],
    },
    {
      title: "MicroCart",
      description: "E-commerce platform built on a microservices architecture with server-side rendered storefronts and a unified GraphQL gateway. Each service is independently deployable via Docker and orchestrated with Kubernetes.",
      image: "/microcart.png",
      link: "https://github.com/Anikhet",
      tags: ["Next.js", "Node.js", "GraphQL", "Docker", "Kubernetes"],
    },
    {
      title: "Video Anomaly Detection",
      description: "Undergraduate capstone detecting abnormal activity in surveillance footage using 3D CNNs and 2D Convolutional LSTMs. Trained on real-world video streams for temporal pattern recognition.",
      image: "/apify.png",
      link: "https://github.com/Anikhet/Smart-Detection-of-Abnormalities-in-Video-Footage",
      tags: ["Python", "3D CNNs", "Conv-LSTM", "OpenCV"],
    },
    {
      title: "Vehicle Path Planning",
      description: "Genetic algorithm simulation for autonomous vehicle path planning. Evolves optimal routes through obstacle-filled environments using fitness-based selection and crossover operators.",
      image: "/Map.png",
      link: "https://github.com/Anikhet/Vehicle-Path-Planning-Simulation-Using-Genetic-Algorithms",
      tags: ["Python", "Genetic Algorithms", "Simulation"],
    },
    {
      title: "ROI Calculator",
      description: "Interactive financial tool for calculating return on investment with dynamic charts, compound interest projections, and exportable breakdowns.",
      image: "/roi.png",
      link: "https://roi-calculator-kohl.vercel.app/",
      tags: ["React", "TypeScript", "Finance"],
    },
    {
      title: "AirBnb Clone",
      description: "Full-stack rental marketplace with search, booking, and host management. Features authentication, image uploads, and map-based property discovery.",
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
    "Go",
    "SQL",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Flask",
    "GraphQL",
    "Zustand",
    "Redux",
    "Svelte",
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
