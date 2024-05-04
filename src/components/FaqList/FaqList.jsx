import React, { useState } from "react";
import plusIcon from "../../assets/icon-plus.svg";
import minusIcon from "../../assets/icon-minus.svg";
import "../../index.css";
import "./FaqList.css";

const FaqList = ({ faqs }) => {
  const [isActive, setIsActive] = useState(false);

  const EventToggler = () => {
    setIsActive((preActive) => !preActive);
  };

  const { title, answer } = faqs;

  return (
    <>
      <div className="faqlist-body">
        <div className="question flex items-center" onClick={EventToggler}>
          <p className="bold qna">{title}</p>
          <img className="icons" src={isActive ? minusIcon : plusIcon} alt="plusIcon" />
        </div>
        <div className={`answer ${isActive ? "active" : "deactive"}`}>
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default FaqList;
