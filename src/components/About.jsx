import React from 'react';
import Pic from '../assets/images/Pic.jpg';
import '../styles/style.css';
const About = () => {
  return (
    <div className="About">
      <header>About Me</header>
      <section className="aboutContainer">
        <div className="imageContainer">
          <img src={Pic} alt="place holder pic" />
        </div>
        <div className="aboutContent">
          <p>
            Lorem ipsum dolor, sit amet co nsectetur adipisicing elit. Eos a
            rerum sint aliquid suscipit consequuntur possimus placeat officia
            inventore quasi, perspiciatis laborum libero ipsum provident vero
            corrupti, assumenda ratione. Delectus.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
