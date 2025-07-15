// import React from "react";
import React, { useState } from "react";
import "./About.css";
import NK from "../../assets/NK.png";
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
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>
              Hi, I'm <span className="name-hightlight">NandhaKumar</span>
            </h2>
            {/* <hr className="divider" /> */}
          </div>
          <div className="animated-yellow">
            <h5>The founder of Geese HR Solution</h5>
          </div>
        </div>
      </section>

      {/* <hr className='line' /> */}

      {/* NandhaKumar */}
      <section className="nandhakumarQualification">
        <div className="qualification-container">
          <div className="qualification-image">
            <img src={NK} alt="NandhaKumar" />
          </div>
          <div className="qualification-text">
            <h3>About NandhaKumar</h3>
            <p>
              <strong className="line-below">
                Qualifications & Certifications
              </strong>
              M.E in Anna University
              <br />
              M.B.A (HR & Marketing) in Madurai Kamarajar University
              <br />
              M.B.A (Retail Management) in Madras University
              <br />
              Executive PG Diploma in TATA Institute of Social Science, Mumbai
              <br />
              Certified NLP Master Practitioner
              <br />
              Certified MSME Trainer
              <br />
              Certified Management Consultant
              <br />
              Certified Sales Excellence Coach
              <br />
              Certified C.E.O Coach by IT
              <br />
              Certified POSH Enabler
              <br />
              <strong className="line-below">Core Competencies</strong>
              Learning Facilitation
              <br />
              Staff Recruiting Process
              <br />
              Performance Development
              <br />
              Business Strategy Maker
              <br />
              Competitor Analyst
              <br />
              Success Mapping & Development Assessment
            </p>
          </div>
        </div>
      </section>
      <div className="full"></div>
      <br />

      <section className="team-section">
        <div className="team-content">
          <div className="team-header">
            <h2 className="team-title">
              OUR <span>TEAM</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Muruga Barathikannan */}
      <section className="qualification-section">
        <div className="qualification-container">
          <div className="qualification-image">
            {/* <img src={mbkImage} alt="Muruga Barathikannan" /> */}
          </div>
          <div className="qualification-text">
            <h3>About Muruga Barathikannan</h3>
            <p>
              Qualifications & Certifications
              <br />
              Certified Happiness Coach by Berkeley Institute of Wellbeing,
              California
              <br />
              Certified in Sports Psychology by Rajasthan Royals (IPL Team
              Franchisee)
              <br />
              Certified NLP Practitioner and Certified Life Coach
              <br />
              Certified in Psychometrics, Cognitive and Behavioral Therapy, and
              Career Counseling
            </p>
          </div>
        </div>
      </section>

      <div className="full"></div>

      {/* Vetri Vidiyal Srinivasan */}
      <section className="qualification-section">
        <div className="qualification-container">
          <div className="qualification-image">
            {/* <img src={ssvImage} alt="Vetri Vidiyal Srinivasan" /> */}
          </div>
          <div className="qualification-text">
            <h3>About Vetri Vidiyal Srinivasan</h3>
            <p>
              Core Competencies
              <br />
              Professional Chartered Accountant
              <br />
              Writer
              <br />
              Television Fame
              <br />
              Financial Advisor for 100+ Entrepreneurs
            </p>
          </div>
        </div>
      </section>

      <div className="full"></div>

      {/* Bageerathi Nandhakumar */}
      <section className="qualification-section">
        <div className="qualification-container">
          <div className="qualification-image">
            {/* <img src={BnImage} alt="Bageerathi Nandhakumar" /> */}
          </div>
          <div className="qualification-text">
            <h3>About Bageerathi Nandhakumar</h3>
            <p>
              Core Competencies
              <br />
              Psychological Assessment and Measurement
              <br />
              Competency Assessment Specialist
              <br />
              Reflective Practitioner
              <br />
              One to One Specialist
              <br />
              Certified POSH Enabler
            </p>
          </div>
        </div>
      </section>

      <div className="full"></div>

      {/* Sasikumar Subramanian */}
      <section className="qualification-section">
        <div className="qualification-container">
          <div className="qualification-image">
            {/* <img src={ssImage} alt="Sasikumar Subramanian" /> */}
          </div>
          <div className="qualification-text">
            <h3>About Sasikumar Subramanian</h3>
            <p>
              Core Competencies
              <br />
              Certified National Trainer by JCI University
              <br />
              Activity Based & Out Bound Trainer
              <br />
              Visiting Faculty For Management Colleges
              <br />
              Conducted Faculty Development Programs For 1000+ Teachers
            </p>
          </div>
        </div>
      </section>

      <div className="full"></div>
      <br />
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
    </>
  );
};

export default About;
