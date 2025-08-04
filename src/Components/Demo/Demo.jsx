import React, { useState } from "react";
import NK from "../../assets/NK.png"
import "./Demo.css"; // You can include the styles here

const ProfileCard = ({ img, title, content }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="profile-card">
      {img && (
        <img
          src={NK}
          alt={title}
          className="profile-img"
          onClick={handleImageClick}
        />
      )}
      <h3 className="profile-title">{title}</h3>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h4>{title}</h4>
            <p>{content}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
