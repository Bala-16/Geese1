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
import T13 from "../../assets/img/trainer/T13.png";
import srini from "../../assets/img/Head/srini.png"
import muruga from "../../assets/img/Head/muruga.png"
import prasana from "../../assets/img/Head/prasana.png"
import bagee from "../../assets/img/Head/bagee.png"
import sasi from "../../assets/img/Head/sasi.png"
import giri from "../../assets/img/Head/giri.png"
import T14 from "../../assets/img/trainer/T14.png"
import NK from "../../assets/NK.png";


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
    name: "Mr.Mayavaram Sivaraman Charan",
    // role: " Performance Catalyst ",
    bio: "(Specialise in Need Analysis & Training) ",
  },

  {
    img: T2,
    name: "Mr.Vijaimithra",
    // role: "Corporate Communication Architect",
    bio: "(Expertise in Language & Communication Skills)",
  },
  {
    img: T3,
    name: "Mr.KV. Rajeshkumar",

    // role: "Organisational  Growth Mentor",
    bio:"(Expertise in Organisational Growth)"
  },
  {
    img: T11,
    name: "Mr.P. Thanikai Vel Pandian",
    // role: "Business and Leadership Coach",
    bio: "(Expertise in Leadership & Interpersonal Skills)",
  },
  {
    img: T1,
    name: "Mr.R. Saravanan",
    // role: "Motivational Trainer & Speaker",
    bio: "(Expertise in Work Place Skills)",
  },
  {
    img: T13,
    name: "Mr. Briel",
    // role: "Motivational Trainer & Speaker",
    bio: "(Expertise in Direct Sales) ",
  },
  {
    img: T5,
    name: "Mrs.R. Kamalambal ",
    // role: "HR Trainer & POSH Enabler",
    bio:"(Specialise in POSH Training)"
  },
  {
    img: T7,
    name: "Mr.S.AthiNarayanan.,",
    // role: "Psychological Specialist",
    // role: "Skill Development Trainer",
    bio:"(Specialise in Sales Training)"
  },
  {
    img: T12,
    name: "Mr.K. Neethiraja",
    // role: "NLP Traniner",
    bio: "(Specialise in NLP Training)",
  },
  {
    img: T6,
    name: "Mr. Jahir",
    // role: "Leadership coach ",
    bio: "(Specialise in Leadership Development)",
  },

  {
    img: T8,
    name: "Mr. Kumaresan Dharmaseelan",
    // role: "Out Bound Trainer",
    bio: "(Specialise in Out Bound Training) ",
  },
  {
    img: T9,
    name: "Mr.A. Maria Shajahan",
    // role: "Sales & Marketing Trainer",
    bio: "(Specialise in Soft skill Training)",
    
  },
  
  {
    img: T14,
    name: "Mr.Arunkumar",
    role: "(Digital Partner)",
    // bio: " Experience - 9 years in Industrial ERP & CRM development(6 years Experience in Digital Marketing and Tools)"

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
            img={srini}
            title=' Mr."Vetri Vidiyal" Srinivasan'
            content={`Head-Finance & Cost Control

30+year of Experince
Expertise in
Strategic Financial Management
Cost Control & Optimization
Financial Planning & Analysis.`}
          />
          <ProfileCard
            img={muruga}
            title=" Mr. Muruga Barathi Kannan"
            content={`Head-Training & Development
20+years of Industry Experince
Expertise in Strategic Learning and development
Leadership and Managerial development`}
          />
        </div>
        

        <div className="qualification-row">
           <ProfileCard
            img={prasana}
            title=" Mr. Prasanna Venkatesan"
            content={`Mentor-GEESE
International Sales Coach, Author.
`}
          />
            <ProfileCard
            img={giri}
            title=" Mr.Giridhar"
            content={`Mentor-GEESE
Expert in Strategic Management and Planning.
`}
          />
       
          
        
        </div>
        <div className="qualification-row">
           <ProfileCard
            img={NK}
            title=" Mr. Nandakumar Selvaraj"
            content={`Head - Strategic Planning & Business Excellence
            Certified Management Consultant
            Expert in GTM (go-to-market).`}
          />
          {/* Head-Strategic Marketing
Certified NLP Master Practitioner, 
Sales Excellence Coach,
Certified POSH Enabler,
 C.E.O Coach, MSME Trainer. */}
          <ProfileCard
            img={bagee}
            title="Mrs. Bageerathi Nandakumar"
            content={`Head-Operations
Competency Assessment, Reflective Practitioner,
One-to-One Specialist,
Certified POSH Enabler.`}
          />
         
         
        </div>
          <div className="qualification-row">
           <ProfileCard
            img={sasi}
            title=" Mr. Sasikumar Subramanian"
            content={`Business Analyst
Certified National Trainer- JCI India,
Certified DISC Coach,
Expert in Data Driven Decision Making.`}
          />
              {/* <ProfileCard
            img={arun}
            title="Mr.Arunkumar"
            content={`Digital Partner
            Experience - 9 years in Industrial ERP & CRM development
            6 years Experience in Digital Marketing and Tools

                        
             `}
          /> */}
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
              // onClick={() => handleImageClick(index)}
            />
            <h3>{trainer.name}</h3>

            {/* <motion.div
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
              
            </motion.div> */}
            <p className="trainer-role">{trainer.role}</p>
              <p className="trainer-bio">{trainer.bio}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Team;
