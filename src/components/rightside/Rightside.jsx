import React from "react";
import Updates from "./updates/Updates";
import "./rightside.css";
import CustomerReview from "./customerreview/CustomerReview";

const Rightside = () => {
  return (
    <div className='RightSide'>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>

      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default Rightside;
