import React, { useRef } from "react";
import './Services.css'
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup"; // Make sure you've installed this

const stats = [
  { number: 12, suffix: "+", label: "Years of Experience" },
  { number: 50, suffix: "+", label: "Corporates Empowered" },
  { number: 500000, suffix: "+", label: "Employees Shaped" },
  { number: 5000, suffix: "+", label: "Our Trained Professionals" },
  { number: 150, suffix: "+", label: "Our Mentor" },
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
              <li>HR Analytics</li>
              <li>Strategic Talent Management</li>
              <li>Mergers and Acquisitions (M&A) HR Integration</li>
              <li>Diversity, Equity, and Inclusion (DE&I) Initiatives</li>
              <li>Employee Relations and Conflict Resolution</li>
              <li>HR change management</li>
              <li>Customer Delight</li>
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

          {/* Consulting */}
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

          <motion.div
            className="service-card-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Recruitment</h3>
            <ul>
              <li>Onboarding</li>
              <li>Induction</li>
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
            <h3>Digital Marketing</h3>
            <ul>
              <li>Social Media Strategy & Management</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Google Ads & Paid Campaigns</li>
              <li>Branding and Online Presence Building</li>
              <li>Competitor Analysis & Market Research</li>
            </ul>
          </motion.div>
        </div>

        {/* Empower Card + Stats */}
        <div className="empower-card">
          <p className="description">
            At <strong>GEESE</strong> we don’t just consult — we transform. With
            over <br />
            <span>
              we are on a mission to create performance-driven people and
              purpose-driven organizations.
            </span>
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

          <p className="cta">
            Let’s build the future of your workforce — <span>together</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
