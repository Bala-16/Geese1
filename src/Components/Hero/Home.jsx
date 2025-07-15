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
// import Hyundai from '../../assets/Corparate clients/Hyundai.jpg'
import BNI from "../../assets/Association/BNI.png";
import JCI from "../../assets/Association/JCI.jpg";
import LI from "../../assets/Association/LI.png";
import Rotary from "../../assets/Association/Rotary.png";
import TAI from "../../assets/Association/TAI.png";
import TNHA from "../../assets/Association/TNHA.png";

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

  const stats = [
    { number: 12, suffix: "+", label: "Years of Experience" },
    { number: 50, suffix: "+", label: "Corporates Empowered" },
    { number: 500000, suffix: "+", label: "Employees Shaped" },
    { number: 5000, suffix: "+", label: "Professionals" },
    { number: 150, suffix: "+", label: "CEOs" },
  ];

  return (
    <>
      <div className="home-container">
        <div className="home-left">
          <h1 className="animate-up title">
            <span>#</span>Empowering People. Enabling Growth.
          </h1>
          <p className="animate-up subtitle">
            GEESE HR & Business Solutions, A Certified Management for
            Consultant, Corporates, Retail HR Shops, and Industries. Cousunn
            Consulting Company Focusing in & Business Solutions
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
        <div className="full-underline"></div>
        <div className="corporate">{/* <h1>Corporate clients</h1> */}</div>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="logo-marquee"
        >
          <img src={Nike} alt="Nike" />
          <img src={Hyundai} alt="Hyundai" />
          <img src={HL} alt="HL" />
          <img src={Apollo} alt="Apollo" />
          <img src={Converse} alt="Conerse" />
          <img src={crocs} alt="crocs" />
          <img src={Decathlon} alt="Decathlon" />
          <img src={Navin} alt="Navin" />
          <img src={Nordex} alt="Nordex" />
          <img src={Sachin} alt="Sachin" />
          <img src={salomon} alt="salomon" />
          <img src={SBT} alt="Sbt" />
          <img src={Tanishq} alt="Tanishq" />
          <img src={TCCL} alt="Apollo" />

          <img src={Thanigai} alt="Apollo" />
        </marquee>
        <div className="full-underline1"></div>
      </div>
      <div className="who-we-are">
        <section className="whoami-section">
          <div className="whoami-content">
            <div className="text-block">
              <h2 className="whoami-title">
                <span>S</span>trategy <span>S</span>tart <span>- Here</span>
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
          <h5 className="welcome">
            Welcome to <span>GEESE</span> - Your Trusted Partner in Business
            Excellence
          </h5>
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
        <div className="nadhakumar-image">
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

              {/* Card Box */}
              <div className="unique-card">
                We blend psychology, strategy, and simplicity to craft HR and
                business solutions that work — and last.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="who-we-are">
        <section className="whoami-section">
          <div className="whoami-content">
            <div className="text-block">
              <h2 className="whoami-title">
                What we do ?, <span>Our action on your organiztion</span>
              </h2>
            </div>
          </div>
        </section>
      </div>

      <section className="services-section-2">
        <h2 className="services-heading-2">
          {/* Our <span>Programs</span> */}
        </h2>
        <div className="services-cards-1">
          {/* Training Card */}
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Training</h3>
            <ul>
              <li>HR Analytics</li>
              <li>Strategic Talent Management</li>
              <li>Mergers and Acquisitions (M&A) HR Integration</li>
              <li>Diversity, Equity, and Inclusion (DE&I) Initiatives</li>
              <li>Employee Relations and Conflict Resolution</li>
              <li>HR change management</li>
              <li>Customer Delight</li>
            </ul>
          </motion.div>

          {/* Coaching Card */}
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Coaching</h3>
            <h4>CEO Coaching</h4>
            <ul>
              <li>1-2-1 counseling</li>
              <li>Strategic planning</li>
              <li>Assessments</li>
            </ul>
            <h4>Leadership Coaching</h4>
            <ul>
              <li>Advanced Leadership</li>
              <li>Conflict Management</li>
              <li>Delegation & Emotional Intelligence</li>
            </ul>
          </motion.div>

          {/* Consulting Card */}
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Consulting</h3>
            <ul>
              <li>Strategic Guidance</li>
              <li>Operational Efficiency</li>
              <li>Talent Management</li>
              <li>Financial Expertise</li>
              <li>Technological Innovation</li>
              <li>Marketing and Sales Support</li>
              <li>Organizational Change Management</li>
              <li>Risk Management</li>
            </ul>
          </motion.div>
        </div>

        <div className="empower-card">
          {/* <h2 className="tagline">Empowering People. Enabling Growth.</h2> */}
          <p className="description">
            At <strong>GEESE</strong> we don’t just consult — we transform. With
            over <br />
            <span>
              {" "}
              we are on a mission to create performance-driven people and
              purpose-driven organizations.
            </span>
          </p>

          <div className="stats-row">
            {stats.map((stat, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5, // Start animation when 50% visible
              });

              return (
                <div className="stat" key={index} ref={ref}>
                  <h3 className="stat-number">
                    {inView ? (
                      <CountUp
                        end={stat.number}
                        duration={2}
                        separator=","
                        suffix={stat.suffix}
                      />
                    ) : (
                      "0"
                    )}
                  </h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <p className="cta">
            Let’s build the future of your workforce — <span>together</span>.
          </p>
        </div>
      </section>

      <div className="full-underline"></div>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        className="logo-marquee"
      >
        <img src={BNI} alt="BNI" />
        <img src={JCI} alt="JCI" />
        <img src={LI} alt="LI" />
        <img src={Rotary} alt="ROTARY" />
        <img src={TAI} alt="ROTARY" />
        <img src={TNHA} alt="ROTARY" />
      </marquee>
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

      <div className="full-underline1"></div>
      <br />

      <div>
        <section className="impact-container">
          <h2 className="impact-heading">
            Our <span>Impact</span>
          </h2>
          <div className="impact-grid">
            {impactData.map((item, index) => (
              <div
                className="impact-box"
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="impact-icon">{item.icon}</div>
                <div className="impact-text">{item.title}</div>
              </div>
            ))}
          </div>
          <p className="impact-footer">
            Real stories. Real transformation. Real growth.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
