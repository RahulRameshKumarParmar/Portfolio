import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 ">
      <Container className="text-center">
        <p className="mb-1">© 2025 Rahul Parmar. All rights reserved.</p>
        <p className="mb-0">
          Built with 💻 React & Bootstrap
        </p>
      </Container>
    </footer>
  );
}

export default Footer;