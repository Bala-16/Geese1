import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      {/* Header */}
      <br/>
      <div className="who-we-are">
        <section className="whoami-section">
          <div className="whoami-content">
            <div className="text-block">
              <h2 className="whoami-title">
                Let's <span>Connect</span>
              </h2>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className="contact-wrapper">
        <div className="contact-box">
          <div className="contact-info">
            <h3>📞 Contact Info</h3>
            <p>
              <strong>Phone:</strong> +91 9994887194,+91 9789449223
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:geese.hr@gmail.com">geese.hr@gmail.com</a>
            </p>
            {/* <p><strong>Address:</strong><br />
              285, 1st Floor, Bharathiyar Road,<br />
              P.N. Palayam, Coimbatore – 641037
            </p> */}
          </div>
          <div className="contact-info">
           <h3> 🕑 Working Hours:</h3>
            <p>
             
            
              Mon–Fri: 10:00am – 06:30pm
              <br />
              Sat: 10:00am – 05:00pm
              <br />
              Sun: Closed
            </p>
          </div>

          <form className="contact-form">
            <h3>📩 Send us a message</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>

      {/* Maps Section */}
      <section className="map-section">
        <h3 className="map-title">📍 Our Locations</h3>
        <div className="map-container">
          <iframe
            title="Geese"
            src="https://www.google.com/maps?q=285%2C+Bharathiyar+Road%2C+PN+Palayam%2C+Coimbatore&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
          
        </div>
      </section>
    </>
  );
};

export default Contact;
