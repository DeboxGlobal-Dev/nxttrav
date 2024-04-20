import React from "react";

const Stepper = () => {
  return (
    <>
      <div className="container-fluid stepper px-3 pt-1">
            <div className="stepper-item first-stepper active-stepper">Create Query</div>
            <div className="stepper-item active-stepper">Quotation</div>
            <div className="stepper-item active-stepper">Cost Sheet</div>
            <div className="stepper-item active-stepper">Proposal</div>
            <div className="stepper-item">Cofirm Query</div>
            <div className="stepper-item stepper-width">Finalize Supplier</div>
            <div className="stepper-item stepper-width">Schedule Payments</div>
            <div className="stepper-item">Vouchers</div>
            <div className="stepper-item">Invoices</div>
      </div>
    </>
  );
};

export default Stepper;
