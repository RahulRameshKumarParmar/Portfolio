import { Container, Row, Col } from 'react-bootstrap';
import './ProjectSection.css';
import { useState } from 'react';

export default function ProjectSection() {
    const projectData = [
        {
            sequence: "01",
            title: "To Do List",
            imgSrc: "./To-Do-List Screenshots/Screenshot (315).png",
            imgAlt: "To Do List Thumbnail",
            technology: ["JavaScript", "FireBase", "Bootstrap", "CSS", "HTML"],
            description: "A To Do List Project where users can create projects where tasks can be added with the remaining days information.",
            projectLink: "https://todoso.netlify.app/",
            codeLink: "https://github.com/RahulRameshKumarParmar/To-Do-List"
        },

        {
            sequence: "02",
            title: "Weather App",
            imgSrc: "./Weather_App Screenshots/Screenshot (297).png",
            imgAlt: "Weather App Thumbnail",
            technology: ["React JS", "JavaScript", "Bootstrap", "CSS", "HTML"],
            description: "A simple weather project displays data when the user searches for the city.",
            projectLink: "https://weatherinfodata.netlify.app/",
            codeLink: "https://github.com/RahulRameshKumarParmar/Weather_App"
        },

        {
            sequence: "03",
            title: "Mini Ecommerce",
            imgSrc: "./Mini-Ecommerce/Screenshot (304).png",
            imgAlt: "Mini Ecommerce Thumbnail",
            technology: ["React JS", "JavaScript", "Bootstrap", "CSS", "HTML"],
            description: "A small ecommerce website where different categories of products are available through an API, and users can select the category they want to purchase from.",
            projectLink: "https://shopfirstecommerce.netlify.app/",
            codeLink: "https://github.com/RahulRameshKumarParmar/Mini-Ecommerce"
        }
    ]

    const [expanded, setExpanded] = useState(false);
    const [projectId, setProjectId] = useState("");
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
                                    <img className='projectThumbnail' src={data.imgSrc} alt={data.imgAlt} />
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