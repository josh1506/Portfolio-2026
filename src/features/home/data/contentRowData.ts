// Assets
import creativeWorksImage from "../../../assets/images/projects/creative_works.png";
import dailyDoodlesImage from "../../../assets/images/projects/daily_doodles.png";
import jrBuildsImage from "../../../assets/images/projects/jr_builds.png";
import linkarooImage from "../../../assets/images/projects/linkaroo.png";
import luminaMatchImage from "../../../assets/images/projects/lumina_match.png";
import pocketFlowImage from "../../../assets/images/projects/pocket_flow.png";
import oldPortfolioImage from "../../../assets/images/projects/old_portfolio.png";
import teamSprintImage from "../../../assets/images/projects/team_sprint.png";
import traqImage from "../../../assets/images/projects/traq.png";
import todoAppImage from "../../../assets/images/projects/todo.png";
import instaGiveImage from "../../../assets/images/projects/instagive.png";
import axieTrackerImage from "../../../assets/images/projects/axie_tracker.png";

export const projects = [
  {
        id: 1,
        image: axieTrackerImage,
        title: "Axie Infinity Tracker",
        description:
          "A scholar management application designed to help Axie Infinity managers track scholars and monitor their earnings.",
        additionalInfo: ["Django", "React", "PostgreSQL"],
        link: "https://axie-infinity-tracker.vercel.app/",
        isFeatured: false,
      },
      {
        id: 2,
        image: traqImage,
        title: "Traq",
        description:
          "A URL tracking application that helps users measure marketing campaign performance by monitoring link visits and engagement.",
        additionalInfo: ["Django", "React", "PostgreSQL"],
        link: "https://traq.vercel.app/",
        isFeatured: false,
      },
      {
        id: 3,
        image: todoAppImage,
        title: "Todo App",
        description:
          "A task management application inspired by Samsung Reminder, allowing users to create, organize, and manage their daily tasks.",
        additionalInfo: ["Django", "React", "Redux"],
        link: null,
        isFeatured: false,
      },
      {
        id: 4,
        image: instaGiveImage,
        title: "InstaGive",
        description:
          "A thesis project developed as a web-based donation platform that connects donors with individuals and organizations across Pampanga.",
        additionalInfo: ["MongoDB", "Express", "React", "Node.js"],
        link: null,
        isFeatured: false,
      },
      {
        id: 5,
        image: oldPortfolioImage,
        title: "Portfolio",
        description:
          "A personal portfolio website created to showcase my web development skills, projects, accomplishments, and experience in building modern web applications.",
        additionalInfo: ["React", "Responsive Design", "Vercel"],
        link: "https://josh-portfolio.vercel.app/",
        isFeatured: false,
      },
      {
        id: 6,
        image: jrBuildsImage,
        title: "JrBuilds",
        description:
          "An architectural portfolio platform designed to showcase the company's projects, expertise, and creative solutions in architecture and construction.",
        additionalInfo: ["React", "Responsive Design", "Vercel"],
        link: "https://jrbuild.vercel.app/",
        isFeatured: false,
      },
      {
        id: 7,
        image: dailyDoodlesImage,
        title: "DailyDoodles",
        description:
          "A productivity application featuring task management, sticky notes, and other tools that help users stay organized and manage their daily activities.",
        additionalInfo: ["React", "Vite", "Django"],
        link: "https://dailydoodles.vercel.app/",
        isFeatured: false,
      },
      {
        id: 8,
        image: linkarooImage,
        title: "Linkaroo",
        description:
          "A URL management platform that allows users to create custom redirect links, track clicks, and monitor link performance and user engagement.",
        additionalInfo: ["Django", "REST API", "AWS"],
        link: null,
        isFeatured: false,
      },
      {
        id: 9,
        image: pocketFlowImage,
        title: "PocketFlow",
        description:
          "A personal finance application that helps users record, manage, and monitor their income and expenses through a simple and accessible interface.",
        additionalInfo: ["Django", "PostgreSQL", "CRUD"],
        link: null,
        isFeatured: false,
      },
      {
        id: 10,
        image: luminaMatchImage,
        title: "LuminaMatch",
        description:
          "A dating and social discovery platform that combines traditional matchmaking features with social media interactions for a more engaging user experience.",
        additionalInfo: [
          "React Native",
          "Django REST Framework",
          "PostgreSQL",
        ],
        link: "https://luminamatch.vercel.app/",
        isFeatured: false,
      },
      {
        id: 11,
        image: creativeWorksImage,
        title: "CreativeWorks",
        description:
          "An interactive portfolio experience featuring 3D models, animations, and immersive visual elements designed to demonstrate modern frontend development skills.",
        additionalInfo: ["React", "Three.js", "React Three Fiber"],
        link: "https://creativeworks.vercel.app/",
        isFeatured: true,
      },
      {
        id: 12,
        image: teamSprintImage,
        title: "TeamSprint",
        description:
          "A project management platform designed to help teams organize projects, manage tasks, and collaborate efficiently in one centralized workspace.",
        additionalInfo: ["React", "Django", "PostgreSQL"],
        link: "https://www.team-sprint.com/",
        isFeatured: true,
      },
]

export const contentRowData = [
  {
    title: "Today's Top Projects for ",
    data: projects,
  },
  // {
  //   title: "Today's Top Skills for ",
  //   data: [
  //     {
  //       id: 1,
  //       image: "https://via.placeholder.com/150",
  //       title: "Skill 1",
  //       description: "Description for Skill 1",
  //       additionalInfo: ["Skill 1", "Skill 2", "Skill 3"],
  //       link: null,
  //     },
  //   ],
  // },
];
