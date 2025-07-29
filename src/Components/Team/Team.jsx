import React from 'react'
import './Team.css';
import { motion, useInView} from "framer-motion";
import { useRef } from 'react';
import T1 from "../../assets/img/trainer/T1.png"
import T2 from "../../assets/img/trainer/T2.png"
import T3 from "../../assets/img/trainer/T3.png"
import T4 from "../../assets/img/trainer/T4.png"
import T5 from "../../assets/img/trainer/T5.png"
import T6 from "../../assets/img/trainer/T6.png"
import T7 from "../../assets/img/trainer/T7.png"
import T8 from "../../assets/img/trainer/T8.png"
import T9 from "../../assets/img/trainer/T9.png"
import T10 from "../../assets/img/trainer/T10.png"
import NK from "../../assets/NK.png";
import MBK from "../../assets/img/MBK.png";
import BN from "../../assets/img/BN.png";
import SS from "../../assets/img/SS.png";
import SSV from "../../assets/img/SSV.png";
const ProfileCard = ({ img, title, content }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="profile-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {img && <img src={img} alt={title} className="profile-img" />}
      <h3>{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
};
const trainers = [
  {
    img: T1,
    name: "Lion.R.Saravanan",
    role: "Motivational Trainer & Speaker",
    // bio: "MBA, M.E, TISS, NLP Master Practitioner, POSH Enabler.",
  },
  {
    img: T2,
    name: "Vijaymithra",
    role: "20+ year Experience",
    // bio: "Certified NLP Practitioner, Sports Psychologist, CBT Trainer.",
  },
  {
    img: T3,
    name: "Karur KVR",
    // role: "Psychological Specialist",
    // bio: "POSH Enabler, Reflective Practitioner, One-to-One Expert.",
  },
  {
    img: T4,
    name: "Mayavaram Sivaraman charan",
    role: "Providing Need Based Training ",
    bio: "15year Exprience ",
    
  },
  {
    img: T5,
    name: "Kamalambal R ",
    // role: "Psychological Specialist",
    bio: "20 years experience",
  },{
    img: T6,
    name: "Jahir",
    role: "Leadership coach ",
    bio: "7 years experience.",
  },
  {
    img: T7,
    name: "Jc.Rtn.S.AthiNarayanan.,",
    // role: "Psychological Specialist",
    // bio: "POSH Enabler, Reflective Practitioner, One-to-One Expert.",
  },{
    img: T8,
    name: "KUMARESAN DHARMASEELAN ",
    role: "OBT",
    bio: "18 Years.",
  },{
    img: T9,
    name: "A. Maria Shajahan",
    role: "Sales & Marketing",
    bio: "5 years.",
  },{
    img: T10,
    name: "S. Johnson",
    role: "Game Specialist",
    // bio: "POSH Enabler, Reflective Practitioner, One-to-One Expert.",
  },
];

const Team = () => {
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

      {/* <div className="full"></div>
      <br /> */}

      {/* PROFILE CARDS */}
      <div className="qualifications-wrapper">
        <div className="qualification-row">
          <ProfileCard
            img={SSV}
            
            title= ' "Vetri Vidiyal" Srinivasan'
            content={`Chartered Accountant
Writer and TV Fame
Financial Advisor to 100+ Entrepreneurs`}
          />
          <ProfileCard
            img={MBK}
            title=" Muruga Barathikannan"
            content={`Certified Happiness Coach by Berkeley Institute of Wellbeing, California
Certified in Sports Psychology by Rajasthan Royals (IPL)
Certified NLP Practitioner and Life Coach
Certified in Psychometrics, CBT, Career Counseling`}
          />
        
        </div>

        <div className="qualification-row">
          <ProfileCard
            img={NK}
            title=" NandhaKumar"
            content={`M.E in Anna University
MBA (HR & Marketing), MBA (Retail Management)
Executive PG Diploma in TISS
Certified NLP Master Practitioner, Sales Excellence Coach
Certified POSH Enabler, C.E.O Coach, MSME Trainer`}
          />
          <ProfileCard
            img={BN}
            title=" Bageerathi Nandhakumar"
          
            content={`Psychological Assessment Specialist
Competency Assessment, Reflective Practitioner
One-to-One Specialist
Certified POSH Enabler`}
          />
      
        </div>
         <div className="qualification-row">
 <ProfileCard
            img={SS}
            title=" Sasikumar Subramanian"
            content={`Certified National Trainer - JCI University
Activity-Based & Outbound Trainer
Faculty for Management Colleges
Conducted FDPs for 1000+ Teachers`}
          />
           <ProfileCard
            // img={SS}
            title="Arun kumar"
//             content={`Certified National Trainer - JCI University
// Activity-Based & Outbound Trainer
// Faculty for Management Colleges
// Conducted FDPs for 1000+ Teachers`}
          />
          </div>
          
        
      </div>
   
 <section className="trainer-section">
      <h2 className="trainer-heading">Meet <span>Our Trainers</span></h2>
      <div className="trainer-row">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <img src={trainer.img} alt={trainer.name} className="trainer-img" />
            <h3>{trainer.name}</h3>
            <p className="trainer-role">{trainer.role}</p>
            <p className="trainer-bio">{trainer.bio}</p>
          </div>
        ))}
      </div>
    </section>
   </>
  )
}

export default Team
