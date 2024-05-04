import React from "react";
import FaqList from "../FaqList/FaqList";
import faq from "../../data/faq.json";
import "../../index.css";
import "./Faq.css";

const Faq = () => {
  console.log(faq);
  return (
    <>
      <h1>FAQ Body</h1>
      <FaqList />
    </>
  );
};

export default Faq;
