import React from "react";
import "./About.css";
import NK from "../../assets/NK.png";
const About = () => {
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
       <div className="full"></div><br/>

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





    
    </>
  );
};

export default About;
