import React, { useState, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import { motion } from "framer-motion";
import geese1 from "../../assets/geese1.png";
import geese2 from "../../assets/geese2.png";
// import logo from "../../assets/logo.png";
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
import Royal from "../../assets/Corparate clients/Royal.png";
import GE from "../../assets/Corparate clients/GE.png";
import KB from "../../assets/Corparate clients/KB.png";
import MCP from "../../assets/Corparate clients/MCP.png";
import km from "../../assets/Corparate clients/km.png";
// import Hyundai from '../../assets/Corparate clients/Hyundai.jpg'
import BNI from "../../assets/Association/BNI.png";
import JCI from "../../assets/Association/JCI.jpg";
import LI from "../../assets/Association/LI.png";
import Rotary from "../../assets/Association/Rotary.png";
import TAI from "../../assets/Association/TAI.png";
import TNHA from "../../assets/Association/TNHA.png";

import AN from "../../assets/University/AN.jpg";
import AREK from "../../assets/University/AREK.png";
import IIM from "../../assets/University/IIM.jpg";
import NIT from "../../assets/University/NIT.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const impactData = [
    {
      icon: "💼",
      title: "360° Development Approach",
    },
    {
      icon: "✨",
      title: "200+ Companies Strengthened",
    },
    {
      icon: "🎯",
      title: "5 Lakhs+ Employees Transformed",
    },
    {
      icon: "📚",
      title: "5000+ Professionals",
    },
  ];

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
          <button className="animated-yellow-btn">
            3-Mins Video About Business Trends"A Wise Move Pawn to King"
          </button>
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
      <div className="full-underline"></div>
      <div className="corporate">{/* <h1>Corporate clients</h1> */}</div>
      <div className="logo-scroll-container">
        <div className="logo-scroll-track">
          {[
            Nike,
            Hyundai,
            Royal,
            HL,
            Apollo,
            Converse,
            crocs,
            Decathlon,
            GE,
            Navin,
            KB,
            Nordex,
            Sachin,
            salomon,
            SBT,
            Tanishq,
            km,
            TCCL,
            MCP,
            Thanigai,
            Orange,
            Focus,
            Murugappa,
          ].map((logo, index) => (
            <figure key={index} className="logo-figure">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </figure>
          ))}
          <div className="full-underline1"></div>
        </div>
      </div>

      <div className="who-we-are-1">
        <section className="whoami-section-1">
          <div className="whoami-content-1">
            <div className="text-block-1">
              <h2 className="whoami-title-1">
                <span>S</span>trategy <span>S</span>tart <span> Here</span>
                {/* <span className="button-block">
                  <button className="whoami-button">Learn More</button>
                </span> */}
              </h2>
            </div>
          </div>
        </section>
      </div>

      <section className="nadhakumar-container">
        {/* Left side - Text */}
        <div className="nadhakumar-text">
          <h4 className="welcome">
            Welcome to <span>GEESE</span> - Your Trusted Partner in Business
            Excellence
          </h4>
          <p>
            At<span> GEESE</span>, we specialize in delivering strategic
            consulting solutions that empower organizations to thrive in a
            constantly evolving marketplace. With a team of experienced
            professionals and industry experts, we help businesses unlock their
            full potential by providing tailored advice, innovative strategies,
            and actionable insights.
          </p>
          <p>
            Our services span across management consulting, operational
            efficiency, digital transformation, financial advisory, and market
            entry strategy-each designed to drive sustainable growth and
            measurable results. Whether you're a startup seeking structure or an
            established company aiming for expansion, we're committed to
            delivering the clarity and confidence you need to make impactful
            decisions. We don't just advise-we partner with you to turn
            challenges into opportunities and goals into achievements.
          </p>
          <p className="cta">
            Let's shape the future of your business <span>- together.</span>
          </p>
        </div>

        {/* Right side - Image */}
        {/* <div className="nadhakumar-image">
           <img src={geese1} alt="geese" />
          <img src={geese2} alt="geese" /> 
          <div className="unique-section">
            <button onClick={toggleSection} className="toggle-btn">
              {isOpen ? "Hide ▲" : "What Makes Us Unique? ▼"}
            </button>

            <div
              ref={contentRef}
              className={`unique-content ${isOpen ? "open" : ""}`}
              style={{
                maxHeight:
                  isOpen && contentRef.current
                    ? `${contentRef.current.scrollHeight}px`
                    : "0px",
              }}
            >
              <ul>
                <li>✅ Customized Training Modules</li>
                <li>✅ Data-Driven HR Strategies</li>
                <li>✅ Human-Centered Business Solutions</li>
                <li>✅ Proven Results Across Industries</li>
              </ul>

             
              <div className="unique-card">
                We blend psychology, strategy, and simplicity to craft HR and
                business solutions that work — and last.
              </div>

            </div>
          </div>
        </div> */}
        <div className="unique-card">
  <h2>What Makes Us Unique?</h2>
  <ul>
    <li>✅ Customized Training Modules</li>
    <li>✅ Data-Driven HR Strategies</li>
    <li>✅ Human-Centered Business Solutions</li>
    <li>✅ Proven Results Across Industries</li>
  </ul>
 <div className="para-card">
  <p>
    We blend psychology, strategy, and simplicity to craft HR and business
    solutions that work — and last.
  </p>
</div>
</div>

      </section>

      <div className="full-underline-2"></div>
      <div className="corporate">{/* <h1>Corporate clients</h1> */}</div>
      <div className="logo-scroll-container">
        <div className="logo-scroll-track">
          {[BNI, JCI, LI, Rotary, TAI, TNHA, AN, AREK, IIM, NIT].map(
            (logo, index) => (
              <figure key={index} className="logo-figure">
                <img src={logo} alt={`Logo ${index + 1}`} />
              </figure>
            )
          )}
          {/* <div className="full-underline-1"></div> */}
        </div>
      </div>
      {/* <div className="logo-slider">
  <div className="logo-track">
    <img src={BNI} alt="BNI" />
    <img src={JCI} alt="JCI" />
    <img src={LI} alt="LI" />
    <img src={Rotary} alt="ROTARY" />
    <img src={TAI} alt="TAI" />
    <img src={TNHA} alt="TNHA" />
  
  </div>
</div> */}

      {/* <div className="full-underline1"></div> */}
      <br />
    </>
  );
};

export default Home;
