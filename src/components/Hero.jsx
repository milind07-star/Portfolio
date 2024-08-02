import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital experience that inspire</h2>
        <p>
          Passionate frontend developer | Transforming ideas into seamless and
          visual basic web solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="/assets/images/logo192.png" alt="Tech Icon 1" />
          </div>
          <img
            src="/assets/images/profile_img.avif"
            alt="Tech Icon 2"
            className="tech-icon-profile"
          />
        </div>

        <div>
          <div className="tech-icon">
            <img src="/assets/images/social_11516140.png" alt="Tech Icon 3" />
          </div>

          <div className="tech-icon">
            <img src="/assets/images/social_11516361.png" alt="Tech Icon 4" />
          </div>

          <div className="tech-icon">
            <img src="/assets/images/js_5968292.png" alt="Tech Icon 5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
