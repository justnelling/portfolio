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
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  pandas,
  tensorflow,
  django,
  flask,
  nextjs,
  reluvate,
  visual_artist,
  github,
  artstation,
  linkedin,
  shirt_designer,
  dalle_clone,
  ecom_stripe,
  metaversus,
  leetcode,
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

export const socials = [
  {
    id: "github",
    icon: github,
    link: "https://github.com/nellingDev",
  },
  {
    id: "leetcode",
    icon: leetcode,
    link: "https://leetcode.com/l3o_ranger/",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/lioneldengzh/",
  },
  {
    id: "artstation",
    icon: artstation,
    link: "https://www.artstation.com/context_machine",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Visual Artist",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Reluvate Technologies",
    icon: reluvate,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Crypto platform finance reconciliation: Implemented the automation of client's financial recon and compliance, reducing their monthly reconciliation time from 2-3 days to 20 minutes. Technologies used were Python, Pandas, Webscraping, CRON.",
      "Computer vision arboris project: Developed computer vision model to preemptively identify tree decay and drop hazards, with >0.7 F1 score and high precision. Responsible for researching and training Tensorflow models and optimizing datasets. Created custom UI for client's output, sharpening frontend skills using ReactJS, ViteJS, and Typescript. ",
      "Startup culture taught me to work cohesively in a team with git, maintain performant and neat code.",
      "Learnt to take ownership of my code, communicate and perform consistent code reviews with team leads, while implementing rapid solution amidst Agile workflow.",
      "Had to communicate and create clear documentation for clients and their tech team, reinforcing my knowledge across the full stack and lifecycle of our projects.",
    ],
  },
  {
    title: "Multi-disciplinary Artist",
    company_name: "Freelance",
    icon: visual_artist,
    iconBg: "#E6DEDD",
    date: "2017 - now",
    points: [
      "Multi-disciplinary artist working with 3D graphics, game engines, AI and digital media.",
      "Freelance visual producer, 2021-now: producing visual media, live VJ-ing for local club nights such as Endless Return, Ciel, Orbit, and other parties, using technologies such as Resolume, Touchdesigner and Blender.",
      "Video game development with Hand-and-Sword (Shanghai), 2022-now:  Video game around personal mythologies using Blender and Unreal Engine.",
      "Video installation for ‘Solo-Show’ gallery, 2022: video works  utilizing Stable Diffusion text2image generation and Reface facial remapping technology. Installation debuted across 3 cities (Antwerp, Belgium, Paris).",
      "Music Video for Female Wizard (Australia), 2021: ‘Post-rejection' via Heavy Machinery Records utilizing TouchDesigner’s node system and Premiere Pro.",
      "“Above the Surface” AR/VR installation for Studio Above&Below (London), 2018: Learned Touchdesigner, AR/VR production. Conceptualized and wrote the accompanying publication. Commissioned by Somerset House, seen by >2000 people.",
      "Working across various media and fields, from 3D to video art to music-making, put me in touch with software that led to my current passion in code and development.",
      "I believe that radical innovation arises from the cross-pollination of these disciplines, where the engineering of code meets the creativity of art.",
    ],
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
    name: "DALL-E Clone",
    description:
      "A clone of OpenAI's popular DALL-E image generation web app. MERN (MongoDB, ExpressJS, React, NodeJS) app with access to OpenAI API, Cloudinary to store the images on the cloud, and TailwindCSS for styling.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "openAI API",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "orange-text-gradient",
      },
    ],
    image: dalle_clone,
    github_link: "https://github.com/magnumdatura/DALL-E_clone",
    deployment_link: "https://dall-e-clone-bice.vercel.app/",
  },
  {
    name: "Ecommerce Store",
    description:
      "An ecommerce mock-up selling audio-electronics. Fullstack NextJS app with Sanity as online Content-Management-System, and integrated with Stripe payments.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Sanity",
        color: "orange-text-gradient",
      },
    ],
    image: ecom_stripe,
    github_link: "https://github.com/magnumdatura/ecommerce_sanity_stripe",
    deployment_link: "https://ecommerce-sanity-stripe-lovat-eight.vercel.app/",
  },
  {
    name: "ThreeJS Custom Shirt Designer",
    description:
      "Web app that allows users to design custom t-shirt designs using OpenAI's DALL-E API or user upload of their own images, rendering the results via React and ThreeJS. Styling is also done through TailwindCSS.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "openAI API",
        color: "orange-text-gradient",
      },
    ],
    image: shirt_designer,
    github_link:
      "https://github.com/magnumdatura/threejs_custom_shirt_designer",
    deployment_link: "https://threejs-custom-shirt-designer-alpha.vercel.app/",
  },
  {
    name: "Web3 Metaverse",
    description:
      "A stylish Web3 platform built with NextJS, Framer Motion, and TailwindCSS to emulate the cutting edge of web design.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    github_link: "https://github.com/magnumdatura/metaversus_nextjs",
    deployment_link: "https://metaversus-nextjs-gamma.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
