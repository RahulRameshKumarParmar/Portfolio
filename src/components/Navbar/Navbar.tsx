import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarSection() {
    return (
        <Navbar bg="light" expand="lg" className="sticky-top shadow-sm " >
            <Container>
                <Navbar.Brand href="#home">Rahul Parmar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
