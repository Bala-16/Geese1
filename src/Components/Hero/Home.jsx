import React, { useState, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import stage from "../../assets/img/stage.png"
import "./Home.css";
import king from "../../assets/king.mp4";

import Nike from "../../assets/Corparate clients/Nike.png";
import Hyundai from "../../assets/Corparate clients/Hyundai.jpg";
import HL from "../../assets/Corparate clients/HL.jpg";
import Apollo from "../../assets/Corparate clients/Apollo.jpg";
import Converse from "../../assets/Corparate clients/Converse.png";
import crocs from "../../assets/Corparate clients/crocs.png";
import Decathlon from "../../assets/Corparate clients/Decathlon.png";
import Navin from "../../assets/Corparate clients/Navin.png";
import Nordex from "../../assets/Corparate clients/Nordex.png";
import Sachin from "../../assets/Corparate clients/Sachin.png";
import salomon from "../../assets/Corparate clients/salomon.jpg";
import SBT from "../../assets/Corparate clients/SBT.jpg";
import Tanishq from "../../assets/Corparate clients/Tanishq.png";
import TCCL from "../../assets/Corparate clients/TCCL.png";
import Thanigai from "../../assets/Corparate clients/Thanigai.jpg";
import Orange from "../../assets/Corparate clients/Orange.png";
import Murugappa from "../../assets/Corparate clients/Murugappa.png";
import Focus from "../../assets/Corparate clients/Focus.png";
import athma from "../../assets/Corparate clients/athma.png";
import Royal from "../../assets/Corparate clients/Royal.png";
import GE from "../../assets/Corparate clients/GE.png";
import KB from "../../assets/Corparate clients/KB.png";
import MCP from "../../assets/Corparate clients/MCP.png";
import km from "../../assets/Corparate clients/km.png";
import Mayil from "../../assets/Corparate clients/Mayil.png"
import Maharaja from "../../assets/Corparate clients/Maharaja.png"
import sumangali from "../../assets/Corparate clients/sumangali.png"
import chettinad from "../../assets/Corparate clients/chettinad.png"
import MGM from "../../assets/Corparate clients/MGM.png"
import LIC from "../../assets/Corparate clients/LIC.png"
import khadim from "../../assets/Corparate clients/khadim.png"
import naturals from "../../assets/Corparate clients/naturals.png"
import jain from "../../assets/Corparate clients/jain.png"
import jaya from "../../assets/Corparate clients/jaya.png"
// import Hyundai from '../../assets/Corparate clients/Hyundai.jpg'
import BNI from "../../assets/Association/BNI.png";
import JCI from "../../assets/Association/JCI.jpg";
import LI from "../../assets/Association/LI.png";
import Rotary from "../../assets/Association/Rotary.png";
import TAI from "../../assets/Association/TAI.png";
import TNHA from "../../assets/Association/TNHA.png";
import divine from "../../assets/Corparate clients/divine.png";
import aswins from "../../assets/Corparate clients/aswins.png";
import AN from "../../assets/University/AN.jpg";
import AREK from "../../assets/University/AREK.png";
import IIM from "../../assets/University/IIM.jpg";
import NIT from "../../assets/University/NIT.png";
import Alagappa from "../../assets/University/Alagappa.png";
import Annamalai from "../../assets/University/Annamalai.png"
import bharathiar from "../../assets/University/bharathiar.png"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  // const impactData = [
  //   {
  //     icon: "💼",
  //     title: "360° Development Approach",
  //   },
  //   {
  //     icon: "✨",
  //     title: "200+ Companies Strengthened",
  //   },
  //   {
  //     icon: "🎯",
  //     title: "5 Lakhs+ Employees Transformed",
  //   },
  //   {
  //     icon: "📚",
  //     title: "5000+ Professionals",
  //   },
  // ];

  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <h1 className="animate-up title-1">
            <span>#</span>Strategic Solutions. Lasting Impact.
          </h1>
          <p className="animate-up subtitle">
            Empowering organizations through strategic HR and business solutions
            that drive growth and performance.
          </p>
          {/* <button className="animated-yellow-btn">
            3-Mins Video About Business Trends"A Wise Move Pawn to King"
          </button> */}
        </div>

        <div className="home-right">
          <video
            className="hr-video animate-right"
            src={king}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
      {/* <div className="full-underline"></div> */}
     

     
{/* ===== Corporate Clients Section ===== */}
<h2 className="section-heading">Corporate Clients</h2>
<div className="full-underline"></div>

<div className="logo-grid-container">
  {[Nike, Hyundai, sumangali,Royal, HL, Apollo,chettinad,MGM, Converse, crocs,
    Decathlon, GE, Navin, KB, Nordex, Sachin, salomon,
    SBT, Tanishq, km, TCCL, MCP, Thanigai,Mayil,naturals,jain, Orange,
    Focus,Maharaja,LIC,khadim, Murugappa,divine,aswins,athma,jaya,
  ].map((logo, index) => (
    <figure key={index} className="logo-figure">
      <img src={logo} alt={`Logo ${index + 1}`} />
    </figure>
  ))}
</div>

{/* ===== University & Associations Section ===== */}
<h2 className="section-heading">Universities & Associations</h2>
<div className="full-underline-2"></div>

<div className="logo-grid-container">
  {[BNI, JCI, LI, Rotary, TAI, TNHA, AN, AREK, IIM, NIT,Alagappa,Annamalai,bharathiar].map(
    (logo, index) => (
      <figure key={index} className="logo-figure">
        <img src={logo} alt={`Logo ${index + 1}`} />
      </figure>
    )
  )}
</div>

{/* ===== Road Mapping Section ===== */}
<section className="road-mapping">
  {/* <h2 className="section-heading">Road Mapping</h2> */}
  <p className="road-description">
    Our structured roadmap helps organizations move from current capability to sustained excellence.
  </p>
  <div className="roadmap-container">
  <img src={stage} alt="Roadmap" className="roadmap-image"/>
  </div>
  {/* <ul className="road-list">
    <li>Step 1: Identify Gaps and Needs</li>
    <li>Step 2: Customize Training & Mentorship</li>
    <li>Step 3: Continuous Performance Tracking</li>
    <li>Step 4: Strategic Feedback and Growth Planning</li>
  </ul> */}
</section>


      <br />
    </>
  );
};

export default Home;
