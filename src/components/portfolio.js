import React, { Component } from "react";
import portfolio1 from "../assets/Screenshot_3-5-2024_51836_movie-site-kkux.vercel.app.jpeg";
import portfolio2 from "../assets/Screenshot_3-5-2024_5163_my-portfolio-umber-iota-57.vercel.app.jpeg";
import portfolio3 from "../assets/Screenshot 2024-03-23 202214.png";
import portfolio4 from "../assets/Screenshot_3-5-2024_582_.jpeg";
import portfolio5 from "../assets/Screenshot_3-5-2024_54249_www.figma.com.jpeg";
import portfolio6 from "../assets/Screenshot_3-5-2024_54415_www.figma.com.jpeg";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portTitle"> Portfolio</h2>
      <span className="portDesc">
        I meticulously craft each project to ensure excellence in every detail.
        From the initial concept to the final execution, I strive for perfection
        in every line of code and pixel of design. With a keen eye for
        aesthetics and functionality, I bring your ideas to life with precision
        and passion.
      </span>
      <div className="port-imgs">
        <img src={portfolio1} alt="portfolio1" className="work-img" />
        <img src={portfolio2} alt="portfolio2" className="work-img" />
        <img src={portfolio3} alt="portfolio3" className="work-img" />
        <img src={portfolio4} alt="portfolio4" className="work-img" />
        <img src={portfolio5} alt="portfolio5" className="work-img" />
        <img src={portfolio6} alt="portfolio6" className="work-img" />
      </div>
      <button className="port-btn">See More</button>
    </section>
  );
};

export default portfolio;
