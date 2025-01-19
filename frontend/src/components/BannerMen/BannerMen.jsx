import React from "react";
import "./BannerMen.css";

const BannerMen = () => {
  return (
    <section id="men">
      <div className="container">
        <div className="banner-men">
          <div className="men-left">
            <img
              src="https://preview.colorlib.com/theme/dealers/images/model_5.png.webp"
              alt=""
            />
          </div>
          <div className="men-right">
            <span>#New Summer Collection 2019 </span>
            <h1>New Denim <br /> Coat</h1>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMen;
