import React from "react";
import "./Program.css";
import uturn from "../../assets/img/uturn.jpg";
import SMS from "../../assets/img/SMS.png"; // Add SMS logo
// import meme from "../../assets/img/meme.jpg"; // Add MEME logo
import BG2 from "../../assets/img/BG2.jpg";
import MEME from "../../assets/img/MEME.png";
import masster from "../../assets/img/masster.png";
import Masster1 from "../../assets/img/Masster1.jpg";
import grp1 from "../../assets/grp1.jpeg";
import grp2 from "../../assets/grp2.jpeg";
import grp3 from "../../assets/grp3.jpeg";

// import book2 from "../../assets/img/book_uthra.jpg"; // Add Book 2 image

const Programs = () => {
  return (
    <>
      {" "}
      
      <div className="programs-container">
        <div className="left-section">
          <h1 className="title">
            PUBLIC <span>PROGRAMS</span>
          </h1>
<div className="program-wrapper">
  <div className="top-row">
    <div className="logo-block">
      <img src={uturn} alt="UTURN" className="logo-img" />
      <h2 className="logo-title">Specially made for CEO's</h2>
    </div>
    <div className="logo-block">
      <img src={SMS} alt="SMS" className="logo-img" />
      <h2 className="logo-title">Specially made for Employees</h2>
    </div>
    <div className="logo-block">
      <img src={MEME} alt="MEME" className="logo-img" />
      <h2 className="logo-title">Specially made for Team Members</h2>
    </div>
  </div>
  

  <div className="bottom-row">
    <div className="logo-block full-width">

      <img src={masster} alt="Masster" className="logo-img" />
 
      <img src={Masster1} alt="Masster Group" className="logo-img secondary-img" />
                 <h2>Specially made for Trainers and Business Owners</h2>
    </div>
  </div>
</div>

<div className="grp">
        <img src={grp1} alt="grp1" className="grp1-img" />
        <img src={grp2} alt="grp2" className="grp2-img" />
        <img src={grp3} alt="grp3" className="grp3-img" />
</div>

          {/* <div className="program-logos">
            <div>
              <img src={uturn} alt="UTURN" className="logo-img" />
            </div>
            <div>
              <img src={SMS} alt="SMS" className="logo-img" />
              <h2>Specially made for CEO's</h2>
            </div>
            <div>
              <img src={MEME} alt="SMS" className="logo-img" />
              <h2>Specially made for Employees </h2>
            </div>
            <div>
              <img src={masster} alt="SMS" className="logo-img" />
              <h2> specially made for Trainers and Business Owners</h2>
            </div>

          </div> */}
          <div className="center-box">
            <p className="description-1">
              Specialized Public Training Program for Business People which has
              crossed 1000 participants all over TamilNadu.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="right-section">
        <h2 className="sub-title">OUR PUBLICATIONS</h2>
        <div className="books">
          <img src={BG2} alt="SMS Book" className="book-img" />
          {/* <img src={book2} alt="UTHRA Book" className="book-img" /> */}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Programs;
