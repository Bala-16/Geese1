import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import stage from "../../assets/img/stage.png";
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
import Mayil from "../../assets/Corparate clients/Mayil.png";
import Maharaja from "../../assets/Corparate clients/Maharaja.png";
import sumangali from "../../assets/Corparate clients/sumangali.png";
import chettinad from "../../assets/Corparate clients/chettinad.png";
import MGM from "../../assets/Corparate clients/MGM.png";
import LIC from "../../assets/Corparate clients/LIC.png";
import khadim from "../../assets/Corparate clients/khadim.png";
import naturals from "../../assets/Corparate clients/naturals.png";
import jain from "../../assets/Corparate clients/jain.png";
import jaya from "../../assets/Corparate clients/jaya.png";
import divine from "../../assets/Corparate clients/divine.png";
import aswins from "../../assets/Corparate clients/aswins.png";
import NLC from "../../assets/Corparate clients/NLC.png";

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
import Alagappa from "../../assets/University/Alagappa.png";
import Annamalai from "../../assets/University/Annamalai.png";
import bharathiar from "../../assets/University/bharathiar.png";

// TestimonialCard component
function TestimonialCard({ name, role, text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div className="testimonial-card" whileHover={{ scale: 1.02 }}>
      <p className={`testimonial-text ${expanded ? "expanded" : ""}`}>
        “{expanded ? text : text.slice(0, 150) + " ..."}”
      </p>
      <button onClick={() => setExpanded(!expanded)} className="toggle-btn">
        {expanded ? (
          <>
            Show Less <FaChevronUp />
          </>
        ) : (
          <>
            Read More <FaChevronDown />
          </>
        )}
      </button>
      <div className="testimonial-footer">
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-role">{role}</p>
      </div>
    </motion.div>
  );
}

// Home component
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  const testimonials = [
    {
      name: "Mansoor",
      role: "Managing Director, Vamsha Retail Ventures Pvt. Ltd.",
      text: `At Vamsha Retail, people are at the heart of everything we do, and Geese HR Solutions has been instrumental in helping us find the right talent. Their personalized approach and genuine commitment have made recruitment seamless and stress-free. We sincerely thank them for their valuable support in streamlining our HR processes.`,
    },
    {
      name: "Chef Prasanth",
      role: "The Sachin’s Kitchen",
      text: `Partnering with Mr. Nandhakumar and Mr. Sasikumar has been a defining moment in our restaurant’s growth story. Their training and consulting didn’t just improve our operations — it reignited our passion for hospitality. With a perfect blend of strategic vision and hands-on expertise, they transformed our team into a more confident, cohesive, and customer-focused unit. Beyond service and operations, they guided us through R&D for introducing new recipes, adding fresh creativity to our menu and enhancing our culinary identity. From refining service standards to streamlining kitchen efficiency, their impact was immediate and lasting. They don’t just train people — they inspire them to deliver excellence every single day. Any hospitality business lucky enough to work with them will feel the difference from day one.`,
    },
    {
      name: "Chef Prasanth",
      role: "The Sachin’s Kitchen",
      text: `My journey with Mr. Nandhakumar as my personal CEO coach has been nothing short of transformational. His ability to listen deeply, ask the right questions, and offer powerful, actionable insights helped me unlock new levels of clarity and confidence as a leader. He challenged me to think bigger, refine my vision, and approach decisions with sharper strategy and purpose. Every session left me energized, inspired, and equipped with tools I could apply immediately. If you’re serious about elevating your leadership and creating lasting impact, Mr. Nandhakumar is the mentor you need by your side.`,
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

      {/* ===== Corporate Clients Section ===== */}
      <h2 className="section-heading">Corporate Clients</h2>
      <div className="full-underline"></div>

      <div className="logo-grid-container">
        {[
          Nike,
          Hyundai,
          sumangali,
          Royal,
          HL,
          Apollo,
          chettinad,
          MGM,
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
          Mayil,
          naturals,
          jain,
          Orange,
          Focus,
          Maharaja,
          LIC,
          khadim,
          Murugappa,
          divine,
          aswins,
          athma,
          jaya,
          NLC,
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
        {[
          BNI,
          JCI,
          LI,
          Rotary,
          TAI,
          TNHA,
          AN,
          AREK,
          IIM,
          NIT,
          Alagappa,
          Annamalai,
          bharathiar,
        ].map((logo, index) => (
          <figure key={index} className="logo-figure">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </figure>
        ))}
      </div>

      {/* ===== Road Mapping Section ===== */}
      <section className="road-mapping">
        <p className="road-description">
          Our structured roadmap helps organizations move from current
          capability to sustained excellence.
        </p>
        <div className="roadmap-container">
          <img src={stage} alt="Roadmap" className="roadmap-image" />
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
