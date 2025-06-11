import Navbar from "./Componenets/Navbar/Navbar";
import Home from "./Componenets/Home/Home";
import About from "./Componenets/About/About";
import Skills from "./Componenets/Skill/Skills";
import Projects from "./Componenets/Projects/Projects";
import Footer from "./Componenets/Footer/Footer";

function App() {
  return (
    <div className=" bg-[#331D2C] h-auto w-full overflow-hidden  scroll-smooth">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
