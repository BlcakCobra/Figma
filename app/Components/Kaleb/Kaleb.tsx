import React from "react";
import "./Kaleb.scss";
import s from "./../../images/unsplash_wHJ5L9KGTl4.png";
import shield from "./../../images/Shield 1.png";

const Kaleb = () => (
  <div
    className="Kaleb_Main"
    style={{ backgroundImage: `url(${s.src})` }}
  >
    <div className="Kalev_Content">
      <h1 className="Kalev_Content_h1">Kaleb Lechtenberg</h1>
      <h2 className="Kalev_Content_h2">
        "Working with this freelancer has been great. His attention to detail
        is unparalleled and finished all work ahead of schedule. Will gladly
        send more work and I do not hesitate to recommend him to you on your
        project also."
      </h2>
      <img src={shield.src} alt="Kaleb Shield" className="Kalev_Content_shield" />
    </div>
  </div>
);

export default Kaleb;
