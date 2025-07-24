import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const number = "8200385875";
  const gmail = "rahulparmar1339950@gmail.com";

  const [copied, setCopied] = useState("");

  const Copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 500);
  };

  return (
    <Container fluid className="contactBox p-0">
      <Row className="g-0">
        <Col xs={12} md={6} >
          <div className="contactHeading">
            <h2>CONTACT</h2>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="contactDetails d-flex flex-column justify-content-center align-items-center">
            <div className="phoneBox">
              <FontAwesomeIcon className="phoneLogo" icon={faPhone} size="lg" />
              <div className="d-flex flex-column justify-content-start">
                <label className="phoneLabel">PHONE</label>
                <span className="phoneNumber">{number}</span>
              </div>

              <span onClick={() => Copy(number)} className="copyPhone">
                {(copied !== number) ? "Copy" : "Copied!"}
              </span>

            </div>
            <div className="emailBox">
              <FontAwesomeIcon className="emailLogo" icon={faEnvelope} size="lg" />
              <div className="d-flex flex-column justify-content-start">
                <label className="emailLabel">EMAIL</label>
                <span className="emailAddress">{gmail}</span>
              </div>
              <span onClick={() => Copy(gmail)} className='copyEmail'>
                {(copied !== gmail) ? "Copy" : "Copied!"}
              </span>
            </div>
            <div className="p-2">
              <div className="text-secondary fw-bold mb-2">Connect With Me</div>
              <a className="noHighlight" href="https://github.com/RahulRameshKumarParmar" target="_blank">
                <FontAwesomeIcon className="githubBox" icon={faGithub} size="1x" />
              </a>
              <a className="noHighlight" href="https://www.linkedin.com/in/rahul-parmar-a34a0b262/" target="_blank">
                <FontAwesomeIcon className="linkedInBox" icon={faLinkedin} size="1x" />
              </a>
            </div>
            <div className="resumeBox">
              <a href="Rahul_Parmar_Resume.pdf" download>
                <button className="resumeBtn">
                  <FontAwesomeIcon className="pe-2" icon={faFile} />Download Resume
                </button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
