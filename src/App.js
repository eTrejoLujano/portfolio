import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
// import Experience from "./components/Experience";
import Contact from "./components/Portfolio/Contact";
import Skills from "./components/Skills";
import ReadMe from "./components/ReadMe";

function App() {
  const [modalBoolean, setModalBoolean] = useState();
  const [readMeInfo, setReadMeInfo] = useState({});
  const modalInfo = (readMeObject) => {
    setReadMeInfo(readMeObject);
  };
  const openModal = () => {
    setModalBoolean(true);
  };
  const closeModal = () => {
    setModalBoolean(false);
  };
  return (
    <div>
      <Navbar />
      {modalBoolean ? (
        <ReadMe
          name={readMeInfo.name}
          readMeDescription={readMeInfo.readMeDescription}
          readMe={readMeInfo.readMe}
          closeModal={closeModal}
        />
      ) : null}
      <Home />
      <SocialLinks />
      <About />
      <Portfolio
        modalInfo={modalInfo}
        openModal={openModal}
        closeModal={closeModal}
      />
      {/* <Skills /> */}
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}

export default App;
