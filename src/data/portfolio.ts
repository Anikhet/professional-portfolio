import { Github, Mail, FileText, Twitter, Music, PenLine, Linkedin } from "lucide-react";

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
    ctaUrl: "https://drive.google.com/drive/folders/1JWtDnstCsVwS5FhZeWkuXmb8gdrVrWgT?usp=sharing",
    bio: `I'm a Software Engineer with a startup hustle mindset, currently building full-stack products with AI at the core. From migrating frontends to Next.js and integrating LLM APIs, to scaling backend architectures, I enjoy solving tough problems and shipping fast, reliable code.

My experience spans scrappy startups to structured engineering teams, with a focus on modern web tech (Next.js, TypeScript, Go), automation, and cloud-native development (AWS). I’ve led projects involving lead scraping, AI-driven personalization, and data workflows that power real-world impact.

Currently pursuing my Master’s in Computer Science at RIT, I’m looking to join a team where I can push technical boundaries and learn from strong builders. Let’s connect if you're working on something cool, or want to jam about product, AI, video games, music (I've worked a ton with FL Studio) or engineering systems that scale or perhaps my current hobby - visual astronomy!`,
    avatar: "/avatar1.jpg",
    /** Portrait for the editorial front page (a real photo, not the memoji). */
    editorialPortrait: "/photo-sunset-boat.jpeg",
    /** Location line used in the Swiss contact section */
    location: "Rochester, NY · open to remote",
    /** Editorial headline for the About section (highlight phrase rendered in accent) */
    aboutHeadline:
      "I build robust full-stack products with AI at the core, from neuroevolution race-cars to production agents.",
    aboutHeadlineHighlight: "AI at the core",
    aboutBody:
      "From migrating frontends to Next.js to scaling backend architectures, I enjoy solving complex problems and shipping reliable code. Master's in CS from RIT, now looking to push technical boundaries with a team that ships.",
    /** Closing line for the full-red contact section */
    contactHeadline: "Let's build something worth shipping.",
    /**
     * Short editorial bio for the front page, kept separate from the longer
     * landing-page `bio`. One tight paragraph: niche + differentiator + a small
     * personal note. Deliberately avoids repeating the job history listed right
     * below it in ON THE JOB. First-person, conversational, recruiter-skimmable.
     */
    editorialBio: [
      "Full-stack engineer who builds AI agents and the evals that prove they work. Anyone can demo an agent once; I care about measuring it at scale. Off the clock: video games and a telescope.",
    ],
  },
  social: [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:animulky@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anikhet-mulky/",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Anikhet",
    },
    {
      name: "X",
      icon: Twitter,
      url: "https://x.com/anikhetmulkyy",
    },
    {
      name: "SoundCloud",
      icon: Music,
      url: "https://soundcloud.com/anikhetmulky",
    },
    {
      name: "Medium",
      icon: PenLine,
      url: "https://medium.com/@anikhetmulky",
    },
    {
      name: "Resume",
      icon: FileText,
      url: "https://drive.google.com/drive/folders/1JWtDnstCsVwS5FhZeWkuXmb8gdrVrWgT?usp=sharing",
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
      title: "Drip",
      description: "AI streetwear stylist: brain-dump your closet, pick a micro-tribe and occasion, get a head-to-toe fit built mostly from what you own.",
      image: "/drip.png",
      link: "https://github.com/Anikhet",
      tags: ["Next.js", "SwiftUI", "GPT-5", "Trigger.dev", "Supabase"],
    },
    {
      title: "Snoozy",
      description: "Personalized bedtime stories read aloud in a parent's own cloned voice, even when they can't be there.",
      image: "/snoozy.png",
      link: "https://github.com/Anikhet",
      tags: ["React Native", "Expo", "LLM", "Voice Cloning", "Node.js"],
    },
    {
      title: "DevInterview.AI",
      description: "AI mock-interview studio with a live avatar interviewer that tracks your face and lip-syncs its replies in real time.",
      image: "/devinterview.png",
      link: "https://github.com/Anikhet",
      tags: ["React", "Three.js", "MediaPipe", "WebAudio", "TypeScript"],
    },
    {
      title: "AstroAgent",
      description: "Point your phone at the sky and an AI tells you what you're looking at, using real ephemeris data to answer natural-language questions about the night sky.",
      image: "/astroagent.png",
      link: "https://www.tella.tv/video/astroagent-18yh",
      tags: ["AI Agents", "Ephemeris", "Next.js", "Computer Vision"],
    },
    {
      title: "Racing Car Reinforcement Learning",
      description: "Autonomous cars learn to navigate a race track through neuroevolution, with real-time physics and 5-sensor raycasting.",
      image: "/racing-rl.png", 
      link: "https://github.com/Anikhet/pytorch-tutorial/tree/main/racing_car_rl",
      tags: ["Python", "PyTorch", "Pygame", "Genetic Algorithms", "Reinforcement Learning"],
    },
    {
      title: "Red Rover",
      description: "AI-driven 'Reddit Operating System': agents that automate engagement, SEO, and reputation management to grow brand presence.",
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
    "OpenAI Agents SDK",
    "AI SDK (Vercel)",
    "LangChain",
    "LangGraph",
    "Deep Agents",
    "Google ADK",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C",
    "SQL",
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Flask",
    "GraphQL",
    "Zustand",
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
  /**
   * Languages I've worked in but haven't touched recently, solid foundation,
   * a quick brush-up away from daily fluency. Surfaced as a separate "also in
   * the kit" tier so the primary stack reads as current.
   */
  familiarSkills: ["Java", "C++", "C"],
  /**
   * The editorial "THE TOOLKIT" column, grouped into labeled sections so the
   * stack reads by domain instead of one undifferentiated wall of chips. AI &
   * Agents leads because it's the current focus. `muted` dims a section (used
   * for the brushing-up languages). The flat `skills` array above is kept
   * intact for the v2 ticker/gravity components that consume it.
   */
  toolkit: [
    {
      label: "AI & Agents",
      skills: ["OpenAI Agents SDK", "AI SDK (Vercel)", "LangGraph"],
    },
    {
      label: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      label: "Frontend",
      skills: ["React", "Next.js", "TailwindCSS", "Zustand", "GraphQL"],
    },
    {
      label: "Backend & Data",
      skills: ["Node.js", "Express", "Flask", "PostgreSQL", "MongoDB", "Supabase", "Redis"],
    },
    {
      label: "Infra & Tooling",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jest", "Playwright"],
    },
    {
      label: "Brushing up",
      skills: ["Java", "C++", "C"],
      muted: true,
    },
  ],
  hobbies: [
    { name: "Visual Astronomy", icon: "Telescope" },
    { name: "Music Production", icon: "Music" },
    { name: "Video Games", icon: "Gamepad2" },
    { name: "Competitive Programming", icon: "Trophy" },
  ],
  /** Published writing (Medium), newest first. Surfaced on the /writing page. */
  writingProfileUrl: "https://medium.com/@anikhetmulky",
  writing: [
    {
      title: "Turning Discord into a Knowledge Engine: A Practical RAG-Powered Bot",
      blurb: "How I built a production Q&A Discord bot with retrieval-augmented generation, GPT-4o, and OpenAI embeddings.",
      tags: ["RAG", "GPT-4o", "Discord", "Node.js"],
      url: "https://medium.com/@anikhetmulky/turning-discord-into-a-knowledge-engine-a-practical-rag-powered-bot-c4ae45b2ac48",
    },
    {
      title: "How I Passed the AWS Certified Cloud Practitioner Exam in Just 24 Hours",
      blurb: "A focused, no-fluff study plan for clearing the AWS Cloud Practitioner cert in a single day.",
      tags: ["AWS", "Certification", "Cloud"],
      url: "https://medium.com/@anikhetmulky/how-i-passed-the-aws-certified-cloud-practitioner-exam-in-just-24-hours-c3105182b99e",
    },
  ],
  games: [
    {
      name: "Deadlock",
      status: "Grinding",
      meta: "Valve · Hero Shooter / MOBA · 2024",
      cover: { src: "/games-deadlock.jpg", alt: "Deadlock cover art" },
    },
    {
      name: "ARC Raiders",
      status: "Extraction",
      meta: "Embark Studios · Co-op Extraction Shooter · 2025",
      cover: { src: "/games-arc-raiders.jpg", alt: "ARC Raiders cover art" },
    },
    {
      name: "Megabonk",
      status: "Roguelite",
      meta: "vedinad · Survivor-like Roguelite · 2025",
      cover: { src: "/games-megabonk.jpg", alt: "Megabonk cover art" },
    },
    {
      name: "Valorant",
      status: "Competitive",
      meta: "Riot Games · Tactical Shooter · 2020",
      cover: { src: "/games-valorant.jpg", alt: "Valorant cover art" },
    },
    {
      name: "Fallout 3",
      status: "Wandering",
      meta: "Bethesda Game Studios · Action RPG · 2008",
      cover: { src: "/games-fallout-3.jpg", alt: "Fallout 3 cover art" },
    },
    {
      name: "Kingdom Come: Deliverance",
      status: "Role-play",
      meta: "Warhorse Studios · Historical RPG · 2018",
      cover: { src: "/games-kingdom-come.jpg", alt: "Kingdom Come: Deliverance cover art" },
    },
    {
      name: "Apex Legends",
      status: "Ranked",
      meta: "Respawn Entertainment · Battle Royale · 2019",
      cover: { src: "/games-apex-legends.jpg", alt: "Apex Legends cover art" },
    },
    {
      name: "Elden Ring",
      status: "Exploring",
      meta: "FromSoftware · Action RPG · 2022",
      cover: { src: "/games-elden-ring.jpg", alt: "Elden Ring cover art" },
    },
    {
      name: "Rocket League",
      status: "Casual",
      meta: "Psyonix · Sports / Vehicular Soccer · 2015",
      cover: { src: "/games-rocket-league.jpg", alt: "Rocket League cover art" },
    },
    {
      name: "Battlefield 6",
      status: "Squadding",
      meta: "Battlefield Studios · FPS · 2025",
      cover: { src: "/games-battlefield-6.jpg", alt: "Battlefield 6 cover art" },
    },
    {
      name: "Rainbow Six Siege X",
      status: "Tactical",
      meta: "Ubisoft Montreal · Tactical Shooter · 2025",
      cover: { src: "/games-rainbow-six-siege.jpg", alt: "Rainbow Six Siege X cover art" },
    },
    {
      name: "Counter-Strike 2",
      status: "Competitive",
      meta: "Valve · Tactical Shooter · 2023",
      cover: { src: "/games-counter-strike-2.jpg", alt: "Counter-Strike 2 cover art" },
    },
  ],
};
