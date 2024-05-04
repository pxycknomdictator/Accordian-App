import React from "react";
import FaqList from "../FaqList/FaqList";
import faq from "../../data/faq.json";
import startIcon from "../../assets/icon-star.svg";
import "../../index.css";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <div className="faqBody">
        <div className="accordion-heading flex items-center mx-auto">
          <img src={startIcon} alt="starIcon" />
          <h1>FAQ</h1>
        </div>

        {faq.map((elements, index) => (
          <FaqList key={index} faqs={elements} />
        ))}
      </div>
    </>
  );
};

export default Faq;
