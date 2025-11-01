import * as React from 'react';
import { FaReact, FaJs, FaGithub, FaPalette } from 'react-icons/fa';
import { SiBootstrap, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

export interface Skill {
    id: number;
    img: React.ReactElement;
    alt: string;
    skillName: string;
    description: string;
    bg: string;
    bs: string;
}

const skillDetails: Skill[] = [
    {
        id: 1,
        img: React.createElement(FaReact as React.ComponentType<any>, { color: 'white', size: 35 }),
        alt: 'React App Logo',
        skillName: 'React.js',
        description: 'Experience with component-based development, hooks, props, state, conditional rendering, and event handling, and React Router for page navigation.',
        bg: '#33a3ff',
        bs: '0 0 40px #33a3ff'
    },

    {
        id: 2,
        img: React.createElement(TbBrandRedux as React.ComponentType<any>, { color: 'white', size: 35 }),
        alt: 'Redux Logo',
        skillName: 'Redux',
        description: 'Basic understanding of state management and how data flows using store, actions, and reducers.',
        bg: '#764ABC',
        bs: '0 0 40px #764ABC'
    },

    {
        id: 2,
        img: React.createElement(FaJs as React.ComponentType<any>, { size: 35 }),
        alt: 'JavaScript Logo',
        skillName: 'JavaScript (ES6+)',
        description: 'Comfortable with core concepts like loops,functions, DOM manipulation, arrays, objects, and async/await, localStorage.',
        bg: 'orange',
        bs: '0 0 40px orange'
    },

    {
        id: 3,
        img: React.createElement(SiTypescript as React.ComponentType<any>, { size: 35 }),
        alt: 'TypeScript Logo',
        skillName: 'TypeScript',
        description: 'Working knowledge of TypeScript: comfortable with type annotations, interfaces, basic generics, and using TS in React.',
        bg: '#3178C6',
        bs: '0 0 40px #3178C6'
    },

    {
        id: 4,
        img: React.createElement(FaPalette as React.ComponentType<any>, { size: 35 }),
        alt: 'HTML & CSS Logo',
        skillName: 'HTML & CSS',
        description: 'Solid understanding of semantic HTML and modern CSS techniques including Flexbox and Grid for responsive layouts',
        bg: 'rgba(89, 241, 89, 0.9)',
        bs: '0 0 40px rgba(89, 241, 89, 0.9)'
    },
    {
        id: 4,
        img: React.createElement(RiTailwindCssFill as React.ComponentType<any>, { size: 35 }),
        alt: 'Tailwind Logo',
        skillName: 'Tailwind',
        description: 'Familiar with using utility classes for spacing, layout, visibility, and responsive design using breakpoints to create simple and adaptive web interfaces.',
        bg: '#38BDF8',
        bs: '0 0 40px #38BDF8'
    },

    {
        id: 5,
        img: React.createElement(SiBootstrap as React.ComponentType<any>, { size: 35 }),
        alt: 'Bootstrap Logo',
        skillName: 'Bootstrap',
        description: 'Used Bootstrap classes for quick, responsive UI development and modern component design',
        bg: 'rgba(219, 62, 233, 0.96)',
        bs: '0 0 40px rgba(219, 62, 233, 0.96)'
    },

    {
        id: 6,
        img: React.createElement(FaGithub as React.ComponentType<any>, { size: 35 }),
        alt: 'GitHub Logo',
        skillName: 'GitHub',
        description: 'Knowledge of repository setup, pushing projects, deleting files, and hosting sites via GitHub Pages',
        bg: 'rgba(11, 2, 12, 0.67)',
        bs: '0 0 40px rgba(11, 2, 12, 0.67)'
    }
]

export default skillDetails;