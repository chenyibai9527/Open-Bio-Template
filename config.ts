import { Github, Twitter, Linkedin } from 'lucide-react';

export const userProfile = {
  name: "User",
  role: "Developer",
  prev_role: "Dreamer",
  avatar_url: "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff&size=256", // Mock avatar
  bio: "Building digital experiences with code.",
  story: "I'm a developer passionate about open source and building tools that help others. This is a template for my personal portfolio.",
  quote: "Hello, World!",
  email: "hello@example.com",
  socials: [
    { name: "GitHub", url: "https://github.com/chenyibai9527/Open-Bio-Template", icon: Github },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter }
  ],
  status: [
    "Building cool stuff",
    "Learning new tech",
    "Drinking coffee"
  ],
  skills: {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python"],
    tools: ["Git", "VS Code"]
  },
  // Generalized experience/focus sections
  focus_areas: [
    { title: "Web Development", desc: "Building responsive and accessible web applications." },
    { title: "UI/UX Design", desc: "Creating intuitive and beautiful user interfaces." },
    { title: "Open Source", desc: "Contributing to and maintaining open source projects." },
    { title: "System Design", desc: "Architecting scalable and efficient systems." }
  ],
  experience_highlights: [
    { title: "Problem Solving", desc: "Turning complex requirements into simple solutions." },
    { title: "Clean Code", desc: "Writing maintainable and readable code." },
    { title: "Collaboration", desc: "Working effectively in team environments." }
  ]
};

export const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary application that solves a common problem.",
    tags: ["React", "TypeScript"],
    link: "https://example.com",
    color: "bg-blue-100"
  },
  {
    title: "Beta Tool",
    description: "An open-source utility library for developers.",
    tags: ["Node.js", "CLI"],
    link: "https://example.com",
    color: "bg-green-100"
  },
  {
    title: "Gamma App",
    description: "A beautiful productivity app for daily tasks.",
    tags: ["Mobile", "Design"],
    link: "https://example.com",
    color: "bg-purple-100"
  },
  {
    title: "Delta Service",
    description: "High-performance backend service example.",
    tags: ["Go", "Microservices"],
    link: "https://example.com",
    color: "bg-orange-100"
  }
];
