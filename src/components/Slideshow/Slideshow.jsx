import React from "react";
import Slides1 from "../../assets/slides_1.png";
import Slides2 from "../../assets/slides_2.png";
import Slides3 from "../../assets/slides_3.png";
import "./Slideshow.scss";

function Slideshow() {
  return (
    <div className="slideshow">
      <ul className="contents">
        <li>
          <img className="slideshow__img" src={Slides2} alt="Slides1" />
        </li>
        <li>
          <img className="slideshow__img" src={Slides3} alt="Slides2" />
        </li>
        <li>
          <img className="slideshow__img" src={Slides1} alt="Slides3" />
        </li>
      </ul>
    </div>
  );
}

export default Slideshow;
