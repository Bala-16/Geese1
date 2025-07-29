import React, { useState, useRef } from "react";
import "./About.css";


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
     

      {/* why geese */}
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
