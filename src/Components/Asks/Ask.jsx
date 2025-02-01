import React from "react";
import './Ask.css'

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card blue">
        <h2>Are You Looking For a Car?</h2>
        <p>We are committed to providing our customers with exceptional service.</p>
        <button className="get-started">Get Started &rarr;</button>
        {/* <div className="icon">🚗</div> */}
      </div>

      <div className="card pink">
        <h2>Do You Want to Sell a Car?</h2>
        <p>We are committed to providing our customers with exceptional service.</p>
        <button className="get-started">Get Started &rarr;</button>
        {/* <div className="icon">💰</div> */}
      </div>
    </div>
  );
};

export default Cards;

// ملاحظة: تحتاج إلى إنشاء ملف CSS لتنسيق البطاقات
