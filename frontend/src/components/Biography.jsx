import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Neo N3o Hospital, established in 0000, has rapidly emerged as a beacon of advanced healthcare and patient-centric services. Located in the heart of the world, our state-of-the-art facility is designed to offer a comprehensive range of medical services, from routine check-ups to complex surgical procedures.
          </p>
          <p>In addition to our clinical services, Neo N3o is also a center for medical research and education, continuously striving to advance the field of medicine and improve patient care standards. We believe in a collaborative approach to healthcare, working closely with patients, their families, and other healthcare providers to achieve the best possible results.</p>
          <p>
          Our hospital is staffed by a team of highly skilled and compassionate healthcare professionals, including doctors, nurses, and support staff, all dedicated to providing the highest standard of care. At Neo N3o, we combine the latest in medical technology with a holistic approach to treatment, ensuring that each patient receives personalized attention and care tailored to their unique needs.
          </p>
          <p>At Neo N3o Hospital, your health is our mission, and we are dedicated to being your trusted partner in well-being and recovery.</p>
          <p>P.S. Coding is fun!!! </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
