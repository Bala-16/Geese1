import React from "react";
import "./Program.css";
import uturn from "../../assets/img/uturn.jpg";
import SMS from "../../assets/img/SMS.png"; // Add SMS logo
// import meme from "../../assets/img/meme.jpg"; // Add MEME logo
import BG2 from '../../assets/img/BG2.jpg'
// import book2 from "../../assets/img/book_uthra.jpg"; // Add Book 2 image

const Programs = () => {
  return (
    <> <div className="programs-container">
      <div className="left-section">
        <h1 className="title">PUBLIC <span>PROGRAMS</span> </h1>

        <div className="program-logos">
          <img src={uturn} alt="UTURN" className="logo-img" />
          <img src={SMS} alt="SMS" className="logo-img" />
          {/* <img src={meme} alt="MEME" className="logo-img" /> */}
        </div>
<div className="center-box">
        <p className="description-1">
          Specialized Public Training Program <br />
          for Business People which has <br />
          crossed 1000 participants all over Tamil Nadu.
        </p></div>
      </div>

 
    </div><br/>
         <div className="right-section">
        <h2 className="sub-title">OUR PUBLICATIONS</h2>
        <div className="books">
          <img src={BG2} alt="SMS Book" className="book-img" />
          {/* <img src={book2} alt="UTHRA Book" className="book-img" /> */}
        </div>
      </div>
    <br/><br/>
    
    </>
   
    
  );
};

export default Programs;
