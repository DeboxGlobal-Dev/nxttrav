import React from "react";
import "../global_css/stepper.css";

const Stepper = () => {
  return (
    <div class="stepper">
      <div class="step completed">Create Query</div>
      <div class="step completed">Quotation</div>
      <div class="step completed">Costsheet</div>
      <div class="step completed">Proposal</div>
      <div class="step completed">Confirm Query</div>
      <div class="step completed">Finalize Supplier</div>
      <div class="step active">Schedule Payments</div>
      <div class="step upcoming">Vouchers</div>
      <div class="step upcoming">Invoices</div>
    </div>
  );
};

export default Stepper;
