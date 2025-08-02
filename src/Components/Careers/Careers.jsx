import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Application Submitted Successfully!');
    // Here you can send the formData to backend or email service
  };


  
const benefits = [
  {
    emoji: "🌟",
    title: "Purpose-Driven Work",
    desc: "Every project we take on aims to solve real business challenges and uplift human potential."
  },
  {
    emoji: "🤝",
    title: "Collaborative Environment",
    desc: "We believe in co-creation, shared learning, and building each other up."
  },
  {
    emoji: "📈",
    title: "Growth Opportunities",
    desc: "Be it skill development, certifications, or leadership roles — we invest in your growth."
  },
  {
    emoji: "🧠",
    title: "Diverse Expertise",
    desc: "Work alongside certified DISC Coaches, Business Analysts, OD consultants, and training experts."
  },
  {
    emoji: "💡",
    title: "Innovative Culture",
    desc: "We value fresh ideas and empower you to take ownership and lead change."
  }
];

const roles = [
  " ✔ HR Consulting & Talent Acquisition",
  "✔ Business Analysis & Process Improvement",
  "✔ Learning & Development (L&D)",
  "✔ Organizational Development (OD)",
  "✔ Client Relationship & Project Management"
];


  return (
    <>
<br/>
     <h2 className="careers-heading">Join GEESE HR and Business Solutions</h2>
    <section className="careers-section">
      
      <p className="careers-intro">
        At GEESE HR and Business Solutions, we believe people are the heart of every successful organization.
        As a dynamic team of HR professionals, business analysts, and organizational development experts,
        we’re on a mission to create people-first, performance-driven workplaces.
      </p>

      <div className="why-work-with-us">
        <h3 className="section-title">Why Work With Us?</h3>
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-emoji">{item.emoji}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="who-we-need">
        <h3 className="section-title">Who We’re Looking For</h3>
        <ul className="role-list">
          {roles.map((role, index) => (
            <li key={index} className="role-item">{role}</li>
          ))}
        </ul>
      </div>

      <div className="join-movement">
        <h3 className="section-title">Join the Movement</h3>
        <p className="location">📍 Location: Tamilnadu</p>
        <p className="closing-text">Let’s co-create better workplaces, together.</p>
      </div>
    </section>
       {/* <h2>Careers</h2> */}
    <div className="careers-container">
   
      <form className="careers-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required  placeholder='Enter your Name'/>
        </label>

        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required  placeholder='Enter your Address'/>
        </label>

        <label>
          Contact Number:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} pattern="[0-9]{10}" required  placeholder='Enter your phone number'/>
        </label>

        <label>
          Mail Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required  placeholder='Enter your Email'/>
        </label>

        <label>
          Upload Resume:
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Careers;
