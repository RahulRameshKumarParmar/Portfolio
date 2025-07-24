import { Col, Row } from "react-bootstrap";
import "./Project.css";
import ScrollToTop from "../Scroll To Top/ScrollToTop";

export default function Project1() {
    return (
        <Row>
            <ScrollToTop />
            <Col xs={12} md={6}>
                <Row className="p1Box">
                    <h2 className="p1Title">To Do List</h2>
                    <p className="p1Des">A To Do List Project where users can create projects where tasks can be added with the remaining days information.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <a className="liveDemo" href="https://todoso.netlify.app/" target="_blank">🔗Live Demo</a>
                        <a className="liveDemo" href="https://github.com/RahulRameshKumarParmar/To-Do-List" target="_blank">📂Code</a>
                    </div>
                </Row>
                <Row>
                    <h3 className="desktopVersion">Desktop Version</h3>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./To-Do-List Screenshots/Screenshot (315).png" alt="To Do List Screenshots" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./To-Do-List Screenshots/Screenshot (307).png" alt="To Do List Screenshots" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./To-Do-List Screenshots/Screenshot (312).png" alt="To Do List Screenshots" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./To-Do-List Screenshots/Screenshot (314).png" alt="To Do List Screenshots" />
                    </Col>
                </Row>

            </Col>
            <Col xs={12} md={6} className="mobileBox">
                <h2 className="mobileVersion w-100">Mobile Version</h2>
                <img className="mobileScreenshots" src="./To-Do-List Screenshots/Mobile Screenshots (To-Do-List)/1000202260.jpg" alt="To Do List Screenshots" />
                <Row className="mt-5">
                    <Col xs={12} className="d-flex justify-content-center">
                        <img className="mobileScreenshots" src="./To-Do-List Screenshots/Mobile Screenshots (To-Do-List)/1000202256.jpg" alt="To Do List Screenshots" />
                    </Col>
                </Row>
                <Row>
                    <h4 className="techUsedHeading">Technologies Used:</h4>
                    <div className="d-flex justify-content-center gap-3">
                        <img className="technologyUsedLogo" src="./firebase-console-logo.png" alt="Firebase Console Logo" />
                        <img className="technologyUsedLogo" src="./Bootstrap_logo.svg.png" alt="BootStrap Logo" />
                        <img className="technologyUsedLogo" src="./JS_logo.png" alt="JavaScript Logo" />
                        <img className="technologyUsedLogo" src="./CSS3_logo.png" alt="CSS Logo" />
                        <img className="technologyUsedLogo" src="./HTML5_logo.png" alt="HTML Logo" />
                        <img className="technologyUsedLogo" src="./github logo.png" alt="GitHub Logo" />
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <p className="logoNote"><b>Note:</b> Logos are property of their respective owners and used here only to indicate technologies used.</p>
                    </div>
                </Row>
            </Col>
        </Row>
    )
}
