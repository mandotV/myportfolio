import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Osmand Hadjiamer Decampong — Tech Developer",
  author: "Osmand Hadjiamer Decampong",
  description:
    "Tech Developer | Software & Embedded Systems Specialist, Dedicated to building high-impact technology. I develop comprehensive software solutions (Web, Mobile, ERP, Embedded) and bespoke embedded systems. I focus on technical excellence and practical integration, delivering custom tools that bridge the digital and physical worlds to solve real-world problems.",
  lang: "en",
  siteLogo: "/hoody_mandot.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/osmand-hadjiamer-d-650962264/" },
    { text: "Github", href: "https://github.com/mandotV" },
    { text: "Instagram", href: "https://www.instagram.com/maaandot/" },
    { text: "Facebook", href: "https://www.facebook.com/usman.decampong" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Osmand Hadjiamer Decampong",
    specialty: "Web and Mobile Developer",
    summary:
      "Tech Developer | Software & Embedded Systems Specialist. Dedicated to building high-impact technology. I develop comprehensive software solutions (Web, Mobile, ERP, Embedded) and bespoke embedded systems. I focus on technical excellence and practical integration, delivering custom tools that bridge the digital and physical worlds to solve real-world problems.",
    email: "decampongosmand@gmail.com",
  },
  experience: [
    {
      company: "Syngosoft IT Solutions Inc.",
      position: "Medical IT Engineer",
      startDate: "Mar 2023",
      endDate: "Jul 2023",
      summary: [
        "Assisted in the successful rollout of Information Systems for healthcare institutions in the Cebu region, gaining hands-on experience in large-scale clinical software implementation.",
        "Provided essential IT support to medical clients, diagnosing and resolving system setbacks to support continuous hospital operations.",
        "Contributed to the management of client data structures and IT frameworks, ensuring technical alignment with daily medical workflows..",
      ],
    },
    {
      company: "Contract Project",
      position: "Web Developer",
      startDate: "Sep 2023",
      endDate: "Mar 2024",
      summary:[
        "Delivered end-to-end support for client web applications, resolving critical bugs and implementing feature enhancements to improve system stability.",
        "Managed a music-focused web platform utilizing a CakePHP backend and jQuery frontend to ensure seamless user experiences.",
        "Oversaw deployment pipelines across staging and production environments using Ubuntu Server, maintaining high availability and deployment integrity.",
      ]
    },
    {
      company: "Arielus Software Inc.",
      position: "Software Engineer",
      startDate: "Sep 2023",
      endDate: "Aug 2025",
      summary:[
        "Built and deployed enterprise-grade ERP systems from scratch, facilitating digital transformation for major production firms in the Cebu region.",
        "Streamlined the transition from development to production through DevOps processes and proactive client-side troubleshooting.",
        "Designed core workflows, wireframes, and backend API logic for diverse subsystems, bridging the gap between business requirements and technical execution.",
        "Conducted comprehensive staging tests and code reviews to ensure scalability and high performance in huge project environments."
      ]
    },
    {
      company: "Cebu Technological University",
      position: "Instructor",
      startDate: "Aug 2025",
      endDate: "May 2026",
      summary:[
        "Facilitate high-impact lectures and laboratory sessions for undergraduate courses, including Software Development (C#, C++, Java), Web Technologies, and Embedded Systems.",
        "Serve as a Capstone Project Adviser, guiding 2nd-year and senior students through the full SDLC of innovative software and hardware prototypes, including IoT-based monitoring systems.",
        "Provide internal technical expertise for campus-wide IT initiatives, leveraging a background in enterprise-level ERP systems to advise on local infrastructure improvements.",
      ]
    },
    {
      company: "Freelance Projects",
      position: "Developer",
      startDate: "Jan 2026",
      endDate: "Present",
      summary:[
        "Managing the development of complex Web, Mobile, and IoT applications for high-profile local clients.",
        "Directing all phases of the development lifecycle, from initial system architecture and wireframing to production deployment and long-term maintenance.",
        "Fostering long-term partnerships through transparent communication, providing strategic insights for system scalability and continuous technological improvement.",
      ]
    },
  ],
  projects: [
    {
      name: "PETik",
      summary: "Developed a cross-platform pet services booking app, recognized as a Top 35 regional finalist in the Philippine Startup Challenge 7.",
      linkPreview: "/",
      linkSource: "https://github.com/chadjhin/gfs",
      image: "/PEtik_Web.png",
    },
    {
      name: "CCICT LMS",
      summary: "Developed a centralized web and mobile content management system to streamline learning material distribution for students and instructors at Consolatrix College of Toledo City.",
      linkPreview: "/",
      linkSource: "/",
      image: "/CCTC-LMS.png",
    },
    {
      name: "Prince Hardware Card System",
      summary: "Developed a web-based customer loyalty platform for Prince Hardware, automating record-keeping and point-based reward management for improved customer retention.",
      linkPreview: "/",
      linkSource: "https://github.com/TheoRhytical/prince-hardware",
      image: "/prince_picture.png",
    },
    {
      name: "Motorcycle Short Circuit Alert System",
      summary: "Designed and implemented an embedded monitoring system for motorcycle electrical safety, utilizing real-time sensor integration to detect short circuits and trigger immediate user alerts.",
      linkPreview: "/",
      linkSource: "https://github.com/mandotV/Arduino_Short-Circuit-Indicator",
      image: "/tuburan-proj.jpg",
    }
  ],
  about: {
    description: `
      Hi, I’m Osmand. I believe that technology is at its best when it’s both powerful and invisible—doing the heavy lifting while providing a seamless experience for the user. 
      With a deep background in Full-Stack Web and Mobile development, I have spent years transforming complex business requirements into intuitive ERP systems and innovative applications. 
      My work spans the full development lifecycle, from software architecture to hardware integration, always with a commitment to building products that are as secure and scalable as they are creative.
    `,
    image: "/pickleball_pic.jpg",
  },
};

// #5755ff
