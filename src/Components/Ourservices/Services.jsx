import React, { useRef } from "react";
import "./Services.css";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup"; // Make sure you've installed this

const stats = [
  { number: 10, suffix: "+", label: "Years of Experience" },
  { number: 50, suffix: "+", label: "Corporates Empowered" },
  { number: 400000, suffix: "+", label: "Employees Shaped" },
  { number: 5000, suffix: "+", label: "Trained Professionals" },

  { number: 150, suffix: "+", label: "CEO's" },
];

const Services = () => {
  const refs = stats.map(() => useRef(null));
  const inViews = refs.map((ref) =>
    useInView(ref, { once: true, threshold: 0.5 })
  );

  return (
    <>
      {/* Who we are */}
      <br/>
      <div className="who-we-are">
        <section className="whoami-section">
          <div className="whoami-content">
            <div className="text-block">
              <h2 className="whoami-title">Areas of Our Expertise</h2>
            </div>
          </div>
        </section>
      </div>

      {/* Services Cards */}
      <section className="services-section-2">
        <div className="services-cards-1">
          {/* Training */}
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Training</h3>
            <ul>
              {/* <li>Need based Training </li>
            <li>Out Bound Training </li>
            <li>On Job Training </li>
            <li>Class Room Training </li>
            <li>Shadowing </li> */}
              <li> Business & Strategy training</li>
              <li> Leadership & Management training </li>
              <li> Operations & Process Improvement </li>
              <li> Finance & Risk management </li>
              <li> HR & People Development </li>
              <li> Digital & Technology </li>
              <li>Sales & Marketing training</li>
            </ul>
          </motion.div>

          {/* Coaching */}
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Coaching</h3>
            <h4>
              CEO<span>'s</span> Coaching
            </h4>
            <ul>
              <li>"One-on-One" Consulting</li>
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

          {/* Consulting */}
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Consulting</h3>
            <ul>
              <li>HR Analytics</li>
              <li>Strategic Talent Management</li>
              <li>Mergers and Acquisitions(M&A)HR Integration</li>
              <li>Diversity, Equity, and Inclusion (DE&I) Initiatives</li>
              <li>Employee Relations and Conflict Resolution</li>
              <li>HR change management</li>
              <li>Customer Delight</li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Recruitment</h3>
            <ul>
              <li>Induction/Onboarding Training</li>

              <li>Workforce Planning</li>
              <li>Strategic Sourcing</li>
              <li>Employer Branding</li>
              <li>Campus Recruitment</li>
              <li>Candidate Experience</li>
              <li>Recruitment Process Automation</li>
            </ul>
          </motion.div>
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3> Marketing</h3>
            <ul>
              <li>Social Media Strategy & Management</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Google Ads & Paid Campaigns</li>
              <li>Branding and Online Presence Building</li>
              <li>Competitor Analysis & Market Research</li>
            </ul>
          </motion.div>

          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Market Surveys(The foundation)</h3>
            <ul>
              <li>HR Analytics</li>
              <li> Understanding the customer </li>
              <li> Revealing Perception</li>
              <li> Finding the "Why"</li>
            </ul>
          </motion.div>
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Branding (The identity)</h3>
            <ul>
              <li>Creating unique impression</li>
              <li> Building trust</li>
              <li> Communicating values</li>
            </ul>
          </motion.div>
          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Synergy(Connecting the two)</h3>
            <ul>
              <li>Data-driven positioning</li>
              <li> Authentic Communication </li>
              <li> Strategic growth</li>
            </ul>
          </motion.div>
        </div>

        {/* Empower Card + Stats */}
        <div className="empower-card">
          <p className="description">
            At <strong>GEESE</strong> we don’t just consult — we transform. With
            over, 
            
           
            
              
            
          </p>

          <div className="stats-row">
            {stats.map((stat, index) => (
              <div className="stat" key={index} ref={refs[index]}>
                <h3 className="stat-number">
                  {inViews[index] ? (
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
            ))}
          </div>
          <p className="description">
             we are on a mission to create performance-driven people and
              purpose-driven organizations.
          </p>

          <p className="cta">
            Let’s build the future of your workforce — <span>together</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
