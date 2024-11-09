import {
  mobile,
  backend,
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
  ytclone,
  swabhav,
  chatbot,
  tripguide,
  kasakaimumbai,
  threejs,
  portfolio,
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
    title: "React.JS Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: "Golang Developer",
    icon: backend,
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
    title: "Swabhav Tech Labs",
    company_name: "Full Stack Developer",
    icon: swabhav,
    iconBg: "#fffff",
    date: "June 2023 - August 2024",
    points: [
      "Worked as a full stack developer creating several pages/components and backend development.",
      "Made the frontend and backend of the assignment component and also login components using Angular js",
      "Made the entire BD-Login which consisted of 5 pages and also made the Backend for the those pages using Golang. Manged thier database as well using MYSQL.",
      "Made an end to end responsive website Known as swabhav.ai for the company.",
      "Also made several pages on the Swabhav techlabs website. Revamped fixed serval bugs on that website.",
      "Worked on various technologies such as GoLang, AngularJS, MySQL, HTML, JS, CSS, Python etc."
    ],
  },
  {
    title: "Kasa Kai Mumbai",
    company_name: "Full Stack Developer",
    icon: kasakaimumbai,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - May 2022",
    points: [
      "Worked closely with the team to come up with a good website design.",
      "Handled both the frontend and backend. Using tech stack such as MySQL, ReactJS and JavaScript.",
      "Added a smooth and functioning payment gateway.",
    ],
  }
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
    name: "Wit AI - Chatbot",
    description:
      "Developed a chatbot using Wit.ai by Meta, integrated with Slack and Telegram via Golang. This solution enhances user experience with seamless interactions. Users can query the Telegram bot by sending /ask followed by their question, such as /ask who is the prime minister of India?.",
    tags: [
      {
        name: "Golang",
        color: "blue-text-gradient",
      },
      {
        name: "Wit.ai",
        color: "green-text-gradient",
      },
      {
        name: "wolfram",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Sanjeev2021/wit-ai-telegram",
  },
  {
    name: "Youtube Clone",
    description:
      "Built a YouTube-like application using ReactJS, CSS3, and Rapid API to deliver a familiar interface and user experience. Integrated Rapid API to enable dynamic video content fetching and combined it with custom CSS for a visually appealing and responsive UI, effectively replicating YouTube's feel and functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ytclone,
    source_code_link: "https://sanjeev-youtube-clone.netlify.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "Created a dynamic and interactive portfolio website using Next.js, incorporating Framer Motion for animations, Tailwind CSS for styling, and Three.js for 3D graphics, resulting in a visually engaging and responsive online presence.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
