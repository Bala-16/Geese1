import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Application Submitted Successfully!');
    // Here you can send the formData to backend or email service
  };

  return (
    <>
       {/* <h2>Careers</h2> */}
    <div className="careers-container">
   
      <form className="careers-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>
          Contact Number:
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} pattern="[0-9]{10}" required />
        </label>

        <label>
          Mail Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Upload Resume:
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Careers;
