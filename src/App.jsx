import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Hero/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team"
import Services from "./Components/Ourservices/Services";
import Blog from "./Components/Blog/Blog";
import Program from "./Components/Program/Program";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
// import Demo from './Components/Demo/Demo'
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <About/> */}
      {/* <Program/> */}
{/* <Demo/> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/team"  element={<Team />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Program" element={<Program />} />
           <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
