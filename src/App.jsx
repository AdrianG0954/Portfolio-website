// Author: Adrian Garcia.
// Creation date: 05/19/2023

import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Feedbacks from "./components/Feedbacks";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 dark:bg-darkColor bg-lightMode ">
        <div className="dark:bg-test-pattern bg-meme-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
