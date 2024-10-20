import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Django",
    icon: creator,
  },
  {
    title: "Spring Boot",
    icon: creator,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE - 1 @ Frontend Developer",
    company_name: "3Insys, California",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug-2022 - Present",
    points: [
"Developed innovative solutions using React.js, React Native, TypeScript, and Material UI, delivering 5+ key features that improved performance and user engagement across applications",
  "Built and maintained Payg mobile and web applications used by 10,000+ customers for seamless electric vehicle (EV) charging, improving user satisfaction by 15% based on feedback and analytics.",
  "Designed and implemented the Eves Admin Panel, a central management system for monitoring 1000+ EV chargers, reducing operational overhead by 20% through improved efficiency.",
  "Developed XSI (Cross System Integrator) from scratch, integrating 20+ enterprise systems with pre-built tools and adapters, enabling 99.9% uptime and reducing integration time by 40%.",
  "Engineered XSM (Cross Security Manager), applying multi-factor authentication (MFA) and fraud detection, securing 5000+ daily logins and reducing unauthorized access incidents by 30%."
    ],
  },
  {
    title: "Full Stack Developer (Intern)",
    company_name: "Aurora e-Labs Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul-2022 to Feb-2023",
    points: [
      "Developed innovative solutions for company products using React.js, TypeScript, Node.js, and Material UI, enhancing functionality and achieving project objectives",
      "Created and integrated Proof of Concepts (POCs) into real-worldprojects, demonstrating feasibility and driving successful implementation of new features.",
"Collaborated with cross-functional teams to ensure alignment on project goals, resulting in a 15% increase in project delivery efficiency.",
    ],
  },
  {
    title: "SDE - Full-Stack Web Developer (Intern)",
    company_name: "TalentSpotify",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul-2022 to Feb-2023",
    points: [
      "Developed a full-stack web application from scratch using industry-adopted technologies and frameworks, resulting in a 30% reduction in development time compared to previous projects",
"Engineered the frontend and backend, utilizing various libraries to create an intuitive user interface, improving user engagement by25%",
"Leveraged behavior science (Psychology) and data science (machine learning and AI) to create personalized user experiences, improving user retention by 20%."

    ],
  },
  {
    title: "Full-Stack Web Developer (Intern)",
    company_name: "Illumine Knowledge Resources",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
"Developed 3+ full-stack web applications to analyze and process data for various clients, improving data-driven decision-making capabilities",
"Designed and implemented a Railway Analytics Platform using Django and Data Science for backend processing, optimizing data management and reporting workflows.",
"Utilized React.js, Bootstrap, and CSS for frontend development, delivering responsive and user-friendly interfaces that increased client engagement by 20%."]
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce Website",
    description:
"I created an eCommerce website with React.js, Node.js, and MongoDB, featuring product ordering and voice search, deployed on AWS EC2 using Docker and Nginx" ,
   tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sainth-stack/Meta-Ecommerce",
  },
  {
    name: "Recipes Hub | Web Development",
    description:
"It is a web application that provides nutrition information and cooking instructions for various foods and recipes, featuring user login, lazy loading, search options, and social media sharing",    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://recipeshub.simuleduco.com/",
  },
  {
    name: "Chat Messanger Using Sockets",
    description:"I developed mobile and web applications, including a live chat app with WebSockets for real-time messaging, utilizing React.js and Node.js, deployed on AWS EC2 with Docker and Nginx",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sainth-stack/Latest_Chat",
  },
  {
    name: "AI Data Processing",
    description:"I developed an AI agent model similar to ChatGPT using React.js, Django, and PostgreSQL, integrated with OpenAI, and deployed on AWS EC2 with Docker and Nginx.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sainth-stack/akkio-frontend",
  },
  {
    name: "Agentic AI Builder",
    description:"I created a dynamic AI builder using the Lyzr Agent API to configure LLMbased agents, simplifying agent setup and task management for personalized AI automation.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sainth-stack/lyzer-frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
