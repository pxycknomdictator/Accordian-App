import React from "react";
import Background from "../Background/Background.jsx";
import Faq from "../Faq/Faq.jsx";
import "../../index.css";
import "./Accordion.css";

const Accordion = () => {
  return (
    <>
      <Background />
      <div className="accordion-container flex items-center justify-center">
        <Faq />
      </div>
    </>
  );
};

export default Accordion;
