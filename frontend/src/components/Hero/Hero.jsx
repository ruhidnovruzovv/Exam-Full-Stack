import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="left-hero">
            <h1>Madewell</h1>
            <span>Summer Collection </span>
            <div className="hero-price">
            <span>1,499</span>
            <del>1,999</del>
            </div>
            <div className="hero-btns">
                <button>Shop Now</button>
                <button>Shop Now</button>
            </div>
          </div>
          <div className="right-hero">
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
