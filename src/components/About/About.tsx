import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import { useEffect, useState } from 'react';
import skillDetails, {Skill} from './SkillDetails';

export default function About() {

    const Text: string = "I'm Rahul Parmar, a passionate front-end developer with a focus on creating responsive and user-friendly web interfaces. Currently I'm improving my skills in React and working on personal projects to sharpen my problem-solving abilities.";

    const [displayText, setDisplayText] = useState<string>("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < Text.length) {
                setDisplayText(Text.slice(0, i));
                i++;
            }
            else {
                clearInterval(timer);
            }

        }, 50)
        return () => clearInterval(timer);
    }, [])

    return (
        <div>
            <Container fluid className='aboutContainer'>
                <div className='content-wrapper px-4'>
                    <Row>
                        <Col xs={12}>
                            <div className='text-center mt-5'>
                                <h2 className='aboutHeading'>ABOUT ME</h2>
                                <p className='roleTitle'>Passionate Front End Developer</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='profileIntroBox'>
                        <Col xs={12} md={6} className="glow-section">
                            <div className="glow-circle">
                                <img className='profileImage' src="profile.jpg" alt="Profile Picture" />
                            </div>
                            <div className="label">
                                <h2>Rahul Parmar</h2>
                                <p>Frontend Developer</p>
                            </div>
                        </Col>

                        <Col xs={12} md={6} className='introBox'>
                            <div>
                                <p className='introduction'>{displayText}</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {skillDetails.map((data: Skill, value: number) => {
                            return (
                                <Col xs={12} md={6} lg={4} key={value}>
                                    <div className='skillBox'>
                                        <div className='skillLogoBox' style={{ backgroundColor: data.bg, boxShadow: data.bs }}>
                                            <div className='skillLogo'>{data.img}</div>
                                        </div>
                                        <div>
                                            <h3 className='skillHeading'>{data.skillName}</h3>
                                            <p className='skillDescription'>{data.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Container>
        </div>
    )
}
