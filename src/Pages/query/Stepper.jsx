import React from "react";

const Stepper = () => {
  return (
    <>
      {/* <ul class="stepper">
        <li class="stepper__item complete">Step 1</li>
        <li class="stepper__item current">Step 2</li>
        <li class="stepper__item">Step 3</li>
        <li class="stepper__item">Step 4</li>
      </ul> */}
      <div className="container-fluid stepper px-3">
            <div className="stepper-item first-stepper active-stepper">Create Query</div>
            <div className="stepper-item">Quotation</div>
            <div className="stepper-item">Cost Sheet</div>
            <div className="stepper-item">Proposal</div>
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
