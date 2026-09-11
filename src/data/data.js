import { FaCss3Alt, FaGitAlt, FaTwitter } from "react-icons/fa6";
import { RiTailwindCssLine, RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaJava, FaAws,FaGit, FaLinkedin, FaGithub,FaReact, FaNodeJs   } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase, SiPostgresql, SiDocker, SiTypescript, SiCplusplus } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiEjs,SiMysql,SiShadcnui,SiSanity, SiPostman, SiIntellijidea } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { TbBrandVscode } from "react-icons/tb";
import { RxVercelLogo } from "react-icons/rx";
import {  } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import homePage from '../assets/home/Screenshot From 2026-09-11 10-56-08.png'
import blogList1 from '../assets/blog list/filter-blog.png'
import blogList2 from '../assets/blog list/Screenshot From 2026-09-11 10-56-41.png'
import blogList3 from '../assets/blog list/Screenshot From 2026-09-11 10-56-56.png'
import blogDetails1 from '../assets/blog details/Screenshot From 2026-09-11 10-58-31.png';
import blogDetails2 from '../assets/blog details/Screenshot From 2026-09-11 10-58-47.png';
import blogListadmin from '../assets/admin panel/blog-list-admin.png';
import createBlogAdmin from '../assets/admin panel/create-blog.png';
import userCommentsAdmin from '../assets/admin panel/user-comments-admin.png'
import userListAdmin from '../assets/admin panel/user-list-admin.png'
import filterblog from '../assets/blog list/filter-blog.png'
// Experience 

export const internshipTechUsed = [
    {
        label: 'React',
        icon: FaReact,
        color: '#61dbfb'
    },
    {
        label: 'Next.js',
        icon: RiNextjsFill,
        color: '#fff'
    },
    {
        label: 'Node.js',
        icon: FaNodeJs,
        color: "green"
    },
    {
        label: 'Express.js',
        icon: SiExpress,
        color : ""
    },
    {
        label: 'Tailwind',
        icon: RiTailwindCssFill,
        color: "#61dbfb"
    },
    {
        label: 'MongoDB',
        icon: DiMongodb,
        color: "green"
    },
    {
        label: 'Typescript',
        icon: SiTypescript,
        color: "blue"
    },
    {
        label: 'Sanity',
        icon: SiSanity,
        color: "white"
    }
]

export const vgInfotecExp = [ 
    {
        label: 'React',
        icon: IoLogoReact,
        color: "#61dbfb"
    }, 
    {
        label: "Node Js",
        icon: FaNodeJs,
        color: "green"
    },
    { 
        label: "Express Js",
        icon: SiExpress,
        color : ""
    },
    {
        label: "MySQL",
        icon: SiMysql,
        color : "#F29111"
    },
    {
        label: "Ejs",
        icon: SiEjs,
        color : ""
    },
    {
        label: "Aws",
        icon: FaAws,
        color : "#FF9900"
    },
    {
        label: "Git",
        icon: FaGit,
        color : ""
    },
    {
        label: "Shadcn",
        icon: SiShadcnui,
        color : ""
    },
    {
        label: "Tailwind",
         icon: RiTailwindCssFill,
        color: "#61dbfb"
    },
    { 
        label: "Typescript",
         icon: SiTypescript,
        color: "#007acce"
    }
]
// Skills 
export const skillInfo = [
    {
        skillName: 'Core Java',
        icon: FaJava,
    },
    {
        skillName: 'JavaScript',
        icon: RiJavascriptFill,

    },
    {
        skillName: 'Next Js',
        icon: RiNextjsFill
    },
    {
        skillName: 'TypeScript',
        icon: BiLogoTypescript,

    },
    {
        skillName: 'React Js',
        icon: IoLogoReact,

    },
    {
        skillName: 'Redux',
        icon: TbBrandRedux
    },
    {
        skillName: "Aws",
        icon: FaAws
    },
    {
        skillName: 'Tailwind Css',
        icon: RiTailwindCssLine,

    },
    {
        skillName: 'MongoDB',
        icon: SiMongodb,

    },
    {
        skillName: 'Shadcn UI',
        icon: SiShadcnui,
    },
    {
        skillName : "MySQL",
        icon : SiMysql
    },
    {
        skillName: 'PostgreSQL',
        icon: SiPostgresql,
    },
    {
        skillName: 'Docker',
        icon: SiDocker,
    },
    {
        skillName: 'Node Js',
        icon: FaNode,

    },
    {
        skillName: 'Express Js',
        icon: SiExpress,

    },
    {
        skillName: 'Git',
        icon: FaGitAlt,

    },
    {
        skillName: 'FireBase',
        icon: SiFirebase,

    },
    {
        skillName: 'Sanity CMS',
        icon: SiSanity
    },
    {
        skillName: 'CSS3',
        icon: FaCss3Alt,

    },
    {
        skillName: 'HTML5',
        icon: TiHtml5,

    },
]

