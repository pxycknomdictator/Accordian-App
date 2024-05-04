import React from "react";
import desktop from "../../assets/background-pattern-desktop.svg";
import mobile from "../../assets/background-pattern-mobile.svg";
import "../../index.css";
import "./Background.css";

const Background = () => {
  return (
    <figure>
      <img
        className="backgroundImage desktop"
        src={desktop}
        alt="desktopImage"
      />
      <img className="backgroundImage mobile" src={mobile} alt="desktopImage" />
    </figure>
  );
};

export default Background;
