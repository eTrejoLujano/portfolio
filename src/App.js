import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
// import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}

export default App;
