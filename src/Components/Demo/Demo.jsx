import React, { useState } from "react";
import { motion } from "framer-motion";
import './demo.css'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      className="testimonial-card"
      whileHover={{ scale: 1.02 }}
    >
      <p className={`testimonial-text ${expanded ? "expanded" : ""}`}>
        “{text}”
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="toggle-btn"
      >
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
