import React from "react";

const ExpenseEntry = () => {
  return (
    <>
      <div className="container">
        <p className="p-0 font-weight-bold">Create New Express</p>
        <div className="d-flex mt-2 gap-2">
          <div className="p-0 d-flex flex-column">
            <lable>Expense Date</lable>
            <select className="form-input-4">
              <option>Advanced Payment</option>
            </select>
          </div>
          <div className=" p-0 d-flex flex-column">
            <lable>Expense Type</lable>
            <select className="form-input-4">
              <option> Advanced Payment </option>
            </select>
          </div>
          <div className="p-0 d-flex flex-column">
            <lable>Currency</lable>
            <select className="form-input-4">
              <option> Currency </option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label className="m-0">Amount</label>
            <input type="text" placeholder="2656" className="form-input-4"/>
          </div>
          <div className="d-flex flex-column">
            <label className="m-0">Narration</label>
            <input type="text" className="form-input-4"/>
          </div>
          <div className="d-flex flex-column">
            <label className="m-0">Paid To</label>
            <input type="text" placeholder="5812" className="form-input-4"/>
          </div>
          <div className="d-flex align-items-end">
                <button className="btn btn-primary padding-3">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseEntry;
