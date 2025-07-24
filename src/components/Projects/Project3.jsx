import { Col, Row } from "react-bootstrap";
import "./Project.css";
import ScrollToTop from "../Scroll To Top/ScrollToTop";

export default function Project1() {
    return (
        <Row>
            <ScrollToTop />
            <Col xs={12} md={6}>
                <Row className="p1Box">
                    <h2 className="p1Title">Mini Ecommerce</h2>
                    <p className="p1Des">A small ecommerce website where different categories of products are available through an API, and users can select the category they want to purchase from.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <a className="liveDemo" href="https://shopfirstecommerce.netlify.app/" target="_blank">🔗Live Demo</a>
                        <a className="liveDemo" href="https://github.com/RahulRameshKumarParmar/Mini-Ecommerce" target="_blank">📂Code</a>
                    </div>
                </Row>
                <Row>
                    <h3 className="desktopVersion">Desktop Version</h3>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./Mini-Ecommerce/Screenshot (303).png" alt="Mini Ecommerce Screenshots" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={{ span: 10, offset: 2 }}>
                        <img className="desktopScreenshots" src="./Mini-Ecommerce/Screenshot (305).png" alt="Mini Ecommerce Screenshots" />
                    </Col>
                </Row>
                <Row className="d-none d-md-block">
                    <h4 className="techUsedHeading">Technologies Used:</h4>
                    <div className="d-flex ms-4 align-items-center justify-content-center gap-3">
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
                <img className="mobileScreenshots" src="./Mini-Ecommerce/Mobile Screenshots/1000203268.jpg" alt="Mini Ecommerce Screenshots" />
                <Row className="mt-5 d-flex justify-content-center">
                    <img className="mobileScreenshots" src="./Mini-Ecommerce/Mobile Screenshots/1000203269.jpg" alt="Mini Ecommerce Screenshots" />
                </Row>
                <Row className="d-md-none">
                    <h4 className="techUsedHeading">Technologies Used:</h4>
                    <div className="d-flex justify-content-center gap-3">
                        <img className="technologyUsedLogo" src="./firebase-console-logo.png" alt="Firebase Console Logo" />
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
