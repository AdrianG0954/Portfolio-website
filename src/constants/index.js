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
  c,
  c2,
  c_sharp,
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
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: c2,
  },
  {
    name: "C#",
    icon: c_sharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
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
    title: "CSE 1010 - Intro to CS Teaching Assistant",
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
  {
    title: "Google Sentiment Analysis",
    company_name: "University of Connecticut",
    icon: google_logo,
    iconBg: "#383E56",
    date: "Summer 2023",
    points: [
      " Enhanced sentiment analysis algorithms for accuracy, involving evaluation and implementation. Extracted key information and sentiments from stock-related articles for valuable insights.",
      "Yahoo Finance Stock Sentiment Analysis: Collaborated effectively with Yahoo Finance to analyze stock sentiments using data analysis techniques. This involved extracting insights from market trends and investor sentiment.",
      "Managed live development projects, coordinating tasks and timelines. Translated data insights into actionable recommendations, catering to investors and stakeholders.",
      "Collaborated effectively with multidisciplinary teams, fostering teamwork and dynamic solutions. Gained hands-on insight into financial markets, stocks, and investor sentiment through practical data analysis.",
    ],
  },
  {
    title: "Google Solutions Challenge 2023",
    company_name: "University of Connecticut",
    icon: uconn_logo,
    iconBg: "#383E56",
    date: "Spring 2023",
    points: [
      "Responded to a challenge presented by Governor Ned Lamont to create a translation service benefiting Stamford Public School teachers and non-native English-speaking students.",
      "Collaborated closely with educators and fellow team members, ensuring the translation service's design aligned with real-world classroom needs and facilitating smooth implementation.",
      "Contributed to the enhancement of teacher-student interaction by streamlining information exchange, enabling teachers to provide clearer instructions and fostering more engaged learning experiences.",
      "Worked with a team  to experience collaborative software development, version control, and project management.",
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
  {
    name: "Algorithm Visualizer",
    description:
      "A tool that uses visuals to demonstrate how algorithms work. By providing a graphical representation of the algorithm's execution, it allows users to observe each step and gain a deeper understanding of the algorithmic concepts at play.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: algo_vis,
    source_code_Link: "https://github.com/AdrianG0954/Algorithm-visualizer",
    link: "toDownload/algo_visual.zip",
  },
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
      "Originally built with Pygame for sorting algorithms, I'm now revamping it using React. This work-in-progress will soon showcase sorting and pathfinding algorithms in an interactive way. Stay tuned for more updates as I continue to enhance and refine this exciting project!",
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
  },
];

export { services, technologies, experiences, testimonials, projects };
