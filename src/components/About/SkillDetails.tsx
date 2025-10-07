import { FaReact, FaJs, FaGithub, FaPalette } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';

export interface Skill {
    id: Number;
    img: React.ReactNode;
    alt: string;
    skillName: string;
    description: string;
    bg: string;
    bs: string;
}

const skillDetails: Skill[] = [
    {
        id: 1,
        img: <FaReact color="white" size={35} />,
        alt: "React App Logo",
        skillName: "React.js",
        description: "Experience with component-based development, hooks, props, state, conditional rendering, and event handling, and React Router for page navigation.",
        bg: "#33a3ff",
        bs: "0 0 40px #33a3ff"
    },

    {
        id: 2,
        img: <FaJs size={35} />,
        alt: "JavaScript Logo",
        skillName: "JavaScript (ES6+)",
        description: "Comfortable with core concepts like loops,functions, DOM manipulation, arrays, objects, and async/await, localStorage.",
        bg: "orange",
        bs: "0 0 40px orange"
    },

    {
        id: 3,
        img: <FaPalette size={35} />,
        alt: "HTML & CSS Logo",
        skillName: "HTML & CSS",
        description: "Solid understanding of semantic HTML and modern CSS techniques including Flexbox and Grid for responsive layouts",
        bg: "rgba(89, 241, 89, 0.9)",
        bs: "0 0 40px rgba(89, 241, 89, 0.9)"
    },

    {
        id: 4,
        img: <SiBootstrap size={35} />,
        alt: "Bootstrap Logo",
        skillName: "Bootstrap",
        description: "Used Bootstrap classes for quick, responsive UI development and modern component design",
        bg: "rgba(219, 62, 233, 0.96)",
        bs: "0 0 40px rgba(219, 62, 233, 0.96)"
    },

    {
        id: 5,
        img: <FaGithub size={35} />,
        alt: "GitHub Logo",
        skillName: "GitHub",
        description: "Knowledge of repository setup, pushing projects, deleting files, and hosting sites via GitHub Pages",
        bg: "rgba(11, 2, 12, 0.67)",
        bs: "0 0 40px rgba(11, 2, 12, 0.67)"
    }
]

export default skillDetails;