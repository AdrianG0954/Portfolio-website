import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  c,
  c2,
  python,
  git,
  meta,
  dsa,
  software_eng,
  shopify,
  java,
  gol,
  calc,
  feedback,
  algo_vis,
  GOL_vid,
  calculator_vid,
  google_logo,
  uconn_logo,
  tutor,
  path,
  gdsc,
  bootstrap,
  django,
  nodejs,
  net,
  springboot,
  syf,
  mongodb,
  mysql,
  jira,
  bitbucket,
  figma,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Front end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologiesLanguages = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: c2,
  },
];

const backendTools = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: ".NET",
    icon: net,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },

];


const technologiesTools = [
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Bitbucket",
    icon: bitbucket,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Synchrony Financial",
    icon: syf,
    iconBg: "#383E56",
    date: "Summer 2024 - Present",
    points: [
      "Collaborated with a team of developers to design and implement new features for the company's website, enhancing user experience and functionality.",
      "Developed and maintained codebase, ensuring high performance and reliability of the website.",
      "Worked closely with product managers and designers to create user-friendly interfaces and intuitive navigation.",
      "Participated in code reviews and testing to identify and resolve issues, ensuring high-quality code and optimal performance.",
    ],
  },
  {
    title: "Google Developer Student Club - Algorithmic Problem-Solving Mentor",
    company_name: "University of Connecticut",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Fall 2023 - Present",
    points: [
      // I hosted Biweekly leetcode sessions to help students improve their problem-solving skills.
      "Hosted biweekly leetcode sessions to help students improve their problem-solving skills.",
      "Collaborated with fellow mentors to create a welcoming and inclusive environment for students to learn and grow.",
      "Worked with students to develop their problem-solving skills and improve their understanding of the course material.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "",
    icon: software_eng,
    iconBg: "#383E56",
    date: "Fall 2022 - Present",
    points: [
      "Collaborated with fellow students and CS professor, Hasan Baig, to bridge the gap between hardware and software using React.",
      "Seamlessly integrated hardware and software components to create a dynamic platform for interacting with arduino boards virtually.",
      "Under the guidance of Professor Hasan Baig, explored innovative ways to enhance hardware-software interaction and user engagement.",
      "The project underscores a commitment to experiential learning and hands-on application, offering valuable insights into real-world technology integration.",
    ],
  },
  {
    title: "Computer Science Tutor",
    company_name: "University of Connecticut",
    icon: tutor,
    iconBg: "#383E56",
    date: "Fall 2023 - Present",
    points: [
      "Students perform better in their classes when they have access to tutoring. As a tutor, I help students understand the course material and develop their problem-solving skills.",
      "Demonstrated a deep understanding of fundamental data structures, such as arrays, linked lists, stacks, queues, trees, and graphs.",
      "Tailored tutoring sessions to individual student needs, identifying weak areas and providing targeted guidance and practice to improve their skills.",
      "Coached students in developing strong problem-solving skills, breaking down complex coding challenges into manageable steps for systematic resolution.",
    ],
  },
  {
    title: "UConn CS Teaching Assistant",
    company_name: "University of Connecticut",
    icon: uconn_logo,
    iconBg: "#383E56",
    date: "Fall 2023 - Present",
    points: [
      "Collaborated closely with the course instructor to facilitate engaging and informative coding exercises, helping students develop a strong grasp of the fundamental principles of programming.",
      "Held regular office hours, providing personalized guidance to students as they worked through coding assignments, troubleshooting issues, and offering explanations that reinforced their understanding of the course material.",
      "Played a pivotal role in assessing student work by thoroughly reviewing assignments, projects, and code submissions. Offered constructive feedback and suggestions, assisting students in refining their coding techniques and problem-solving strategies.",
      "Work with students to develop their problem-solving skills and improve their understanding of the course material.",
    ],
  }, 
];

const testimonials = [
  {
    testimonial:
      "Adrian is always passionate about learning and exploring new ideas. Based on my experience as a direct mentor, I would highly recommend Adrian to any organization. ",
    designation: "Hasan Baig - Assistant Professor in Residence",
    company: "University of Connecticut",
    image: feedback,
  },
];

const projects = [
  {
    name: "Game of Life",
    description:
      "The Game of Life, devised by mathematician John Conway in 1970, is a captivating and widely studied cellular automaton. It is played on a two-dimensional grid consisting of an array of square cells, each of which can exist in one of two states: alive or dead.",
    tags: [
      {
        name: "C Sharp",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
    ],
    image: GOL_vid,
    source_code_Link: "https://github.com/AdrianG0954/Game-Of-Life",
    link: "toDownload/GOL.zip",
  },
  // {
  //   name: "Algorithm Visualizer",
  //   description:
  //     "A tool that uses visuals to demonstrate how algorithms work. By providing a graphical representation of the algorithm's execution, it allows users to observe each step and gain a deeper understanding of the algorithmic concepts at play.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Git",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: algo_vis,
  //   source_code_Link: "https://github.com/AdrianG0954/Algorithm-visualizer",
  //   link: "toDownload/algo_visual.zip",
  // },
  {
    name: "Calculator",
    description:
      "a calculator using C++ and wxWidgets, a versatile GUI framework. It provides a user-friendly interface for basic arithmetic operations and advanced mathematical functions. The wxWidgets framework ensures a smooth platform experience for users.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "wxWidgets",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: calculator_vid,
    source_code_Link: "https://github.com/AdrianG0954/Calculator",
    link: "toDownload/Calculator.zip",
  },
  {
    name: "Algorithm Visualizer UPDATED",
    description:
      "W.I.P. Originally built with Pygame for sorting algorithms, I'm now revamping it using React. Stay tuned for more updates. Link is to original project.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: path,
    source_code_Link: "https://github.com/AdrianG0954/Algorithm-visualizer"
  },
];

export { services, experiences, testimonials, projects, technologiesTools, technologiesLanguages, backendTools };
 