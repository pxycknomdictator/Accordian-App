import React from "react";
import plusIcon from "../../assets/icon-plus.svg"
import minusIcon from "../../assets/icon-minus.svg"
import "../../index.css";
import "./FaqList.css";

const FaqList = ({ faqs }) => {
  
  const { title, answer } = faqs;

  return (
    <>
      <div className="faqlist-body">
        <div className="question flex items-center">
          <p className="bold qna">{title}</p>
          <img className="icons" src={plusIcon} alt="plusIcon" />
        </div>
        <div className="answer deactive">
          <p>
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqList;
