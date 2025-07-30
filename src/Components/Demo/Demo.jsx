import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Demo.css";

const ProfileCard = ({ img, title, content }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const contentLines = content.split("\n");

  return (
    <motion.div
      ref={ref}
      className="profile-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading (first line from content) */}
      <h3 className="card-heading">{contentLines[0]}</h3>

      {/* Profile image */}
      {img && <img src={img} alt={title} className="profile-img" />}

      {/* Name below image */}
      <h4 className="card-title">{title}</h4>

      {/* Remaining content */}
      <p className="card-content">
        {contentLines.slice(1).map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </motion.div>
  );
};

export default ProfileCard;
