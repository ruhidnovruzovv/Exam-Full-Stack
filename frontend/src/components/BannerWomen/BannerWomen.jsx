import React from "react";
import "./BannerWomen.css";

const BannerWomen = () => {
  return (
    <section id="women">
      <div className="container">
        <div className="banner-women">
          <div className="women-left">
            <img
              src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png"
              alt=""
            />
          </div>
          <div className="women-right">
            <span>#New Summer Collection 2019 </span>
            <h1>Jacket</h1>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerWomen;
