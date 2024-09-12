import React from "react";
import "../global_css/stepper.css";

const Stepper = () => {
  return (
    <div className="stepper">
      <div className="step completed">Create Query</div>
      <div className="step completed">Quotation</div>
      <div className="step completed">Costsheet</div>
      <div className="step completed">Proposal</div>
      <div className="step completed">Confirm Query</div>
      <div className="step completed">Finalize Supplier</div>
      <div className="step active">Schedule Payments</div>
      <div className="step upcoming">Vouchers</div>
      <div className="step upcoming">Invoices</div>
    </div>
  );
};

export default Stepper;
