

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "revqz",
  title: "Hi, I'm revqz",
  subTitle: emoji(
    "A UK-based backend Java developer specializing in DevOps and security. I build high-performance Minecraft systems, plugins, and infrastructure — designed to scale and built with a security-first mindset."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/revqz1",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND • DEVOPS • SECURITY • MINECRAFT ENGINEERING",
  skills: [
    emoji("⚡ Build backend systems in Java with clean architecture and performance in mind"),
    emoji("⚡ Develop Minecraft plugins and network systems (Paper/Spigot) that scale reliably"),
    emoji("⚡ DevOps automation: CI/CD, Docker, Linux, monitoring and production hardening"),
    emoji("⚡ Security-first engineering: least privilege, secure configs, auditing, and risk reduction")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Databases", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Security", fontAwesomeClassname: "fas fa-shield-alt" },
    { skillName: "Minecraft", fontAwesomeClassname: "fas fa-cube" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Cambridge Sixth Form",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Student — Computer Science",
      duration: "Current",
      desc: "Studying Computer Science with a focus on practical development, security thinking, and real-world engineering.",
      descBullets: [
        "Competed in maths competitions around the UK",
        "Python coding and problem-solving experience"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend (Java)", progressPercentage: "90%" },
    { Stack: "DevOps & Infrastructure", progressPercentage: "85%" },
    { Stack: "Security Engineering", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Developer",
      company: "LeoneMC",
      companylogo: require("./assets/images/leonemc.png"),
      date: "Past",
      desc: "Minecraft development work focused on systems, plugins, and server-side improvements."
    },
    {
      role: "Developer",
      company: "InvestedMC",
      companylogo: require("./assets/images/invested2.png"),
      date: "Current",
      desc: "Building and maintaining Minecraft network features with a focus on performance, stability, and secure design."
    },
    {
      role: "Developer",
      company: "HeartHeist",
      companylogo: require("./assets/images/heartheistlogo.png"),
      date: "Current",
      desc: "Developing Minecraft gameplay systems and plugins, balancing clean architecture with player-impact features."
    },
    {
      role: "Volunteer Support",
      company: "GamerSafe",
      companylogo: require("./assets/images/gamersafe.png"),
      date: "Current",
      desc: "Working on development tasks with a security-first mindset."
    },
    {
      role: "Moderator",
      company: "Minehut",
      companylogo: require("./assets/images/minehut.png"),
      date: "Current",
      desc: "Supporting and contributing to systems around Minecraft community infrastructure."
    }
  ]
};

/* Open Source Section (GitHub pinned projects) */
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "SYSTEMS, PLUGINS, AND INFRASTRUCTURE I’VE BUILT AND MAINTAINED",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Minecraft Plugins & Systems",
      projectDesc: "Backend Java (Paper/Spigot) plugins with persistence, commands, GUIs, performance tuning, and scalable architecture.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/revqz1" }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "DevOps & Security Hardening",
      projectDesc: "CI/CD automation, Dockerized services, monitoring, secure configurations, and infrastructure hardening.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/revqz1" }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Competitions, milestones, and highlights.",
  achievementsCards: [
    {
      title: "Maths Competitions (UK)",
      subtitle: "Participated in maths competitions and advanced problem-solving activities around the UK.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Achievements",
      footerLink: []
    },
    {
      title: "Python Coding & Problem Solving",
      subtitle: "Built projects and practiced algorithmic problem solving using Python.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Python",
      footerLink: []
    }
  ],
  display: true
};

// Blogs / Talks / Podcast (turned off for a clean portfolio)
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle: "Want to collaborate or ask something? Reach out.",
  number: "",
  email_address: ""
};

// Twitter Section (off)
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
