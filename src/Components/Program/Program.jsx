import React from "react";
import "./Program.css";
import Nike from "../../assets/Corparate clients/Nike.png";
import BG0 from "../../assets/img/BG0.jpg";

const Program = () => {
  return (
    <>
      <section className="yellow-bg">
        <div className="inset-box">
          <img src={BG0} alt="Single Display" className="single-img" />
        </div>
      </section>
      <div className="full"></div>
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        className="logo-marquee"
      >
        <img src={Nike} alt="Nike" />
        {/* <img src={converse} alt="Converse" />
  <img src={crocs} alt="Crocs" />
  <img src={salomon} alt="Salomon" />
  <img src={hyundai} alt="Hyundai" />
  <img src={hlmando} alt="HL Mando" /> */}
      </marquee>
      <div className="full"></div><br/>

    <section className="trainers-section">
  <div className="trainers-content">
    <div className="trainers-text">
      <h2 className="trainers-title">
        <center>
          The Largest Trainers Network <span>In South India</span>
        </center>
      </h2>
    </div>
  </div>
</section>

{/* <section className="carousel-section">
        <h2 className="carousel-title">Meet Our Experts</h2>
        <div className="carousel-wrapper">
          <Carousel fade controls={true} indicators={true} interval={2000}>
            <Carousel.Item>
              <img className="d-block w-100 carousel-img" src={Groupphoto1} alt="Expert 1" />
              <Carousel.Caption>
                <h5>Leadership Coach</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100 carousel-img" src={Groupphoto2} alt="Expert 2" />
              <Carousel.Caption>
                <h5>Corporate Trainer</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section> */}

    </>
  );
};

export default Program;