// Tools 
export const toolsIUse = [
    {
        skillName: 'Linux',
        icon: FcLinux,
    },
    {
        skillName: 'Vs Code',
        icon: TbBrandVscode,
    },
    {
        skillName: 'PostMan',
        icon: SiPostman,
    },
    {
        skillName: 'Vercel',
        icon: RxVercelLogo,
    },
    {
        skillName: 'Intellij Idea',
        icon: SiIntellijidea,
    },
];

// Footer links 

export const footerLinks = [
    {
        link: 'https://github.com/Rakesh-99',
        icon: FaGithub

    },
    {
        link: 'https://www.linkedin.com/in/rakesh-kumar-parida-b142081a9/',
        icon: FaLinkedin
    },

    {
        link: 'https://x.com/kumar_pari23020',
        icon: FaTwitter
    },

]


export const skillCategories = [
    {
        category: 'Languages',
        skills: [
            { skillName: 'C++', icon: SiCplusplus },
            { skillName: 'JavaScript', icon: RiJavascriptFill },
            { skillName: 'TypeScript', icon: BiLogoTypescript },
            { skillName: 'Core Java', icon: FaJava },
            { skillName: 'HTML5', icon: TiHtml5 },
            { skillName: 'CSS3', icon: FaCss3Alt },
        ],
    },
    {
        category: 'Frontend',
        skills: [
            { skillName: 'React Js', icon: IoLogoReact },
            { skillName: 'Next Js', icon: RiNextjsFill },
            { skillName: 'Redux', icon: TbBrandRedux },
            { skillName: 'Tailwind Css', icon: RiTailwindCssLine },
            { skillName: 'Shadcn UI', icon: SiShadcnui },
        ],
    },
    {
        category: 'Backend & Database',
        skills: [
            { skillName: 'Node Js', icon: FaNode },
            { skillName: 'Express Js', icon: SiExpress },
            { skillName: 'MongoDB', icon: SiMongodb },
            { skillName: 'MySQL', icon: SiMysql },
            { skillName: 'PostgreSQL', icon: SiPostgresql },
            { skillName: 'FireBase', icon: SiFirebase },
            { skillName: 'Sanity CMS', icon: SiSanity },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { skillName: 'Aws', icon: FaAws },
            { skillName: 'Docker', icon: SiDocker },
            { skillName: 'Git', icon: FaGitAlt },
        ],
    },
];

export const projects = [
    {
        _id: 121,
        projectTitle: 'Draftcode - Fullstack Blog App',
        projectDescription: 'blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Redux-toolkit for state management and Tailwind CSS for styling. The app includes features such as user authentication and authorization, an admin panel, light/dark theme switching, and the ability to comment on blog posts, like comments, search and sort blogs, and paginate the blog list',
        projectImages: [homePage, blogList2, blogList3, blogList1, blogDetails1, blogDetails2, blogListadmin, createBlogAdmin, userCommentsAdmin, userListAdmin, filterblog],
        techIcons: [
            {
                iconName: 'React.Js',
                icon: IoLogoReact,
                color: '#61dbfb'
            },
            {
                iconName: 'Tailwind',
                icon: RiTailwindCssLine,
                color: '#61dbfb'
            },
            {
                iconName: 'Redux',
                icon: TbBrandRedux,
                color: '#764abc'
            },

            {
                iconName: 'Express.Js',
                icon: SiExpress,
            },
            {
                iconName: 'Firebase',
                icon: SiFirebase,
                color: '#F6820D'
            },
            {
                iconName: 'MongoDB',
                icon: SiMongodb,
                color: '#4db33d'
            },
            {
                iconName: 'Node.Js',
                icon: FaNode,
                color: '#68a063'
            }
        ],
        liveLink: 'https://blog-draftcode.vercel.app/',
        source: 'https://github.com/Rakesh-99/draft-code'
    },
   
    {
        _id: 123,
        projectTitle: 'Dineflow - A food ordering platform',
        projectDescription: 'DineFlow is a restaurant management and food delivery platform . It manages From restaurant onboarding and menu management to order fulfillment and delivery tracking.The platform supports multiple user roles( User, Delivery Agent, Restaurant Owner ), location based restaurant discovery, online payments, and live order status updates.',
        projectImages: [],
         techIcons: [
            {
                iconName: 'React.Js',
                icon: IoLogoReact,
                color: '#61dbfb'
            },
            {
                iconName: 'Tailwind',
                icon: RiTailwindCssLine,
                color: '#61dbfb'
            },
            {
                iconName: 'Redux',
                icon: TbBrandRedux,
                color: '#764abc'
            },

            {
                iconName: 'Express.Js',
                icon: SiExpress,
            },
            {
                iconName: 'Firebase',
                icon: SiFirebase,
                color: '#F6820D'
            },
            {
                iconName: 'MongoDB',
                icon: SiMongodb,
                color: '#4db33d'
            },
            {
                iconName: 'Node.Js',
                icon: FaNode,
                color: '#68a063'
            }
        ],
        // liveLink: 'https://rakesh99.vercel.app/',
        source: 'https://github.com/Rakesh-99/dineflow'
    },
];


