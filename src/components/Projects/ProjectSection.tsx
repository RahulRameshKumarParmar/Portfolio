import { Container, Row, Col } from 'react-bootstrap';
import './ProjectSection.css';
import { useState } from 'react';

interface ProjectDateType {
    sequence: string,
    title: string,
    imgSrc: string,
    imgAlt: string,
    technology: string[],
    description: string,
    projectLink: string,
    codeLink: string
}

export default function ProjectSection() {

    const projectData: ProjectDateType[] = [
        {
            sequence: "01",
            title: "To Do List",
            imgSrc: "./To-Do-List Screenshots/Screenshot (314).png",
            imgAlt: "To Do List Thumbnail",
            technology: ["JavaScript", "FireBase", "Bootstrap", "CSS", "HTML"],
            description: "A To Do List Project where users can create projects where tasks can be added with the remaining days information.",
            projectLink: "https://todoso.netlify.app/",
            codeLink: "https://github.com/RahulRameshKumarParmar/To-Do-List"
        },

        {
            sequence: "02",
            title: "Ticket Management",
            imgSrc: "./Ticket-Management-System Screenshots/taasket-thumbnail.jpg",
            imgAlt: "Ticket Management System Thumbnail",
            technology: ["React JS", "CSS", "HTML"],
            description: "The Ticket Management System is a React- based application for managing customer support or internal task tickets. Users can create, view, and update tickets all within an intuitive, drag - and - drop interface.",
            projectLink: "https://taasket.netlify.app/",
            codeLink: "https://github.com/RahulRameshKumarParmar/Ticket-Management-System"
        },

        {
            sequence: "03",
            title: "String Generator",
            imgSrc: "./Random String Generator/Screenshot (684).png",
            imgAlt: "Random String Generator Thumbnail",
            technology: ["React JS", "Typescript", "Tailwind", "HTML"],
            description: "A Random String Generator app can select string length and choose character types. It provides an option to save generated strings allowing users to view their string history even after page reloads.",
            projectLink: "https://stringmaker.netlify.app/",
            codeLink: "https://github.com/RahulRameshKumarParmar/Random-String-Generator"
        }
    ]

    const [expanded, setExpanded] = useState<boolean>(false);
    const [projectId, setProjectId] = useState<string>("");

    return (
        <div>
            <Container fluid className='projectBox'>
                <Row>
                    <Col xs={12}>
                        <div className="projectHeadingWrapper">
                            <h2 className='projectHeading'>PROJECTS</h2>
                            <h2 className="projectReflection">PROJECTS</h2>
                        </div>
                    </Col>
                </Row>
                <Row className='projectRow'>
                    {projectData.map((data, value) => {
                        return (
                            <Col xs={12} md={6} lg={4} className='projectCol' key={value}>
                                <div className='projectCard'>
                                    <div className='projectThumbnailBox'>
                                        <img loading='lazy' className='projectThumbnail' src={data.imgSrc} alt={data.imgAlt} />
                                    </div>
                                    <div className='projectDetails'>
                                        <div className='projectTitle'>
                                            <span className='projectSequence'>{data.sequence}</span>
                                            <span className='projectName'>{data.title}</span>
                                        </div>
                                        <div className='projectTechnologyBox'>
                                            {data.technology.map((tech, value) => {
                                                return (
                                                    <span key={value} className='projectTechnology'>{tech}</span>
                                                )
                                            })}
                                        </div>
                                        <div className='projectDescriptionBox'>
                                            <p
                                                className={`projectDescription ${(expanded && data.sequence === projectId) ? "expanded" : "clamped"}`}>{data.description}
                                            </p>
                                            <span className='readMore' onClick={() => {
                                                setProjectId(data.sequence);
                                                setExpanded(!expanded);
                                            }}>
                                                {(expanded && data.sequence === projectId) ? "Show Less" : "Read More"}
                                            </span>
                                        </div>
                                        <div>
                                            <div className='linkBox'>
                                                <a className='viewProjectLink' href={data.projectLink} target='_blank' rel="noopener noreferrer">View Project</a>
                                                <a className='viewCodeLink' href={data.codeLink} target='_blank' rel="noopener noreferrer">View Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}