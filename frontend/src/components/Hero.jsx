import React from 'react'

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to Neo N3o Hospital, where cutting-edge medical technology meets compassionate care. 
          Our dedicated team of healthcare professionals is committed to providing exceptional, patient-centered services. At Neo N3o, we prioritize your health and well-being, ensuring a safe and comfortable environment for all our patients.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero