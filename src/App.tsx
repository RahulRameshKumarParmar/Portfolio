import './App.css';
import ScrollToTop from './components/Scroll To Top/ScrollToTop';
import NavbarSection from './components/Navbar/Navbar';
import ProjectSection from './components/Projects/ProjectSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavbarSection />
      <main>
        <section id='about'>
          <About />
        </section>

        <section id='projects' className='projectBox'>
          <ProjectSection />
        </section>

        <section id='contact'>
          <Contact />
        </section>
      </main >
      <Footer />
    </div >
  );
}

export default App;
