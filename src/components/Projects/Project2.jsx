import { Col, Row } from "react-bootstrap";
import "./Project.css";
import ScrollToTop from "../Scroll To Top/ScrollToTop";

export default function Project1() {
    return (
        <Row>
            <ScrollToTop />
            <Col xs={12} md={6}>
                <Row className="p1Box">
                    <h2 className="p1Title">Weather App</h2>
                    <p className="p1Des">A simple weather project displays data when the user searches for the city.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <a className="liveDemo" href="https://weatherinfodata.netlify.app/" target="_blank">🔗Live Demo</a>
                        <a className="liveDemo" href="https://github.com/RahulRameshKumarParmar/Weather_App" target="_blank">📂Code</a>
                    </div>
                </Row>
                <Row>
                    <h3 className="desktopVersion">Desktop Version</h3>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./Weather_App Screenshots/Screenshot (296).png" alt="Weather App Screenshots" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./Weather_App Screenshots/Screenshot (297).png" alt="Weather App Screenshots" />
                    </Col>
                </Row>
                <Row className="d-none d-md-block">
                    <h4 className="techUsedHeading">Technologies Used:</h4>
                    <div className="d-flex align-items-center justify-content-center ms-4 gap-3">
                        <img className="technologyUsedLogo" src="./logo192.png" alt="React JS Logo" />
                        <img className="technologyUsedLogo" src="./Bootstrap_logo.svg.png" alt="BootStrap Logo" />
                        <img className="technologyUsedLogo" src="./JS_logo.png" alt="JavaScript Logo" />
                        <img className="technologyUsedLogo" src="./CSS-Logo.png" alt="CSS Logo" />
                        <img className="technologyUsedLogo" src="./HTML5_logo.png" alt="HTML Logo" />
                        <img className="technologyUsedLogo" src="./github logo.png" alt="GitHub Logo" />
                    </div>
                    <div className="mt-4 ms-4 d-flex justify-content-center">
                        <p className="logoNote"><b>Note:</b> Logos are property of their respective owners and used here only to indicate technologies used.</p>
                    </div>
                </Row>
            </Col>
            <Col xs={12} md={6} className="mobileBox">
                <h2 className="mobileVersion w-100">Mobile Version</h2>
                <img className="mobileScreenshots" src="./Weather_App Screenshots/Mobile Screenshots/1000203266.jpg" alt="Weather App Screenshots" />
                <Row className="mt-5">
                    <Col xs={12} className="d-flex justify-content-center">
                        <img className="mobileScreenshots" src="./Weather_App Screenshots/Mobile Screenshots/1000203267.jpg" alt="Weather App Screenshots" />
                    </Col>
                </Row>
                <Row className="d-md-none">
                    <h4 className="techUsedHeading">Technologies Used:</h4>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <img className="technologyUsedLogo" src="./logo192.png" alt="React JS Logo" />
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
