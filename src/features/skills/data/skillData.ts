import type { SkillCategory } from "../types/skill.types";

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Programming Languages",
    skillList: [
      { name: "JavaScript", icon: "logos:javascript", detail: "Web scripting", color: "yellow" },
      { name: "Python", icon: "logos:python", detail: "Backend logic", color: "blue" },
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    skillList: [
      { name: "Bootstrap", icon: "logos:bootstrap", detail: "UI framework", color: "purple" },
      { name: "CSS", icon: "logos:css-3", detail: "Page styling", color: "blue" },
      { name: "HTML", icon: "logos:html-5", detail: "Page structure", color: "orange" },
      { name: "Jinja2", icon: "simple-icons:jinja", detail: "Template engine", color: "red" },
      { name: "React", icon: "logos:react", detail: "UI library", color: "cyan" },
      { name: "Redux", icon: "logos:redux", detail: "State management", color: "purple" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", detail: "Utility CSS", color: "sky" },
    ],
  },
  {
    id: 3,
    title: "Backend Development",
    skillList: [
      { name: "Django", icon: "logos:django-icon", detail: "Python framework", color: "green" },
      { name: "FastAPI", icon: "logos:fastapi-icon", detail: "High-performance APIs", color: "teal" },
      { name: "Flask", icon: "logos:flask", detail: "Lightweight backend", color: "gray" },
    ],
  },
  {
    id: 4,
    title: "Databases",
    skillList: [
      { name: "Firebase", icon: "logos:firebase", detail: "Backend as a Service", color: "amber" },
      { name: "MongoDB", icon: "logos:mongodb-icon", detail: "NoSQL database", color: "green" },
      { name: "MySQL", icon: "logos:mysql-icon", detail: "Relational database", color: "blue" },
      { name: "NoSQL", icon: "tabler:database", detail: "Flexible data model", color: "emerald" },
      { name: "PostgreSQL", icon: "logos:postgresql", detail: "Advanced SQL DB", color: "indigo" },
      { name: "Redis", icon: "logos:redis", detail: "In-memory cache", color: "red" },
      { name: "SQL", icon: "tabler:sql", detail: "Database language", color: "cyan" },
    ],
  },
  {
    id: 5,
    title: "Cloud Services",
    skillList: [
      { name: "Amazon EC2", icon: "logos:aws-ec2", detail: "Cloud servers", color: "orange" },
      { name: "Amazon RDS", icon: "logos:aws-rds", detail: "Managed databases", color: "blue" },
      { name: "Amazon S3", icon: "logos:aws-s3", detail: "Object storage", color: "green" },
      { name: "Amazon Web Services", icon: "logos:aws", detail: "Cloud platform", color: "amber" },
      { name: "Azure", icon: "logos:azure-icon", detail: "Microsoft cloud", color: "sky" },
      { name: "Google Cloud Platform", icon: "logos:google-cloud", detail: "Google cloud", color: "blue" },
    ],
  },
  {
    id: 6,
    title: "DevOps & Deployment",
    skillList: [
      { name: "DigitalOcean", icon: "simple-icons:digitalocean", detail: "Cloud hosting", color: "blue" },
      { name: "Docker", icon: "logos:docker-icon", detail: "Containerization", color: "sky" },
      { name: "Heroku", icon: "logos:heroku-icon", detail: "App hosting", color: "purple" },
      { name: "Netlify", icon: "logos:netlify", detail: "Frontend deployment", color: "teal" },
      { name: "Vercel", icon: "logos:vercel-icon", detail: "React deployment", color: "neutral" },
    ],
  },
  {
    id: 7,
    title: "Analytics & Visualization",
    skillList: [
      { name: "Excel", icon: "simple-icons:microsoftexcel", detail: "Spreadsheet analysis", color: "green" },
      { name: "Power BI", icon: "logos:microsoft-power-bi", detail: "Business intelligence", color: "yellow" },
      { name: "Tableau", icon: "logos:tableau-icon", detail: "Data visualization", color: "blue" },
    ],
  },
  {
    id: 8,
    title: "3D Modeling & Graphics",
    skillList: [
      { name: "Blender", icon: "logos:blender", detail: "3D modeling", color: "orange" },
      { name: "Spline", icon: "lucide:spline", detail: "Interactive 3D", color: "violet" },
      { name: "Three.js", icon: "logos:threejs", detail: "WebGL library", color: "gray" },
    ],
  },
  {
    id: 9,
    title: "Animation",
    skillList: [
      { name: "Framer Motion", icon: "devicon:framermotion", detail: "React animations", color: "pink" },
      { name: "GSAP", icon: "simple-icons:gsap", detail: "High-performance animation", color: "lime" },
    ],
  },
  {
    id: 10,
    title: "Automated Testing",
    skillList: [
      { name: "pytest", icon: "simple-icons:pytest", detail: "Python testing", color: "blue" },
      { name: "unittest", icon: "tabler:test-pipe", detail: "Unit testing", color: "red" },
    ],
  },
  {
    id: 11,
    title: "Web Scraping & Automation",
    skillList: [
      { name: "Selenium", icon: "logos:selenium", detail: "Browser automation", color: "green" },
    ],
  },
];
