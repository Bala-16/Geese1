import React, { useState, useRef } from "react";
import "./About.css";
import { motion, useInView } from "framer-motion";
import NK from "../../assets/NK.png";
import MBK from "../../assets/img/MBK.png";
import BN from "../../assets/img/BN.png";
import SS from "../../assets/img/SS.png";
import SSV from "../../assets/img/SSV.png";

const ProfileCard = ({ img, title, content }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="profile-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {img && <img src={img} alt={title} className="profile-img" />}
      <h3>{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
};

const About = () => {
  // why geese//
  const handleBenefitClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const benefits = [
    {
      title: "✔ Deep Industry Experience",
      description:
        "We bring decades of hands-on experience across industries, giving us the insight to tailor solutions that actually work.",
    },
    {
      title: "✔ Custom-Fit Solutions",
      description:
        "Every organization is different. Our services are tailored to meet your exact needs, no matter your size or sector.",
    },
    {
      title: "✔ Certified & Passionate(Trainers & Conslutants)",
      description:
        "Our team are not only certified but deeply passionate about helping teams and leaders grow.",
    },
    {
      title: "✔ Measurable Outcomes",
      description:
        "We focus on data-driven results — clear metrics that show the positive impact of our work.",
    },
    {
      title: "✔ Long-Term Partnerships",
      description:
        "We believe in relationships, not transactions. We're with you for the long haul.",
    },
  ];

  // our impact//

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
      <section className="team-section">
        <div className="team-content">
          <div className="team-header">
            <h2 className="team-title">
              OUR <span>TEAM</span>
            </h2>
          </div>
        </div>
      </section>

      {/* <div className="full"></div>
      <br /> */}

      {/* PROFILE CARDS */}
      <div className="qualifications-wrapper">
        <div className="qualification-row">
          <ProfileCard
            img={MBK}
            title="About Muruga Barathikannan"
            content={`Certified Happiness Coach by Berkeley Institute of Wellbeing, California
Certified in Sports Psychology by Rajasthan Royals (IPL)
Certified NLP Practitioner and Life Coach
Certified in Psychometrics, CBT, Career Counseling`}
          />
          <ProfileCard
            img={NK}
            title="About NandhaKumar"
            content={`M.E in Anna University
MBA (HR & Marketing), MBA (Retail Management)
Executive PG Diploma in TISS
Certified NLP Master Practitioner, Sales Excellence Coach
Certified POSH Enabler, C.E.O Coach, MSME Trainer`}
          />
        </div>

        <div className="qualification-row">
          <ProfileCard
            img={BN}
            title="About Bageerathi Nandhakumar"
            content={`Psychological Assessment Specialist
Competency Assessment, Reflective Practitioner
One-to-One Specialist
Certified POSH Enabler`}
          />
          <ProfileCard
            img={SS}
            title="About Sasikumar Subramanian"
            content={`Certified National Trainer - JCI University
Activity-Based & Outbound Trainer
Faculty for Management Colleges
Conducted FDPs for 1000+ Teachers`}
          />
        </div>

        <div className="qualification-row">
          <ProfileCard
            img={SSV}
            title="About Vetri Vidiyal Srinivasan"
            content={`Chartered Accountant
Writer and TV Fame
Financial Advisor to 100+ Entrepreneurs`}
          />
          <ProfileCard
            img={null}
            title="About Sasikumar Subramanian"
            content={`Certified National Trainer - JCI University
Activity-Based & Outbound Trainer
Faculty for Management Colleges
Conducted FDPs for 1000+ Teachers`}
          />
        </div>
      </div>

      {/* why geese */}
      <div>
        <div className="who-we-are">
          <section className="whoami-section">
            <div className="whoami-content">
              <div className="text-block">
                <h2 className="whoami-title">
                  Why <span>- GEESE?</span>
                  {/* <span className="button-block">
                  <button className="whoami-button">Learn More</button>
                </span> */}
                </h2>
              </div>
            </div>
          </section>
        </div>
        <section className="whychoose-container">
          {/* <h2 className="whychoose-heading">Why Choose GEESE?</h2> */}
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="benefit-item"
                onClick={() => handleBenefitClick(index)}
              >
                {benefit.title}
                {activeIndex === index && (
                  <div className="benefit-card animate-fade">
                    {benefit.description}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <p className="benefit-note">
            Because your success is not just our goal — it’s our mission.
          </p>
        </section>
      </div>

      {/* our impact */}
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

export default About;
