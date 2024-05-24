import React from "react";

const AgentPayment = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row gap-3 mt-2 py-2">
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-yellow-1">876567</p>
                <p className="m-0 text-secondary font-size-11">PURCHASE</p>
              </div>
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-success">876567</p>
                <p className="m-0 text-secondary font-size-11">PAID AMT</p>
              </div>
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-danger">876567</p>
                <p className="m-0 text-secondary font-size-11">PENDING AMT.</p>
              </div>
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-primary">0</p>
                <p className="m-0 text-secondary font-size-11">SELL AMT</p>
              </div>
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-primary">0</p>
                <p className="m-0 text-secondary font-size-11">TCS AMT</p>
              </div>
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-primary">0</p>
                <p className="m-0 text-secondary font-size-11">COMMISSION</p>
              </div>
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-primary">0</p>
                <p className="m-0 text-secondary font-size-11">DISCOUNT</p>
              </div>
              <div className="col-1 bg-color-1 box-shadow-1 d-flex flex-column justify-content-center align-items-center rounded">
                <p className="m-0 text-primary">0</p>
                <p className="m-0 text-secondary font-size-11">EXPENSE</p>
              </div>
            </div>
            <div className="row mt-3">
              <p className=" p-0 font-weight-bold">AGENT - MAKE TRAVEL INDIA</p>
              <div className="col-12 p-0">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>1</th>
                      <th>Agent Type</th>
                      <th>Type</th>
                      <th>Value</th>
                      <th>Amount</th>
                      <th>Due Date</th>
                      <th>Due Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td className="p-0 text-center">
                        <select>
                          <option>Advanced Payment</option>
                        </select>
                      </td>
                      <td className="p-0 text-center">
                        <select>
                          <option>% </option>
                        </select>
                      </td>
                      <td className="p-0 text-center">
                        <input
                          type="text"
                          placeholder="100"
                          style={{ width: "80px" }}
                        />
                      </td>
                      <td className="p-0 text-center">5000</td>
                      <td className="p-0 text-center">
                        <input type="date" />
                      </td>
                      <td className="p-0 text-center">TIME</td>
                      <td className="p-0 text-center">
                        <button className="font-size-11 button-style">
                          Unpaid
                        </button>
                        <button className="font-size-11 button-style-1">
                          Save
                        </button>
                        <button className="font-size-11 button-style-2">
                          Update Payment
                        </button>
                        <button className="font-size-11 button-style-3">
                          Generate Invoice
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col p-0 mt-4 d-flex gap-3">
                <button className="btn btn-success">Total Invoice</button>
                <button className="btn btn-success">Per Person Invoice</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentPayment;
