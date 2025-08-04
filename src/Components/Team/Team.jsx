import React from "react";
import "./Team.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import T1 from "../../assets/img/trainer/T1.png";
import T2 from "../../assets/img/trainer/T2.png";
import T3 from "../../assets/img/trainer/T3.png";
import T4 from "../../assets/img/trainer/T4.png";
import T5 from "../../assets/img/trainer/T5.png";
import T6 from "../../assets/img/trainer/T6.png";
import T7 from "../../assets/img/trainer/T7.png";
import T8 from "../../assets/img/trainer/T8.png";
import T9 from "../../assets/img/trainer/T9.png";
import T10 from "../../assets/img/trainer/T10.png";
import T11 from "../../assets/img/trainer/T11.png";
import T12 from "../../assets/img/trainer/T12.png";
import NK from "../../assets/NK.png";
import MBK from "../../assets/img/MBK.png";
import BN from "../../assets/img/BN.png";
import SS from "../../assets/img/SS.png";
import SSV from "../../assets/img/SSV.png";
const ProfileCard = ({ img, title, content }) => {
  const [showDetails, setShowDetails] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const contentLines = content ? content.split("\n") : [];
  const topLine = contentLines[0];
  const toggleLines = contentLines.slice(1);

  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <motion.div
      ref={ref}
      className="profile-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top static heading */}
      <h3 className="card-heading">{topLine}</h3>

      {/* Image with toggle action */}
      {img && (
        <img
          src={img}
          alt={title}
          className="profile-img"
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        />
      )}

      {/* Name always visible */}
      <h4 className="card-title">{title}</h4>

      {/* Animated toggle content */}
      <motion.div
        className="card-toggle-content"
        initial={false}
        animate={showDetails ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{ overflow: "hidden" }}
      >
        {toggleLines.map((line, index) => (
          <p className="card-content-line" key={index}>{line}</p>
        ))}
      </motion.div>
    </motion.div>
  );
};
const trainers = [
  {
    img: T4,
    name: "Mayavaram Sivaraman Charan",
    role: " Performance Catalyst ",
    bio: "(Specialise in Need Analysis & Training) ",
  },

  {
    img: T2,
    name: "Vijay Mithra",
    role: "Corporate Communication Architect",
    bio: "(Expertise in Language & Communication Skills)",
  },
  {
    img: T3,
    name: "KV Rajeshkumar",

    role: "Organisational  Growth Mentor",
  },
  {
    img: T11,
    name: "P. Thanikai Vel Pandian",
    role: "Business and Leadership Coach",
    bio: "(Expertise in Leadership & Interpersonal Skills)",
  },
  {
    img: T1,
    name: "Lion.R. Saravanan",
    role: "Motivational Trainer & Speaker",
    bio: "(Expertise in Work Place Skills)",
  },
  {
    // img: T1,
    name: "Briel",
    // role: "Motivational Trainer & Speaker",
    // bio: "(Expertise in Work Place Skills)",
  },
  {
    img: T5,
    name: "R Kamalambal ",
    role: "HR Trainer & POSH Enabler",
  },
  {
    img: T7,
    name: "Jc.Rtn.S.AthiNarayanan.,",
    // role: "Psychological Specialist",
    role: "Skill Development Trainer",
  },
  {
    img: T12,
    name: "K. Neethiraja",
    role: "NLP Traniner",
    // bio: "NLP Traniner.",
  },
  {
    img: T6,
    name: "Jahir",
    role: "Leadership coach ",
    // bio: "7 years experience.",
  },

  {
    img: T8,
    name: " Kumaresan Dharmaseelan",
    role: "Out Bound Trainer",
    // bio: "18 Years.",
  },
  {
    img: T9,
    name: "A. Maria Shajahan",
    role: "Sales & Marketing Trainer",
    // bio: "5 years.",
  },
  {
    img: T10,
    name: "S. Johnson",
    role: "Game Specialist",
    // bio: "POSH Enabler, Reflective Practitioner, One-to-One Expert.",
  },
];

const Team = () => {
  const [openIndex, setOpenIndex] = useState(null);

   const handleImageClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  

  const closePopup = () => {
    setSelectedTrainer(null);
  };
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

    

      {/* PROFILE CARDS */}
      <div className="qualifications-wrapper">
        <div className="qualification-row">
          <ProfileCard
            img={SSV}
            title=' "Vetri Vidiyal" Srinivasan'
            content={`Head-Finance & Cost Control
Writer and TV Fame,
Financial Advisor to 100+ Entrepreneurs.`}
          />
          <ProfileCard
            img={MBK}
            title=" Muruga Barathi kannan"
            content={`Head-Training & Development
Certified in Sports Psychology by Rajasthan Royals(IPL),
Certified NLP Practitioner and Life Coach,
Certified in Psychometrics, CBT, Career Counseling.`}
          />
        </div>
        

        <div className="qualification-row">
           <ProfileCard
            // img={NK}
            title=" Prasanna Venkatesan"
            content={`Mentor
International Sales Coach, Author.
`}
          />
          <ProfileCard
            img={NK}
            title=" NandaKumar Selvaraj"
            content={`Head-Strategic Marketing
Certified NLP Master Practitioner, 
Sales Excellence Coach,
Certified POSH Enabler,
 C.E.O Coach, MSME Trainer.`}
          />
          
        
        </div>
        <div className="qualification-row">
          <ProfileCard
            img={BN}
            title=" Bageerathi Nandakumar"
            content={`Head-People Alchemist
Competency Assessment, Reflective Practitioner,
One-to-One Specialist,
Certified POSH Enabler.`}
          />
          <ProfileCard
            img={SS}
            title=" Sasikumar Subramanian"
            content={`Business Analyst
Certified National Trainer- JCI India,
Certified DISC Coach,
Expert in Data Driven Decision Making.`}
          />
         
        </div>
          <div className="qualification-row">
              <ProfileCard
            // img={SS}
            title="Arun kumar"
            content={`Digital Patner
                        
             `}
          />
          </div>
       
      </div>
{/* our trainer */}
       <section className="trainer-section">
      <h2 className="trainer-heading">
        Meet <span>Our Trainers</span>
      </h2>

      <div className="trainer-row">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <img
              src={trainer.img}
              alt={trainer.name}
              className="trainer-img"
              onClick={() => handleImageClick(index)}
            />
            <h3>{trainer.name}</h3>

            <motion.div
              initial={false}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4 }}
              className="trainer-info"
              style={{ overflow: "hidden" }}
            >
              <p className="trainer-role">{trainer.role}</p>
              <p className="trainer-bio">{trainer.bio}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Team;
