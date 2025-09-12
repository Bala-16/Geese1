import React, { useState, useRef } from "react";
import roadmap from "../../assets/img/roadmap.png"
import "./About.css";

const About = () => {
  // why geese//
  const handleBenefitClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

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
      title: "✔ Certified & Passionate Professionals",
      description:
        "(Trainers,Consultants,Professionals and Expert )Our team are not only certified but deeply passionate about helping teams,leaders and Organisation  to  grow.",
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
      {/* why geese */}

      <div className="who-we-are-1">
        <section className="whoami-section-1">
          <div className="whoami-content-1">
            <div className="text-block-1">
              <h2 className="whoami-title">
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
      <div className="nadhakumar-text ">
        <h4 className="welcome">
          Welcome to <span>GEESE</span> - Your Trusted Partner in Business
          Excellence
        </h4>

        <div className={`text-content ${expanded ? "show" : ""}`}>
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
            entry strategy — each designed to drive sustainable growth and
            measurable results. Whether you're a startup seeking structure or an
            established company aiming for expansion, we're committed to
            delivering the clarity and confidence you need to make impactful
            decisions. We don't just advise — we partner with you to turn
            challenges into opportunities and goals into achievements.
          </p>
          <p className="cta">
            Let's shape the future of your business <span>- together.</span>
          </p>
        </div>

        <span
          className="read-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </span>
      </div>
    </section>
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
              We blend Psychology, Strategy, and Simplicity to craft HR and
              Business Solutions that work — and last.
            </p>
          </div>
        </div>

      <div>
        <div className="who-we-are">
          <section className="whoami-section">
            <div className="whoami-content">
              <div className="text-block">
                <h2 className="whoami-title">
                  The Smarter Choice
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
            Our Impact
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
      <div class="full-underline"></div>
      <div className="roadmap-container">
        <img src={roadmap} alt="Roadmap" className="roadmap-image1"/>
        </div>
    </>
  );
};

export default About;
